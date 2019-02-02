//Variables
var pierre = document.getElementById('pierre');
var feuille = document.getElementById('feuille');
var ciseaux = document.getElementById('ciseaux');
var result = document.getElementById('result');
var resultData = "";
//éléments d'affichage
function play(){
    document.getElementById('play').addEventListener("click", display, false);
}
function display(){
    var icones = document.getElementById("pfc");
    icones.style.display = "block" ;
    document.getElementById('play').style.display = "none" ;
    jeu();
}
play();


//Mécaniques
var choix = [pierre, feuille, ciseaux];


function jeu(){
    for (var i = 0; i < choix.length; i++) {
        choix[i].addEventListener("click", function(){
            //Mécanique du choix de l'ordi

            var aleatoire = Math.floor(Math.random() * 3);
            var ordi = choix[aleatoire].id;
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
            result.innerHTML = "Vous avez joué : "+ player + "<br> L'ordi a joué : " + ordi + "<br> Resultat : " + resultData;

        })
    }
}
