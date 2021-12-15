
    buildcarInit = function() {

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

        g.on("click", "div.car_list a.car_a", function(a) {
            a.stopPropagation();
            a.preventDefault();
            g.find("div.car_list a.car_a").removeClass("on");
            g.find("div.car_list a.car_a").removeAttr("title");
            $(this).addClass("on");
            $(this).attr("title", "\uc120\ud0dd");
            a = $(this).find(".car_name").text();
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
            updateBuildColor()
        });
        m.eq(0).find("li:first \x3e a").trigger("click");
        m.eq(1).find("li:first \x3e a").trigger("click")
    }
    )();
}


