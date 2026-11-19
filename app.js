"use strict";
//Ex1
console.log("Bonjour les étudiants");
document.getElementById("afficher1").textContent="Bonjour les étudiants";

//Ex2
let prenom=prompt("Donner votre prénom:");
if (!prenom || prenom.trim()===""){
    document.querySelector("#afficher2").textContent="Prénom non valide !!";
} 
else{
    document.querySelector("#afficher2").textContent="Bonjour " + prenom.trim();
}

//Ex3
let ch="";
for(let i=1;i<=5;i++){
    ch=ch+"Log "+i+"<br>";
}
document.getElementById("afficher2").innerHTML=ch;

//Ex4
function sommeEntre(a, b) {
    let somme = 0;
    for (let i = a + 1; i < b; i++) {
        somme += i;
    }
    return somme;
}

function sommePairsEntre(a, b) {
    let somme = 0;
    for (let i = a + 1; i < b; i++) {
        if (i % 2 === 0) {
            somme += i;
        }
    }
    return somme;
}

let saisieA = prompt("Donnez la valeur de a :");
let saisieB = prompt("Donnez la valeur de b :");

let a = Number(saisieA);
let b = Number(saisieB);

if (saisieA === null || saisieB === null || saisieA.trim() === "" || saisieB.trim() === "" || isNaN(a) || isNaN(b)) {
    document.querySelector("#afficher3").textContent = "Erreur : Veuillez saisir des nombres valides.";
} else {
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    let resultatSomme = sommeEntre(a, b);
    let resultatPairs = sommePairsEntre(a, b);

    document.querySelector("#afficher3").innerHTML = `
        Pour les bornes ${a} et ${b} :<br>
        - Somme des entiers strictement compris : ${resultatSomme}<br>
        - Somme des pairs strictement compris : ${resultatPairs}
    `;
}

//Ex5
function calculerMoyenne(dc1, dc2, ds) {
    return dc1 * 0.3 + dc2 * 0.3 + ds * 0.4;
}

let sDc1 = prompt("Donner la note DC1 :");
let sDc2 = prompt("Donner la note DC2 :");
let sDs = prompt("Donner la note DS :");

let dc1 = Number(sDc1);
let dc2 = Number(sDc2);
let ds = Number(sDs);

if (
    sDc1 === null || sDc2 === null || sDs === null ||
    sDc1.trim() === "" || sDc2.trim() === "" || sDs.trim() === "" ||
    isNaN(dc1) || isNaN(dc2) || isNaN(ds) ||
    dc1 < 0 || dc1 > 20 || dc2 < 0 || dc2 > 20 || ds < 0 || ds > 20
) {
    document.querySelector("#afficher5").textContent = "Erreur : Veuillez saisir des notes valides entre 0 et 20.";
} else {
    let moyenne = calculerMoyenne(dc1, dc2, ds);
    let mention = moyenne >= 10 ? "Admis" : "Ajourné";
    document.querySelector("#afficher5").innerHTML =
        "Moyenne : " + moyenne.toFixed(2) + "<br>Mention : " + mention;
}

//Ex6
let notesEx6 = [];
while (true) {
    let saisieNote = prompt("Donner une note (nombre négatif pour arrêter) :");
    if (saisieNote === null || saisieNote.trim() === "") {
        continue;
    }
    let valNote = Number(saisieNote);
    if (isNaN(valNote)) {
        continue;
    }
    if (valNote < 0) {
        break;
    }
    notesEx6.push(valNote);
}

if (notesEx6.length === 0) {
    document.querySelector("#afficher6").textContent = "Aucune note saisie.";
} else {
    let sommeNotes = 0;
    let minNote = notesEx6[0];
    let maxNote = notesEx6[0];

    for (let i = 0; i < notesEx6.length; i++) {
        sommeNotes += notesEx6[i];
        if (notesEx6[i] < minNote) minNote = notesEx6[i];
        if (notesEx6[i] > maxNote) maxNote = notesEx6[i];
    }

    let moyNotes = sommeNotes / notesEx6.length;
    document.querySelector("#afficher6").innerHTML =
        "Nombre de notes : " + notesEx6.length + "<br>" +
        "Moyenne : " + moyNotes.toFixed(2) + "<br>" +
        "Note minimale : " + minNote + "<br>" +
        "Note maximale : " + maxNote;
}

//Ex7
let saisieN = prompt("Donner un nombre de lignes n :");
let n = Number(saisieN);

if (saisieN === null || saisieN.trim() === "" || isNaN(n) || n <= 0) {
    document.querySelector("#afficher7").textContent = "Erreur : n doit être un nombre positif.";
} else {
    let car = prompt("Choisir un caractère (*, #, 1) :");
    if (car !== "*" && car !== "#" && car !== "1") {
        car = "1";
    }

    let figure = "";
    for (let i = 1; i <= n; i++) {
        let ligne = "";
        for (let j = 1; j <= i; j++) {
            ligne += car;
        }
        figure += ligne + "\n";
    }
    document.querySelector("#afficher7").textContent = figure;
}

//Ex8
let tableHTML = "<table border='1' cellpadding='5'><tr><th>×</th>";
for (let c = 0; c <= 10; c++) {
    tableHTML += "<th>" + c + "</th>";
}
tableHTML += "</tr>";

for (let l = 0; l <= 10; l++) {
    tableHTML += "<tr><th>" + l + "</th>";
    for (let c = 0; c <= 10; c++) {
        tableHTML += "<td>" + (l * c) + "</td>";
    }
    tableHTML += "</tr>";
}
tableHTML += "</table>";
document.querySelector("#afficher8").innerHTML = tableHTML;

//Ex9
let notesClasse = [];
while (true) {
    let saisieEtud = prompt("Donner la note d'un étudiant (nombre négatif pour arrêter) :");
    if (saisieEtud === null || saisieEtud.trim() === "") {
        continue;
    }
    let noteEtud = Number(saisieEtud);
    if (isNaN(noteEtud)) {
        continue;
    }
    if (noteEtud < 0) {
        break;
    }
    notesClasse.push(noteEtud);
}

if (notesClasse.length === 0) {
    document.querySelector("#afficher9").textContent = "Aucune note saisie pour la classe.";
} else {
    let totalEtudiants = notesClasse.length;
    let sommeClasse = 0;
    let meilleure = notesClasse[0];
    let pire = notesClasse[0];
    let nbAdmis = 0;
    let nbSup15 = 0;

    for (let i = 0; i < totalEtudiants; i++) {
        let courant = notesClasse[i];
        sommeClasse += courant;
        if (courant > meilleure) meilleure = courant;
        if (courant < pire) pire = courant;
        if (courant >= 10) nbAdmis++;
        if (courant >= 15) nbSup15++;
    }

    let moyenneClasse = sommeClasse / totalEtudiants;
    let pourcentageReussite = (nbAdmis / totalEtudiants) * 100;

    document.querySelector("#afficher9").innerHTML =
        "Nombre total d'étudiants : " + totalEtudiants + "<br>" +
        "Moyenne de la classe : " + moyenneClasse.toFixed(2) + "<br>" +
        "Pourcentage de notes ≥ 10 : " + pourcentageReussite.toFixed(2) + "%<br>" +
        "Meilleure note : " + meilleure + "<br>" +
        "Pire note : " + pire + "<br>" +
        "Bonus - Nombre de notes ≥ 15 : " + nbSup15;
}

//Ex10
function isAnneeBissextile(annee) {
    return (annee % 400 === 0) || (annee % 4 === 0 && annee % 100 !== 0);
}

let saisieAnnee = prompt("Donner une année :");
let annee = Number(saisieAnnee);

if (saisieAnnee === null || saisieAnnee.trim() === "" || isNaN(annee) || !Number.isInteger(annee)) {
    document.querySelector("#afficher10").textContent = "Erreur : Veuillez saisir une année valide.";
} else {
    if (isAnneeBissextile(annee)) {
        document.querySelector("#afficher10").textContent = "L'année " + annee + " est bissextile.";
    } else {
        document.querySelector("#afficher10").textContent = "L'année " + annee + " n'est pas bissextile.";
    }
}
//Mini-projet
let notesMiniProjet = [];
while (true) {
    let saisieMP = prompt("Mini-projet - Entrez une note (nombre négatif pour terminer) :");
    if (saisieMP === null || saisieMP.trim() === "") {
        continue;
    }
    let noteMP = Number(saisieMP);
    if (isNaN(noteMP)) {
        continue;
    }
    if (noteMP < 0) {
        break;
    }
    notesMiniProjet.push(noteMP);
}

if (notesMiniProjet.length === 0) {
    document.querySelector("#afficherMiniProjet").textContent = "Mini-projet : Aucune note saisie.";
} else {
    let sommeMP = 0;
    let minMP = notesMiniProjet[0];
    let maxMP = notesMiniProjet[0];
    let reussisMP = 0;
    let listeHTML = "<ul>";

    for (let i = 0; i < notesMiniProjet.length; i++) {
        let nMP = notesMiniProjet[i];
        listeHTML += "<li>Note " + (i + 1) + " : " + nMP + "</li>";
        sommeMP += nMP;
        if (nMP < minMP) minMP = nMP;
        if (nMP > maxMP) maxMP = nMP;
        if (nMP >= 10) reussisMP++;
    }
    listeHTML += "</ul>";

    let moyMP = sommeMP / notesMiniProjet.length;
    let tauxMP = (reussisMP / notesMiniProjet.length) * 100;

    document.querySelector("#afficherMiniProjet").innerHTML =
        "<h3>Mini-projet : Gestion des notes d'une classe</h3>" +
        listeHTML +
        "Moyenne : " + moyMP.toFixed(2) + "<br>" +
        "Min : " + minMP + "<br>" +
        "Max : " + maxMP + "<br>" +
        "Pourcentage de réussite (≥ 10) : " + tauxMP.toFixed(2) + "%";
}