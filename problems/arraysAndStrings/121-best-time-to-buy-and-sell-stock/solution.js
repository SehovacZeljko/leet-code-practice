/*
 * #121 - Best Time to Buy and Sell Stock
 * Difficulty: Easy | Topic: Arrays
 * Time: O(n) | Space: O(1)
 * Approach: single pass tracking min price seen so far and best profit
 * Status: ✓ solved 2026-06-22
 *
 * You are given an array prices where prices[i] is the price of a given
 * stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one
 * stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you
 * cannot achieve any profit, return 0.
 *
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6),
 * profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you
 * must buy before you sell.
 *
 * Example 2:
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 *
 * Constraints:
 * 1 <= prices.length <= 10^5
 * 0 <= prices[i] <= 10^4
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let minPrice = prices[0];
    let bestProfit = 0;

    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > bestProfit) {
            bestProfit = price - minPrice;
        }
    }

    return bestProfit;
}

module.exports = { maxProfit };

/*
 * Explanation: track the running minimum, check profit at every day
 *
 * You only ever need to know the lowest price seen so far — that's the best
 * possible "buy" point for any day you might "sell" on. So walk through the
 * array once, keeping two values:
 *   minPrice    -> the lowest price seen so far (best buy point so far)
 *   bestProfit  -> the best profit found so far
 *
 * For each price:
 *   - if it's a new low, update minPrice (selling here would be pointless,
 *     but buying here might pay off later)
 *   - otherwise, check if selling today (price - minPrice) beats the best
 *     profit found so far, and update if so
 *
 * Example walk-through with [7,1,5,3,6,4]:
 *   price=7 -> minPrice=7, bestProfit=0
 *   price=1 -> new low -> minPrice=1
 *   price=5 -> 5-1=4 > 0 -> bestProfit=4
 *   price=3 -> 3-1=2, not better -> bestProfit stays 4
 *   price=6 -> 6-1=5 > 4 -> bestProfit=5
 *   price=4 -> 4-1=3, not better -> bestProfit stays 5
 *   final: 5 (correct)
 *
 * Example walk-through with strictly decreasing [7,6,4,3,1]:
 *   every price is a new low, so minPrice keeps dropping and bestProfit
 *   never has a chance to increase from 0 -> output 0 (correct)
 *
 * This is one pass with two variables: O(n) time, O(1) space. No need to
 * check every (buy, sell) pair, which would be the brute-force O(n^2)
 * approach.
 */
