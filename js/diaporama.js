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
var diap = 1;

$('div').on('click', function () {
    var id = this.id;

    if(id === "contenu1"){ // Si l'id de la div selectionné est contenu 1 alors on applique une modification CSS sur elle meme puis une boucle pour les autres 
        $('#contenu1').css(modification[2]);
        for (var i = nombreContenu; i > 1; i--) {
            $('#contenu'+i).css(modification[0]); // Boucles car modications identiques
        }
    } 
    else if(id === "contenu" + nombreContenu){ // idem que précédent sauf si c'est la dernière div sélectionnée
        $('#contenu' + nombreContenu).css(modification[2]);
        for (var i = nombreContenu - 1; i > 0; i--) {
            $('#contenu'+i).css(modification[1]);
        }
    }   
    else if((id !== "contenu" + nombreContenu) && (id !== "contenu1")){ 
        var chiffreContenu = id.substr(7);
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
    }
});

/*
--------- Animation Manuelle Touches du clavier ----------
*/

function infosClavier(e) {
    if(e.keyCode === 39){
        if (diap === nombreContenu) {
            diap = 1;
            $('#contenu1').css(modification[2]);
            for (var i = nombreContenu; i > 1; i--) {
                $('#contenu'+i).css(modification[0]);
            }
        }
        else{
            diap++;
            var chiffreContenu = diap;
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
        }
    }
    else if(e.keyCode === 37){
        if (diap === 1) {
            diap = nombreContenu;
            $('#contenu' + nombreContenu).css(modification[2]);
            for (var i = nombreContenu - 1; i > 0; i--) {
                $('#contenu'+i).css(modification[1]);
            }
        }
        else{
            diap--;
            var chiffreContenu = diap;
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
        }
    }
}

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




