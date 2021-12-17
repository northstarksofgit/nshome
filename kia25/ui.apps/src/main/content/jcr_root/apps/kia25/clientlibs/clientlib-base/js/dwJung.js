

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
			
		//카테고리 fixed
	    if(category <= windowTop) {
		
	      $(".category").addClass("fixed");
		  

	    } else {
		
	      $(".category").removeClass("fixed");
	    }


		//carTab 가져오기
		var carTab = document.querySelectorAll(".estimate_online_wrap > .inner > div");
		
		//carTab top 위치 저장하기	
		var carTabTop = new Array();
		
		//div의 bottom 위치 저장하기
		var carTabBottom = new Array();
		
		for(var i=0; i<carTab.length; i++){
			//첫 화면에서 첫번째 탭이 무조건 선택되어 있게 하기 위함
			i==0 ? carTabTop[i] = 0 : carTabTop[i] = $(carTab[i]).offset().top-29;
			carTabBottom[i] = $(carTab[i]).offset().top-29 + carTab[i].offsetHeight;
		}


		for(var i=0; i<carTabTop.length; i++){
			
			if(windowTop >= carTabTop[i] && windowTop <= carTabBottom[i]){
				$(carMenu[i]).addClass("on");
			}else{
				$(carMenu[i]).removeClass("on");
			}

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
		*/
	
        l = $("body").height() - $(window).height() - $(window).scrollTop();
        contentHeight = $(document).height() - $($('.estimate_online_wrap')[0]).scrollTop() - $($('.estimate_online_wrap')[0]).height(); 

        l < contentHeight ? a.addClass("normal") : a.removeClass("normal");
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
        c()
    })
};


function updateBuildOption() {
	
	if (0 < $(".build_option").length) {
		var c = $(".totalList .list03 .con")
		  , g = 0
		  , f = 0;
		c.empty();

		for (var l = $(".build_option .box_l.on"), k = 0; k < l.length; k++) {
			var h = l[k]
			  , m = $(h).find("span.h").text();
			h = $(h).attr("data-price");
			h = makeComma(h);
			c.append("\x3cspan price\x3d" + h + '\x3e\x3cem class\x3d"conTitle"\x3e' + m + '\x3c/em\x3e\x3cspan class\x3d"conPrice"\x3e' + h+ "\x3cem\x3e\uc6d0\x3c/em\x3e\x3c/span\x3e\x3c/span\x3e");
			g++;
			f += parseInt(h)
		}
		
	}
	
}



/*
* navi의 total sum을 구하는 함수
*/
function totalSum(price){
	
	var initprice = parseInt($('.btn_totalCon_open > .price').attr('initprice'));
	var sumPrice = price + initprice;
	var sumPriceStr = makeComma(sumPrice);
	
	$('.btn_totalCon_open > .price').text(sumPriceStr);
	
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
	
	var len = $('.trim_click').length;

	for(var i = 0; i<len; i++){
		
		if($($('.trim_click')[i]).hasClass('on')){
			
			// trim name 할당
			$('.list01 > .list_in > .con > .conTitle').text($($('.trim_click')[i]).find('.h').text());

			// trim price 할당 -- int 로
			var priceInt = parseInt($($('.trim_click')[i]).attr('price'));
			$('.list01 > .list_in > .con').attr('price', priceInt);

			// trim price 할당 -- str로
			var priceStr = makeComma(priceInt);
			$('.list01 > .list_in > .con > .conPrice').html(priceStr+'<em>원<em>');

			//합계 변경
			$('.btn_totalCon_open > .price').attr('initprice', 0);
			totalSum(priceInt);
			
		}
	
	}
	
}



/*
* navi의 다음> 클릭시 다음 step으로 넘어가는 함수
*/
function nextStep(){
	
	/*
	* step = 2 --> trim Page로 이동
	* step = 3 --> color Page로 이동
	* step = 4 --> option page로 이동
	* step = 5 --> step 종료 페이지(임시)
	*/
	
	/*
	* 이전 단계의 url 파라미터
	* preUrl 출력 예시 :  modelCode=EV6
	*/
	var totalUrl = window.location.href;
	var preUrl = totalUrl.substr(totalUrl.indexOf('&modelCode='), totalUrl.length);
	
	
	const step = $('.naviNext').attr('step');
	var toGoUrl = $('.naviNext').attr('toGoUrl') + ".html?step="+step+preUrl;
	const trimCheck = $('.naviNext').attr('trimCheck');
	const colorCheck = $('.naviNext').attr('colorCheck');
	const optionCheck = $('.naviNext').attr('optionCheck');
	
	// 테스트용 코드 : 추후에 동적으로 바뀌어야하는 부분
	colorCode = "&ext="+null+"&int="+null;
	naviTrimCode = null;
	
	
	//이동할 url 생성
	/*
	* parameter 가 중복으로 붙지 않게 includes로 포함 여부를 확인한다.
	*/
	toGoUrl += (trimCheck == "true" && !toGoUrl.includes("trimCode=")) ? "&trimCode="+naviTrimCode : "";
	toGoUrl += (colorCheck == "true" && !toGoUrl.includes("ext=")) ? colorCode : "";
	toGoUrl += (optionCheck == "true" && !toGoUrl.includes("option=")) ? "&option="+selectedOptList.toString() : "";
	
	location.href = toGoUrl;
	
}


/*
* navi의 <이전 클릭시 이전 step으로 넘어가는 함수
*/
function preStep(){
	
	var totalUrl = window.location.href;
	
	/*
	* 이전 페이지로 이동할 때 step을 -1해주고
	* 마지막에 붙은 파라미터를 제거해준다.
	* 단, color의 경우 파라미터가 두 개이기 때문에 color의 파라미터가 포함되어 있는 경우 ext를 기준으로 url을 잘라주고
	* step이 5일 때는 color 파라미터가 붙어있어야 하기 때문에 step 파라미터를 체크해준다.
	*/
	var preParameter = totalUrl.substring(totalUrl.indexOf('?'), totalUrl.includes("ext=") && !totalUrl.includes("step=5") ? totalUrl.lastIndexOf('&ext=') : totalUrl.lastIndexOf('&'));
	var reverse = new URLSearchParams(preParameter);
	
	preParameter = preParameter.replace('step='+String(reverse.get('step')),'step='+String(reverse.get('step') - 1))

	var preUrl = $('.naviNext').attr('preUrl') + ".html"+preParameter;

	location.href = preUrl;

}

