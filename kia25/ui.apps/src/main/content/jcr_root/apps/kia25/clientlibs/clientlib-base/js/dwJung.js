

/*
* build 001 관련 js
*/



if($(".category").length>0){

	var category = $(".category").offset().top;
	var carTab = $(".estimate_online_wrap > .inner > div");
	var carMenu = $(".category .inbox a");
	
};




$(window).scroll(function() {
	
  	var windowTop = $(this).scrollTop();

	if($(".category").length>0){
			

	    (category <= windowTop) ? $(".category").addClass("fixed") : $(".category").removeClass("fixed");

		var carTab = $('.estimate_online_wrap > .inner > div');
		var carTabTop = new Array();	
		var carTabBottom = new Array();
		
		for(var i=0; i<carTab.length; i++){
			
			/* carTab top 위치 저장하기	
			* 첫 화면에서 첫번째 탭이 무조건 선택되어 있게 하기 위함
			*/
			i==0 ? carTabTop[i] = 0 : carTabTop[i] = $(carTab[i]).offset().top-29;
			
			/*
			* div의 bottom 위치 저장하기
			*/
			carTabBottom[i] = $(carTab[i]).offset().top-29 + carTab[i].offsetHeight;
		}


		for(var i=0; i<carTabTop.length; i++){
			
			/*
			* car tab에 on 적용
			*/
			(windowTop >= carTabTop[i] && windowTop <= carTabBottom[i]) ? $(carMenu[i]).addClass("on") : $(carMenu[i]).removeClass("on");

		}

	}


});






/*
* navi 관련 js
*/


$(document).ready(function() {

    $(".build_car").length && naviBarInit();
	 naviBar();

});



var naviBarInit = function() {
    var g = $(".build_car")
      , f = g.find(".byoTotal")
      , l = f.find(".totalBar \x3e a")
      , k = g.find(".totalCon")
      , h = g.find(".totalList");
    (function() {
	        var a = h.find("li.totalFinish").height();
	        h.find("li").css("height", a);
	        k.slideUp(0);
	        f.removeClass("on")
    	}
    )();
    (function() {
        function a() {
            h.each(function(a) {
                $(this).hasClass("c_on") && e.eq(a - 1).show()
            })
        }
        l.on("click", function(a) {
            a.stopPropagation();
            a.preventDefault();
            if (f.hasClass("on"))
                k.slideUp(400, function() {
                    f.removeClass("on");
                    $("body").css("overflow", "");
                    $(".totalCon").removeClass("over").css("height", "auto");
                   
                });
            else {
                f.addClass("on");
                k.slideDown(400);
                a = $(".totalCon_inner").height();
                var e = .8 * $(window).height()
                  , g = $(window).height();
                $("body").css("overflow", "hidden");
                $(".byoTotal").hasClass("normal") && $(window).scrollTop(0);
                a > g && $(".totalCon").addClass("over").animate({
                    height: e + "px"
                }, 400);
               
            }
        });

    })();
};



function naviBar() {
	
    function c() {
	
		
		/*
		*  '.estimate_online_wrap' 가 navi에도 있고 build-00n에도 있어서 [0]번째로 설정함
		* 위치값이 조금 안 맞는 경우가 있어서 l에 150px 추가해줌
		*/
	
        l = $("body").height() - $(window).height() - $(window).scrollTop();
        contentHeight = $(document).height() - $($('.estimate_online_wrap')[0]).scrollTop() - $($('.estimate_online_wrap')[0]).height(); 

        l + 150 < contentHeight ? a.addClass("normal") : a.removeClass("normal");

    }


    var a = $(".estimate_online_wrap .byoTotal")
      , e = $(".estimate_online_wrap .btn_totalCon_open")
      , g = $(".estimate_online_wrap .btn_totalCon_close");

    e.on("click", function(a) {
        a.preventDefault();
        $(".dimmed:eq(0)").toggle()
    });

    g.on("click", function(a) {
        a.preventDefault();
        $(".totalBar \x3e a").click();
        e.focus()
    });

    $(".dimmed").on("click", function(a) {
        $(".byoTotal ").hasClass("on") && ($(".totalBar \x3e a").click(),
        $(".dimmed:eq(0)").hide())
    });


    $(window).scroll(function(a) {
        c();
    })

};


function updateBuildOption() {
	
	if (0 < $(".build_option").length) {
		
		var c = $(".totalList .list03 .con");
		c.empty();

		for (var l = $(".build_option .box_l.on"), k = 0; k < l.length; k++) {
			var h = l[k]
			  , m = $(h).find("span.h").text();
			h = $(h).attr("data-price");
			h = makeComma(h);
			c.append("\x3cspan price\x3d" + h + '\x3e\x3cem class\x3d"conTitle"\x3e' + m + '\x3c/em\x3e\x3cspan class\x3d"conPrice"\x3e' + h+ "\x3cem\x3e\uc6d0\x3c/em\x3e\x3c/span\x3e\x3c/span\x3e");

		}
		
	}
	
}



/*
* navi의 total sum을 구하는 함수
*/
function totalSum(price){
	
	var sumPrice = price + parseInt($('.btn_totalCon_open > .price').attr('initprice'));
	
	$('.btn_totalCon_open > .price').text(makeComma(sumPrice));
	
}


/*
* navi의 total sum을 구한 뒤, , 를 찍어서 다시 보여주는 함수
*/
function makeComma(str) {

	 str = String(str);

	 return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');

 }



/*
* 사용자가 선택한 trim에 대한 내용이 navi에 할당됩니다.
*/
function addTrimToNavi(){
	

	var trimClick = $('.trim_click');

	for(var i = 0; i<trimClick.length; i++){
		
		if($(trimClick[i]).hasClass('on')){
			
			/*
			*  trim name 할당
			*/
			$('.list01 > .list_in > .con > .conTitle').text($(trimClick[i]).find('.h').text());

			/*
			* trim img 할당
			*/
			$('.list01 > .list_in > .con > .carImg > img').attr('src', $('.carGroupImg').attr('src'));


			/*
			*  trim price 할당 -- int 로
			*/
			var priceInt = parseInt($($('.trim-list')[i]).attr('data-price'));
			$('.list01 > .list_in > .con').attr('price', priceInt);

			/*
			*  trim price 할당 -- str로
			*/
			var priceStr = makeComma(priceInt);
			$('.list01 > .list_in > .con > .conPrice').html(priceStr+'<em>원<em>');

			/*
			* 합계 변경
			*/
			$('.btn_totalCon_open > .price').attr('initprice', 0);
			totalSum(priceInt);
			
		}
	
	}
	
}



/*
* 사용자가 선택한 color 정보가 navi에 반됩니다.
*/

function addColorToNavi(){


	var extPrice;
	var intPrice;

	var ext = $('.exteriorOption');

	for(var i=0; i<ext.length; i++){

		if($(ext[i]).hasClass('on')){

		
			/*
			* 외장재 가격 삽입
			*/
			extPrice = $(ext[i]).attr('price');
			$('.con_exterior').attr('price1', makeComma(extPrice));
			$('.con_exterior').find('.conPrice').html(makeComma(extPrice)+'<em>원</em>');
			
			/*
			* 외장재 이미지 삽입
			*/
			$('.con_exterior').find('.colorImg').attr('src', $(ext[i]).find('img').attr('src'));

			/*
			* 외장재 이름 삽입
			*/
			$('.con_exterior').find('.conTitle').text($(ext[i]).find('.color_info > .name').text());

		}

	}


	var interior = $('.interiorOption');

	for(var i=0; i<interior.length; i++){
		
		if($(interior[i]).hasClass('on')){
			
			
			/*
			* 내장재 가격 저장
			*/
			intPrice = $(interior[i]).attr('price');
			$('.con_interior').attr('price2', makeComma(intPrice));
			$('.con_interior').find('.conPrice').html(makeComma(intPrice)+'<em>원</em>');
			
			/*
			* 내장재 이미지 저장
			*/
			$('.con_interior').find('.colorImg').attr('src', $(interior[i]).find('img').attr('src'));
			
			/*
			* 내장재 이름 저장
			*/
			$('.con_interior').find('.conTitle').text($(interior[i]).find('.color_info > .name').text());

		}

	}
	
	/*
	* 합계 변경
	*/
	totalSum(parseInt(extPrice)+parseInt(intPrice));

}



/*
* 사용자가 선택한 구매 방법이 navi에 반영됨
*/
function addHowToBuy(){
	
	$('.list_in > p').remove();
	$('.con_pay').empty();
	
	/*
	* 현금 or 할부
	*/
	var payType = $('input[name=pay_sel_radio]:checked').attr('data-method');
	
	/*
	* 차량가 : 과세(no) 면세(yes)
	*/
	var pricefree = $('input[name=sample3]:checked').attr('pricefree');
	
	if(payType == 'cash'){
		
		/*
		* 현금일 경우
		*/
		$('.con_pay').append('<span><em class="tit">지불방법</em><em class="txt">현금구입</em></span>');
		
	}else{
		
		/*
		* 할부일 경우
		*/
		$('.con_pay').append('<span><em class="tit">지불방법</em><em class="txt">오토할부</em></span>');
		$('.con_pay').append('<span><em class="tit">할부</em><em class="txt">'+$('input[name=pay_date_radio]:checked').attr('data-term')+'개월</em></span>');
		$('.con_pay').append('<span><em class="tit">할부원금</em><em class="txt">'+makeComma(parseInt($('.initFee').val()+'0000'))+'원</em></span>');
	}
	
	if(pricefree == 'no'){
		
		/*
		* 과세일 경우
		*/
		$('.con_pay').append('<span><em class="tit">차량가</em><em class="txt">과세</em></span>');
		
	}else{
		
		/*
		* 면세일 경우
		*/
		$('.con_pay').append('<span><em class="tit">차량가</em><em class="txt">면세</em></span>');
	}
	
}



/*
* navi의 다음> 클릭시 다음 step으로 넘어가는 함수
* 필요한 파라미터: step, modelCode, trimCode, int, ext, option
*/
function nextStep(){
	
	/*
	* step = 2 --> trim Page
	* step = 3 --> color Page
	* step = 4 --> option page
	* step = 5 --> how to buy page
	*/
	
	/*
	* dialog한 data
	*/
	
	const nextStep = parseInt($('.naviDia').attr('currentStep'))+1;
	var nextPath = $('.naviDia').attr('nextPath');
	const modelCode = $('.naviDia').attr('modelCode');
	const modelYear = $('.naviDia').attr('modelYear');
	const trimCode = $('.naviDia').attr('trimCode');
	const intCode = $('.naviDia').attr('intCode');
	const extCode = $('.naviDia').attr('extCode');
	const optionCode = $('.naviDia').attr('optionCode');
	
	
	if(nextStep == "3"){
		
		nextPath += ".html?step="+nextStep+"&modelCode="+modelCode+"&modelYear="+modelYear;
		nextPath += "&trimCode="+naviTrimCode;
		
	}else if(nextStep == "4"){
		
		nextPath += ".html?step="+nextStep+"&modelCode="+modelCode+"&modelYear="+modelYear;
		nextPath += "&trimCode="+trimCode;
		nextPath += "&extColorCode="+$('input[name=ext]').val()+"&intColorCode="+$('input[name=int]').val();
		nextPath = nextPath.replace('#', '');
		
	}else if(nextStep == "5"){
		
		nextPath += ".html?step="+nextStep+"&modelCode="+modelCode+"&modelYear="+modelYear;
		nextPath += "&trimCode="+trimCode;
		nextPath += "&extColorCode="+extCode+"&intColorCode="+intCode;
		nextPath += "&option="+selectedOptList.toString();
	}else{
		
		nextPath += ".html?step="+nextStep+"&modelCode="+modelCode+"&modelYear="+modelYear;
		nextPath += "&trimCode="+trimCode;
		nextPath += "&extColorCode="+extCode+"&intColorCode="+intCode;
		nextPath += "&option="+optionCode;
	}
	
	
	location.href = nextPath;
	
}




/*
* navi의 <이전 클릭시 이전 step으로 넘어가는 함수
* 필요한 파라미터: step, modelCode, trimCode, int, ext, option
*/
function preStep(){
	
	const previStep = parseInt($('.naviDia').attr('currentStep'))-1;
	var prePath = $('.naviDia').attr('prePath');
	const modelCode = $('.naviDia').attr('modelCode');
	const modelYear = $('.naviDia').attr('modelYear');
	const trimCode = $('.naviDia').attr('trimCode');
	const intCode = $('.naviDia').attr('intCode');
	const extCode = $('.naviDia').attr('extCode');

	
	if(previStep == "1"){
		
		prePath += ".html?step="+previStep;
		
	}else if(previStep == "2"){
		
		prePath += ".html?step="+previStep+"&modelCode="+modelCode+"&modelYear="+modelYear;
		
	}else if(previStep == "3"){
		
		prePath += ".html?step="+previStep+"&modelCode="+modelCode+"&modelYear="+modelYear;
		prePath += "&trimCode="+trimCode;
	}else{
		
		prePath += ".html?step="+previStep+"&modelCode="+modelCode+"&modelYear="+modelYear;
		prePath += "&trimCode="+trimCode;
		prePath += "&extColorCode="+extCode+"&intColorCode="+intCode;
	}
	
	
	location.href = prePath;


}




/*
* crud page 관련 js
*/


$('input[type="checkbox"]').on('click', function(){ 
                                $(this).parents('tr').toggleClass('checkedTr');
                            });

$('.modal').on('click', function(){
                                $('.modal').css('display', 'none');
                                $('.modal').find('.onModal').removeClass('onModal');
								 return false;
                        });




$('.btn.reg.model').on('click', function(){ 
                                    $('.modal').css('display', 'block');
                                    $('.model.regBox').addClass('onModal');

									$('.onModal').on('click', function(){
                             	 			return false;
                           			});


                                });

$('.btn.update.model').on('click', function(){ 
                                    $('.modal').css('display', 'block');
                                    $('.model.modBox').addClass('onModal');
									
									$('.onModal').on('click', function(){
                             	 			return false;
                           			});


									$('.onModal > .categoryCode').val($(this).attr('categoryCode'));
									$('.onModal > .modelCode').val($(this).attr('modelCode'));
									$('.onModal > .modelYear').val($(this).attr('modelYear'));
									$('.onModal > .modelName').val($(this).attr('modelName'));

                                });

$('.btn.reg.cate').on('click', function(){ 
                                            $('.modal').css('display', 'block');
                                            $('.cate.regBox').addClass('onModal');

											$('.onModal').on('click', function(){
	                             	 			return false;
                           					});

                                        });

$('.btn.update.cate').on('click', function(){ 
									
									
                                    $('.modal').css('display', 'block');
                                    $('.cate.modBox').addClass('onModal');

									$('.onModal').on('click', function(){
                             	 			return false;
                           			});

									$('.onModal > .categoryCode').text($(this).attr('categoryCode'));
									$('.onModal > .categoryName').val($(this).attr('categoryName'));
                                });


/*
* 라디오 버튼 기본 체크
*/

if($('.radioCURD').length >0 ){
	
	var radio = $('.radioCURD');
	
	if($(radio[i]).attr('index') == 1){
		$(radio[i]).prop('checked', true);

	}
}



/*
* ajax 공통화 필요
*/

/*
* 카테고리 리스트 갱신
*/
function getCategoryList(){
	
	$.ajax({
	
		type: "POST", 
		url:"/services/category/list",
		dataType: "json",
		
		success : function(result){
			
			
			$('.categoryTbl > tbody > tr').empty();
			
			for(var i=0; i < result.length; i++){
				$('.categoryTbl > tbody').append(
				
				`
					<tr>
	                    <td><input type="checkbox" name="categoryChk" class="chk" categoryCode="${result[i].categoryCode}"></td>
	                    <td>${result[i].categoryCode}</td>
	                    <td>${result[i].categoryName}</td>
	                    <td><div class="btn update cate" categoryCode="${result[i].categoryCode}" categoryName="${result[i].categoryName}">수정</div></td>
	                </tr>
				
				`
				
				
				);

			}
			
			
		},
		
		error : function(a, b, c){
			console.log(a);
			console.log(b);
			console.log(c);
		}
	});
}







/*
* model list 갱신
*/
function getModelList(){
	
	$.ajax({
		
		type: "POST", 
		url:"/services/model/list",
		dataType: "json",
				
		data: {
			"categoryCode" : $('.radioCURD:checked').val()
		},
		
	
		success : function(result){

			$('.modelTbl > tbody').empty();
			
			for(var i=0; i < result.length; i++){
				$('.modelTbl > tbody').append(
												`
												<tr>
													<td> <input type="checkbox" name="modelChk" class="chk" modelCode="${result[i].modelCode}" modelYear="${result[i].modelYear}"> </td>
													<td>${result[i].categoryCode}</td>
													<td>${result[i].modelCode}</td>
													<td>${result[i].modelYear}</td>
													<td>${result[i].modelName}</td>
													<td><img style="height:100px;" src="${result[i].carImagePath}"></td>
													<td><div class="btn update model" categoryCode="${result[i].categoryCode}" modelCode="${result[i].modelCode}" modelYear="${result[i].modelYear}" modelName="${result[i].modelName}">수정</div></td>
												</tr>
												`
			)}
			
			$('input[type="checkbox"]').on('click', function(){ 
                                $(this).parents('tr').toggleClass('checkedTr');
                            });
			
			
		},
		
		error : function(a, b, c){
			console.log(a);
			console.log(b);
			console.log(c);
		}
	});

}


/*
* 라디오 버튼 on change 이벤트 => categort code에 맞는 model list 출력
*/
$('.radioCURD').change( function() {
	
	getModelList();
	
});




/*
* 카테고리 등록 이벤트
*/
$('.cate.regBox > .confirm').on('click',function(){

	
	if($('input[name=categoryRegCode]').val() == undefined
	  || $('input[name=categoryRegName]').val() == undefined){
		
		alert('항목을 모두 입력하여주세요');
		
		retrun;
	}
	

	$.ajax({
			
			type: "POST", 
			url:"/services/category/save",
			dataType: "text",
					
			data: {
				"categoryCode" : $('input[name=categoryRegCode]').val(),
				"categoryName" : $('input[name=categoryRegName]').val()
			},
			
		
			success : function(result){
				alert(result);
				getCategoryList();
			},
			
			error : function(a, b, c){
				console.log(a);
				console.log(b);
				console.log(c);
			}
		});
	
});


/*
* 카테고리 수정 이벤트
*/

$('.cate.modBox > .btn.confirm').on('click', function(){
	
	/*
	* 미구현
	*/
	
	$.ajax({
		
		type: "POST", 
		url:"/services/category/update",
		dataType: "text",
				
		data: {
			"categoryCode" : $(this).siblings('.categoryCode').text(),
			"categoryName" : $(this).siblings('.categoryName').val()
		},
		
		success : function(result){
			console.log(result);
			
		},
		
		error : function(a, b, c){
			console.log(a);
			console.log(b);
			console.log(c);
		}
	});
	
})



/*
* 카테고리 삭제 이벤트
*/
$('.btn.delete.cate').on('click', function(){
	
	var box = $('input[name=categoryChk]:checked');
	var chk = new Array();
	for(var i=0; i < box.length; i++){		
		chk[i] = $(box[i]).attr('categorycode');
	}
	
	$.ajax({
			
			type: "POST", 
			url:"/services/category/delete",
			dataType: "text",
					
			data: {
				"categoryCode" : chk.join()
			},
			
		
			success : function(result){
				alert(result);
				getCategoryList();
			},
			
			error : function(a, b, c){
				console.log(a);
				console.log(b);
				console.log(c);
			}
		});
	
})




/*
* 모델 삭제 이벤트
*/
$('.btn.delete.model').on('click', function(){
	
	var box = $('input[name=modelChk]:checked');
	var chk = [];
	
	for(var i=0; i < box.length; i++){
		var data = {
					modelCode: $(box[i]).attr('modelCode'),
					modelYear: $(box[i]).attr('modelYear')}		
		chk.push(data);
	}
	
	console.log(chk);
	
	$.ajax({
		
		type: "POST", 
		url:"/services/model/delete",
		dataType: "text",
		
     	traditional: true,
		data: {
			data: JSON.stringify(chk)	
		},
		
		success : function(result){
			
			alert(result);
			getModelList();
		},
		
		error : function(a, b, c){
			console.log(a);
			console.log(b);
			console.log(c);
		}
	});
	
	
	
});





/*
* 카테고리 필터
*/


function categoryFilter(){
	
	var orgin = $('.categoryTbl > tbody > tr');
	
	var selected = $('select[name=categoryCon] option:selected').val();
	var condition = $('input[name=categoryCon]').val();
	
	var compared = [];
	var result = [];
	
	
	for(var i=0; i<orgin.length; i++){
		
		var data = {
		categorycode: $(orgin[i]).find('.btn.update.cate').attr('categorycode'),
		categoryname: $(orgin[i]).find('.btn.update.cate').attr('categoryname')};
					
		compared.push(data);
		
	}
			
	
	if(selected == "categoryName"){
		result = compared.filter((category, index, target) => {return category.categoryname.includes(condition)});
		
	}else{	
		result = compared.filter((category, index, target) => {return category.categorycode.includes(condition)});
	}
	
	
	console.log(result);
	
}
