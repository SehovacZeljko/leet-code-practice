/*
 * #27 - Remove Element
 * Difficulty: Easy | Topic: Arrays, Two Pointers
 * Time: O(n) | Space: O(1)
 * Approach: two pointers — overwrite kept elements in-place, track count with k
 * Status: ✓ solved 2026-06-22
 */

// Given an integer array nums and an integer val, remove all occurrences of
// val in-place. Return k — the count of elements not equal to val.
// The first k elements of nums must hold the result; the rest don't matter.
//
// Example 1: nums = [3,2,2,3], val = 3  →  k = 2, nums = [2,2,_,_]
// Example 2: nums = [0,1,2,2,3,0,4,2], val = 2  →  k = 5, nums = [0,1,3,0,4,_,_,_]

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// function removeElement(nums, val) {
//
// let element = []
//
//
//     for (let index = 0; index < nums.length; index++) {
//      if (nums[index] != val ) {
//         element.push(nums[index])
//      } else {
//      element.push('_')
//
//      }
//     }
//
//     element.sort()
//
// return element
//
//
// }

// Issues with the version above:
// 1. It builds a new `element` array instead of mutating `nums` in-place.
//    The tests check `nums` directly, not the return value.
// 2. It returns an array, but the function must return `k` (a number).
// 3. `element.sort()` does a default lexicographic sort, which is both
//    unnecessary (order isn't required) and incorrect for numbers
//    (e.g. [10, 2] would sort as ["10", "2"]).

// Two-pointer in-place approach:
// `k` tracks how many elements (!= val) have been kept so far.
// Walk through nums once; whenever the current element isn't `val`,
// write it to position `k` and advance `k`.
function removeElement(nums, val) {
    let k = 0;

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] !== val) {
            nums[k] = nums[index];
            k++;
        }
    }

    return k;
}

module.exports = { removeElement };
