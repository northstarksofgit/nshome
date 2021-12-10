

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
			carTabTop[i] = $(carTab[i]).offset().top;
			carTabBottom[i] = $(carTab[i]).offset().top + carTab[i].offsetHeight;
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
        c()
    });
    $(window).load(function() {
        sTop = Math.round($(window).scrollTop());
        c()
    });
    $(window).resize(function() {
        sTop = Math.round($(window).scrollTop());
        c()
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
                c()
            }
        });

    }
    )();

};








$(document).ready(function() {
	
	

	//가격에 , 표시
	if($('.conPrice').length>0){
	
		var prices = $('.conPrice');
		
		$('.price').text($('.price').text().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
		
		for(var i = 0; i<prices.length; i++){
			var price = ($('.conPrice')[i]).innerText.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			($('.conPrice')[i]).innerText = price;
		}
	};
	
	
	
    toolBar();
});







function toolBar() {
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







