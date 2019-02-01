function play(){
    document.getElementById('play').addEventListener("click", display, false);
}
function display(){
    var icones = document.getElementById("pfc");
    icones.style.display = "block" ;
    document.getElementById('play').style.display = "none" ;
}
play();
