# JavaScript Cheatsheet — Arrays & Strings (LeetCode)

Quick reference for the methods, idioms, and gotchas that show up constantly in
array/string problems. Skim the "Gotchas" lines — they're where bugs hide.

---

## Table of Contents
1. [Mutating vs. Non-Mutating](#mutating-vs-non-mutating)
2. [splice / slice](#splice--slice)
3. [Iteration & Transformation](#iteration--transformation)
4. [reduce (deep dive)](#reduce-deep-dive)
5. [Searching](#searching)
6. [Sorting](#sorting)
7. [Building & Joining](#building--joining)
8. [Strings](#strings)
9. [Math](#math)
10. [Number Parsing & Formatting](#number-parsing--formatting)
11. [Map / Set](#map--set)
12. [Two-Pointer & Sliding-Window Idioms](#two-pointer--sliding-window-idioms)
13. [Common Patterns / Snippets](#common-patterns--snippets)
14. [Complexity Quick Table](#complexity-quick-table)
15. [Gotchas Checklist](#gotchas-checklist)

---

## Mutating vs. Non-Mutating

| Mutates the array (in place) | Returns a new array / value |
|------------------------------|------------------------------|
| `push` `pop` `shift` `unshift` | `slice` `concat` `map` `filter` |
| `splice` `sort` `reverse` `fill` `copyWithin` | `flat` `flatMap` `join` `reduce` |

**Gotcha:** `sort`, `reverse`, and `splice` change the original array. If you need
the original later, copy first: `const copy = [...arr]` or `arr.slice()`.

---

## splice / slice

These two get confused constantly. `slice` = copy (safe), `splice` = edit (mutates).

### `slice(start, end)` — copy a portion, end exclusive
```js
const a = [0, 1, 2, 3, 4];
a.slice(1, 3);   // [1, 2]      (original unchanged)
a.slice(2);      // [2, 3, 4]   (to the end)
a.slice(-2);     // [3, 4]      (last 2)
a.slice();       // [0,1,2,3,4] (full shallow copy)
```

### `splice(start, deleteCount, ...itemsToInsert)` — remove/insert in place
```js
const a = [0, 1, 2, 3, 4];
a.splice(1, 2);          // removes [1,2]   → a = [0, 3, 4], returns [1, 2]
a.splice(1, 0, 'x','y'); // insert, delete 0 → a = [0,'x','y',3,4]
a.splice(2, 1, 'z');     // replace index 2  → a = [0,'x','z',3,4]
a.splice(-1, 1);         // remove last element
```
- **Returns** an array of the removed elements.
- `deleteCount` omitted → removes everything from `start` onward.

**Mnemonic:** s**P**lice has a **P** → it changes (mutates). s**L**ice **L**eaves
the original a**L**one.

---

## Iteration & Transformation

```js
arr.forEach((v, i, arr) => { ... });           // side effects, returns undefined
arr.map(v => v * 2);                            // [transformed]  same length
arr.filter(v => v > 0);                         // [kept]         ≤ length
arr.find(v => v > 2);                           // first match value or undefined
arr.findIndex(v => v > 2);                      // first match index or -1
arr.findLast(v => v > 2);                       // last match (ES2023)
arr.some(v => v < 0);                           // true if ANY pass
arr.every(v => v > 0);                          // true if ALL pass
arr.flat(depth);                                // flatten nested, default depth 1
arr.flatMap(v => [v, v]);                       // map then flat(1)
arr.entries();                                  // iterator of [index, value]
```

**Gotchas:**
- You **cannot `break`** out of `forEach`/`map`. Use a plain `for`/`for...of`, or
  `some`/`every` (which short-circuit) when you need early exit.
- `map` always returns the same length — don't use it to filter (returns
  `undefined` holes). Use `filter`, or `reduce`, or `flatMap` (return `[]` to drop).
- These skip nothing but are slower than `for` loops in hot paths.

### Loop forms
```js
for (let i = 0; i < arr.length; i++) { ... }    // index access, can break
for (const v of arr) { ... }                    // values, can break
for (const [i, v] of arr.entries()) { ... }     // index + value, can break
for (const k in obj) { ... }                    // object KEYS (avoid for arrays)
```

---

## reduce (deep dive)

`arr.reduce((accumulator, current, index, arr) => newAcc, initialValue)`

**Always pass an `initialValue`** — it sets the accumulator type and avoids the
"Reduce of empty array with no initial value" crash.

```js
// Sum
[1,2,3,4].reduce((sum, n) => sum + n, 0);            // 10

// Max (or use Math.max(...arr))
[3,7,2,9].reduce((max, n) => Math.max(max, n), -Infinity);  // 9

// Count frequencies → object
['a','b','a'].reduce((m, c) => (m[c] = (m[c]||0)+1, m), {}); // {a:2, b:1}

// Group by
nums.reduce((g, n) => {
  const key = n % 2 ? 'odd' : 'even';
  (g[key] ||= []).push(n);
  return g;
}, {});

// Build a Map of frequencies (preferred for char counts)
[...str].reduce((m, c) => m.set(c, (m.get(c)||0)+1), new Map());

// Flatten one level
[[1,2],[3,4]].reduce((acc, x) => acc.concat(x), []);
```

- `reduceRight` does the same from right to left.
- If the body needs an `if/else` and side effects, a plain loop is often clearer —
  don't force `reduce`.

---

## Searching

```js
arr.includes(x);            // true/false   (uses ===, finds NaN)
arr.indexOf(x);             // index or -1  (===, does NOT find NaN)
arr.lastIndexOf(x);         // from the end
str.includes('ab');         // substring search
str.indexOf('ab');          // substring index or -1
```

**Gotcha:** `indexOf(NaN)` is always `-1`; use `includes(NaN)` or
`Number.isNaN`. `includes` uses SameValueZero, `indexOf` uses strict `===`.

**Perf:** `arr.includes` is O(n). For repeated membership checks, build a `Set`
once and use `set.has(x)` — O(1).

---

## Sorting

`sort` mutates and, by default, sorts **as strings** (lexicographic).

```js
[10, 2, 1].sort();                 // [1, 10, 2]  ← string sort! usually wrong
[10, 2, 1].sort((a, b) => a - b);  // [1, 2, 10]  ascending numbers
[10, 2, 1].sort((a, b) => b - a);  // [10, 2, 1]  descending
words.sort((a, b) => a.localeCompare(b));    // proper string sort
pairs.sort((a, b) => a[0] - b[0] || a[1] - b[1]); // by first, then second
```

- Comparator returns: negative → `a` first, positive → `b` first, 0 → keep order.
- `sort` is stable (ES2019+).
- Non-mutating copy: `[...arr].sort(cmp)` or `arr.toSorted(cmp)` (ES2023).
- Reverse: `arr.reverse()` (mutates) or `arr.toReversed()` (ES2023).

---

## Building & Joining

```js
Array(5).fill(0);                  // [0,0,0,0,0]
Array.from({length: 5}, (_, i) => i);        // [0,1,2,3,4]   index map
Array.from('hello');               // ['h','e','l','l','o']
Array.from(new Set(arr));          // dedupe → array
[...'abc'];                        // ['a','b','c']  spread a string
[...arr1, ...arr2];                // concat via spread
arr.join('');                      // array → string, '' = no separator
arr.join('-');                     // '1-2-3'
new Array(3).fill().map(() => []); // 3 independent empty arrays
```

### 2D grid (watch the reference trap)
```js
// CORRECT — each row is independent
const grid = Array.from({length: rows}, () => Array(cols).fill(0));

// WRONG — all rows share ONE array reference
const bad = Array(rows).fill(Array(cols).fill(0));
```

---

## Strings

Strings are **immutable** — every "modification" returns a new string.

```js
s.length;
s[i];  s.charAt(i);                // char at index
s.charCodeAt(i);                   // UTF-16 code (e.g. 'a' → 97)
String.fromCharCode(97);           // 'a'
s.codePointAt(i);                  // full code point (emoji-safe)

s.slice(1, 4);  s.substring(1, 4); // substring (slice supports negatives)
s.toUpperCase();  s.toLowerCase();
s.trim();  s.trimStart();  s.trimEnd();
s.padStart(5, '0');  s.padEnd(5, ' ');  // '00042'
s.repeat(3);                       // 'abcabcabc'

s.includes('x');  s.startsWith('x');  s.endsWith('x');
s.indexOf('x');  s.lastIndexOf('x');
s.replace('a', 'b');               // first match only
s.replaceAll('a', 'b');            // all matches
s.replace(/a/g, 'b');              // all matches via regex

s.split('');                       // → char array
s.split(' ');                      // → words
s.split(',');                      // CSV fields
s.match(/\d+/g);                   // ['12','34'] or null
[...s.matchAll(/\d+/g)];           // iterator of match objects
```

### Char ↔ number tricks
```js
'a'.charCodeAt(0) - 97;            // letter → 0–25 index
'5'.charCodeAt(0) - 48;            // digit char → number (or just +'5')
String.fromCharCode(97 + i);       // 0–25 index → letter
c >= '0' && c <= '9';              // is digit (works on single chars)
```

**Gotchas:**
- No in-place edit: convert to array (`s.split('')`), edit, `arr.join('')`.
- `split('')` breaks on emoji/surrogate pairs; use `[...s]` or `Array.from(s)`
  for full code points.
- Comparing strings with `<`/`>` is lexicographic by UTF-16 code unit.

---

## Math

```js
Math.max(1, 5, 3);          // 5      (varargs, NOT an array)
Math.min(...arr);           // spread an array in
Math.max(...arr);           // ⚠️ stack overflow for very large arrays
Math.abs(-7);               // 7
Math.floor(4.9);            // 4   (toward -∞)
Math.ceil(4.1);             // 5   (toward +∞)
Math.round(4.5);            // 5   (.5 rounds up)
Math.trunc(-4.7);           // -4  (drop decimal, toward 0)
Math.sign(-3);              // -1 | 0 | 1
Math.pow(2, 10);            // 1024   (or 2 ** 10)
Math.sqrt(16);              // 4
Math.cbrt(27);              // 3
Math.hypot(3, 4);           // 5
Math.log2(8);               // 3
Math.log10(1000);           // 3
Math.random();              // [0, 1)
```

**Constants / sentinels:**
```js
Infinity, -Infinity;        // init for min/max accumulators
Number.MAX_SAFE_INTEGER;    // 9007199254740991  (2^53 - 1)
Number.MIN_SAFE_INTEGER;
```

**Gotchas:**
- Integer division: `Math.floor(a / b)` or `(a / b) | 0` (positives only); for
  big values use `Math.trunc(a / b)`.
- `Math.max(...arr)` with a huge array can throw "Maximum call stack" — use a
  `reduce` instead.
- `Math.max()` with no args → `-Infinity`; `Math.min()` → `Infinity`.

### Useful integer/bit tricks
```js
n % 2 === 0;                // even
(n & 1) === 0;              // even (bitwise, fast)
x ^ y;                      // XOR — find the single unpaired number
~~4.7;                      // 4   (double bitwise-not = truncate, 32-bit)
a >> 1;                     // floor(a/2)
mid = lo + ((hi - lo) >> 1);// overflow-safe midpoint
1 << k;                     // 2^k  (bitmask for the k-th bit)
mask & (1 << k);            // test bit k
```

---

## Number Parsing & Formatting

```js
parseInt('42px', 10);       // 42    (stops at non-digit; ALWAYS pass radix)
parseInt('1010', 2);        // 10    (binary string → number)
parseFloat('3.14abc');      // 3.14
Number('42');               // 42    (whole string must be numeric, else NaN)
+'42';                      // 42    (unary plus shorthand)
(255).toString(2);          // '11111111'  decimal → binary string
(255).toString(16);         // 'ff'        → hex
(3.14159).toFixed(2);       // '3.14'  (returns a STRING)
Number.isInteger(5.0);      // true
Number.isNaN(x);            // safe NaN check (x !== x also works)
```

---

## Map / Set

Prefer these over plain objects for counting and membership in interviews.

### Map — ordered key→value, any key type
```js
const m = new Map();
m.set(key, val);  m.get(key);  m.has(key);  m.delete(key);
m.size;
m.get(k) ?? 0;                       // default when missing
m.set(k, (m.get(k) || 0) + 1);       // increment / frequency count
for (const [k, v] of m) { ... }
[...m.keys()]; [...m.values()]; [...m.entries()];
```

### Set — unique values, O(1) membership
```js
const s = new Set(arr);              // dedupe
s.add(x);  s.has(x);  s.delete(x);  s.size;
[...s];  Array.from(s);              // back to array
new Set(a).size === a.length;        // "all unique?" check
```

**Object vs. Map:** plain objects coerce keys to strings and inherit prototype
keys (`'toString'` collisions). Use `Map` for non-string keys or insertion-order
iteration; `Object.create(null)` for a clean dictionary.

```js
// Object as a counter
const count = {};
count[k] = (count[k] || 0) + 1;
Object.keys(o); Object.values(o); Object.entries(o);
Object.entries(o).sort((a, b) => b[1] - a[1]);   // sort by value desc
```

---

## Two-Pointer & Sliding-Window Idioms

```js
// Opposite ends (sorted array, palindrome, container)
let l = 0, r = arr.length - 1;
while (l < r) {
  if (cond) l++;
  else r--;
}

// Fast/slow (cycle detection, middle of list)
let slow = 0, fast = 0;

// Sliding window (longest substring, subarray sum)
let left = 0, sum = 0, best = 0;
for (let right = 0; right < arr.length; right++) {
  sum += arr[right];
  while (sum > target) sum -= arr[left++];   // shrink from the left
  best = Math.max(best, right - left + 1);
}
```

---

## Common Patterns / Snippets

```js
// Frequency map
const freq = {};
for (const c of str) freq[c] = (freq[c] || 0) + 1;

// Anagram key (sort the letters)
const key = [...str].sort().join('');

// Reverse a string
[...str].reverse().join('');

// Dedupe while preserving order
[...new Set(arr)];

// Sum / max / min of array
arr.reduce((a, b) => a + b, 0);
Math.max(...arr);   Math.min(...arr);

// Range [0, n)
Array.from({length: n}, (_, i) => i);
[...Array(n).keys()];

// Prefix sums
const prefix = [0];
for (const n of nums) prefix.push(prefix.at(-1) + n);
// sum of nums[i..j] = prefix[j+1] - prefix[i]

// Last element
arr.at(-1);            // ES2022, also arr[arr.length - 1]

// Swap without temp
[a[i], a[j]] = [a[j], a[i]];

// Clamp
Math.max(min, Math.min(max, x));

// Count chars matching condition
[...str].filter(c => c === 'a').length;

// Transpose a matrix
grid[0].map((_, c) => grid.map(row => row[c]));
```

---

## Complexity Quick Table

| Operation | Cost |
|-----------|------|
| `push` / `pop` | O(1) |
| `shift` / `unshift` | O(n) — shifts every element |
| `splice` | O(n) |
| `includes` / `indexOf` / `find` | O(n) |
| `Set.has` / `Map.get` / object key | O(1) avg |
| `sort` | O(n log n) |
| spread `[...arr]` / `slice` copy | O(n) |
| `Math.max(...arr)` | O(n) (and stack-limited) |

**Tip:** Inside a loop, `arr.shift()`/`unshift()` and repeated `includes` are the
classic accidental-O(n²) traps. Reach for an index pointer or a `Set`/`Map`.

---

## Gotchas Checklist

- [ ] `splice` mutates; `slice` copies. Copy before sort/reverse if you need the original.
- [ ] `sort()` is lexicographic by default — pass `(a, b) => a - b` for numbers.
- [ ] `map` keeps length; use `filter`/`flatMap`/`reduce` to drop items.
- [ ] Can't `break` from `forEach`/`map` — use `for`, `for...of`, `some`/`every`.
- [ ] Strings are immutable — split → edit array → join.
- [ ] `Array(n).fill(Array(m))` shares one inner array — use `Array.from`.
- [ ] Always pass a radix to `parseInt` and an `initialValue` to `reduce`.
- [ ] `indexOf(NaN) === -1`; use `includes` / `Number.isNaN`.
- [ ] `Math.max(...hugeArray)` can overflow the stack — `reduce` instead.
- [ ] `0`, `''`, `NaN`, `null`, `undefined` are all falsy — `(m.get(k) || 0)`
      treats a real `0` as missing; use `?? 0` when `0` is a valid stored value.
