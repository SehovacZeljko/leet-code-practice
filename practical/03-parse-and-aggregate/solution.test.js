const { parseCsv, aggregate } = require('./solution');

describe('Parse and Aggregate (Practical #03)', () => {
  const csv = 'name, dept, salary\nAna, eng, 100\nBo, eng, 120\nCy, sales, 90';

  describe('parseCsv', () => {
    test('parses rows into objects keyed by header', () => {
      expect(parseCsv(csv)).toEqual([
        { name: 'Ana', dept: 'eng', salary: '100' },
        { name: 'Bo', dept: 'eng', salary: '120' },
        { name: 'Cy', dept: 'sales', salary: '90' },
      ]);
    });

    test('trims whitespace around names and values', () => {
      expect(parseCsv('a , b\n  1 ,  2  ')).toEqual([{ a: '1', b: '2' }]);
    });

    test('ignores a trailing newline / blank lines', () => {
      expect(parseCsv('a,b\n1,2\n\n3,4\n')).toEqual([
        { a: '1', b: '2' },
        { a: '3', b: '4' },
      ]);
    });

    test('empty string returns empty array', () => {
      expect(parseCsv('')).toEqual([]);
    });

    test('header only returns empty array', () => {
      expect(parseCsv('name,dept,salary')).toEqual([]);
    });
  });

  describe('aggregate', () => {
    test('groups and sums a numeric field', () => {
      const records = parseCsv(csv);
      expect(aggregate(records, 'dept', 'salary')).toEqual({
        eng: { count: 2, sum: 220 },
        sales: { count: 1, sum: 90 },
      });
    });

    test('coerces string values to numbers when summing', () => {
      const records = [
        { type: 'x', amount: '10' },
        { type: 'x', amount: '5' },
      ];
      expect(aggregate(records, 'type', 'amount')).toEqual({
        x: { count: 2, sum: 15 },
      });
    });

    test('empty records returns an empty object', () => {
      expect(aggregate([], 'dept', 'salary')).toEqual({});
    });

    test('single group', () => {
      const records = [
        { g: 'only', v: 3 },
        { g: 'only', v: 4 },
      ];
      expect(aggregate(records, 'g', 'v')).toEqual({
        only: { count: 2, sum: 7 },
      });
    });
  });
});
