var exist = 0;

/* -------- Réservation effectuée ---------- */
$('#reserver').click(function(){
	window['dateEnregistrement'] = new Date();
	var valeurNom = document.getElementById('nom').value;
	var valeurPrenom = document.getElementById('prenom').value;
	if (valeurNom === "") {
		$('#nom').css({
			"border" : "2px double red"
		});
		setTimeout(function(){							
			$('#nom').css({
				"border" : "1px solid grey"
			});
		}, 1000);
	}
	else if (valeurPrenom === "") {
		$('#prenom').css({
			"border" : "2px double red"
		});
		setTimeout(function(){							
			$('#prenom').css({
				"border" : "1px solid grey"
			});
		}, 1000);
	}
	else{
		sessionStorage.setItem("nom", valeurNom);
		sessionStorage.setItem("prenom", valeurPrenom);
		sessionStorage.setItem("adresse", adresse);	
		sessionStorage.setItem("exist", 'true');
		sessionStorage.setItem("date", dateEnregistrement);
		$('#retour').text("Vélo réservé à l'adresse : " + sessionStorage.getItem("adresse") + " par " + sessionStorage.getItem("prenom") + " " + sessionStorage.getItem("nom"));
		$('#annuler').css({
			"display": 'block'
		});
		$('#retour').slideDown();	
		$('#map').css({
			"display":"none"
		});
		$('#formulaireReservation').css({
			"display" : 'none'
		});
		$('#retour').slideDown();
		$('#chrono').slideDown();
		exist = 1;
	}
});

/* ------ Nettoyage des informations -------- */
function clear(){
	sessionStorage.clear();
	$('#retour').slideUp();
	$('#chrono').slideUp();
	setTimeout(function(){
		$('#map').css({
			"display": "block",
			"height" : '500px',
			"width" : '100%'
		});
	}, 500);
		
	exist = 0;		
}

$('#annuler').click(function(){
	clear();
});
