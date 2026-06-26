const { compress } = require('./solution');

describe('#443 - String Compression', () => {
  test('groups of repeating characters', () => {
    const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
    expect(compress(chars)).toBe(6);
    expect(chars.slice(0, 6)).toEqual(['a', '2', 'b', '2', 'c', '3']);
  });

  test('single character stays uncompressed', () => {
    const chars = ['a'];
    expect(compress(chars)).toBe(1);
    expect(chars.slice(0, 1)).toEqual(['a']);
  });

  test('group length 10 or longer splits into multiple chars', () => {
    const chars = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
    expect(compress(chars)).toBe(4);
    expect(chars.slice(0, 4)).toEqual(['a', 'b', '1', '2']);
  });

  test('no repeating characters', () => {
    const chars = ['a', 'b', 'c'];
    expect(compress(chars)).toBe(3);
    expect(chars.slice(0, 3)).toEqual(['a', 'b', 'c']);
  });

  test('all identical characters', () => {
    const chars = ['a', 'a', 'a', 'a'];
    expect(compress(chars)).toBe(2);
    expect(chars.slice(0, 2)).toEqual(['a', '4']);
  });
});
