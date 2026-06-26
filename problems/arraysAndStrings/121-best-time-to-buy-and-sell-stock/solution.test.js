const { maxProfit } = require('./solution');

describe('Best Time to Buy and Sell Stock (#121)', () => {
    test('example 1: profit possible', () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    });

    test('example 2: prices only decrease, no profit', () => {
        expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    });

    test('single price', () => {
        expect(maxProfit([5])).toBe(0);
    });

    test('prices strictly increasing', () => {
        expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
    });
});
