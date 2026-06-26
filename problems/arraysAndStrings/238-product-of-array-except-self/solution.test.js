const { productExceptSelf } = require('./solution');

describe('productExceptSelf', () => {
  test('example 1', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  test('example 2', () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
  });

  test('two elements', () => {
    expect(productExceptSelf([3, 5])).toEqual([5, 3]);
  });

  test('multiple zeros', () => {
    expect(productExceptSelf([0, 0, 2, 3])).toEqual([0, 0, 0, 0]);
  });
});
