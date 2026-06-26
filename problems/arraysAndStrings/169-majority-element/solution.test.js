const { majorityElement } = require('./solution');

describe('Majority Element (#169)', () => {
    test('example 1: simple majority', () => {
        expect(majorityElement([3, 2, 3])).toBe(3);
    });

    test('example 2: majority spread across array', () => {
        expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
    });

    test('single element', () => {
        expect(majorityElement([1])).toBe(1);
    });

    test('majority at the front', () => {
        expect(majorityElement([5, 5, 5, 1, 2])).toBe(5);
    });
});
