/*
 * #1 - Two Sum
 * Difficulty: Easy | Topic: Arrays, Hash Map
 * Time: O(n) | Space: O(n)
 * Approach: single-pass hash map — store each value's index, check for complement on each step
 * Status: ✓ solved 2026-06-12
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
}

module.exports = { twoSum };
