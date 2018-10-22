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
--------- Animation Manuelle Click ----------
*/

var nombreContenu = $('.contenu').length;

$('div').on('click', function () {
    var id = this.id;

    if(id === "contenu1"){
        $('#contenu1').css(modification[2]);
        for (var i = nombreContenu; i > 1; i--) {
            $('#contenu'+i).css(modification[0]);
        }
    } 
    else if(id === "contenu" + nombreContenu){
        $('#contenu' + nombreContenu).css(modification[2]);
        for (var i = nombreContenu - 1; i > 0; i--) {
            $('#contenu'+i).css(modification[1]);
        }
    }   
    else if((id !== "contenu" + nombreContenu) && (id !== "contenu1")){ 
        var chiffreContenu = id.substr(7);
        for (var i = nombreContenu; i > 0; i--) {
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




