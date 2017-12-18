// good luck !
$(document).ready(function(){

	var couleur = 0 ;

		$('.color').each(function(){							//quand je charge la page, pour tous les boutons
			var couleur = $(this).attr("data-color");			//je récupère la valeur de l'attribut data-color de chaque bouton indépendamment
			$(this).css("background", couleur);					//ça change la valeur de fond de ce même bouton
		});

		$('.color').click(function(){							//je clique sur un .button
			var couleur = $(this).attr("data-color");			//je récupère la valeur de l'attribut data-color

			if ( $('input[name="cocoroco"]').is(':checked')) {	//si cocorico est coché
  				$(".main").css('color', couleur);				//change la couleur du texte de .main
  			}

  			else{
				$('.main').css('backgroundColor', couleur);		//sinon ça change la couleur de fond de .main
  			}
  	});
});
