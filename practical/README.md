# Practical Coding Track

"Build a small thing" exercises — the kind of practical, real-world coding that
full-stack interviews use alongside (or instead of) LeetCode algorithm puzzles:
implement a cache, an event emitter, parse and transform data, write async
utilities. These mirror take-home screens and pair-programming rounds.

## How this track works (different from `problems/`)

Unlike the `problems/` folder, where solutions are written out, each exercise
here ships as a **stub + a complete failing test suite**. The test file is the
spec. Your job is to make it pass:

1. Read the problem comment block at the top of `solution.js`.
2. Read `solution.test.js` to see exactly what behavior is expected.
3. Implement the stub until the tests go green.
4. Update the header: `Status: ✗ unsolved` → `✓ solved YYYY-MM-DD`, and fill in
   the `Approach:` line.

This test-driven loop is exactly how real take-home interviews feel.

## Running

```bash
npx jest --testPathPattern practical                 # run the whole track
npx jest practical/01-lru-cache/solution.test.js     # run one exercise
npm test                                             # everything (incl. problems/)
```

## Exercises

| # | Exercise | Concepts | Status |
|---|----------|----------|--------|
| 01 | LRU Cache | Map ordering, O(1) eviction, classes | ✗ |
| 02 | Event Emitter | pub/sub, callbacks, API design | ✗ |
| 03 | Parse & Aggregate | data wrangling, group-by, reduce | ✗ |

## Backlog (coming next)

More practical coding:
- Debounce / throttle
- Token-bucket rate limiter
- `retryWithBackoff(fn)` — async retry with exponential backoff
- Promise concurrency pool (`mapLimit`)
- `deepEqual(a, b)`
- `flattenObject(obj)` — `{ a: { b: 1 } }` → `{ 'a.b': 1 }`
- In-memory key-value store with TTL expiry

Later tracks (new tooling introduced when we get there):
- **SQL** — query exercises on a seeded SQLite dataset
- **Debugging drills** — pre-broken code with failing tests to diagnose and fix
- **Take-home project** — a small REST API or CLI tool, judged on structure,
  tests, and git hygiene
