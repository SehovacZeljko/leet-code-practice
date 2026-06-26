/*
 * Practical #01 - LRU Cache
 * Difficulty: Medium | Category: Data Structures, System Design
 * Target: O(1) get and put | Space: O(capacity)
 * Approach: Map preserves insertion order; delete+re-set on use moves a key to
 *   the newest end, so the first key is always the least-recently-used to evict
 * Status: ✓ solved 2026-06-24
 *
 * Implement a Least-Recently-Used (LRU) cache.
 *
 * Build a class `LRUCache` that is initialized with a positive integer
 * `capacity` and supports two operations:
 *
 *   get(key)        -> Return the value for `key` if it exists, otherwise
 *                      return undefined. A successful get counts as a "use"
 *                      and makes the key the most-recently-used.
 *
 *   put(key, value) -> Insert or update the value for `key`. This counts as a
 *                      "use" and makes the key the most-recently-used. If the
 *                      cache is at capacity, evict the least-recently-used key
 *                      before inserting the new one.
 *
 * Both operations should run in O(1) average time.
 *
 * Example:
 *   const cache = new LRUCache(2);
 *   cache.put(1, 'a');     // cache: {1=a}
 *   cache.put(2, 'b');     // cache: {1=a, 2=b}
 *   cache.get(1);          // returns 'a', 1 is now most-recently-used
 *   cache.put(3, 'c');     // capacity full -> evicts key 2 (least recent)
 *   cache.get(2);          // returns undefined (was evicted)
 *   cache.put(4, 'd');     // evicts key 1
 *   cache.get(1);          // returns undefined
 *   cache.get(3);          // returns 'c'
 *   cache.get(4);          // returns 'd'
 *
 * Hint: a JavaScript `Map` remembers insertion order. Deleting a key and
 * re-setting it moves it to the "newest" end — useful for tracking recency.
 *
 * Interview relevance: caching shows up everywhere in full-stack work — HTTP
 * caches, memoization, in-memory stores. This is a very common "build a small
 * thing" interview question.
 */

class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  /**
   * @param {*} key
   * @return {*} the cached value, or undefined if not present
   */
  get(key) {
    if (!this.map.has(key)) return undefined;

    // Touch: delete + re-set moves the key to the newest (most-recent) end.
    const value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  }

  /**
   * @param {*} key
   * @param {*} value
   * @return {void}
   */
  put(key, value) {
    // If it already exists, delete so the re-set marks it as most-recent.
    if (this.map.has(key)) {
      this.map.delete(key);
    }

    this.map.set(key, value);

    // Over capacity -> evict the least-recently-used (oldest) key.
    if (this.map.size > this.capacity) {
      const oldestKey = this.map.keys().next().value;
      this.map.delete(oldestKey);
    }
  }
}

module.exports = { LRUCache };
