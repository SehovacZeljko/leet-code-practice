# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm test                          # run all tests
npx jest problems/arraysAndStrings/1-two-sum/solution.test.js   # run a single problem's tests
npx jest --testPathPattern arraysAndStrings # run all tests under a topic folder
npx jest --testPathPattern practical        # run all practical-coding exercises
```

## Project Structure

Two practice tracks live side by side. Jest auto-discovers any `*.test.js` file.

**1. `problems/` — LeetCode algorithm problems (worked solutions).**
Each problem lives at `problems/<topic>/<number>-<slug>/` containing two files:

- `solution.js` — the function + `module.exports = { functionName }`
- `solution.test.js` — Jest test cases importing from `./solution`

Topic folders: `arraysAndStrings/`, `trees/`, `dynamic-programming/`, `twoPointers/`. Add new topic folders as needed.

**2. `practical/` — practical "build a small thing" exercises (stub + failing tests).**
Each exercise lives at `practical/<NN>-<slug>/` with the same two-file layout,
but shipped as a **stub function + a complete failing test suite** — the user
implements until the tests go green (TDD style), rather than reading a finished
solution. See `practical/README.md` for the track overview and backlog.

## Conventions

**solution.js header** (required on every file):
```js
/*
 * #N - Problem Name
 * Difficulty: Easy | Topic: Arrays, Hash Map
 * Time: O(...) | Space: O(...)
 * Approach: one-line description
 * Status: ✓ solved YYYY-MM-DD
 */
```

**Exports:** named export only — `module.exports = { functionName }` — so test files can destructure cleanly.

**Task description:** whenever the user provides a new task/problem statement to set up, paste the full problem text (description, examples, constraints, follow-up) as a comment block in `solution.js`, directly below the header.

**playground.js** is the active scratchpad. When adding a new problem:
1. Create `problems/<topic>/<number>-<slug>/solution.js` and `solution.test.js`
2. In `playground.js`, add a `require` for the new problem, comment out all other requires, and set up example inputs with a `console.log` call ready to run
