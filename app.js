$(document).ready(function(){

	var couleur = 0 ;

		$('.color').each(function(){
			var couleur = $(this).attr("data-color");
			$(this).css("background", couleur);		
		});

		$('.color').click(function(){
			var couleur = $(this).attr("data-color");

			if ( $('input[name="cocoroco"]').is(':checked')) {
  				$(".main").css('color', couleur);
  			}

  			else{
				$('.main').css('backgroundColor', couleur);
  			}
  	});
});