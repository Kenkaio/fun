window.onload = function() { 
	
	// Si une réservation existe on supprime la map
	if (sessionStorage.getItem('exist') == "true" || exist == 1) {
    	$('#map').css({
            "display":"none"
        });
    }

	// Initialisation de la map préalablement chargé sur fichier HTML
    L.mapquest.key = 'h929kA7Z4D4lFKTIgc5KacHfwVm8F1Sy';
    var baseLayer = L.mapquest.tileLayer('map');

    var map = L.mapquest.map('map', {
      center: L.latLng(45.75, 4.85),
      layers: baseLayer,
      zoom: 12
    });	

    /* ------ Création de la fonction compteur lancé toutes les secondes ------ */
    function compteur(){
    	var date = sessionStorage.getItem("date");
    	var dateConv = Date.parse(date);
		var nouvelleDate = new Date();
		var nouvelleDateConv = Date.parse(nouvelleDate);
    	var msecPerMinute = 1000 * 60;
    	var interval = (nouvelleDateConv - dateConv);
    	var chrono = 1200000 - interval;
    	var verif = chrono;
    	var minutes = Math.floor(chrono / msecPerMinute);
		chrono = chrono - (minutes * msecPerMinute);
		var seconds = Math.floor(chrono / 1000);
    	if (verif < 0) {
    		clear();
    	}
    	else{
    		$('#compteur').text('Votre vélo est réservé pour ' + minutes + " minutes et " + seconds + " secondes");
    	}
    }

    setInterval(compteur, 1000);

    /* ----- Récupération des infos api jcdecaux + ajout marqueurs sur la map ------- */

    ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=22beeee17c3d11328823943102304b87aee0b0ca", function (reponse) {
    	var addressPoints = JSON.parse(reponse);	
	
        var markers = L.markerClusterGroup();

        for (var i = 0; i < addressPoints.length; i++) {
          	var title = addressPoints[i].name;
          	var id = addressPoints[i].number;

          	var marker = L.marker(new L.LatLng(addressPoints[i].position.lat, addressPoints[i].position.lng), {
            	title: title,
            	alt: id,
            	icon: L.mapquest.icons.marker()
          	});

          	if (sessionStorage.getItem('exist') == "true") { 
          		$('#retour').text("Vélo réservé à l'adresse : " + sessionStorage.getItem("adresse") + " par " + sessionStorage.getItem("prenom") + " " + sessionStorage.getItem("nom"));
		    	$('#retour').slideDown();
		    	$('#chrono').slideDown();
		    }

          	marker.bindPopup(title);
          	markers.addLayer(marker); 			
		    marker.on("click", function(){			              	
				var identifiant = this.options.alt;
				var valeur = 0;
				for (var i = 0; i < addressPoints.length; i++) {
		            if(addressPoints[i].number === identifiant){
		                valeur = i;
		                break;
	       		 	}
	    		}
	    		$('#map').animate({
					width: '75%',
					marginLeft: '0px',
				}, 1000);
	    		setTimeout(function(){							
					$('#formulaireReservation').css({
						'display' : 'block',
						'opacity' : '0',
					});
				}, 1000);
				setTimeout(function(){							
					$('#formulaireReservation').css({
						'opacity' : '1',
						"transition" : "1.5s"
					});
				}, 1100);
				window['adresse'] = addressPoints[valeur].address;
	    		$('#adresse').text("Adresse : " + addressPoints[valeur].address);
	    		$('#places').text(addressPoints[valeur].bike_stands + " places");

	    		if (addressPoints[valeur].available_bikes === 1) {
	    			$('#veloDispo').text(addressPoints[valeur].available_bikes + " vélo disponible");
	    			$('#veloDispo').css({ 'color': 'black', 'fontWeight' : "normal"});
	    			$('#form').css({"display": 'block'});
	    		}
	    		else if (addressPoints[valeur].available_bikes === 0) {
	    			$('#veloDispo').text("Aucun vélo disponible");
	    			$('#veloDispo').css({ 'color': 'red', 'fontWeight' : "bold"});
	    			$('#form').css({"display": 'none'});
	    		}
	    		else{
	    			$('#veloDispo').text(addressPoints[valeur].available_bikes + " vélos disponibles");
	    			$('#veloDispo').css({ 'color': 'black', 'fontWeight' : "normal"});
	    			$('#form').css({"display": 'block'});
	    		}
			    
		  	});        	
        }
        map.addLayer(markers);
	});
}
