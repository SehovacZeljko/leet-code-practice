/*
 * #1071 - Greatest Common Divisor of Strings
 * Difficulty: Easy | Topic: Arrays, Strings, Math (GCD)
 * Time: O(n + m) | Space: O(n + m)
 * Approach: if str1+str2 !== str2+str1, no common divisor exists; otherwise
 *           the answer is the prefix of length gcd(str1.length, str2.length)
 * Status: ✓ solved 2026-06-22
 */

/*
 * For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t
 * (i.e., t is concatenated with itself one or more times).
 *
 * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 *
 * Example 1:
 * Input: str1 = "ABCABC", str2 = "ABC"
 * Output: "ABC"
 *
 * Example 2:
 * Input: str1 = "ABABAB", str2 = "ABAB"
 * Output: "AB"
 *
 * Example 3:
 * Input: str1 = "LEET", str2 = "CODE"
 * Output: ""
 *
 * Example 4:
 * Input: str1 = "AAAAAB", str2 = "AAA"
 * Output: ""
 *
 * Constraints:
 * 1 <= str1.length, str2.length <= 1000
 * str1 and str2 consist of English uppercase letters.
 */

function gcdOfStrings(str1, str2) {
    // if a common divisor exists, concatenating in either order must match
    if (str1 + str2 !== str2 + str1) return '';

    let longerLen = str1.length;
    let shorterLen = str2.length;
    while (shorterLen !== 0) {
        let remainder = longerLen % shorterLen;
        longerLen = shorterLen;
        shorterLen = remainder;
    }

    return str1.slice(0, longerLen);
}

module.exports = { gcdOfStrings };
