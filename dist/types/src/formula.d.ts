/**
 * Renders a formula string (numbers, identifiers, `+ - * / =`, and parentheses) as block MathML.
 * Throws if the expression is malformed (unbalanced parentheses, dangling operators, trailing
 * tokens, etc). An empty or whitespace-only expression renders as empty math rather than throwing.
 */
export declare function generateMathML(expression: string): string;
