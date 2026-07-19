// ── External Dependencies & Registrations
import { describe, expect, it } from 'vitest';
import { generateMathML } from '@/formula';

// ── Tests ────────────────────────────────────────────────────────────────────────────────────────────────────────────

describe('generateMathML', () => {
    it('renders a lone number', () => {
        expect(generateMathML('5')).toBe('<math display="block"><mn>5</mn></math>');
    });

    it('renders a decimal number', () => {
        expect(generateMathML('3.14')).toBe('<math display="block"><mn>3.14</mn></math>');
    });

    it('renders a lone identifier', () => {
        expect(generateMathML('A')).toBe('<math display="block"><mi>A</mi></math>');
    });

    it('renders addition', () => {
        expect(generateMathML('A+B')).toBe('<math display="block"><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow></math>');
    });

    it('renders subtraction', () => {
        expect(generateMathML('A-B')).toBe('<math display="block"><mrow><mi>A</mi><mo>-</mo><mi>B</mi></mrow></math>');
    });

    it('renders multiplication using a times sign', () => {
        expect(generateMathML('A*B')).toBe('<math display="block"><mrow><mi>A</mi><mo>×</mo><mi>B</mi></mrow></math>');
    });

    it('renders division as a fraction', () => {
        expect(generateMathML('A/B')).toBe('<math display="block"><mfrac><mi>A</mi><mi>B</mi></mfrac></math>');
    });

    it('renders assignment', () => {
        expect(generateMathML('A=B')).toBe('<math display="block"><mrow><mi>A</mi><mo>=</mo><mi>B</mi></mrow></math>');
    });

    it('renders parenthesized groups', () => {
        expect(generateMathML('(A+B)')).toBe(
            '<math display="block"><mrow><mo>(</mo><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow><mo>)</mo></mrow></math>',
        );
    });

    it('gives multiplication and division higher precedence than addition and subtraction', () => {
        expect(generateMathML('A+B*C')).toBe(
            '<math display="block"><mrow><mi>A</mi><mo>+</mo><mrow><mi>B</mi><mo>×</mo><mi>C</mi></mrow></mrow></math>',
        );
    });

    it('respects explicit parentheses over default precedence', () => {
        expect(generateMathML('(A+B)*C')).toBe(
            '<math display="block"><mrow><mrow><mo>(</mo><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow><mo>)</mo></mrow><mo>×</mo><mi>C</mi></mrow></math>',
        );
    });

    it('left-associates a chain of same-precedence operators', () => {
        expect(generateMathML('A-B-C')).toBe(
            '<math display="block"><mrow><mrow><mi>A</mi><mo>-</mo><mi>B</mi></mrow><mo>-</mo><mi>C</mi></mrow></math>',
        );
    });

    it('right-associates chained assignment', () => {
        expect(generateMathML('A=B=C')).toBe(
            '<math display="block"><mrow><mi>A</mi><mo>=</mo><mrow><mi>B</mi><mo>=</mo><mi>C</mi></mrow></mrow></math>',
        );
    });

    it('drops characters outside the supported token set, such as underscores', () => {
        expect(generateMathML('A_')).toBe('<math display="block"><mi>A</mi></math>');
    });

    it('throws when dropping an unsupported character merges two operands together', () => {
        // "A_B" tokenizes to ["A", "B"] once the underscore is dropped, i.e. two operands with no operator.
        expect(() => generateMathML('A_B')).toThrow(/Invalid formula/);
    });

    it('renders an empty expression as empty math rather than throwing', () => {
        expect(generateMathML('')).toBe('<math display="block"></math>');
    });

    it('renders a whitespace-only expression as empty math rather than throwing', () => {
        expect(generateMathML('   ')).toBe('<math display="block"></math>');
    });

    it('throws on an unclosed parenthesis', () => {
        expect(() => generateMathML('(A+B')).toThrow(/Invalid formula/);
    });

    it('throws on an unopened closing parenthesis', () => {
        expect(() => generateMathML('A+B)')).toThrow(/Invalid formula/);
    });

    it('throws on a dangling trailing operator', () => {
        expect(() => generateMathML('A+')).toThrow(/Invalid formula/);
    });

    it('throws on a dangling trailing assignment', () => {
        expect(() => generateMathML('A=')).toThrow(/Invalid formula/);
    });

    it('merges a letter run separated by spaces into a single multi-word identifier', () => {
        // The tokenizer's identifier pattern allows internal spaces, so "A B" is one token, not two operands.
        expect(generateMathML('A B')).toBe('<math display="block"><mi>A B</mi></math>');
    });

    it('throws on two numbers with no operator between them', () => {
        expect(() => generateMathML('2 3')).toThrow(/Invalid formula/);
    });

    it('throws on a formula that is only an operator', () => {
        expect(() => generateMathML('*')).toThrow(/Invalid formula/);
    });

    it('throws on unary minus, which is not supported', () => {
        expect(() => generateMathML('-5')).toThrow(/Invalid formula/);
    });

    it('is case-insensitive for identifiers', () => {
        expect(generateMathML('a+b')).toBe('<math display="block"><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow></math>');
    });
});
