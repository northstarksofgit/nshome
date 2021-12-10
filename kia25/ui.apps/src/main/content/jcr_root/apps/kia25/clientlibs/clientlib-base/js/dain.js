$(document).ready(function() {

	var selectedTrimList = [];
	var selectedTrimPrice = 0;
	
	
    $('.form_chk').click(function() {

		console.log($(this).children('input').val());
		console.log($('.form_chk'));
		
		if($(this).attr('checked') == true && $(this).attr('checked') != true) {
			
			$(this).children('input').prop('checked', false);
			$(this).children('input').attr('checked', false);
			
		} else {
			
			$(this).children('input').prop('checked', true);
			$(this).children('input').attr('checked', true);
		}
		
	})
  

	 $('.box_u').click(function() {
        

         console.log($(this).children('.trimselector').children('.trim_click.on').attr('value'));
		
		
		
         $('.box_u').find('a').children().find('.price')[0].textContent = price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    })



})