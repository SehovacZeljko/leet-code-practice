const { increasingTriplet } = require('./solution');

describe('#334 - Increasing Triplet Subsequence', () => {
  test('strictly increasing array', () => {
    expect(increasingTriplet([1, 2, 3, 4, 5])).toBe(true);
  });

  test('strictly decreasing array', () => {
    expect(increasingTriplet([5, 4, 3, 2, 1])).toBe(false);
  });

  test('triplet hidden among smaller resets', () => {
    expect(increasingTriplet([2, 1, 5, 0, 4, 6])).toBe(true);
  });

  test('array too short for a triplet', () => {
    expect(increasingTriplet([1, 2])).toBe(false);
  });

  test('single element', () => {
    expect(increasingTriplet([1])).toBe(false);
  });

  test('duplicates do not count as strictly increasing', () => {
    expect(increasingTriplet([1, 1, 1, 1])).toBe(false);
  });

  test('plateau then climb', () => {
    expect(increasingTriplet([2, 2, 2, 3, 4])).toBe(true);
  });

  test('handles negatives', () => {
    expect(increasingTriplet([-5, -3, -1])).toBe(true);
  });
});
