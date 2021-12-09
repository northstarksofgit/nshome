$(document).ready(function() {
	
	$('.form_spr radio_box').click(function() {
		
		$(this).hasClass("on") ? $(this).removeClass("on") : $(this).addClass("on");
		
		
		
	})
	
	
	
	
	/*
	var selectedTrimList = [];
	var selectedTrimPrice = 0;
	
    $('.form_spr radio_box').click(function(e) {


        $(this).hasClass("on") ? $(this).removeClass("on") : $(this).addClass("on")


        if(selectedTrimList.indexOf($(this)[0].dataset.opt) > -1) {
			var idx = selectedTrimList.indexOf($(this)[0].dataset.tirm);
            delete selectedTrimList[idx];

			selectedTrimPrice = parseInt(selectedTrimPrice) - parseInt($(this)[0].dataset.price);
			selectedTrimList = selectedTrimList.filter(Boolean) 

        } else {
        	selectedTrimList.push($(this)[0].dataset.opt);
			selectedTrimPrice = parseInt(selectedTrimPrice) + parseInt($(this)[0].dataset.price);
        }


        $('.info_area.option_info').find('.info_text').children()[0].textContent = selectedTrimList.length;
		$('.info_area.option_info').find('.box_info').children().find('.num')[0].textContent = selectedTrimPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    })
*/
})