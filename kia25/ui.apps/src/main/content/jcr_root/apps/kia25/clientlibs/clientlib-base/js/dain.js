
	// navi용 TrimCode 선언
	var naviTrimCode = null;

$(document).ready(function() {

	// carGroupCode
	var selectedCarGroupCode = null;
	var radioCarGroup = $(".carGroup-radio");

	// transmissionCode
	var selectedTransCode = null;
	var radioTrans = $(".trans-radio");
	
	// trimCode
	var selectedTrimCode = null;
	var liTrim = $(".trim_click");
	
	
	
	// 페이지 로딩시 기본으로 선택된 carGroupCode 값
	if(liTrim.length > 0){
		
		var defaultCarGroup = $(liTrim).parent()[0].dataset.car;
	
		// 페이지 로딩시 기본으로 선택된 transmissionCode 값
		var defaultTrans = $(liTrim)[0].dataset.trans;
		
		// 페이지 로딩시 기본으로 선택되는 trim
		trimShowHide(defaultCarGroup, defaultTrans);
		
		
		
		// 해당하는 trim만 show / 나머지는 hide 해주는 함수 
		function trimShowHide(selectedCarGroupCode, selectedTransCode){
			
			for(var i = 0; i < liTrim.length; i++){
				
				if($(liTrim[i]).parent()[0].dataset.car != selectedCarGroupCode || $(liTrim[i])[0].dataset.trans != selectedTransCode){
					
					liTrim[i].style.display = 'none';
					
				} else {
					
					liTrim[i].style.display = 'block';
					
					if($(liTrim[i])[0].dataset.seq == 1){
						$(liTrim[i]).addClass('on');
					}
					
				}	
			}
		}
		
		
		
		// 사용자가 선택한 carGroup 값
		$('.form_chk.carGroup').click(function() {
			
			selectedCarGroupCode = $(this)[0].dataset.cargroupcode;
			$('.carGroup-radio').removeClass('on');
			$(this).find('label').addClass('on');
			
			trimShowHide(selectedCarGroupCode, defaultTrans);
		})	
		
	
		
		
		// 사용자가 선택한 transmission 값
		$('.form_chk.transmission').click(function(){
			
	//		selectedCarGroupCode = $('.form_chk.carGroup').children('label').dataset.cargroupcode;
			var carGroupList = $('.form_chk.carGroup');
				
			for(var i = 0; i < carGroupList.length; i++){
				
				if($(carGroupList[i]).children('label').hasClass('on')){
					
					selectedCarGroupCode = carGroupList[i].dataset.cargroupcode;
				}
			}	
	
			selectedTransCode = $(this)[0].dataset.transcode;
					
			$('.trans-radio').removeClass('on');
			$(this).find('label').addClass('on');
			
			for(var i = 0; i < liTrim.length; i++){
				
	//			console.log(carGroupList[i].dataset.cargroupcode);
	//			console.log($(this)[i].dataset.transcode);
				
				if(carGroupList[i].dataset.cargroupcode == selectedCarGroupCode){
					
					if($(this)[0].dataset.transcode == selectedTransCode){
						
						liTrim[i].style.display = 'block';
						trimShowHide(selectedCarGroupCode, selectedTransCode);
						
					} else {
						liTrim[i].style.display = 'none';
					}
		
				} else {
					
					liTrim[i].style.display = 'none';
					trimShowHide(defaultCarGroup, selectedTransCode);
				}
			}
		})
			
			
		
		
		//trim 클릭시 실행되는 함수
		$('.trim_click').on('click', function(e){
			e.preventDefault();
			
			$('.trim_click').removeClass('on');
			$(this).addClass('on');
			
			naviTrimCode = $(this).find('#naviTrimCode').val();
			
		})
	
	}

})

