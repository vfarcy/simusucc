// Fonctions extraites de index.html pour tests unitaires

const baremeImpot = [
    { max: 8072,      taux: 0.05, deduction: 0 },
    { max: 12109,     taux: 0.10, deduction: 404 },
    { max: 15932,     taux: 0.15, deduction: 1009 },
    { max: 552324,    taux: 0.20, deduction: 1806 },
    { max: 902838,    taux: 0.30, deduction: 57038 },
    { max: 1805677,   taux: 0.40, deduction: 147322 },
    { max: Infinity,  taux: 0.45, deduction: 237606 }
];

function getValeurUsufruit(age) {
    if (isNaN(age)) return 0.90;
    if (age <= 20) return 0.90;
    if (age <= 30) return 0.80;
    if (age <= 40) return 0.70;
    if (age <= 50) return 0.60;
    if (age <= 60) return 0.50;
    if (age <= 70) return 0.40;
    if (age <= 80) return 0.30;
    if (age <= 90) return 0.20;
    return 0.10;
}

function calculerImpot(baseTaxable) {
    if (baseTaxable <= 0) return 0;
    for (const tranche of baremeImpot) {
        if (baseTaxable <= tranche.max) {
            return (baseTaxable * tranche.taux) - tranche.deduction;
        }
    }
    return 0;
}

module.exports = { getValeurUsufruit, calculerImpot };
