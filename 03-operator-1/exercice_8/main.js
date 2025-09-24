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

let pourcentageSalMensuel = (loyer / salaireMensuel) * 100 + (nourriture / salaireMensuel) * 100 + (transport / salaireMensuel) * 100 + (autresDepenses / salaireMensuel) * 100 + (loisirs / salaireMensuel) * 100;

salaireMensuel += (salaireMensuel * 10) / 100;

loyer = (salaireMensuel * 30) / 100;
nourriture = (salaireMensuel * 20) / 100;
transport = (salaireMensuel * 10) / 100;
loisirs = (salaireMensuel * 15) / 100

totalDepenses = loyer + nourriture + transport + autresDepenses +loisirs;

reste = salaireMensuel - totalDepenses

if (totalDepenses > (salaireMensuel * 40) / 100) {
    console.log("Dépenses trop élevées, réduisez vos charges");
}
console.log(totalDepenses);