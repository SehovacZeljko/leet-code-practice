/*
 * #238 - Product of Array Except Self
 * Difficulty: Medium | Topic: Arrays
 * Time: O(n) | Space: O(1) extra (output array excluded)
 * Approach: answer[i] = product of everything left of i times everything right of i, built in two passes using answer array itself for the left pass and a running variable for the right pass
 * Status: ✓ solved 2026-06-23
 */

/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:

2 <= nums.length <= 10^5
-30 <= nums[i] <= 30
The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

function productExceptSelf(nums) {
  const n = nums.length;
  const answer = new Array(n);

  // Left pass: answer[i] = product of all elements to the left of i.
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }

  // Right pass: multiply in the product of all elements to the right of i.
  // (+ 0 normalizes JS's -0 result to +0, e.g. from -1 * 0)
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] = answer[i] * suffix + 0;
    suffix *= nums[i];
  }

  return answer;
}

module.exports = { productExceptSelf };
