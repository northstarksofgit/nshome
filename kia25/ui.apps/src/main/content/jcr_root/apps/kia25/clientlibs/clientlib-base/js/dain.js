$(document).ready(function() {
	
	var selectedTrimCode = null;
	var radioIntVal = $("input:radio[name=sample1]");
	
	for(var i=0; i< radioIntVal.length; i++){
		
		if(radioIntVal[i].checked){
			
			var radioId = radioIntVal[i].id;
			selectedTrimCode = $('#'+radioId).parent()[0].dataset.trimcode;		
			
			showHideEvent(selectedTrimCode);
		}
	}
	
	
	function showHideEvent(_trimCode){
		
		var trimlist = $('.trim-list');
		
		for(var i = 0; i < trimlist.length; i++){
			
			if(trimlist[i].dataset.car != _trimCode){
				trimlist[i].style.display = 'none';
			} else {
				trimlist[i].style.display = 'block';
				
				var classAdd = $(trimlist[i]).find('li')[0];
				
				if ($(trimlist[i]).find('li')[0].dataset.seq == 1){
					
					$(classAdd).addClass('on');
				}
			}
		}
	}
	
	
	$('.form_chk.carGroup').trigger('click');
	
    $('.form_chk.carGroup').click(function() {
	
		$('.trim_click').removeClass('on');
		selectedTrimCode = $(this)[0].dataset.trimcode;
		
		showHideEvent(selectedTrimCode);
		
	})
	
	$('.trim_click').on('click', function(e){
		e.preventDefault();
		
		$('.trim_click').removeClass('on');
		$(this).addClass('on');
	})


})