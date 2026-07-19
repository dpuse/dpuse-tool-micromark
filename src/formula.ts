type Node = NumberNode | IdentifierNode | GroupNode | BinaryNode;
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
    op: string;
    left: Node;
    right: Node;
}

export function generateMathML(expression: string): string {
    const tokens = tokenizeExpression(expression);
    const abstractSyntaxTree = parseExpression(tokens);
    return `<math display="block">${toMathML(abstractSyntaxTree)}</math>`;
}

function tokenizeExpression(expression: string): string[] {
    return expression.match(/[A-Z][A-Z ]*|\d+(?:\.\d+)?|[=()+\-*/]/gi)?.map((t) => t.trim()) ?? [];
}

function parseExpression(tokens: string[]): Node | null {
    let pos = 0;

    function primary(): Node | null {
        const t = tokens[pos++];
        if (t === undefined) return null;

        if (/^\d/.test(t)) return { type: 'number', value: t };
        if (/^[A-Z]/i.test(t)) return { type: 'identifier', value: t };

        if (t === '(') {
            const expression = addSub();
            pos++; // consume ')'
            return expression ? { type: 'group', value: expression } : null;
        }

        return null;
    }

    function mulDiv(): Node | null {
        let node = primary();
        while (node && (tokens[pos] === '*' || tokens[pos] === '/')) {
            const op = tokens[pos++] ?? '?';
            const right = primary();
            if (!right) break;
            node = { type: 'binary', op, left: node, right };
        }
        return node;
    }

    function addSub(): Node | null {
        let node = mulDiv();
        while (node && (tokens[pos] === '+' || tokens[pos] === '-')) {
            const op = tokens[pos++] ?? '?';
            const right = mulDiv();
            if (!right) break;
            node = { type: 'binary', op, left: node, right };
        }
        return node;
    }

    function assignment(): Node | null {
        let node = addSub();
        if (tokens[pos] === '=') {
            pos++;
            const right = assignment(); // support chained assignments if needed
            if (right) node = { type: 'binary', op: '=', left: node!, right };
        }
        return node;
    }

    return assignment();
}

function toMathML(node: Node | null): string {
    if (!node) return '';

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
