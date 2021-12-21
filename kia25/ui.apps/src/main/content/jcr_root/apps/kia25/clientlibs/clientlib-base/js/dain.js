
	// navi용 TrimCode 선언
	var naviTrimCode = null;

$(document).ready(function() {

	// carGroupCode
	var selectedCarGroupCode = null;

	// transmissionCode
	var selectedTransCode = null;
	var radioTrans = $(".trans-radio");
	
	// trimCode
	var liTrim = $(".trim_click");
	
	
	if(liTrim.length > 0){
		
		// 페이지 로딩시 기본으로 선택된 carGroupCode 값
		var defaultCarGroup = $(liTrim).parent()[0].dataset.car;
	
		// 페이지 로딩시 기본으로 선택된 transmissionCode 값
		var defaultTrans = $(liTrim)[0].dataset.trans;
		
		// 페이지 로딩시 기본으로 선택되는 trim
		trimShowHide(defaultCarGroup, defaultTrans);
		
		
//		$('.form_chk.carGroup').trigger('click');
//		$('.form_chk.transmission').trigger('click');
		trimOn();
		
		// 해당하는 trim만 show / 나머지는 hide 해주는 함수 
		function trimShowHide(selectedCarGroupCode, selectedTransCode){
			
			for(var i = 0; i < liTrim.length; i++){
				
				if($(liTrim[i]).parent()[0].dataset.car != selectedCarGroupCode || $(liTrim[i])[0].dataset.trans != selectedTransCode){
					
					liTrim[i].style.display = 'none';
					
				} else {
					
					liTrim[i].style.display = 'block';
				}	
			}
		}
		
		
		// 사용자가 선택한 carGroup 값
		$('.form_chk.carGroup').click(function() {
			
			selectedCarGroupCode = $(this)[0].dataset.cargroupcode;
			$('.carGroup-radio').removeClass('on');
			$(this).find('label').addClass('on');
			trimOn();
			
			trimShowHide(selectedCarGroupCode, defaultTrans);
			
//			$('.form_chk.transmission').trigger('click');
		})	
		
	
		// 사용자가 선택한 transmission 값
		$('.form_chk.transmission').click(function(){
			
			var carGroupList = $('.form_chk.carGroup');
				
			for(var i = 0; i < carGroupList.length; i++){
				
				if($(carGroupList[i]).children('label').hasClass('on')){
					
					selectedCarGroupCode = carGroupList[i].dataset.cargroupcode;
				}
			}	
	
			selectedTransCode = $(this)[0].dataset.transcode;
					
			radioTrans.removeClass('on');
			$(this).children('label').addClass('on');
			
			for(var i = 0; i < radioTrans.length; i++){
				
				if(liTrim[i].style.display == 'block'){
					
					$(this).children('label').addClass('on');
					
				} else {
					radioTrans.removeClass('on');
				}
				
			}
			
			for(var i = 0; i < liTrim.length; i++){
				
				if($(liTrim[i]).parent()[0].dataset.car == selectedCarGroupCode){
					
					if($(this)[0].dataset.transcode == selectedTransCode){
						
						liTrim[i].style.display = 'block';
						$(this).children('label').addClass('on');
						trimShowHide(selectedCarGroupCode, selectedTransCode);
						
					} else {
						liTrim[i].style.display = 'none';
					}
		
				} else {
					
					liTrim[i].style.display = 'none';
					
//					radioTrans.removeClass('on');
					
					trimShowHide(defaultCarGroup, selectedTransCode);
//					trimOn();
				}
			}
			trimOn();
		})
			
		
		// 기본 trimList의 class를 on 시켜주는 함수	
		function trimOn(){
			
			for(var i = 0; i < liTrim.length; i++){
				
				if(liTrim[i].style.display == 'block'){
					
					// 자바스크립트 방식으로 addClass
					//liTrim[i].classList.add('on');

					$(liTrim[i]).addClass('on');
					addTrimToNavi();
					break;
				}
			}	
			naviTrimCode = $(this).find('#naviTrimCode').val();
		}
		
		
		// trim 클릭시 선택한 trim을 on시켜주는 함수
		$('.trim_click').on('click', function(e){
			e.preventDefault();
			
			$('.trim_click').removeClass('on');
			$(this).addClass('on');
			addTrimToNavi();
			
			naviTrimCode = $(this).find('#naviTrimCode').val();
		})
	}

})

