/*
    --------- Déclaration variables pour les diaps ----------
*/

var modification = [{
	"transform": "perspective(400px) rotateY(-45deg)",
  	"width": "150px",
  	"transition-duration": "3s"
},
{
	"transform": "perspective(400px) rotateY(45deg)",
  	"width": "150px",
  	"transition-duration": "3s"
},
{
	"transform": "perspective(0px) rotateY(0deg)",
  	"width": "1050px",
  	"transition-duration": "3s"
	}
];

$('#contenu1').css({
    "width": "1050px",
    "transform": "perspective(0px) rotateY(0deg)",
    "transition-duration": "3s"
});

/*
    --------- Déclaration des modifications css en fonction de la diap selec ----------
*/

function diapFirst(){
    $('#contenu1').css(modification[2]);
    for (var i = nombreContenu; i > 1; i--) {
        $('#contenu'+i).css(modification[0]); // Boucles car modications identiques
    }
};

function diapLast(){
    $('#contenu' + nombreContenu).css(modification[2]);
    for (var i = nombreContenu - 1; i > 0; i--) {
        $('#contenu'+i).css(modification[1]);
    }
};

function diapMid(){
    for (var i = nombreContenu; i > 0; i--) { // boucle pour modifier le css quand la div selectionnée est au milieu
        var currentI = i;                       
        if(currentI > chiffreContenu) {
            $('#contenu'+currentI).css(modification[0]);
        }
        else if(currentI == chiffreContenu) {
            $('#contenu'+currentI).css(modification[2]);
        }
        else if(currentI < chiffreContenu) {
            $('#contenu'+currentI).css(modification[1]);
        }               
    }
};


/*
    --------- Animation Manuelle Click ----------
*/

var nombreContenu = $('.contenu').length;
var diap = 1;

$('div').on('click', function () {
    var id = this.id;
    if(id === "contenu1"){ 
        diapFirst();        
    } 
    else if(id === "contenu" + nombreContenu){
        diapLast();
    }   
    else if((id !== "contenu" + nombreContenu) && (id !== "contenu1")){ 
        window['chiffreContenu'] = id.substr(7);
        diapMid();
    }
});

/*
    --------- Animation Manuelle Touches du clavier ----------
*/

function infosClavier(e) {
    if(e.keyCode === 39){
        if (diap === nombreContenu) {
            diap = 1;
            diapFirst();
        }
        else{
            diap++;
            window['chiffreContenu'] = diap;
            diapMid();
        }
    }
    else if(e.keyCode === 37){
        if (diap === 1) {
            diap = nombreContenu;
            diapLast();
        }
        else{
            diap--;
            window['chiffreContenu'] = diap;
            diapMid();
        }
    }
};

document.addEventListener("keydown", infosClavier);


/*
    --------- Animation Auto ----------
*/

function animationAuto(){
    if (diap === nombreContenu) {
        diap = 1;
        diapFirst();        
    }
    else{
        diap++;
        window['chiffreContenu'] = diap;
        diapMid();
    }
};


function lancementAnim() {
    window['varAnim'] = setInterval(animationAuto, 6000);
};

window.onload = lancementAnim();

var stop = true;

$("#stop").click(function () {
    clearInterval(varAnim);
    $('#demarrer').css({
        "opacity": "1",
        "display": "block"
    });
    $('#stop').css({
        "opacity": "0",
        "display": "none"
    });
});

$("#demarrer").click(function () {
    window['varAnim'] = setInterval(animationAuto, 6000);
    $('#demarrer').css({
        "opacity": "0",
        "display": "none"
    });
    $('#stop').css({
        "opacity": "1",
        "display": "block"
    });
});




