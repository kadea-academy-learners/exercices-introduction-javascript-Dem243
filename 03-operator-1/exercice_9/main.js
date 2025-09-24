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
let partPaul = partPremCat /  3;
let partMarie = partPremCat /  3;
let partAlain = partPremCat / 3;

let partEric = partAlain /  2;
let partClaire = partAlain /  2;

/* Calcul part deuxième catégorie */

let partMadameMukuna = partDeuxCategorie / 3;
let partJoseph = partDeuxCategorie  / 3;
let partSarah = partDeuxCategorie  / 3;


console.log(`Paul aura comme part: ${partPaul}, Marie aura comme part: ${partMarie}, Éric aura ${partEric}, Claire aura comme part: ${partClaire}, Madame Mukuna aura comme part; ${partMadameMukuna}, Joseph aura comme part: ${partJoseph}, sarah aura comme part; ${partSarah}, `);