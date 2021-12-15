var selectedOptList = []; // navi Component 연동을 위해 전역변수 화
$(document).ready(function() {
	var selectedOptPrice = 0;
    $('.option-list').click(function(e) {
        e.preventDefault()

        $(this).hasClass("on") ? $(this).removeClass("on") : $(this).addClass("on")


        if(selectedOptList.indexOf($(this)[0].dataset.opt) > -1) {
			var idx = selectedOptList.indexOf($(this)[0].dataset.opt);
            delete selectedOptList[idx];

			selectedOptPrice = parseInt(selectedOptPrice) - parseInt($(this)[0].dataset.price);
			selectedOptList = selectedOptList.filter(Boolean);

        } else {
        	selectedOptList.push($(this)[0].dataset.opt);
			selectedOptPrice = parseInt(selectedOptPrice) + parseInt($(this)[0].dataset.price);
        }

        $('.info_area.option_info').find('.info_text').children()[0].textContent = selectedOptList.length;
		$('.info_area.option_info').find('.box_info').children().find('.num')[0].textContent = selectedOptPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    })
})