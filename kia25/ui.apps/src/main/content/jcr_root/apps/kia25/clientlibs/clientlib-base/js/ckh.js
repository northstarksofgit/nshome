$(document).ready(function() {

	$param = $(location).attr('pathname'); // 옵션 선택화면에서 충돌 됨
	if ($param == '/content/kia25/us/en/page03.html') {
		$(".build_car").length && buildcarInit();
	}
});

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
	, finddealerInit = function() { }
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
			g.on("click", "div.slide_box a.box_a", function(a) {
				var c = $(this).closest("li.box_l");
				if ($(this).closest("div.slide_box").hasClass("multi")) {
					if (c.hasClass("on")) {
						c.removeClass("on").find("a").removeAttr("title")
					} else {
						var f = !0, h = {}, k, l = !1, b = $("div", this).attr("option_and_tuon"), m = $("span[class\x3d'h']", this).text(), B = !1;

						if (c.attr("conflict") || c.attr("opt")) {
							if (c.attr("conflict")) {
								var z = c.attr("conflict").split("\x26")
									, A = $("div.slide_box li.box_l.on[opt]");
								for (a = 0; a < A.length; a++)
									for (var D = $(A[a]).attr("opt"), u = 0; u < z.length; u++)
										if (D == z[u]) {
											var x = h[z[u]];
											f = !1;
											break
										}
								A = $("div.slide_box li.box_l.on[tuon]");
								for (a = 0; a < A.length; a++)
									for (D = $(A[a]).attr("tuon"),
										u = 0; u < z.length; u++)
										if (D == z[u]) {
											x = h[z[u]];
											f = !1;
											break
										}
							}
							if (f)
								for (z = c.attr("opt"),
									A = $("div.slide_box li.box_l.on[conflict]"),
									a = 0; a < A.length; a++)
									for (D = $(A[a]).attr("conflict").split("\x26"),
										u = 0; u < D.length; u++) {
										var ba = D[u];
										if (z == ba) {
											x = h[ba];
											f = !1;
											break
										}
									}
						}
						f ? c.addClass("on").find("a").attr("title", "\uc120\ud0dd") : -1 < location.href.indexOf("EDE-DEA") ? $(".box_u:eq(0) .box_l.on").each(function() {
							"htp" == b.toLowerCase() ? "sli" == $(this).attr("opt").toLowerCase() && (x = h.SLI,
								fnopenAlertPop("\uc120\ud0dd\ud558\uc2e0 (" + m + ")\uc635\uc158\uacfc (" + x + ")\uc635\uc158\uc740 \uc911\ubcf5\uc73c\ub85c \uc120\ud0dd\ud558\uc2e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", !1)) : "sli" == b.toLowerCase() ? "htp" == $(this).attr("opt").toLowerCase() && (x = h.HTP,
									fnopenAlertPop("\uc120\ud0dd\ud558\uc2e0 (" + m + ")\uc635\uc158\uacfc (" + x + ")\uc635\uc158\uc740 \uc911\ubcf5\uc73c\ub85c \uc120\ud0dd\ud558\uc2e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", !1)) : fnopenAlertPop("\uc120\ud0dd\ud558\uc2e0 \uc635\uc158\uacfc\n(" + x + ")\n\uc635\uc158\uc740 \uc911\ubcf5 \ub429\ub2c8\ub2e4.", !1)
						}) : fnopenAlertPop("\uc120\ud0dd\ud558\uc2e0 \uc635\uc158\uacfc\n(" + x + ")\n\uc635\uc158\uc740 \uc911\ubcf5 \ub429\ub2c8\ub2e4.", !1)
					}

				} else
					c.hasClass("on") ? c.removeClass("on").find("a").removeAttr("title") : (g.find("div.slide_box a.box_a").closest("li.box_l").removeClass("on").find("a").removeAttr("title"),
						c.addClass("on").find("a").attr("title", "\uc120\ud0dd"),
						$(".car_img img").attr("src", c.attr("img")),
						updateBuildTrim(c))
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
