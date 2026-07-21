// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

type Node = NumberNode | IdentifierNode | GroupNode | BinaryNode;
type BinaryOp = '+' | '-' | '*' | '/' | '=';
interface NumberNode {
    type: 'number';
    value: string;
}
interface IdentifierNode {
    type: 'identifier';
    value: string;
}
interface GroupNode {
    type: 'group';
    value: Node;
}
interface BinaryNode {
    type: 'binary';
    op: BinaryOp;
    left: Node;
    right: Node;
}

// ── Actions ──────────────────────────────────────────────────────────────────────────────────────────────────────────

/**
 * Renders a formula string (numbers, identifiers, `+ - * / =`, and parentheses) as block MathML.
 * Throws if the expression is malformed (unbalanced parentheses, dangling operators, trailing
 * tokens, etc). An empty or whitespace-only expression renders as empty math rather than throwing.
 */
export function generateMathML(expression: string): string {
    const tokens = tokenizeExpression(expression);
    if (tokens.length === 0) return `<math></math>`;

    const abstractSyntaxTree = parseExpression(tokens);
    return `<div class="overscroll-x-none overflow-x-auto pb-4"><math>${toMathML(abstractSyntaxTree)}</math></div>`;
}

// ── Helpers ──────────────────────────────────────────────────────────────────────────────────────────────────────────

function tokenizeExpression(expression: string): string[] {
    // eslint-disable-next-line security/detect-unsafe-regex -- False positive: no catastrophic backtracking, verified with safe-regex and empirical fuzzing.
    return expression.match(/[A-Z][A-Z ]*|\d+(?:\.\d+)?|[=()+\-*/]/gi)?.map((t) => t.trim()) ?? [];
}

function parseExpression(tokens: string[]): Node {
    let pos = 0;

    function primary(): Node | null {
        const t = tokens[pos];
        if (t === undefined) return null;
        pos++;

        if (/^\d/.test(t)) return { type: 'number', value: t };
        if (/^[A-Z]/i.test(t)) return { type: 'identifier', value: t };

        if (t === '(') {
            const expression = addSub();
            if (!expression || tokens[pos] !== ')') {
                throw new Error(`Invalid formula: expected ')' to close '('`);
            }
            pos++; // consume ')'
            return { type: 'group', value: expression };
        }

        pos--; // not a primary; let the caller decide whether that's fatal
        return null;
    }

    function mulDiv(): Node | null {
        let node = primary();
        while (node && (tokens[pos] === '*' || tokens[pos] === '/')) {
            const op = tokens[pos] as '*' | '/';
            pos++;
            const right = primary();
            if (!right) throw new Error(`Invalid formula: expected operand after '${op}'`);
            node = { type: 'binary', op, left: node, right };
        }
        return node;
    }

    function addSub(): Node | null {
        let node = mulDiv();
        while (node && (tokens[pos] === '+' || tokens[pos] === '-')) {
            const op = tokens[pos] as '+' | '-';
            pos++;
            const right = mulDiv();
            if (!right) throw new Error(`Invalid formula: expected operand after '${op}'`);
            node = { type: 'binary', op, left: node, right };
        }
        return node;
    }

    function assignment(): Node | null {
        let node = addSub();
        if (node && tokens[pos] === '=') {
            pos++;
            const right = assignment();
            if (!right) throw new Error(`Invalid formula: expected expression after '='`);
            node = { type: 'binary', op: '=', left: node, right };
        }
        return node;
    }

    const node = assignment();
    if (!node || pos < tokens.length) {
        throw new Error(`Invalid formula: unexpected token '${tokens[pos] ?? 'end of formula'}'`);
    }
    return node;
}

function toMathML(node: Node): string {
    switch (node.type) {
        case 'number':
            return `<mn>${node.value}</mn>`;
        case 'identifier':
            return `<mi>${node.value}</mi>`;
        case 'group':
            return `<mrow><mo>(</mo>${toMathML(node.value)}<mo>)</mo></mrow>`;
        case 'binary':
            switch (node.op) {
                case '/':
                    return `<mfrac>${toMathML(node.left)}${toMathML(node.right)}</mfrac>`;
                case '*':
                    return `<mrow>${toMathML(node.left)}<mo>×</mo>${toMathML(node.right)}</mrow>`;
                default:
                    return `<mrow>${toMathML(node.left)}<mo>${node.op}</mo>${toMathML(node.right)}</mrow>`;
            }
    }
}
