// Exercice 9
// Écrivez votre code ici
// patrimoine de Monsieur Jean Mukuna
let maison = 60000000
let terrain = 40000000;
let liquidites = 20000000;
let patrimoine = maison + terrain + liquidites;

/*Calcul part totale */

let partPremCat = patrimoine * 0.75;

let partDeuxCategorie = patrimoine * 0.25;
/* Calcul part première catégorie */
let paul = partPremCat /  3;
let marie = partPremCat /  3;
let alain = partPremCat / 3;

let eric = alain /  2;
let clair = alain / 2;

/* Calcul part deuxième catégorie */

let madameMukuna = partDeuxCategorie / 3;
let joseph = partDeuxCategorie  / 3;
let sarah = partDeuxCategorie  / 3;


console.log(`Paul aura comme part: ${paul}, Marie aura comme part: ${marie}, Éric aura ${eric}, Clair aura comme part: ${clair}, Madame Mukuna aura comme part; ${madameMukuna}, Joseph aura comme part: ${joseph}, sarah aura comme part; ${sarah}, `);

module.exports= {
maison,
terrain,
liquidites,
patrimoine,
joseph,
partDeuxCategorie,
partPremCat,
paul,
clair,
madameMukuna,
sarah,
alain,
eric,
marie


}