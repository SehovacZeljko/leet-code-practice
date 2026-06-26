const { removeElement } = require('./solution');

describe('Remove Element (#27)', () => {
    test('example 1: remove 3s', () => {
        const nums = [3, 2, 2, 3];
        const k = removeElement(nums, 3);
        expect(k).toBe(2);
        expect(nums.slice(0, k).sort()).toEqual([2, 2]);
    });

    test('example 2: remove 2s', () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2];
        const k = removeElement(nums, 2);
        expect(k).toBe(5);
        expect(nums.slice(0, k).sort((a, b) => a - b)).toEqual([0, 0, 1, 3, 4]);
    });

    test('val not present', () => {
        const nums = [1, 2, 3];
        const k = removeElement(nums, 9);
        expect(k).toBe(3);
    });

    test('all elements match val', () => {
        const nums = [7, 7, 7];
        const k = removeElement(nums, 7);
        expect(k).toBe(0);
    });
});
