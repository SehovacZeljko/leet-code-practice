/*
 * #605 - Can Place Flowers
 * Difficulty: Easy | Topic: Arrays
 * Time: O(n) | Space: O(n)
 * Approach: greedy single pass, plant on any empty plot with empty neighbors
 * Status: ✓ solved 2026-06-23
 *
 * You have a long flowerbed in which some of the plots are planted, and
 * some are not. However, flowers cannot be planted in adjacent plots.
 *
 * Given an integer array flowerbed containing 0's and 1's, where 0 means
 * empty and 1 means not empty, and an integer n, return true if n new
 * flowers can be planted in the flowerbed without violating the
 * no-adjacent-flowers rule and false otherwise.
 *
 * Example 1:
 * Input: flowerbed = [1,0,0,0,1], n = 1
 * Output: true
 *
 * Example 2:
 * Input: flowerbed = [1,0,0,0,1], n = 2
 * Output: false
 *
 * Constraints:
 * 1 <= flowerbed.length <= 2 * 10^4
 * flowerbed[i] is 0 or 1.
 * There are no two adjacent flowers in flowerbed.
 * 0 <= n <= flowerbed.length
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
function canPlaceFlowers(flowerbed, n) {
    const bed = [...flowerbed];

    for (let i = 0; i < bed.length; i++) {
        const leftSide = i === 0 || bed[i - 1] === 0;
        const rightSide = i === bed.length - 1 || bed[i + 1] === 0;

        if (bed[i] === 0 && leftSide && rightSide) {
            bed[i] = 1;
            n--;
        }
    }

    return n <= 0;
}

module.exports = { canPlaceFlowers };

/*
 * Explanation: greedy single pass
 *
 * Walk through the flowerbed once. At each empty plot, check whether both
 * neighbors are also empty (treating out-of-bounds edges as empty). If so,
 * plant a flower there immediately and decrement n.
 *
 * Why greedy works: planting as early as possible never hurts. If a plot
 * qualifies (itself and both neighbors are empty), planting there can only
 * block its immediate neighbors from being planted next — but those
 * neighbors wouldn't have qualified anyway once this plot is filled, so no
 * future opportunity is lost compared to waiting.
 *
 * Example walk-through with flowerbed = [1,0,0,0,1], n = 1:
 *   i=0: bed[0]=1, skip
 *   i=1: bed[1]=0, left=bed[0]=1 (not empty) -> skip
 *   i=2: bed[2]=0, left=bed[1]=0, right=bed[3]=0 -> plant, bed=[1,0,1,0,1], n=0
 *   i=3: bed[3]=0, left=bed[2]=1 (not empty) -> skip
 *   i=4: bed[4]=1, skip
 *   n <= 0 -> true (correct)
 *
 * This gives O(n) time (single pass) and O(n) space for the bed copy
 * (could be done in O(1) space by mutating the input directly).
 */
