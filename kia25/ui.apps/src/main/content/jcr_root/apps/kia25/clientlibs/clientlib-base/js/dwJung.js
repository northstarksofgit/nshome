

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

    $(".build_car").length && buildcarInit();
	 toolBar();
	

});



var buildcarInit = function() {
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



function toolBar() {
	
	var MOBILE_WIDTH = 0;
	
    function c() {
		
		/*
		*  '.estimate_online_wrap' 가 navi에도 있고 build-00n에도 있어서 [0]번째로 설정함
		*/
	
        l = $("body").height() - $(window).height() - $(window).scrollTop();
        contentHeight = $(document).height() - $($('.estimate_online_wrap')[0]).scrollTop() - $($('.estimate_online_wrap')[0]).height(); 

        l < contentHeight ? a.addClass("normal") : a.removeClass("normal");
        k < MOBILE_WIDTH && (l < $("#footer").height() ? $(".go_top").css("margin-bottom", "0") : $(".go_top").css("margin-bottom", "50px"))
    }
    var a = $(".estimate_online_wrap .byoTotal")
      , e = $(".estimate_online_wrap .btn_totalCon_open")
      , g = $(".estimate_online_wrap .btn_totalCon_close");
    $(".estimate_online_wrap .slide_box a.box_a");
    $(".estimate_online_wrap .color_list a.color_a");
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
    var f = 800, l, k;
    $(window).resize(function() {
        if ($(window).height() != f || 800 != $(window).width())
            f = $(window).height(),
            mainLastHWidth = $(window).width(),
            document.body.style.overflow = "hidden",
            k = $(window).width(),
            $(window).height(),
            document.body.style.overflow = "",
            c()
    }).resize();
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
	* url의 prameter를 체크하기 위함
	* url 출력 예시 : ?step=3&car=ev6
	*/
	var pramUrl = window.location.search;
	var params = new URLSearchParams(pramUrl);
	const step = params.get('step');
	
	/*
	* 공통적으로 사용되는 url
	*/
	var totalUrl = window.location.href;
	var subUrl = totalUrl.substr(totalUrl.indexOf('/content'), totalUrl.length);
	
	/*
	* 이동할 url 셋팅
	*/
	var next = "";
	
	if(step == 2){
		/* trim 선택 단계 : build 002 page
		* 다음 단계에서 트림 출력
		*/
		
		subUrl = subUrl.replace('step=2','step=3').replace('002.html','003.html');
		next = "&trimCode="+naviTrimCode;
		
	}
	else if(step == 3){
		/* trim까지 출력된 단계 : build 003 page
		* 다음 단계에서 color까지 출력
		*/
		
		/*
		* 동적으로! 다른 컴포넌트에서 클릭하여 넘어온 값으로 바뀌게 해줘야하는 부분
		*/
		subUrl = subUrl.replace('step=3','step=4').replace('003.html','004.html');
		next = "&ext=ABP&int=IN_EV6_BL";
		
		
	}else if(step == 4){
		/* color까지 출력된 단계 : build 004 page
		*다음 단계에서 option까지 출력
		*/
		
		
		subUrl = subUrl.replace('step=4','step=5').replace('004.html','005.html');
		next = "&option="+selectedOptList.toString();
		
	}
	
	
	/*
	* 셋팅한 url로 이동
	*/		
		
	subUrl += next;
	console.log("subUrl: "+subUrl);
	
	location.href = subUrl;
	
	
}



