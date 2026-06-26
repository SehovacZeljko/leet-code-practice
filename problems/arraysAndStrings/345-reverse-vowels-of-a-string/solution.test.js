const { reverseVowels } = require('./solution');

describe('Reverse Vowels of a String (#345)', () => {
    test('example 1: mixed case vowels', () => {
        expect(reverseVowels('IceCreAm')).toBe('AceCreIm');
    });

    test('example 2: lowercase vowels', () => {
        expect(reverseVowels('leetcode')).toBe('leotcede');
    });

    test('no vowels', () => {
        expect(reverseVowels('xyz')).toBe('xyz');
    });

    test('single character vowel', () => {
        expect(reverseVowels('a')).toBe('a');
    });

    test('all vowels', () => {
        expect(reverseVowels('aeiou')).toBe('uoiea');
    });
});
