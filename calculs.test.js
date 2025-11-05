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
        test('Usufruit âge négatif = 0.90', () => {
            expect(getValeurUsufruit(-5)).toBe(0.90);
        });
        test('Usufruit âge très élevé = 0.10', () => {
            expect(getValeurUsufruit(150)).toBe(0.10);
        });
        test('Usufruit âge non numérique = 0.90', () => {
            expect(getValeurUsufruit(NaN)).toBe(0.90);
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
        test('Base taxable négative = 0', () => {
            expect(calculerImpot(-100)).toBe(0);
        });
        test('Base taxable très élevée', () => {
            expect(calculerImpot(100000000)).toBeGreaterThan(0);
        });
        test('Base taxable non numérique = 0', () => {
            expect(calculerImpot(NaN)).toBe(0);
        });
});

describe('Options du survivant - exemples pédagogiques', () => {
    const communaute = 200000;
    const propreM = 100000;
    const propreMme = 50000;
    const donationE = 20000;
    const abattement = 100000 - donationE; // 80 000
    const ageSurvivant = 75;
    const valeurUsufruit = getValeurUsufruit(ageSurvivant); // 0.30
    const valeurNP = 1 - valeurUsufruit; // 0.70
    // Patrimoine de Monsieur
    const patrimoineM = (communaute / 2) + propreM; // 200 000

    test('100% Usufruit', () => {
        const partTaxableEnfant = (patrimoineM * valeurNP) / 2; // 70 000
        const baseTaxable = Math.max(0, partTaxableEnfant - abattement); // 0
        expect(baseTaxable).toBe(0);
        expect(calculerImpot(baseTaxable)).toBe(0);
    });

    test('1/4 Pleine Propriété', () => {
        const partEnfants = patrimoineM * 0.75; // 150 000
        const partTaxableEnfant = partEnfants / 2; // 75 000
        const baseTaxable = Math.max(0, partTaxableEnfant - abattement); // 0
        expect(baseTaxable).toBe(0);
        expect(calculerImpot(baseTaxable)).toBe(0);
    });

    test('1/3 Pleine Propriété', () => {
        const partEnfants = patrimoineM * (2/3); // 133333.33
        const partTaxableEnfant = partEnfants / 2; // 66666.67
        const baseTaxable = Math.max(0, partTaxableEnfant - abattement); // 0
        expect(Math.round(baseTaxable)).toBe(0);
        expect(calculerImpot(baseTaxable)).toBe(0);
    });

    test('1/4 PP + 3/4 Usufruit', () => {
        const partUSU = patrimoineM * 0.75; // 150 000
        const partTaxableEnfant = (partUSU * valeurNP) / 2; // 52 500
        const baseTaxable = Math.max(0, partTaxableEnfant - abattement); // 0
        expect(baseTaxable).toBe(0);
        expect(calculerImpot(baseTaxable)).toBe(0);
    });
});
