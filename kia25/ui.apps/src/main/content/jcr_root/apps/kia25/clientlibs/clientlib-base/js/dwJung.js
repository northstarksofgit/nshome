

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
	const trimCode = $('.naviDia').attr('trimCode');
	const intCode = $('.naviDia').attr('intCode');
	const extCode = $('.naviDia').attr('extCode');
	const optionCode = $('.naviDia').attr('optionCode');
	
	
	if(nextStep == "3"){
		
		nextPath += ".html?step="+nextStep+"&modelCode="+modelCode;
		nextPath += "&trimCode="+naviTrimCode;
		
	}else if(nextStep == "4"){
		
		nextPath += ".html?step="+nextStep+"&modelCode="+modelCode;
		nextPath += "&trimCode="+trimCode;
		nextPath += "&ext="+$('input[name=ext]').val()+"&int="+$('input[name=int]').val();
		nextPath = nextPath.replace('#', '');
		
	}else if(nextStep == "5"){
		
		nextPath += ".html?step="+nextStep+"&modelCode="+modelCode;
		nextPath += "&trimCode="+trimCode;
		nextPath += "&ext="+extCode+"&int="+intCode;
		nextPath += "&option="+selectedOptList.toString();
	}else{
		
		nextPath += ".html?step="+nextStep+"&modelCode="+modelCode;
		nextPath += "&trimCode="+trimCode;
		nextPath += "&ext="+extCode+"&int="+intCode;
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
	const trimCode = $('.naviDia').attr('trimCode');
	const intCode = $('.naviDia').attr('intCode');
	const extCode = $('.naviDia').attr('extCode');

	
	if(previStep == "1"){
		
		prePath += ".html?step="+previStep;
		
	}else if(previStep == "2"){
		
		prePath += ".html?step="+previStep+"&modelCode="+modelCode;
		
	}else if(previStep == "3"){
		
		prePath += ".html?step="+previStep+"&modelCode="+modelCode;
		prePath += "&trimCode="+trimCode;
	}else{
		
		prePath += ".html?step="+previStep+"&modelCode="+modelCode;
		prePath += "&trimCode="+trimCode;
		prePath += "&ext="+extCode+"&int="+intCode;
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
                        });

$('.onModal').on('click', function(){
                                return false;
                           });


$('.btn.reg.model').on('click', function(){ 
                                    $('.modal').css('display', 'block');
                                    $('.model.regBox').addClass('onModal');
                                })

$('.btn.update.model').on('click', function(){ 
                                    $('.modal').css('display', 'block');
                                    $('.model.modBox').addClass('onModal');
                                })

$('.btn.reg.cate').on('click', function(){ 
                                            $('.modal').css('display', 'block');
                                            $('.cate.regBox').addClass('onModal');
                                        })

$('.btn.update.cate').on('click', function(){ 
                                    $('.modal').css('display', 'block');
                                    $('.cate.modBox').addClass('onModal');
                                })



