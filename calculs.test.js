const { getValeurUsufruit, calculerImpot } = require('./calculs');

describe('getValeurUsufruit', () => {
    test('Usufruit 75 ans = 30%', () => {
        expect(getValeurUsufruit(75)).toBe(0.30);
    });
    test('Usufruit 50 ans = 60%', () => {
        expect(getValeurUsufruit(50)).toBe(0.60);
    });
    test('Usufruit 91 ans = 10%', () => {
        expect(getValeurUsufruit(91)).toBe(0.10);
    });
});

describe('calculerImpot', () => {
    test('Base taxable 0 = 0', () => {
        expect(calculerImpot(0)).toBe(0);
    });
    test('Base taxable 8000', () => {
        expect(calculerImpot(8000)).toBeCloseTo(400);
    });
    test('Base taxable 90000', () => {
        expect(calculerImpot(90000)).toBeCloseTo(16194);
    });
    test('Base taxable 1000000', () => {
        expect(calculerImpot(1000000)).toBeCloseTo(252678);
    });
});
