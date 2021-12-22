
	// navi용 TrimCode 선언
	var naviTrimCode = null;
	
	// carGroup 코드 선언
	var selectedCarGroup = null;
	
	// transmission 코드 선언
	var selectedTrans = null;
	
	// trim 코드 선언
	var selectedTrim = null;
	
	
	// 기본 carGroupCode 정의하는 함수
	defaultOnCarGroup();
	
	// 기본 transmissionCode 정의하는 함수
	defaultOnTrans();
	
	// 기본 trim 정의하는 함수
	carGroupTrim();


	// cargroup 모델 클릭 이벤트 
	$('.form_chk.carGroup').on('click', function(){
		selectedCarGroup = $(this)[0].dataset.cargroupcode;
		$('.carGroup-radio').removeClass('on');
		$(this).find('label').addClass('on');

		carGroupTrim();
	})
	
	
	// carGroup에 따른 trimlist 조회하는 함수
	function carGroupTrim (){
		$('.trim_click').removeClass('on');
		
		var trimCarGroup = $('.trim-list');
		var onFlag = true;
		
		for(var i = 0; i < trimCarGroup.length; i++){
			
			if(selectedCarGroup == trimCarGroup[i].dataset.car && selectedTrans == trimCarGroup[i].dataset.trans){
				trimCarGroup[i].style.display = 'block';
				
				if(onFlag){
					$(trimCarGroup[i]).find('.trim_click').addClass('on');
					
					if($(trimCarGroup[i]).find('.trim_click').hasClass('on')){
						addTrimToNavi();
						naviTrimCode= trimCarGroup[i].dataset.trim;
					}
					
					onFlag = false;
				}
				
			} else {
				trimCarGroup[i].style.display = 'none';
			}
		}
		
		transTrim();
	}

	
	// 변속기 클릭 이벤트 
	$('.form_chk.transmission').on('click', function(){
		selectedTrans = $(this)[0].dataset.transcode;
		$('.trans-radio').removeClass('on');
		$(this).find('label').addClass('on');	
		
		transTrim();
	})

	
	// 변속기에 따른 trimlist를 조회하는 함수
	function transTrim(){
		$('.trim_click').removeClass('on');
		
		var trimTrans = $('.trim-list');
		var onFlag = true;
		
		for(var i = 0; i < trimTrans.length; i++){
			
			if(selectedTrans == trimTrans[i].dataset.trans && selectedCarGroup == trimTrans[i].dataset.car){
				trimTrans[i].style.display = 'block';
				
				if(onFlag){
					$(trimTrans[i]).find('.trim_click').addClass('on');
					
					if($(trimTrans[i]).find('.trim_click').hasClass('on')){
						addTrimToNavi();
						naviTrimCode= trimTrans[i].dataset.trim;
					}
					
					onFlag = false;
				}
				
			} else {
				trimTrans[i].style.display = 'none';
			}
		}
	}
	
	
	// trim 클릭 이벤트 
	$('.trim-list').on('click', function(e){
		e.preventDefault();
		
		selectedTrim = $(this)[0].dataset.trim;
		$('.trim_click').removeClass('on');
		$(this).find('li').addClass('on');
		
		addTrimToNavi();
		naviTrimCode = selectedTrim;
	})
	
	
	// 기본값 carGroupCode 
	function defaultOnCarGroup(){
		var carGroup = $('.form_chk.carGroup');
	
		for(var i = 0; i< carGroup.length; i++ ){
			if($(carGroup[i]).find('label').hasClass('on')){
				
				selectedCarGroup = $(carGroup)[i].dataset.cargroupcode;
			} 
		}
	}
	

	// 기본값 transmission 
	function defaultOnTrans (){
		var trans = $('.form_chk.transmission');
	
		for(var i = 0; i < trans.length; i++){
			if($(trans[i]).find('label').hasClass('on')){
				
				selectedTrans = $(trans)[i].dataset.transcode;
			}
		}
	}	



