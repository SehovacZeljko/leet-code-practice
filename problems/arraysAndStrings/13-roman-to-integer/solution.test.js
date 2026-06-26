const { romanToInt } = require('./solution');

describe('Roman to Integer (#13)', () => {
    test('example 1: III', () => {
        expect(romanToInt('III')).toBe(3);
    });

    test('example 2: LVIII', () => {
        expect(romanToInt('LVIII')).toBe(58);
    });

    test('example 3: MCMXCIV', () => {
        expect(romanToInt('MCMXCIV')).toBe(1994);
    });

    test('single symbol', () => {
        expect(romanToInt('M')).toBe(1000);
    });

    test('subtractive pairs: IV, IX, XL, XC, CD, CM', () => {
        expect(romanToInt('IV')).toBe(4);
        expect(romanToInt('IX')).toBe(9);
        expect(romanToInt('XL')).toBe(40);
        expect(romanToInt('XC')).toBe(90);
        expect(romanToInt('CD')).toBe(400);
        expect(romanToInt('CM')).toBe(900);
    });

    test('max value', () => {
        expect(romanToInt('MMMCMXCIX')).toBe(3999);
    });
});
