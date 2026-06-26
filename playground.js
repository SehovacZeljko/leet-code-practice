// const { twoSum } = require('./problems/arraysAndStrings/1-two-sum/solution');
// const { merge } = require('./problems/arraysAndStrings/88-merge-sorted-array/solution');
// const { removeElement } = require('./problems/arraysAndStrings/27-remove-element/solution');
// const { majorityElement } = require('./problems/arraysAndStrings/169-majority-element/solution');
// const { maxProfit } = require('./problems/arraysAndStrings/121-best-time-to-buy-and-sell-stock/solution');
// const { romanToInt } = require('./problems/arraysAndStrings/13-roman-to-integer/solution');
// const { moveZeroes } = require('./problems/twoPointers/283-move-zeroes/solution');
// const { mergeAlternately } = require('./problems/arraysAndStrings/1768-merge-strings-alternately/solution');
// const { gcdOfStrings } = require('./problems/arraysAndStrings/1071-greatest-common-divisor-of-strings/solution');
// const { kidsWithCandies } = require('./problems/arraysAndStrings/1431-kids-with-the-greatest-number-of-candies/solution');
// const { canPlaceFlowers } = require('./problems/arraysAndStrings/605-can-place-flowers/solution');
// const { reverseVowels } = require('./problems/arraysAndStrings/345-reverse-vowels-of-a-string/solution');
// const { reverseWords } = require('./problems/arraysAndStrings/151-reverse-words-in-a-string/solution');
// const { productExceptSelf } = require('./problems/arraysAndStrings/238-product-of-array-except-self/solution');
// const { increasingTriplet } = require('./problems/arraysAndStrings/334-increasing-triplet-subsequence/solution');
// const { compress } = require('./problems/arraysAndStrings/443-string-compression/solution');
const { LRUCache } = require('./practical/01-lru-cache/solution');

const cache = new LRUCache(2);
cache.put(1, 'a');
cache.put(2, 'b');
console.log(cache.get(1)); // 'a' once implemented (currently undefined)
cache.put(3, 'c'); // should evict key 2
console.log(cache.get(2)); // undefined
console.log(cache.get(3)); // 'c' once implemented
