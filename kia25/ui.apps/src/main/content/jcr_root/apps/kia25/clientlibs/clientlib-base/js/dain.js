//
//	// navi용 TrimCode 선언
//	var naviTrimCode = null;
//
//$(document).ready(function() {
//
//	// carGroupCode
//	var selectedCarGroupCode = null;
//
//	// transmissionCode
//	var selectedTransCode = null;
//	var radioTrans = $(".trans-radio");
//	
//	// trimCode
//	var liTrim = $(".trim_click");
//	
//	
//	if(liTrim.length > 0){
//		
//		// 페이지 로딩시 기본으로 선택된 carGroupCode 값
//		var defaultCarGroup = $(liTrim).parent()[0].dataset.car;
//	
//		// 페이지 로딩시 기본으로 선택된 transmissionCode 값
//		var defaultTrans = $(liTrim)[0].dataset.trans;
//		
//		// 페이지 로딩시 기본으로 선택되는 trim
//		trimShowHide(defaultCarGroup, defaultTrans);
//		
//		
////		$('.form_chk.carGroup').trigger('click');
////		$('.form_chk.transmission').trigger('click');
//		trimOn();
//		
//		// 해당하는 trim만 show / 나머지는 hide 해주는 함수 
//		function trimShowHide(selectedCarGroupCode, selectedTransCode){
//			
//			for(var i = 0; i < liTrim.length; i++){
//				
//				if($(liTrim[i]).parent()[0].dataset.car != selectedCarGroupCode || $(liTrim[i])[0].dataset.trans != selectedTransCode){
//					
//					liTrim[i].style.display = 'none';
//					
//				} else {
//					
//					liTrim[i].style.display = 'block';
//				}	
//			}
//		}
//		
//		
//		// 사용자가 선택한 carGroup 값
//		$('.form_chk.carGroup').click(function() {
//			
//			selectedCarGroupCode = $(this)[0].dataset.cargroupcode;
//			$('.carGroup-radio').removeClass('on');
//			$(this).find('label').addClass('on');
//			trimOn();
//			
//			trimShowHide(selectedCarGroupCode, selectedTransCode);
//
////			$('.form_chk.transmission').trigger('click');
//		})	
//		
//	
//		// 사용자가 선택한 transmission 값
//		$('.form_chk.transmission').click(function(){
//			
//			var carGroupList = $('.form_chk.carGroup');
//				
//			for(var i = 0; i < carGroupList.length; i++){
//				
//				if($(carGroupList[i]).children('label').hasClass('on')){
//					
//					selectedCarGroupCode = carGroupList[i].dataset.cargroupcode;
//				}
//			}	
//	
//			selectedTransCode = $(this)[0].dataset.transcode;
//					
//			radioTrans.removeClass('on');
//			$(this).children('label').addClass('on');
//			
//			for(var i = 0; i < radioTrans.length; i++){
//				
//				if(liTrim[i].style.display == 'block'){
//					
//					$(this).children('label').addClass('on');
//					
//				} else {
//					radioTrans.removeClass('on');
//				}
//				
//			}
//			
//			for(var i = 0; i < liTrim.length; i++){
//				
//				if($(liTrim[i]).parent()[0].dataset.car == selectedCarGroupCode){
//					
//					if($(this)[0].dataset.transcode == selectedTransCode){
//						
//						liTrim[i].style.display = 'block';
//						$(this).children('label').addClass('on');
//						trimShowHide(selectedCarGroupCode, selectedTransCode);
//						
//					} else {
//						liTrim[i].style.display = 'none';
//					}
//		
//				} else {
//					
//					liTrim[i].style.display = 'none';
//					
////					radioTrans.removeClass('on');
//					
//					trimShowHide(defaultCarGroup, selectedTransCode);
////					trimOn();
//				}
//			}
//			trimOn();
//		})
//			
//		
//		// 기본 trimList의 class를 on 시켜주는 함수	
//		function trimOn(){
//			
//			for(var i = 0; i < liTrim.length; i++){
//				
//				if(liTrim[i].style.display == 'block'){
//					
//					// 자바스크립트 방식으로 addClass
//					//liTrim[i].classList.add('on');
//
//					$(liTrim[i]).addClass('on');
//					addTrimToNavi();
//					
//					var trimClick = $('.trim_click');
//					
//					for (var i = 0; i < trimClick.length; i++){
//						
//						if($(trimClick[i]).hasClass('on')){
//							
//							naviTrimCode = $(trimClick[i]).find('#naviTrimCode').attr('value');
//							console.log(naviTrimCode);
//						}
//					}
//					break;
//					
//				}
//			}	
//		}
//		
//		
//		// trim 클릭시 선택한 trim을 on시켜주는 함수
//		$('.trim_click').on('click', function(e){
//			e.preventDefault();
//			
//			$('.trim_click').removeClass('on');
//			$(this).addClass('on');
//			addTrimToNavi();
//			
//			naviTrimCode = $(this).find('#naviTrimCode').attr('value');
//		})
//	}
//
//})
//



// navi용 TrimCode 선언
var naviTrimCode = null;
var selectedCarGroupCode = null;		//선택한 carGroup Key값
var selectedTransmissionCode = null;	//선택한 transmission Key값
var selectedTrimCode = null;			//선택한 trim Key값

$(document).ready(function() {
	initHasOnCarGroup();
	initHasOnTransmission();
	showHideCarGroup_TrimList();
	
	
	// carGroup Click 이벤트
	$('.form_chk.carGroup').on('click', function() {
		selectedCarGroupCode = $(this)[0].dataset.cargroupcode
		$('.carGroup-radio').removeClass('on');
		$(this).find('label').addClass('on');
		
		console.log($(this));
		showHideCarGroup_TrimList();
	})
	
	// transmission Click 이벤트
	$('.form_chk.transmission').on('click', function() {
		selectedTransmissionCode = $(this)[0].dataset.transcode
		$('.trans-radio').removeClass('on');
		$(this).find('label').addClass('on');
		
		showHideTransmission_TrimList();
	})
	
	// trim Click 이벤트
	$('.trim-list').on('click', function(e) {
		e.preventDefault();

		selectedTrimCode = $(this)[0].dataset.trim;
		$('.trim_click').removeClass('on');
		
		$(this).find('li').addClass('on');
	})
})


/**
 * 페이지 로딩 시 최초 1회만 실행
 * 초기 carGroup List 내에 on 클래스를 가지고 있는 데이터key 값으로 트림 리스트 노출
 */
function initHasOnCarGroup() {
	var carGroup = $('.form_chk.carGroup');
	for(var i=0; i<carGroup.length; i++){
		$(carGroup[i]).find('label').addClass('on');
		selectedCarGroupCode = $(carGroup[i])[0].dataset.cargroupcode;
		break;
	}
}

/**
 * 페이지 로딩 시 최초 1회만 실행
 * 초기 transmission List 내에 on 클래스를 가지고 있는 데이터key 값으로 트림 리스트 노출
 */
function initHasOnTransmission() {
	var trans = $('.form_chk.transmission');
	for(var i=0; i<trans.length; i++){
		$(trans[i]).find('label').addClass('on')
		selectedTransmissionCode = $(trans[i])[0].dataset.transcode;
		break;
	}
}

/**
 * CarGroup 클릭 시 carGroup Key 값에 대한 트림 값 display:block;
 */
function showHideCarGroup_TrimList() {
	$('.trim_click').removeClass('on');
	var trimList = $('.trim-list');
	var onFlag = true; //on 클래스 적용 여부 값, 반복문 내 if문 조건이 참일 경우 딱 한번만 사용됨
	
	for(var i=0; i<trimList.length; i++) {
		if(trimList[i].dataset.car == selectedCarGroupCode) {
			trimList[i].style.display = 'block';
			if(onFlag) {
				$(trimList[i]).find('.trim_click').addClass('on');			
				onFlag = false;
			}
		} else {
			trimList[i].style.display = 'none';
		}
	}
	
	showHideTransmission_TrimList();
}

/**
 * Transmission 클릭 시 Transmission Key 값에 대한 트림 값 display:block;
 */
function showHideTransmission_TrimList() {
	$('.trim_click').removeClass('on');
	var trimList = $('.trim-list');
	var onFlag = true; //on 클래스 적용 여부 값, 반복문 내 if문 조건이 참일 경우 딱 한번만 사용됨
	
	for(var i=0; i<trimList.length; i++) {
		
		if(trimList[i].dataset.car == selectedCarGroupCode && trimList[i].dataset.trans == selectedTransmissionCode) {
			trimList[i].style.display = 'block';
			if(onFlag) {
				$(trimList[i]).find('.trim_click').addClass('on');
				onFlag = false;
			}
		} else {
			trimList[i].style.display = 'none';
		}
	}
}


