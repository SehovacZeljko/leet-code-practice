/*
 * #345 - Reverse Vowels of a String
 * Difficulty: Easy | Topic: Two Pointers, String
 * Time: O(n) | Space: O(n)
 * Approach: two pointers from both ends, swap when both point to vowels
 * Status: ✗ unsolved
 */

/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"

Constraints:

1 <= s.length <= 3 * 10^5
s consist of printable ASCII characters.
*/

function reverseVowels(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const arr = s.split('');

    for (let left = 0, right = arr.length - 1; left < right; ) {
        if (!vowels.has(arr[left])) {
            left++;
        } else if (!vowels.has(arr[right])) {
            right--;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join('');

}

module.exports = { reverseVowels };

/*
 * Explanation:
 * - Strings are immutable in JS, so split('') into an array we can swap in place.
 * - left starts at index 0, right starts at the last index, and move toward each other.
 * - If arr[left] isn't a vowel, skip it (left++). Same for arr[right] (right--).
 * - When both left and right point to vowels, swap them via array destructuring
 *   ([arr[left], arr[right]] = [arr[right], arr[left]]), then move both pointers inward.
 * - Loop ends when left meets/crosses right, meaning every vowel pair has been swapped.
 * - join('') turns the array back into the final string.
 */
