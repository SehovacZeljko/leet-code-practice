/*
 * #283 - Move Zeroes
 * Difficulty: Easy | Topic: Arrays, Two Pointers
 * Time: O(n) | Space: O(1)
 * Approach: two-pass — write non-zero values forward, then zero-fill the rest
 * Status: ✓ solved 2026-06-22
 *
 * Given an integer array nums, move all 0's to the end of it while
 * maintaining the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 *
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 *
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 *
 * Follow up: Could you minimize the total number of operations done?
 *
 * Note: this two-pass version is correct but does more writes than needed —
 * the second loop overwrites trailing slots with 0 even when they're already
 * 0. A single-pass two-pointer swap minimizes operations and answers the
 * follow-up:
 *
 *   function moveZeroes(nums) {
 *     let insertPos = 0;
 *     for (let i = 0; i < nums.length; i++) {
 *       if (nums[i] !== 0) {
 *         [nums[insertPos], nums[i]] = [nums[i], nums[insertPos]];
 *         insertPos++;
 *       }
 *     }
 *   }
 *
 * It swaps the non-zero value into place and carries the zero it displaced
 * back to position i, so there's no need for a cleanup pass.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let insertZeroPossition = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[insertZeroPossition] = nums[i];
      insertZeroPossition++;
    }
  }


  for (let j = 0; j < nums.length; j++) {
      if (j  > (insertZeroPossition -1)) {nums[j] = 0;}
    }

  return nums;
}

module.exports = { moveZeroes };

/*
 * Explanation: track where the next non-zero value belongs, then zero-fill
 * everything after it
 *
 * First pass — compact the non-zero values to the front, in order:
 *   insertZeroPossition -> the index where the next non-zero value should go
 *
 * Walk through the array once with i. Whenever nums[i] is non-zero, write it
 * to nums[insertZeroPossition] and advance insertZeroPossition. Zeroes are
 * simply skipped (not written anywhere yet), which is what shifts everything
 * left over time.
 *
 * After this pass, insertZeroPossition tells you how many non-zero values
 * exist, and the front of the array (indices 0..insertZeroPossition-1) holds
 * them in their original relative order — but the tail may still contain
 * stale leftover values that need clearing.
 *
 * Second pass — overwrite everything from insertZeroPossition onward with 0,
 * since those slots must now be the trailing zeroes.
 *
 * Example walk-through with [0,1,0,3,12]:
 *   i=0, nums[0]=0      -> skip
 *   i=1, nums[1]=1 != 0 -> nums[0]=1, insertZeroPossition=1
 *   i=2, nums[2]=0      -> skip
 *   i=3, nums[3]=3 != 0 -> nums[1]=3, insertZeroPossition=2
 *   i=4, nums[4]=12!= 0 -> nums[2]=12, insertZeroPossition=3
 *   after pass 1: [1,3,12,3,12] (indices 3,4 are stale leftovers)
 *   pass 2: zero out j >= 3 -> [1,3,12,0,0] (correct)
 *
 * This is two linear passes: O(n) time, O(1) extra space. It does more
 * writes than strictly necessary (pass 2 rewrites 0 even where a 0 already
 * sits), which is why the single-pass swap version noted above is the
 * "minimal operations" answer to the follow-up — but this version is
 * simpler to reason about and still meets the time/space requirements.
 */
