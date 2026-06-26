const { LRUCache } = require('./solution');

describe('LRU Cache (Practical #01)', () => {
  test('stores and retrieves values', () => {
    const cache = new LRUCache(2);
    cache.put(1, 'a');
    cache.put(2, 'b');
    expect(cache.get(1)).toBe('a');
    expect(cache.get(2)).toBe('b');
  });

  test('returns undefined for missing keys', () => {
    const cache = new LRUCache(2);
    expect(cache.get(42)).toBeUndefined();
  });

  test('evicts the least-recently-used key when over capacity', () => {
    const cache = new LRUCache(2);
    cache.put(1, 'a');
    cache.put(2, 'b');
    cache.put(3, 'c'); // capacity 2 exceeded -> evict key 1 (oldest)
    expect(cache.get(1)).toBeUndefined();
    expect(cache.get(2)).toBe('b');
    expect(cache.get(3)).toBe('c');
  });

  test('get() refreshes recency so a different key is evicted', () => {
    const cache = new LRUCache(2);
    cache.put(1, 'a');
    cache.put(2, 'b');
    cache.get(1); // 1 is now most-recently-used; 2 is least
    cache.put(3, 'c'); // evict key 2, not key 1
    expect(cache.get(2)).toBeUndefined();
    expect(cache.get(1)).toBe('a');
    expect(cache.get(3)).toBe('c');
  });

  test('put() on an existing key updates value and refreshes recency', () => {
    const cache = new LRUCache(2);
    cache.put(1, 'a');
    cache.put(2, 'b');
    cache.put(1, 'A'); // update value and mark 1 as most-recent
    cache.put(3, 'c'); // evict key 2 (least recent), not key 1
    expect(cache.get(1)).toBe('A');
    expect(cache.get(2)).toBeUndefined();
    expect(cache.get(3)).toBe('c');
  });

  test('full LeetCode-style walkthrough', () => {
    const cache = new LRUCache(2);
    cache.put(1, 'a');
    cache.put(2, 'b');
    expect(cache.get(1)).toBe('a');
    cache.put(3, 'c'); // evicts 2
    expect(cache.get(2)).toBeUndefined();
    cache.put(4, 'd'); // evicts 1
    expect(cache.get(1)).toBeUndefined();
    expect(cache.get(3)).toBe('c');
    expect(cache.get(4)).toBe('d');
  });

  test('capacity of 1 evicts on every new key', () => {
    const cache = new LRUCache(1);
    cache.put(1, 'a');
    cache.put(2, 'b');
    expect(cache.get(1)).toBeUndefined();
    expect(cache.get(2)).toBe('b');
  });
});
