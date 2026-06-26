/*
 * #1431 - Kids With the Greatest Number of Candies
 * Difficulty: Easy | Topic: Arrays
 * Time: O(n) | Space: O(n)
 * Approach: find the current max once, compare each kid's boosted total against it
 * Status: ✓ solved 2026-06-23
 *
 * There are n kids with candies. You are given an integer array candies,
 * where each candies[i] represents the number of candies the ith kid has,
 * and an integer extraCandies, denoting the number of extra candies that
 * you have.
 *
 * Return a boolean array result of length n, where result[i] is true if,
 * after giving the ith kid all the extraCandies, they will have the
 * greatest number of candies among all the kids, or false otherwise.
 *
 * Note that multiple kids can have the greatest number of candies.
 *
 * Example 1:
 * Input: candies = [2,3,5,1,3], extraCandies = 3
 * Output: [true,true,true,false,true]
 * Explanation: If you give all extraCandies to:
 * - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
 * - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
 * - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
 * - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
 * - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
 *
 * Example 2:
 * Input: candies = [4,2,1,1,2], extraCandies = 1
 * Output: [true,false,false,false,false]
 * Explanation: There is only 1 extra candy.
 * Kid 1 will always have the greatest number of candies, even if a different
 * kid is given the extra candy.
 *
 * Example 3:
 * Input: candies = [12,1,12], extraCandies = 10
 * Output: [true,false,true]
 *
 * Constraints:
 * n == candies.length
 * 2 <= n <= 100
 * 1 <= candies[i] <= 100
 * 1 <= extraCandies <= 50
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    return candies.map(c => c + extraCandies >= maxCandies);
}

module.exports = { kidsWithCandies };

/*
 * Explanation: max-once comparison
 *
 * Find the current greatest candy count in the array, `maxCandies`, in a
 * single pass. Then for each kid, check whether their count plus all the
 * extra candies would reach or exceed that max.
 *
 * Why this works: a kid only ever gets the extra candies hypothetically, one
 * kid at a time — no one else's count changes in that scenario. So the bar
 * to beat (or tie) is always the original max of the array, never a value
 * that includes someone else's boost. There's no need to recompute the max
 * after each hypothetical boost, since it can never decrease.
 *
 * Example walk-through with candies = [2,3,5,1,3], extraCandies = 3:
 *   maxCandies = 5
 *   kid 0: 2 + 3 = 5 >= 5 -> true
 *   kid 1: 3 + 3 = 6 >= 5 -> true
 *   kid 2: 5 + 3 = 8 >= 5 -> true
 *   kid 3: 1 + 3 = 4 >= 5 -> false
 *   kid 4: 3 + 3 = 6 >= 5 -> true
 *   result: [true, true, true, false, true] (correct)
 *
 * This gives O(n) time (one pass for max, one pass for the map) and O(n)
 * space for the result array.
 */
