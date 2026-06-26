/*
 * #169 - Majority Element
 * Difficulty: Easy | Topic: Arrays
 * Time: O(n) | Space: O(1)
 * Approach: Boyer-Moore voting algorithm
 * Status: ✓ solved 2026-06-22
 *
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 *
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 *
 * Example 2:
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 * The input is generated such that a majority element will exist in the array.
 *
 * Follow-up: Could you solve the problem in linear time and in O(1) space?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    let candidate = nums[0];
    let count = 0;

    for (const item of nums) {
        if (item === candidate) {
            count++;
        } else {
            count--;
            if (count < 0) {
                candidate = item;
                count = 1;
            }
        }
    }

    return candidate;
}

module.exports = { majorityElement };

/*
 * Explanation: Boyer-Moore voting algorithm
 *
 * Track a `candidate` and a `count` (the candidate's lead over everything else).
 * - Seeing the candidate again increments count.
 * - Seeing a different value decrements count, as if it's "cancelling out" a vote.
 * - If count ever drops below 0, the candidate has been fully cancelled out, so
 *   we switch to the current item as the new candidate and reset count to 1.
 *
 * Why this works: a majority element appears more than n/2 times, so even if
 * every other element "votes against" it, there aren't enough of them to cancel
 * it out completely. Whatever candidate is left standing at the end must be it.
 *
 * Example walk-through with [2,2,1,1,1,2,2]:
 *   item: 2 -> candidate=2, count=1
 *   item: 2 -> candidate=2, count=2
 *   item: 1 -> count=1
 *   item: 1 -> count=0
 *   item: 1 -> count=-1 -> candidate=1, count=1
 *   item: 2 -> count=0
 *   item: 2 -> count=-1 -> candidate=2, count=1
 *   final candidate: 2 (correct)
 *
 * This single pass gives O(n) time and O(1) extra space, satisfying the
 * follow-up (vs. the O(n) space hash-map counting approach).
 */
