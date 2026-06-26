/*
 * #88 - Merge Sorted Array
 * Difficulty: Easy | Topic: Arrays, Two Pointers
 * Time: O(m+n) | Space: O(1)
 * Approach: merge from the back using three pointers
 * Status: ✓ solved 2026-06-22
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing
 * order, and two integers m and n, representing the number of elements in
 * nums1 and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead
 * be stored inside the array nums1. To accommodate this, nums1 has a length
 * of m + n, where the first m elements denote the elements that should be
 * merged, and the last n elements are set to 0 and should be ignored. nums2
 * has a length of n.
 *
 * Example 1:
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
 * The result of the merge is [1,2,2,3,5,6] with the underlined elements
 * coming from nums1.
 *
 * Example 2:
 * Input: nums1 = [1], m = 1, nums2 = [], n = 0
 * Output: [1]
 * Explanation: The arrays we are merging are [1] and [].
 * The result of the merge is [1].
 *
 * Example 3:
 * Input: nums1 = [0], m = 0, nums2 = [1], n = 1
 * Output: [1]
 * Explanation: The arrays we are merging are [] and [1].
 * The result of the merge is [1].
 * Note that because m = 0, there are no elements in nums1. The 0 is only
 * placed to ensure the merge result can fit in nums1.
 *
 * Constraints:
 * nums1.length == m + n
 * nums2.length == n
 * 0 <= m, n <= 200
 * 1 <= m + n <= 200
 * -10^9 <= nums1[i], nums2[j] <= 10^9
 *
 * Follow up: Can you come up with an algorithm that runs in O(m + n) time?
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} — modifies nums1 in place
 */
function merge(nums1, m, nums2, n) {
    let i = m - 1;       // last real element in nums1
    let j = n - 1;       // last element in nums2
    let k = m + n - 1;   // last slot in nums1

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
}

module.exports = { merge };

/*
 * Explanation: merge from the back, three pointers
 *
 * Merging from the front would require shifting elements in nums1 to make
 * room for nums2's values, which costs O(m) per insertion. Instead, merge
 * from the back: nums1 already has m+n slots, with the last n slots empty
 * (zeros), so we can drop the largest remaining values into the end without
 * ever overwriting data we still need to read.
 *
 * Pointers:
 *   i -> last unmerged real element in nums1 (starts at m - 1)
 *   j -> last unmerged element in nums2      (starts at n - 1)
 *   k -> last open slot in nums1              (starts at m + n - 1)
 *
 * At each step, compare nums1[i] and nums2[j], place the larger one at
 * nums1[k], then decrement that pointer (and k). Once nums2 is exhausted
 * (j < 0), nums1's remaining prefix is already in place and sorted, so we
 * can stop.
 *
 * Example walk-through with nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3:
 *   i=2,j=2,k=5: nums1[2]=3 vs nums2[2]=6 -> place 6 at k=5, j=1
 *   i=2,j=1,k=4: nums1[2]=3 vs nums2[1]=5 -> place 5 at k=4, j=0
 *   i=2,j=0,k=3: nums1[2]=3 vs nums2[0]=2 -> place 3 at k=3, i=1
 *   i=1,j=0,k=2: nums1[1]=2 vs nums2[0]=2 -> place 2 (nums2) at k=2, j=-1
 *   j < 0, loop ends -> nums1 = [1,2,2,3,5,6]
 *
 * This does a single pass over m+n elements with no extra storage:
 * O(m+n) time, O(1) space.
 */
