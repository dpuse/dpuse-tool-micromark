export interface RenderOptions {
    directives?: boolean;
    tables?: boolean;
}
export declare class MicromarkTool {
    highlight(renderTo: HTMLElement, colorModeId: string): Promise<void>;
    render(markdown: string, options?: RenderOptions): Promise<string>;
    setColorMode(colorModeId: string): void;
}
