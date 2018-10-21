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

function diap1(){
    $('#contenu1').css(modification[2]);
    $('#contenu2').css(modification[0]);
    $('#contenu3').css(modification[0]);
    $('#contenu4').css(modification[0]);
    $('#contenu3').css("margin-left", "-25px");
    $('#contenu4').css("margin-left", "-25px");
}

function diap2(){
    $('#contenu1').css(modification[1]);
    $('#contenu2').css(modification[2]);
    $('#contenu3').css(modification[0]);
    $('#contenu4').css(modification[0]);
    $('#contenu3').css("margin-left", "-15px");
}

function diap3(){
    $('#contenu1').css(modification[1]);
    $('#contenu2').css(modification[1]);
    $('#contenu3').css(modification[2]);
    $('#contenu4').css(modification[0]);
    $('#contenu4').css("margin-left", "-15px");
    $('#contenu3').css("margin-left", "-10px");
}

function diap4(){
    $('#contenu1').css(modification[1]);
    $('#contenu2').css(modification[1]);
    $('#contenu3').css(modification[1]);
    $('#contenu4').css(modification[2]);
    $('#contenu3').css("margin-left", "-15px");
}

$('#contenu1').css({
	"width": "1050px",
	"transform": "perspective(0px) rotateY(0deg)",
	"transition-duration": "3s"
});

/*
    --------- Animation Manuelle Click sur diapo ----------
*/


$('div').on('click', function () {
    var id = this.id;
    if (id === "contenu1"){
    	diap1();
    }
    else if (id === "contenu2"){
    	diap2();
    }
    else if (id === "contenu3"){
    	diap3();
    }
    else if (id === "contenu4"){
    	diap4();
    }
});


/*
    --------- Animation Manuelle Touches du clavier ----------
*/

var contenu1 = true;
var contenu2 = false;
var contenu3 = false;
var contenu4 = false;

// Affiche des informations sur un événement clavier
function infosClavier(e) {
    if(e.keyCode === 39 & contenu1){
        diap2();
        contenu1 = false;
        contenu2 = true;
    }
    else if(e.keyCode === 37 & contenu1){
        diap4();
        contenu1 = false;
        contenu4 = true;
    }
    else if(e.keyCode === 39 & contenu2){
        diap3();
        contenu2 = false;
        contenu3 = true;
    }
    else if(e.keyCode === 37 & contenu2){
        diap1();
        contenu2 = false;
        contenu1 = true;
    }
    else if(e.keyCode === 39 & contenu3){
        diap4();
        contenu3 = false;
        contenu4 = true;
    }
    else if(e.keyCode === 37 & contenu3){
        diap2();
        contenu3 = false;
        contenu2 = true;
    }
    else if(e.keyCode === 39 & contenu4){
        diap1();
        contenu4 = false;
        contenu1 = true;
    }
    else if(e.keyCode === 37 & contenu4){
        diap3();
        contenu4 = false;
        contenu3 = true;
    }
}
// Gestion de l'appui et du relâchement d'une touche du clavier
document.addEventListener("keydown", infosClavier);



/*
    --------- Animation Auto ----------
*/

var diap1Auto = true;
var diap2Auto = false;
var diap3Auto = false;
var diap4Auto = false;

function animationAuto(){
    if(diap1Auto){
            diap2();
            diap1Auto = false;
            diap2Auto = true;      
    }
    else if(diap2Auto){
            diap3();
            diap2Auto = false;
            diap3Auto = true;      
    }
    else if(diap3Auto){
            diap4();
            diap3Auto = false;
            diap4Auto = true;      
    }
    else if(diap4Auto){
            diap1();
            diap4Auto = false;
            diap1Auto = true;      
    }
};

function demarrer(){
    setInterval(animationAuto(), 50);
};


function stop(){
    clearInterval(animationAuto());
};




