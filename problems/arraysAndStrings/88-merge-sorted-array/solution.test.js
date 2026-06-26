const { merge } = require('./solution');

describe('Merge Sorted Array (#88)', () => {
    test('example 1: both arrays non-empty', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        merge(nums1, 3, [2, 5, 6], 3);
        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });

    test('example 2: nums2 is empty', () => {
        const nums1 = [1];
        merge(nums1, 1, [], 0);
        expect(nums1).toEqual([1]);
    });

    test('example 3: nums1 is empty', () => {
        const nums1 = [0];
        merge(nums1, 0, [1], 1);
        expect(nums1).toEqual([1]);
    });
});
