/*
 * Practical #03 - Parse and Aggregate
 * Difficulty: Easy-Medium | Category: Data Wrangling, Backend
 * Target: O(n) over rows | Space: O(n)
 * Approach: (fill in once solved)
 * Status: ✗ unsolved
 *
 * Parse CSV-style text into records, then group and aggregate them — the
 * everyday "wrangle some data" task that shows up constantly in backend work.
 *
 * Implement TWO functions:
 *
 * 1) parseCsv(text)
 *    The first line is a header of comma-separated column names. Each
 *    following non-empty line is a row of comma-separated values. Return an
 *    array of objects keyed by column name (all values stay as strings).
 *    - Trim whitespace around column names and values.
 *    - Ignore blank lines (including a trailing newline at the end).
 *    - Empty input (or header only) returns an empty array.
 *
 *    Example:
 *      parseCsv('name, dept, salary\nAna, eng, 100\nBo, eng, 120\nCy, sales, 90')
 *      // => [
 *      //   { name: 'Ana', dept: 'eng',   salary: '100' },
 *      //   { name: 'Bo',  dept: 'eng',   salary: '120' },
 *      //   { name: 'Cy',  dept: 'sales', salary: '90'  },
 *      // ]
 *
 * 2) aggregate(records, groupByField, valueField)
 *    Group `records` by the value of `groupByField`, and for each group return
 *    a count of rows and the numeric sum of `valueField`. Return an object
 *    keyed by group value, each mapping to { count, sum }.
 *    - Coerce `valueField` to a number when summing (values may be strings).
 *    - Preserve first-seen group order is NOT required; key lookup is enough.
 *    - An empty records array returns {}.
 *
 *    Example (using the parsed records above):
 *      aggregate(records, 'dept', 'salary')
 *      // => {
 *      //   eng:   { count: 2, sum: 220 },
 *      //   sales: { count: 1, sum: 90  },
 *      // }
 *
 * Interview relevance: reading a file/payload, normalizing it, and computing
 * group totals is bread-and-butter backend and data work — and a common
 * practical screen.
 */

/**
 * @param {string} text
 * @return {Object[]} array of row objects keyed by header column
 */
function parseCsv(text) {
  // TODO: implement
}

/**
 * @param {Object[]} records
 * @param {string} groupByField
 * @param {string} valueField
 * @return {Object<string, {count: number, sum: number}>}
 */
function aggregate(records, groupByField, valueField) {
  // TODO: implement
}

module.exports = { parseCsv, aggregate };
