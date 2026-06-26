const { canPlaceFlowers } = require('./solution');

describe('Can Place Flowers (#605)', () => {
    test('example 1', () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
    });

    test('example 2', () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
    });

    test('n is 0 always works', () => {
        expect(canPlaceFlowers([1, 0, 0, 0, 1], 0)).toBe(true);
    });

    test('all empty plots', () => {
        expect(canPlaceFlowers([0, 0, 0, 0, 0, 0], 2)).toBe(true);
    });
});
