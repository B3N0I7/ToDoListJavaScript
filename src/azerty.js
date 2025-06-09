// A vous de jouer N°1
console.log("A vous de jouer N°1");
let totalLivres = 500;
const livresAchetes = 50;
const livresJetes = 10;
const livresRachetes = 5;
totalLivres = totalLivres + livresAchetes - livresJetes + livresRachetes
console.log(totalLivres);
const affichageTotalLivres = `Notre bibliothèque possède ${totalLivres} livres`;
console.log(affichageTotalLivres);

// A vous de jouer N°2
console.log("A vous de jouer N°2");
const ticket = {
    nomFilm: "Batman",
    prix: 10,
    numeroSalle: 2
};
const nom = "LaFouine";
const texteAffichage = `Bonjour ${nom}, votre film ${ticket.nomFilm} est en salle ${ticket.numeroSalle}`;
console.log(texteAffichage);

// Tableaux
console.log("Tableaux");
const listeDeMesFilms = ["Reservoir Dogs", "Pulp Fiction", "Django Unchained", "Jackie"];
console.log(listeDeMesFilms);
listeDeMesFilms.push("Kill Bill");
console.log(listeDeMesFilms);
listeDeMesFilms.pop();
console.log(listeDeMesFilms);
listeDeMesFilms.splice(0, 1);
console.log(listeDeMesFilms);
// A revoir le tri
listeDeMesFilms.sort((a, b) => - 1);
console.log(listeDeMesFilms);
listeDeMesFilms.sort((a, b) => - 1);
console.log(listeDeMesFilms);

// Copie valeur ou copie référence
// Copie valeur (donc 2éme variable)
// types simples : boolean - number - string
// exemple
const numero1 = 123;
const numero2 = numero1;
// numero1 = numero2 mais sont 2 variables indépendantes, si on modifie un des 2 variables, l'autre ne change pas
// Copie référence (donc pointeur vers la même variable)
// types complexes : array - object
// exemple
const tableau1 = [1, 2, 3];
const tableau2 = tableau1;
// les valeurs de tableau2 = valeurs de tableau1, si on change les valeurs de tableau1, les valeurs de tableau2 suivent
// si on veut créer une copie, donc une 2éme variables indépendante, il y a le spread operator
const tableau3 = [...tableau1];
// Notion à approfondir
// Les tableaux sont souvent déclarés en 'const' car ce qui est constant, ce n'est pas le contenu mais l'emplacement en mémoire

// A vous de jouer N°3
console.log("A vous de jouer N°3");
const playlist = ["Paris sous les bombes", "The harder they come", "Miami"];
const totalMorceaux = playlist.length;
const playlistAmis = [...playlist];
playlistAmis.push("La bonne du curé");
playlistAmis.push("Rosalie");
console.log(playlistAmis);
playlistAmis.pop();
console.log(playlistAmis);

// A vous de jouer N°4
console.log("A vous de jouer N°4");
const listeMots = ["Cachalot", "Pétunia", "Serviette"];
let score = 0;
let point = "point";
let motSaisi = prompt(`Entrez le mot ${listeMots[0]} !`);
if (motSaisi === listeMots[0]) {
    score += 1;
    console.log(`Bravo ! Vous avez ${score} ${point} sur 1.`);
    alert(`Bravo ! Vous avez ${score} ${point} sur 1.`);
} else {
    console.log(`Les mots ne sont pas les mêmes. Vous avez ${score} ${point} sur 1.`);
    alert(`Les mots ne sont pas les mêmes. Vous avez ${score} ${point} sur 1.`)
};
motSaisi = prompt(`Entrez le mot ${listeMots[1]} !`);
if (motSaisi === listeMots[1]) {
    score += 1;
    if (score > 1) {
        point = "points";
    }
    console.log(`Bravo ! Vous avez ${score} ${point} sur 2.`);
    alert(`Bravo ! Vous avez ${score} ${point} sur 2.`);
} else {
    console.log(`Les mots ne sont pas les mêmes. Vous avez ${score} ${point} sur 2.`);
    alert(`Les mots ne sont pas les mêmes. Vous avez ${score} ${point} sur 2.`)
};
motSaisi = prompt(`Entrez le mot ${listeMots[2]} !`);
if (motSaisi === listeMots[2]) {
    score += 1;
    if (score > 1) {
        point = "points";
    }
    console.log(`Bravo ! Vous avez ${score} ${point} sur 3.`);
    alert(`Bravo ! Vous avez ${score} ${point} sur 3.`);
} else {
    console.log(`Les mots ne sont pas les mêmes. Vous avez ${score} ${point} sur 3.`);
    alert(`Les mots ne sont pas les mêmes. Vous avez ${score} ${point} sur 3.`)
};

// A vous de jouer N°4 bis
console.log("A vous de jouer N°4 bis");
score = 0;
point = "point";
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste.", "Merci pour le poisson."]

let motsOuPhrases = prompt("1.Mots ou 2.Phrases ?");
console.log(motsOuPhrases);
while(motsOuPhrases != 1 && motsOuPhrases != 2) {
    console.log(motsOuPhrases);
    motsOuPhrases = prompt("1.Mots ou 2.Phrases ?")
}

function interrogation(motOuPhrase, liste) {
    for (let i = 0; i < 3; i++) {
        let reponse = prompt(`Entrez ${motOuPhrase} : ${liste[i]}`);
        if (reponse === liste[i]) {
            score += 1;
            if (score > 1) {
            point = "points";
        }
            alert(`Bravo, vous avez ${score} ${point} sur ${i + 1} !`)
        } else {
            alert(`Il y a une erreur, vous avez ${score} ${point} sur ${i + 1}`);
        }
    }
}

if (motsOuPhrases == 1) {
    interrogation("le mot", listeMots);
} else {
    interrogation("la phrase", listePhrases);
}

let motOuPhraseSaisi = "";
for (let i = 0; i < 3; i++) {
    if (motsOuPhrases == 1){
        motOuPhraseSaisi = prompt(`Entrez le mot : ${listeMots[i]}`)
        if (motOuPhraseSaisi === listeMots[i]) {
        score += 1;
        if (score > 1) {
            point = "points";
        }
        console.log(`Bravo ! Vous avez ${score} ${point} sur ${i + 1}.`);
        alert(`Bravo ! Vous avez ${score} ${point} sur ${i + 1}.`);
    } else {
        console.log(`Les mots ne sont pas les mêmes. Vous avez ${score} ${point} sur ${i + 1}.`);
        alert(`Les mots ne sont pas les mêmes. Vous avez ${score} ${point} sur ${i + 1}.`)
    };
    } else {
        motOuPhraseSaisi = prompt(`Entrez la phrase : ${listePhrases[i]}`)
        if (motOuPhraseSaisi === listePhrases[i]) {
        score += 1;
        if (score > 1) {
            point = "points";
        }
        console.log(`Bravo ! Vous avez ${score} ${point} sur ${i + 1}.`);
        alert(`Bravo ! Vous avez ${score} ${point} sur ${i + 1}.`);
    } else {
        console.log(`Les phrases ne sont pas les mêmes. Vous avez ${score} ${point} sur ${i + 1}.`);
        alert(`Les phrases ne sont pas les mêmes. Vous avez ${score} ${point} sur ${i + 1}.`)
    };
    }
}

// A vous de jouer N°5
console.log("A vous de jouer N°5");
function MessageScore(bonneReponse, i) {
    if (bonneReponse) {
        alert(`Bravo, vous avez ${score} ${point} sur ${i + 1} !`);
    } else {
        alert(`Il y a une erreur, vous avez ${score} ${point} sur ${i + 1}`);
    }
}

function interrogationAmelioree(motOuPhrase, liste) {
    for (let i = 0; i < 3; i++) {
        let reponse = prompt(`Entrez ${motOuPhrase} : ${liste[i]}`);
        if (reponse === liste[i]) {
            let bonneReponse = true;
            score += 1;
            if (score > 1) {
            point = "points";
        }
            MessageScore(bonneReponse, i);
        } else {
            let bonneReponse = false;
            MessageScore(!bonneReponse, i);
        }
    }
}

score = 0;
point = "point";

motsOuPhrases = prompt("1.Mots ou 2.Phrases ?");

while(motsOuPhrases != 1 && motsOuPhrases != 2) {
    motsOuPhrases = prompt("1.Mots ou 2.Phrases ?")
}

if (motsOuPhrases == 1) {
    interrogationAmelioree("le mot", listeMots);
} else {
    interrogationAmelioree("la phrase", listePhrases);
}
