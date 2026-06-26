const { reverseWords } = require('./solution');

describe('Reverse Words in a String (#151)', () => {
    test('example 1: simple sentence', () => {
        expect(reverseWords('the sky is blue')).toBe('blue is sky the');
    });

    test('example 2: leading and trailing spaces', () => {
        expect(reverseWords('  hello world  ')).toBe('world hello');
    });

    test('example 3: multiple spaces between words', () => {
        expect(reverseWords('a good   example')).toBe('example good a');
    });

    test('single word', () => {
        expect(reverseWords('word')).toBe('word');
    });

    test('single word with surrounding spaces', () => {
        expect(reverseWords('  word  ')).toBe('word');
    });
});
