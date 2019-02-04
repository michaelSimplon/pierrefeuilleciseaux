//Variables
var pierre = document.getElementById('pierre');
var feuille = document.getElementById('feuille');
var ciseaux = document.getElementById('ciseaux');
var partie = document.getElementById('partie');
var result = document.getElementById('result');

var tab = [pierre, feuille, ciseaux];

//Ecouteurs de click
pierre.addEventListener("click", jeu);
feuille.addEventListener("click", jeu);
ciseaux.addEventListener("click", jeu);

function jeu(){
    //Mécanique du choix de l'ordi
    var aleatoire = Math.floor(Math.random() * 3);
    var ordi = tab[aleatoire].id;
    var resultData;
    //Choix de l'utilisateur
    var player = this.id;

    //tests
    if (ordi == player) {
        resultData = "Egalité";

    } else if ( (player == "pierre" && ordi == "ciseaux") || (player == "feuille" && ordi == "pierre") || (player == "ciseaux" && ordi == "feuille")) {
        resultData = "Gagné";
    } else {
        resultData = "Perdu";
    }
    partie.innerHTML = `Vous avez joué : ${player} <br> L'ordi a joué : ${ordi}`;

    result.innerHTML = `Resultat : ${resultData}`;


}
