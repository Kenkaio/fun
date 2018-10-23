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

    if(id === "contenu1"){ // Si l'id de la div selectionné est contenu 1 alors on applique une modification CSS sur elle meme puis une boucle pour les autres 
        diapFirst();        
    } 
    else if(id === "contenu" + nombreContenu){ // idem que précédent sauf si c'est la dernière div sélectionnée
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
    
};

function demarrer(){
    setInterval(animationAuto(), 5000);
};


function stop(){
    clearInterval(animationAuto());
};




