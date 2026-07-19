// Dependencies - Micromark.
import type { Directive } from 'micromark-extension-directive';
import { micromark } from 'micromark';
import type { CompileContext, HtmlExtension, Options, Token } from 'micromark-util-types';

// Dependencies - Speed Highlight.
import type * as SpeedHighlight from '@speed-highlight/core';

// Dependencies - Framework.
import { generateMathML } from '@/formula';

// Types/Interfaces
export interface RenderOptions {
    directives?: boolean;
    tables?: boolean;
}

// Constants
const ESCAPE_MAP: Record<'&' | '<' | '>' | '"' | "'", string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };

// Module Variables
const micromarkOptions: Options = {
    allowDangerousHtml: false,
    allowDangerousProtocol: false,
    extensions: [],
    htmlExtensions: [createPresenterCodeBlockHtmlExtension()]
};
const state = {
    directiveExtensionPromise: undefined as Promise<void> | undefined,
    isDirectiveExtensionLoaded: false,
    isTableExtensionLoaded: false,
    speedHighlight: undefined as typeof SpeedHighlight | undefined,
    speedHighlightPromise: undefined as Promise<typeof SpeedHighlight> | undefined,
    tableExtensionPromise: undefined as Promise<void> | undefined
};

// Classes - Micromark tool.
export class MicromarkTool {
    // Operations - Highligh previously rendered markdown.
    async highlight(renderTo: HTMLElement, colorModeId: string): Promise<void> {
        if (typeof document === 'undefined') return;

        const { highlightElement } = await loadSpeedHighlight(colorModeId);

        for (const element of renderTo.querySelectorAll<HTMLDivElement>('div[class^="shj-lang-"]')) {
            const lang = (/shj-lang-(\S+)/.exec((element as HTMLElement).className) ?? [])[1];
            if (lang === 'javascript') {
                await highlightElement(element, 'js', 'multiline', { hideLineNumbers: true });
                Object.assign((element as HTMLElement).style, {
                    fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, Liberation Mono, monospace",
                    fontSize: '14px'
                });
            }
        }
    }

    // Operations - Render markdown.
    async render(markdown: string, options?: RenderOptions): Promise<string> {
        if (options?.directives ?? false) {
            if (!state.isDirectiveExtensionLoaded && !state.directiveExtensionPromise) {
                state.directiveExtensionPromise = (async (): Promise<void> => {
                    const module = await import('micromark-extension-directive');
                    micromarkOptions.extensions?.push(module.directive());
                    micromarkOptions.htmlExtensions?.push(module.directiveHtml({ note: handleNoteDirective }));
                    state.isDirectiveExtensionLoaded = true;
                    state.directiveExtensionPromise = undefined;
                })();
            }
            if (state.directiveExtensionPromise) await state.directiveExtensionPromise;
        }
        if (options?.tables ?? false) {
            if (!state.isTableExtensionLoaded && !state.tableExtensionPromise) {
                state.tableExtensionPromise = (async (): Promise<void> => {
                    const module = await import('micromark-extension-gfm-table');
                    micromarkOptions.extensions?.push(module.gfmTable());
                    micromarkOptions.htmlExtensions?.push(module.gfmTableHtml());
                    state.isTableExtensionLoaded = true;
                    state.tableExtensionPromise = undefined;
                })();
            }
            if (state.tableExtensionPromise) await state.tableExtensionPromise;
        }
        return micromark(markdown, micromarkOptions);
    }

    // Operations - Set color mode.
    setColorMode(colorModeId: string): void {
        applyColorMode(colorModeId);
    }
}

// Helper - Apply color mode.
function applyColorMode(colorModeId: string): void {
    if (typeof document === 'undefined') return;

    const styleId = colorModeId === 'dark' ? 'theme-dark' : 'theme-light';
    for (const link of document.querySelectorAll<HTMLLinkElement>('link[data-dynamic]')) link.disabled = link.id !== styleId;
}

// Helpers - Create presenter code block.
function createPresenterCodeBlockHtmlExtension(): HtmlExtension {
    let currentBlockData: { codeContent: string[]; lang: string; meta: string } | undefined;
    /* eslint-disable unicorn/no-this-outside-of-class --
       micromark's `Handle` type requires handlers typed as `this: CompileContext`; the CompileContext is passed via
       dynamic `this` binding (micromark calls `handler.call(compileContext, token)`), not through a class. */
    return {
        enter: {
            codeFenced(this: CompileContext): undefined /* The entire fenced code block starts. */ {
                this.buffer();
                currentBlockData = { codeContent: [], lang: '', meta: '' };
            },
            codeFencedFence(): undefined /* The opening fence line. */ {
                /* empty */
            },
            codeFencedFenceSequence(): undefined /* The opening fence characters (```). */ {
                /* empty */
            },
            codeFencedFenceInfo(this: CompileContext, token: Token): undefined /* The language identifier (json, javascript...). */ {
                if (currentBlockData !== undefined) currentBlockData.lang = this.sliceSerialize(token);
            },
            codeFencedFenceMeta(this: CompileContext, token: Token): undefined /* The metadata after the language identifier (dpuse-visual). */ {
                if (currentBlockData !== undefined) currentBlockData.meta = this.sliceSerialize(token);
            },
            codeFlowValue(this: CompileContext, token: Token): undefined /* Each line/chunk of actual code content. */ {
                if (currentBlockData !== undefined) currentBlockData.codeContent.push(this.sliceSerialize(token));
            }
        },
        exit: {
            codeFlowValue(): undefined /*  Done capturing the code. */ {
                /* empty */
            },
            codeFencedFenceMeta(): undefined /* Done processing the metadata. */ {
                /* empty */
            },
            codeFencedFenceInfo(): undefined /* Done processing the language identifier. */ {
                /* empty */
            },
            codeFencedFenceSequence(): undefined /* The closing fence characters (```). */ {
                /* empty */
            },
            codeFencedFence(): undefined /* The closing fence line. */ {
                /* empty */
            },
            codeFenced(this: CompileContext): undefined /* The entire code block is complete, replacement can happen now. */ {
                const blockData = currentBlockData ?? { codeContent: [], lang: '', meta: '' };
                this.resume(); // Discard the captured code text.
                const rawContent = blockData.codeContent.join('\n');
                const language = blockData.lang || 'plain';
                const metaAttribute = blockData.meta || '';
                let html = '';
                if (language === 'json') {
                    switch (metaAttribute) {
                        case 'dpuse-visual':
                            html = `<div class="${metaAttribute}" data-options="${encodeURIComponent(rawContent)}"></div>`;
                            break;
                        case 'dpuse-formula': {
                            const v1 = JSON.parse(rawContent) as { expression: string };
                            html = generateMathML(v1.expression);
                            break;
                        }
                        case 'dpuse-highcharts':
                            html = `<div class="${metaAttribute}" data-options="${encodeURIComponent(rawContent)}"></div>`;
                            break;
                        // No default
                    }
                } else {
                    const safeLang = language.replaceAll(/[^\w-]/g, '');
                    html = `<div class="shj-lang-${safeLang}">${escapeHTML(rawContent)}</div>`;
                }
                this.raw(html);
                currentBlockData = undefined;
            }
        }
    };
    /* eslint-enable unicorn/no-this-outside-of-class --
       end of the micromark `this: CompileContext` handler shim */
}

// Helpers - Escape HTML.
function escapeHTML(string_: string): string {
    return string_.replaceAll(/[&<>"']/g, (char) => ESCAPE_MAP[char as '&' | '<' | '>' | '"' | "'"]);
}

// Helpers - Handle note directive.
/* eslint-disable unicorn/no-this-outside-of-class --
   micromark's `Handle` type requires handlers typed as `this: CompileContext`; see createPresenterCodeBlockHtmlExtension. */
function handleNoteDirective(this: CompileContext, directive: Directive): boolean | undefined {
    if (directive.type !== 'leafDirective') return false;

    this.tag('<div class="note">');
    this.raw(escapeHTML(directive.label ?? ''));
    this.tag('</div>');
}
/* eslint-enable unicorn/no-this-outside-of-class --
   end of the micromark `this: CompileContext` handler shim */

// Helpers - Inject style.
// Prod CSP has no 'unsafe-inline' for style-src, so the theme CSS is loaded as a blob: stylesheet instead of an
// inline <style> element. dpuse-app's _headers allows style-src 'blob:' for this — a stable, one-time CSP
// allowance that needs no updating if @speed-highlight/core's theme CSS changes.
function injectStyle(cssText: string, styleId: string): void {
    if (typeof document === 'undefined') return;

    // eslint-disable-next-line n/no-unsupported-features/node-builtins -- browser-only path (the `typeof document` guard above returns early under Node).
    const blobUrl = URL.createObjectURL(new Blob([cssText], { type: 'text/css' }));
    let link = document.querySelector<HTMLLinkElement>(`#${styleId}`);
    if (link == null) {
        link = document.createElement('link');
        link.id = styleId;
        link.rel = 'stylesheet';
        link.dataset['dynamic'] = 'true';
        link.href = blobUrl;
        document.head.append(link);
    } else {
        link.href = blobUrl;
    }
    link.disabled = true; // This must be set after link is injected.
}

// Helpers - Load Speed Highlight and inject associated themes.
async function loadSpeedHighlight(colorModeId: string): Promise<typeof SpeedHighlight> {
    if (state.speedHighlight) return state.speedHighlight;

    state.speedHighlightPromise ??= (async (): Promise<typeof SpeedHighlight> => {
        const [module, darkThemeCss, lightThemeCss] = await Promise.all([
            import('@speed-highlight/core'),
            import('@speed-highlight/core/themes/github-dark.css?raw'),
            import('@speed-highlight/core/themes/github-light.css?raw')
        ]);
        state.speedHighlight = module;
        injectStyle(darkThemeCss.default, 'theme-dark');
        injectStyle(lightThemeCss.default, 'theme-light');
        applyColorMode(colorModeId);
        state.speedHighlightPromise = undefined;
        return module;
    })();

    return state.speedHighlightPromise;
}
