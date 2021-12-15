
	// navi
	var naviTrimCode = null;
	
$(document).ready(function() {
	
	var selectedTrimCode = null;
	var radioInitVal = $("input:radio[name=sample1]");
	
	loadTrim();
	
	for(var i=0; i< radioInitVal.length; i++){
		
		if(radioInitVal[i].checked){
			
			var radioId = radioInitVal[i].id;
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
	
	
    $('.form_chk.carGroup').click(function() {
	
		$('.trim_click').removeClass('on');
		selectedTrimCode = $(this)[0].dataset.trimcode;
		
		showHideEvent(selectedTrimCode);
		
		loadTrim();
		
	})
	
	function loadTrim(){
		
		var aa = $('.trim_click')
		console.log(aa);
		
		for(var i = 0; i < aa.length; i++){
			
			if($(aa[i]).hasClass('on')){
				naviTrimCode = aa[i].dataset.trim;
				console.log(naviTrimCode);
			}
		}
	}
	
	
	$('.trim_click').on('click', function(e){
		e.preventDefault();
		
		$('.trim_click').removeClass('on');
		$(this).addClass('on');
		
		naviTrimCode = $(this).find('#naviTrimCode').val();
		
	})
	


})