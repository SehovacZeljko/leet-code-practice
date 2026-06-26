const { moveZeroes } = require('./solution');

describe('Move Zeroes (#283)', () => {
    test('example 1: zeroes mixed in', () => {
        const nums = [0, 1, 0, 3, 12];
        moveZeroes(nums);
        expect(nums).toEqual([1, 3, 12, 0, 0]);
    });

    test('example 2: single zero', () => {
        const nums = [0];
        moveZeroes(nums);
        expect(nums).toEqual([0]);
    });

    test('no zeroes present', () => {
        const nums = [1, 2, 3];
        moveZeroes(nums);
        expect(nums).toEqual([1, 2, 3]);
    });

    test('all zeroes', () => {
        const nums = [0, 0, 0];
        moveZeroes(nums);
        expect(nums).toEqual([0, 0, 0]);
    });

    test('zero at the end already', () => {
        const nums = [1, 2, 0];
        moveZeroes(nums);
        expect(nums).toEqual([1, 2, 0]);
    });
});
