//
//	// navi용 TrimCode 선언
//	var naviTrimCode = null;
//	
//$(document).ready(function() {
//	
//	// TrimCode
//	var selectedTrimCode = null;
//	var radioInitVal1 = $("input:radio[name=sample1]");
//	
//	// Transmission
//	var selectedTrans = null;
//	var radioInitVal2 = $("input:radio[name=sample2]");
//	
//	
//	// 페이지 로딩시 제일 먼저 실행해서 TrimShowHideEvent 함수에 선택한 trimCode 값 넘겨주는 함수
//	for(var i=0; i< radioInitVal1.length; i++){
//		
//		if(radioInitVal1[i].checked){
//			
//			var radioId = radioInitVal1[i].id;
//			selectedTrimCode = $('#'+radioId).parent()[0].dataset.trimcode;		
//			
//			TrimShowHideEvent(selectedTrimCode);
//		}
//	}
//	
//	// TransShowHideEvent 함수에 선택한 transmission 값 넘겨주는 함수
//	for(var i=0; i< radioInitVal2.length; i++){
//		
//		if(radioInitVal2[i].checked){
//			
//			var radioId = radioInitVal2[i].id;
//			selectedTrans = $('#'+radioId).val();		
//			
//			TransShowHideEvent(selectedTrans);
//		}
//	}
//	
//	
//	// 선택된 trim만 show / 나머지는 hide 처리하는 함수 
//	function TrimShowHideEvent(_trimCode){
//		
//		var trimlist = $('.trim-list');
//		
//		for(var i = 0; i < trimlist.length; i++){
//			
//			if(trimlist[i].dataset.car != _trimCode){
//				
//				trimlist[i].style.display = 'none';
//				
//			} else {
//				
//				trimlist[i].style.display = 'block';
//				
//				var classAdd = $(trimlist[i]).find('li')[0];
//				
//				// carGroup에 속한 첫번째 trim을 on 처리
//				if ($(trimlist[i]).find('li')[0].dataset.seq == 1){
//					$(classAdd).addClass('on');
//					
//					addTrimToNavi();
//					
//					naviTrimCode = $(trimlist[i]).find('li')[0].dataset.trim;
//				}
//			}
//		}
//	}
//	
//	
//	// transmission에 따라 선택된 trim만 show / 나머지는 hide 처리하는 함수 
//	function TransShowHideEvent(_trans){
//		
//		var trimClick = $('.trim_click');
//		
//		for(var i = 0; i < trimClick.length; i++){
//			
//			if(trimClick[i].dataset.trans != _trans){
//				
//				trimClick[i].style.display = 'none';
//				
//			} else {
//				
//				trimClick[i].style.display = 'block';
//				
//				var classAdd = $(trimClick[i])[0];
//				
//				// transmission에 속한 첫번째 trim을 on 처리
//				if (classAdd.dataset.seq == 1){
//					$(classAdd).addClass('on');
//					
//					addTrimToNavi();
//					
//					naviTrimCode = classAdd.dataset.trim;
//				}
//			}
//		}
//	}
//	
//	
//	// carGroup 클릭시 실행되는 함수
//	// -> 나머지 trim은 remove on 처리
//    $('.form_chk.carGroup').click(function() {
//	
//		$('.trim_click').removeClass('on');
//		selectedTrimCode = $(this)[0].dataset.trimcode;
//		
//		TrimShowHideEvent(selectedTrimCode);
//		
//		var aa = $('.trim_click');
//		
//		for(var i = 0; i < aa.length; i++){
//			
//			if($(aa[i]).hasClass('on')){
//				naviTrimCode = aa[i].dataset.trim;
//			}
//		}
//		
//	})
//	
//	
//	// trim 클릭시 실행되는 함수
//	$('.trim_click').on('click', function(e){
//		e.preventDefault();
//		
//		$('.trim_click').removeClass('on');
//		$(this).addClass('on');
//		
//		addTrimToNavi();
//		
//		naviTrimCode = $(this).find('#naviTrimCode').val();
//		
//	})
//	
//	
//	// 변속기 클릭시 변속기에 따른 trimlist 보여주는 함수
//	$('.form_chk.transmission').on('click', function(){
//		
//		var selectedTransVal = $(this).find('input:radio[name=sample2]').val();
//		
//		var trimClick = $('.trim_click');
//		
//		for(var i=0; i < trimClick.length; i++){
//			
//			var transVal = trimClick[i].dataset.trans;
//			
//			if(transVal == selectedTransVal){
//				
//				trimClick[i].style.display = 'block';
//				
//			} else {
//				
//				trimClick[i].style.display = 'none';
//			}
//		}
//		
//	})
//	
//
//})



	// navi용 TrimCode 선언
	var naviTrimCode = null;

$(document).ready(function() {

	// carGroupCode
	var selectedCarGroupCode = null;
	var radioCarGroup = $("input:radio[name=sample1]");

	// transmissionCode
	var selectedTransCode = null;
	var radioTrans = $("input:radio[name=sample2]");
	
	// trimCode
	var selectedTrimCode = null;
	var liTrim = $(".trim_click");
	
	// 기본으로 선택된 carGroupCode 값
	for(var i=0; i < radioCarGroup.length; i++){
		
		if(radioCarGroup[i].checked){
			
			carGroupId = radioCarGroup[i].id;
			selectedCarGroupCode = $("#" + carGroupId).val();
			console.log(selectedCarGroupCode);	
		}
		
	}
	
	// carGroup 선택시 담기는 carGroup 값
	$('.form_chk.carGroup').click(function() {
		
		selectedCarGroupCode = $(this)[0].dataset.cargroupcode;
		console.log(selectedCarGroupCode);
		
	})	
	
	
	for(var i = 0; i < radioTrans.length; i++){
		
		
		
	}
	




})








