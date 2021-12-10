$(document).ready(function() {

	var carGroupCode = "";
	var trimCarGroupCode = $('.box_u').children('.trimselector').children('.trim_click').attr('value');
	var carGroupList = null;
	
	
	
    $('.form_chk').click(function() {

		carGroupCode = $(this).children('input').val();
		carGroupList = $('.box_u').children('.trimselector').children('.trim_click');
		
		console.log(carGroupList);
		
		if ($(this).children('input').attr('checked') == true){
			trimCarGroupCode = $('.box_u').children('.trimselector').children('.trim_click').attr('value');
			console.log('트림코드' + trimCarGroupCode);
			
		}
			console.log('그룹코드' + carGroupCode);
		
		
		
		
		for(var i =0; i < carGroupList.length; i++) {
			console.log(carGroupList[i].value);
			/*
			if(carGroupCode == trimCarGroupCode){
				$('.trimselector').css('display', 'block');
			} else {
				$('.trimselector').css('display', 'none');
			}
			*/
			
		}
			
		
		if($(this).attr('checked') != true && $(this).attr('checked') != true) {
								
			$(this).children('input').prop('checked', true);
			$(this).children('input').attr('checked', true);
			
		}
		
	})
	
		
		


})