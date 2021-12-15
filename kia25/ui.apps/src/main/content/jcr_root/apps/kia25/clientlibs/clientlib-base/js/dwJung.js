

/*
* build 001 관련 js
*/



if($(".category").length>0){
	var category = $(".category").offset().top;
	var carTab = $(".estimate_online_wrap > .inner > div");
	var carMenu = $(".category .inbox a");
}


$(window).scroll(function() {
	
  	var window = $(this).scrollTop();

	if($(".category").length>0){
			
		//카테고리 fixed
	    if(category <= window) {
		
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
			
			if(window >= carTabTop[i] && window <= carTabBottom[i]){
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
    $(".sales_offers").length && offersInit();
    $(".sales_demonstrator").length && demonstratorInit();
    $(".branchList");
    $(".build_car").length && buildcarInit();
    $(".driving_center").length && drivingCenterInit();
    $(".catalog_price").length && shoppingtoolsCategoryInit();
    $(".gateCon").length && shoppingToolsGateInit();
    $(".btnActMove").length && showBtnActMove();



});


var showBtnActMove = function() {
    $(window).scroll(function() {
        sTop = Math.round($(window).scrollTop());
        
    });
    $(window).load(function() {
        sTop = Math.round($(window).scrollTop());
       
    });
    $(window).resize(function() {
        sTop = Math.round($(window).scrollTop());
       
    });
    var c = function() {
        $(".btnActMove").each(function(a) {
            sTop >= $(".btnActMove:eq(" + a + ")").offset().top - $(window).height() && sTop <= $(".btnActMove:eq(" + a + ")").offset().top && ($(".btnActMove:eq(" + a + ")").hasClass("on") || $(".btnActMove:eq(" + a + ")").addClass("on"))
        })
    }
}

  , finddealerInit = function() {}
  , buildcarSlider = function() {
    var c = $(".build_car");
    c.find(".byoTotal").find(".totalBar \x3e a");
    c.find(".totalCon");
    c.find(".totalList");
    var a = function(a) {
        this.self = this;
        this.target = a;
        this.init()
    };
    a.prototype = {
        init: function() {
            this.self.initLayout();
            this.self.addEvent()
        },
        initLayout: function() {
            this.self.item = this.target.find(".box_l");
            this.self.control = this.self.target.siblings(".slide_ctrl")
        },
        addEvent: function() {
            var a = this.self, c = a.item, f, l, k;
            a.control.find(".prev").off();
            a.control.find(".next").off();
            $(window).off("resize.multislider");
            a.control.find(".prev").on("click", function(a) {
                0 < l && (c.filter(":hidden").slice(-f).show(),
                $(window).triggerHandler("resize.multislider"))
            });
            a.control.find(".next").on("click", function(a) {
                l < k && (c.not(":hidden").slice(0, f).hide(),
                $(window).triggerHandler("resize.multislider"))
            });
            $(window).on("resize.multislider", function(e) {
                e = $(document).width();
                f = 1024 < e ? 5 : 767 > e ? 3 : 4;
                l = Math.ceil(c.not(":hidden").filter(":first").index() / f) + 1;
                k = Math.ceil(c.length / f);
                a.control.find("span.page").text(l + "/" + k)
            }).triggerHandler("resize.multislider")
        }
    };
    $(".slide_box").each(function() {
        "none" != $(this).css("display") && new a($(this))
    })
}
  , buildcarInit = function() {
    function c() {

    }

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
                    c()
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

    }
    )();

};








$(document).ready(function() {
	
	
    toolBar();
});







function toolBar() {
	
	var MOBILE_WIDTH = 0;
	
    function c() {
        l = $("body").height() - $(window).height() - $(window).scrollTop();
        l < $("#footer").height() ? a.addClass("normal") : a.removeClass("normal");
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





/*
* navi의 total sum을 구하는 함수
*/
function totalSum(price){
	
	var initprice = parseInt($('.btn_totalCon_open > .price').attr('initprice'));
	var sumPrice = price + initprice;
	var sumPriceStr = makeComma(sumPrice);
	
	$('.btn_totalCon_open > .price').text(sumPriceStr);
	$('.btn_totalCon_open > .price').attr('initprice', sumPrice);
	
}


/*
* navi의 total sum을 구한 뒤, , 를 찍어서 다시 보여주는 함수
*/
function makeComma(str) {

	 str = String(str);

	 return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');

 }








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
		
		subUrl = subUrl.replace('step=2','step=3').replace('build-your-car-002.html','build-your-car-003.html');
		next = "&trimCode="+naviTrimCode;
		
	}
	else if(step == 3){
		/* trim까지 출력된 단계 : build 003 page
		* 다음 단계에서 color까지 출력
		*/
		
		/*
		* 동적으로! 다른 컴포넌트에서 클릭하여 넘어온 값으로 바뀌게 해줘야하는 부분
		*/
		subUrl = subUrl.replace('step=3','step=4').replace('build-your-car-003.html','build-your-car-004.html');
		next = "&ext=ABP&int=IN_EV6_BL";
		
		
	}else if(step == 4){
		/* color까지 출력된 단계 : build 004 page
		*다음 단계에서 option까지 출력
		*/
		
		
		subUrl = subUrl.replace('step=4','step=5').replace('build-your-car-004.html','build-your-car-005.html');
		next = "&option="+selectedOptList.toString();
		
	}
	
	
	/*
	* 셋팅한 url로 이동
	*/		
		
	subUrl += next;
	console.log("subUrl: "+subUrl);
	
	//location.href = subUrl;
	
	
}


