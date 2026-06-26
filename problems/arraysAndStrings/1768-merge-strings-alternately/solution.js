/*
 * #1768 - Merge Strings Alternately
 * Difficulty: Easy | Topic: Strings, Two Pointers
 * Time: O(n) | Space: O(n)
 * Approach: loop to the longer word's length, appending a char from each
 *           word at index i whenever that word still has one
 * Status: ✓ solved 2026-06-22
 *
 * You are given two strings word1 and word2. Merge the strings by adding
 * letters in alternating order, starting with word1. If a string is longer
 * than the other, append the additional letters onto the end of the merged
 * string.
 *
 * Return the merged string.
 *
 * Example 1:
 * Input: word1 = "abc", word2 = "pqr"
 * Output: "apbqcr"
 * Explanation: The merged string will be merged as so:
 * word1:  a   b   c
 * word2:    p   q   r
 * merged: a p b q c r
 *
 * Example 2:
 * Input: word1 = "ab", word2 = "pqrs"
 * Output: "apbqrs"
 * Explanation: Notice that as word2 is longer, "rs" is appended to the end.
 * word1:  a   b
 * word2:    p   q   r   s
 * merged: a p b q   r   s
 *
 * Example 3:
 * Input: word1 = "abcd", word2 = "pq"
 * Output: "apbqcd"
 * Explanation: Notice that as word1 is longer, "cd" is appended to the end.
 * word1:  a   b   c   d
 * word2:    p   q
 * merged: a p b q c   d
 *
 * Constraints:
 * 1 <= word1.length, word2.length <= 100
 * word1 and word2 consist of lowercase English letters.
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1, word2) {
  let merged = "";

  // walk only as far as the longer word — the shorter word's `if` simply
  // stops contributing once its characters run out, no `undefined` checks
  const maxLen = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLen; i++) {
    if (i < word1.length) merged += word1[i];
    if (i < word2.length) merged += word2[i];
  }

  return merged;
}

module.exports = { mergeAlternately };

/*
 * Explanation: walk index i from 0 to the longer word's length, pulling a
 * character from each word whenever that word still has one at index i
 *
 * Instead of figuring out up front which word is longer and branching on
 * undefined characters, just loop up to maxLen = max(word1.length,
 * word2.length). At each index i:
 *   - if word1 still has a character at i, append it
 *   - if word2 still has a character at i, append it
 *
 * Once a word runs out of characters, "i < word.length" becomes false and
 * that word simply stops contributing — no need to check for undefined.
 *
 * Example walk-through with word1="abcd", word2="pq":
 *   maxLen = max(4, 2) = 4
 *   i=0: word1[0]='a' -> merged="a";  word2[0]='p' -> merged="ap"
 *   i=1: word1[1]='b' -> merged="apb"; word2[1]='q' -> merged="apbq"
 *   i=2: word1[2]='c' -> merged="apbqc"; word2 has no index 2 -> skip
 *   i=3: word1[3]='d' -> merged="apbqcd"; word2 has no index 3 -> skip
 *   final: "apbqcd" (correct)
 *
 * This is one pass over the longer word: O(n) time where n = max(word1.length,
 * word2.length), and O(n) space for the merged output string.
 */
