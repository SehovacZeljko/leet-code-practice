const { gcdOfStrings } = require('./solution');

describe('Greatest Common Divisor of Strings (#1071)', () => {
    test('example 1: str2 divides str1 directly', () => {
        expect(gcdOfStrings('ABCABC', 'ABC')).toBe('ABC');
    });

    test('example 2: shared divisor shorter than either string', () => {
        expect(gcdOfStrings('ABABAB', 'ABAB')).toBe('AB');
    });

    test('example 3: no common divisor', () => {
        expect(gcdOfStrings('LEET', 'CODE')).toBe('');
    });

    test('example 4: concatenation order mismatch yields no divisor', () => {
        expect(gcdOfStrings('AAAAAB', 'AAA')).toBe('');
    });

    test('equal strings', () => {
        expect(gcdOfStrings('ABC', 'ABC')).toBe('ABC');
    });
});
