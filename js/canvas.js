var exist = 0;

/* -------- Réservation effectuée ---------- */
$('#reserver').click(function(){
		window['dateEnregistrement'] = new Date();
		var valeurNom = document.getElementById('nom').value;
		var valeurPrenom = document.getElementById('prenom').value;
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
			"height" : '400px',
			"width" : '100%',
			"transition" : '1s'
		});
		$('#formulaireReservation').css({
			"display" : 'none'
		});
		$('#retour').slideDown();
		$('#chrono').slideDown();
		exist = 1;
		for (var i = - 1; i >= 0; i--) {
		}
});

/* ------ Nettoyage des informations -------- */
function clear(){
	sessionStorage.clear();
	$('#retour').slideUp();
	$('#chrono').slideUp();
	$('#map').css({
			"height" : '500px',
			"width" : '100%',
			"transition" : '1s'
		});
	exist = 0;		
}

$('#annuler').click(function(){
	clear();
});
