const { mergeAlternately } = require('./solution');

describe('Merge Strings Alternately (#1768)', () => {
    test('example 1: equal length', () => {
        expect(mergeAlternately('abc', 'pqr')).toBe('apbqcr');
    });

    test('example 2: word2 longer', () => {
        expect(mergeAlternately('ab', 'pqrs')).toBe('apbqrs');
    });

    test('example 3: word1 longer', () => {
        expect(mergeAlternately('abcd', 'pq')).toBe('apbqcd');
    });

    test('single character words', () => {
        expect(mergeAlternately('a', 'b')).toBe('ab');
    });

    test('one word much longer than the other', () => {
        expect(mergeAlternately('a', 'bcdef')).toBe('abcdef');
    });
});
