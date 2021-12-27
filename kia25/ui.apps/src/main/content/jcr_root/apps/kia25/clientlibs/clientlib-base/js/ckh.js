$(document).ready(function() {
		$(".build_car").length && buildcarInit();
});

	$('input[name=ext]').attr('value', 'M4B');
	$('input[name=int]').attr('value', 'SW');

demonstratorInit = function() {
	var c = new OpenDimPop($("#colorLayer"))
		, a = new OpenDimPop($("#locationLayer"));
	$("ul.threeSection").on("click", "div.btnDivision \x3e a.salesIcon", function(e) {
		var g = $(this);
		g.hasClass("carcolor") ? (e.stopPropagation(),
			e.preventDefault(),
			c.open()) : g.hasClass("findview") && (e.stopPropagation(),
				e.preventDefault(),
				a.open())
	})
}
	, buildcarInit = function() {

		var g = $(".build_car")
			, f = g.find(".byoTotal")
			, l = f.find(".totalBar \x3e a")
			, k = g.find(".totalCon")
			, h = g.find(".totalList");

		(function() {
			function a() {
				h.each(function(a) {
					$(this).hasClass("c_on") && e.eq(a - 1).show()
				})
			}

			g.on("click", "div.car_list a.car_a", function(a) {
				g.find("div.car_list a.car_a").removeClass("on");
				g.find("div.car_list a.car_a").removeAttr("title");
				$(this).addClass("on");
				$(this).attr("title", "\uc120\ud0dd");
				$(".txt_hidden").text("\uc120\ud0dd\ub41c \ucc28\uc885 : " + a);
				location.href = $(this).attr("href")
			});
			 
			var m = g.find("ul.color_list");
			m.find("\x3e li").removeClass("on");
			m.on("click", "a.color_a", function(a) {
				a.stopPropagation();
				a.preventDefault();
				a = $(this);
				var c = a.closest("li");
				c.index();
				a.closest("ul.color_list").find("\x3e li").removeClass("on").find("a").removeAttr("title");
				c.addClass("on").find("a").attr("title", "\uc120\ud0dd");
				-1 < location.href.indexOf("NQJJ5ADD1-A") || -1 < location.href.indexOf("NQJJ5AFD1-A") || -1 < location.href.indexOf("NQJJ51D31-A") || -1 < location.href.indexOf("NQJJ51F31-A") ? $(".car_img img").attr("src", "/content/dam/kwcms/kr/ko/images/byo/car_nq_sportage_jug.png") : -1 < location.href.indexOf("CVJJ5VI31-A") ? $(".car_img img").attr("src", "/content/dam/kwcms/kr/ko/images/byo/car_ev6_standard.png") : $(".car_img img").attr("src", c.attr("img"));
				c.hasClass("exteriorOption") && ($(".interiorOption").removeClass("on"),
					$(".interiorOption").hide(),
					$("." + c.attr("color") + ":eq(0)").addClass("on"),
					$("." + c.attr("color")).show());

				$(".exteriorOption").click(function() {
					$('input[name=ext]').attr('value', $(this).attr("color"));
				});

				$(".interiorOption").click(function() {
					$('input[name=int]').attr('value', $(this).attr("color"));
				});
				
				addColorToNavi();

			});
			m.eq(0).find("li:first \x3e a").trigger("click");
			m.eq(1).find("li:first \x3e a").trigger("click")
		}
		)();

	};
	
	// Page6 Script
	$(function() {

		$(window).resize(function(){
		    var _winWid   = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
		    if (_winWid < 768){
		      $('.estimate_online_wrap .note_box').addClass('mo');
		    }else{
		      $('.estimate_online_wrap .note_box').removeClass('mo');
		      $('.estimate_online_wrap .note_box .bu_list').removeAttr('style');
		    }
		  });
		  //toggle
		  $('.build_estimate .btn_toggle').click(function(){

		    var item = $(this).closest('.box_inner').find('.ainArg');
		    if($(this).hasClass('on')){
		      $(this).removeClass('on');
		      item.removeClass('on').slideUp();
		      $(this).find('em.hidden').text('열기');
		    }else{
		      $(this).toggleClass('on');
		      if(item.hasClass('on')){
		        item.removeClass('on').slideUp();
		        $(this).find('em.hidden').text('열기');
		      }else {
		        item.addClass('on').slideDown();
		        $(this).find('em.hidden').text('닫기');
		      }
		    }
		  });
	
		  $('.note_box .btn_toggle').click(function(){
		    var item = $(this).next('.bu_list');
		    if($(this).hasClass('on')){
		      $(this).removeClass('on');
		      item.removeClass('on').slideUp();
		      $(this).find('em').text('열기');
		    }else{
		      $(this).toggleClass('on');
		      if(item.hasClass('on')){
		        item.removeClass('on').slideUp();
		        $(this).find('em').text('열기');
		      }else {
		        item.addClass('on').slideDown();
		        $(this).find('em').text('닫기');
		      }
		    }
		  });
	});
