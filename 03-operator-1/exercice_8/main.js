// Exercice 8
// Écrivez votre code ici
let salaireMensuel = 500;
let loyer = (salaireMensuel * 30) / 100;
let nourriture = (salaireMensuel * 20) / 100;
let transport = (salaireMensuel * 10) / 100;
let autresDepenses = 50;
autresDepenses += 25;
let totalDepenses = loyer + nourriture + transport + autresDepenses;

let reste = salaireMensuel - totalDepenses;

if (reste >= 100) {
    console.log("Budget bien géré");
} else {
    console.log("Attention, budget serré");
}

let loisirs = (salaireMensuel * 15) / 100

totalDepenses += loisirs;

reste = salaireMensuel - totalDepenses

/* Calculer le pourcentage du salaire mensuel utilisé pour chaque catégorie de dépense */
let pourcentageLoyer = (loyer / salaireMensuel) * 100;
let pourcentageNourriture = (nourriture / salaireMensuel) * 100;
let pourcentageTransport = (transport / salaireMensuel) * 100;
let pourcentageAutresDepenses = (autresDepenses / salaireMensuel) * 100;
let pourcentageLoisirs = (loisirs / salaireMensuel) * 100;

console.log(`Calcul pourcentage: Loyer = ${pourcentageLoyer}%, Nourriture  = ${pourcentageNourriture}%, Transport = ${pourcentageTransport}%, Autres Dépenses  = ${pourcentageAutresDepenses}%, Loisirs = ${pourcentageLoisirs}%    `);
/* Simuler une augmentation de 10% du `salaireMensuel` */
salaireMensuel += (salaireMensuel * 10) / 100;

/* recalculer toutes les valeurs */
loyer = (salaireMensuel * 30) / 100;
nourriture = (salaireMensuel * 20) / 100;
transport = (salaireMensuel * 10) / 100;
loisirs = (salaireMensuel * 15) / 100;

totalDepenses = loyer + nourriture + transport + autresDepenses;

reste = salaireMensuel - totalDepenses

/* condition pour vérifier si les dépenses totales dépassent 90% du `salaireMensuel`*/

if (totalDepenses > (salaireMensuel * 90) / 100) {
    console.log("Dépenses trop élevées, réduisez vos charges");
}
console.log(totalDepenses);

module.exports = {

    salaireMensuel,
    loyer,
    transport,
    nourriture,
    autresDepenses,
    loisirs,
    reste,
    totalDepenses

}