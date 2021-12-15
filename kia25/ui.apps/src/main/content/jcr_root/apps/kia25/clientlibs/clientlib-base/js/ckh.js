
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
        g.on("click", "div.slide_box a.box_a", function(a) {
            a.stopPropagation();
            a.preventDefault();
            var c = $(this).closest("li.box_l");
            if ($(this).closest("div.slide_box").hasClass("multi")) {
                if (c.hasClass("on")) {
                    b = $("div", this).attr("option_and_tuon");
                    m = $("span[class\x3d'h']", this).text();
                    if (-1 < location.href.indexOf("SWJC5ACD3-A") && (-1 < location.href.indexOf("AH1") || -1 < location.href.indexOf("SE4") || -1 < location.href.indexOf("SE2") || -1 < location.href.indexOf("AH5")) && "rrb" == b.toLowerCase()) {
                        fnopenAlertPop("\u203b \ud22c\ud1a4\ub8e8\ud504 \uc120\ud0dd \uc2dc, '18\uc778\uce58 \ud0c0\uc774\uc5b4\x26\uc54c\ub85c\uc774 \ud720 + \ub8e8\ud504\ub799'\uc740\u00a0\ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if (-1 < location.href.indexOf("DBJS4AD33-A") && -1 < location.href.indexOf("K3_BR_PACK") && "bsp" == b.toLowerCase()) {
                        fnopenAlertPop("\u203b \ube0c\ub77c\uc6b4 \uc778\ud14c\ub9ac\uc5b4 \uc120\ud0dd\uc2dc, \uc2dc\ud2b8 PACK\uc740\u00a0\ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("CKJS41C35-A") || -1 < location.href.indexOf("CKJS4AC35-A")) && -1 < location.href.indexOf("IN_RED_STINGER") && ("pfmu" == b.toLowerCase() || "pfm" == b.toLowerCase())) {
                        fnopenAlertPop("\u203b '\ub2e4\ud06c \ub808\ub4dc\ud329' \uc120\ud0dd \uc2dc, '\ud37c\ud3ec\uba3c\uc2a4(\ub2e4\ud06c \ub808\ub4dc\ud329)'\uc740 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if (-1 < location.href.indexOf("YGJS49K37-A") && -1 < location.href.indexOf("GRAY_K7") && "qns" == b.toLowerCase()) {
                        fnopenAlertPop("\u203b '\uc6dc\uadf8\ub808\uc774 \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc, '\ud03c\ud305 \ub098\ud30c \uac00\uc8fd \uc2dc\ud2b8+\uc2a4\uc6e8\uc774\ub4dc \ub0b4\uc7a5\uc7ac'\uc740 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("SUJJ5ADD4-A") || -1 < location.href.indexOf("SUJJ5ADDG-A") || -1 < location.href.indexOf("SUJJ51DD4-A") || -1 < location.href.indexOf("SUJJ51DD5-A")) && -1 < location.href.indexOf("SEL_BR") && "cptb" == b.toLowerCase()) {
                        fnopenAlertPop("\u203b '\ube0c\ub77c\uc6b4 \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc, '\ud558\uc774\ucef4\ud3ec\ud2b8 + \uac00\uc8fd\uc2dc\ud2b8 + \ube0c\ub77c\uc6b4 \uc778\ud14c\ub9ac\uc5b4'\uc740 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("LQJJ53JD8-A") || -1 < location.href.indexOf("LQJJ53LD8-A") || -1 < location.href.indexOf("LQJJ5AJ38-A") || -1 < location.href.indexOf("LQJJ5AL38-A")) && -1 < location.href.indexOf("B1T") && "prm" == b.toLowerCase()) {
                        fnopenAlertPop("\u203b '\ube0c\ub77c\uc6b4 \uce7c\ub77c\ud329' \uc120\ud0dd \uc2dc, '\ud504\ub9ac\ubbf8\uc5c4'\uc740 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("B1ALS1L0E-A") || -1 < location.href.indexOf("B1ALK1L0E-A") || -1 < location.href.indexOf("B1ALD1L0E-A") || -1 < location.href.indexOf("B1ALS1L3E-C") || -1 < location.href.indexOf("B1ALK1L3E-C") || -1 < location.href.indexOf("B1ALD1L3E-C") || -1 < location.href.indexOf("B1ASS1LME-A") || -1 < location.href.indexOf("B1ASK1LME-A") || -1 < location.href.indexOf("B1ASD1LME-A") || -1 < location.href.indexOf("B1ALK6L0E-B") || -1 < location.href.indexOf("B2ALS1L0E-B") || -1 < location.href.indexOf("B2ALK1L0E-B")) && -1 < location.href.indexOf("BRI") && "pls" == b.toLowerCase()) {
                        fnopenAlertPop("\u203b '\ube0c\ub77c\uc6b4 \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc, '\ud50c\ub7ec\uc2a4 \ud328\ud0a4\uc9c0'\uc740 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if (-1 < location.href.indexOf("TMJC5AG3A-C") && -1 < location.href.indexOf("ORG_IN_RAY") && "spc" == b.toLowerCase()) {
                        fnopenAlertPop("'\uc624\ub80c\uc9c0 \uc2a4\ud398\uc15c \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc, '\uc2a4\ud398\uc15c Pack'\uc740 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("DLJS4CC32-A") || -1 < location.href.indexOf("DLJS4CD32-A") || -1 < location.href.indexOf("DLJS4CE32-A") || -1 < location.href.indexOf("DLJS4AC32-A") || -1 < location.href.indexOf("DLJS4AD32-A") || -1 < location.href.indexOf("DLJS4AE32-A")) && -1 < location.href.indexOf("K5_BROWN") && "sty" == b.toLowerCase()) {
                        fnopenAlertPop("\u203b \uc0c8\ub4e4\ube0c\ub77c\uc6b4 \uc778\ud14c\ub9ac\uc5b4 \uc120\ud0dd\uc2dc, \uc2a4\ud0c0\uc77c\uc740\u00a0\ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if (-1 < location.href.indexOf("SWJC5ADD3-A") && -1 < location.href.indexOf("SOULBOOSTER_RED") && "pre" == b.toLowerCase()) {
                        fnopenAlertPop("'\ub808\ub4dc \uceec\ub7ec\ud329 \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc, '10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158+\ucef4\ubc14\uc774\ub108 \ud5e4\ub4dc\uc5c5 \ub514\uc2a4\ud50c\ub808\uc774+\ud504\ub9ac\ubbf8\uc5c4 \ud328\ud0a4\uc9c0'\ub294 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if (-1 < location.href.indexOf("SWJC5ADD3-A") && (-1 < location.href.indexOf("SOULBOOSTER_RED") || -1 < location.href.indexOf("SOULBOOSTER_BR")) && "prm" == b.toLowerCase()) {
                        a = -1 < location.href.indexOf("SOULBOOSTER_RED") ? "\ub808\ub4dc \uceec\ub7ec\ud329" : "\ube0c\ub77c\uc6b4 \ud22c\ud1a4";
                        fnopenAlertPop("'" + a + "' \uc120\ud0dd \uc2dc, '10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158+\ucef4\ubc14\uc774\ub108 HUD (\uacf5\uae30 \uccad\uc815 \ubaa8\ub4dc \ud3ec\ud568)+\ud504\ub9ac\ubbf8\uc5c4 \ud328\ud0a4\uc9c0'\ub294 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("JRJS4CLA3-A") || -1 < location.href.indexOf("JRJS4CGA3-A") || -1 < location.href.indexOf("JRJS4BN33-A") || -1 < location.href.indexOf("JRJS4BCA3-A")) && -1 < location.href.indexOf("K9SBN") && "pre" == b.toLowerCase()) {
                        fnopenAlertPop("'\uc2dc\uc5d0\ub098 \ube0c\ub77c\uc6b4 \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc, '\ud504\ub9ac\ubbf8\uc5c4 \uceec\ub809\uc158'\uc740 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if (-1 < location.href.indexOf("DBJS4AJ34-A") && -1 < location.href.indexOf("K3_BR_PACK") && ("cpt" == b.toLowerCase() || "spe" == b.toLowerCase())) {
                        fnopenAlertPop("\u203b '\ube0c\ub77c\uc6b4 \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc, '\ucef4\ud3ec\ud2b8'\uc640 '\uc2a4\ud398\uc15c \ud328\ud0a4\uc9c0'\ub294 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if (-1 < location.href.indexOf("TMJC5AH3B-A") && -1 < location.href.indexOf("ORG_IN_RAY") && "spc" == b.toLowerCase()) {
                        fnopenAlertPop("\u203b '\uc624\ub80c\uc9c0 \uc2a4\ud398\uc15c \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc, '\uc2a4\ud398\uc15c Pack'\uc740 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if (-1 < location.href.indexOf("CKJS4BD36-A") && -1 < location.href.indexOf("IN_RED_STINGER") && "pfm" == b.toLowerCase()) {
                        fnopenAlertPop("\u203b '\ub2e4\ud06c\ub808\ub4dc \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc, '\ud37c\ud3ec\uba3c\uc2a4'\uc740 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if (-1 < location.href.indexOf("CKJS4BD36-A") && -1 < location.href.indexOf("IIN_SUE_STINGER") && "sdc" == b.toLowerCase()) {
                        fnopenAlertPop("\u203b '\uc2a4\uc6e8\uc774\ub4dc \uceec\ub809\uc158 \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc, '\uc2a4\uc6e8\uc774\ub4dc \uceec\ub809\uc158'\uc740 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("B1ALK1L3G-A") || -1 < location.href.indexOf("B1ALD1L3G-A") || -1 < location.href.indexOf("B1ALS1L3G-A") || -1 < location.href.indexOf("B1ASK1LMG-A") || -1 < location.href.indexOf("B1ASD1LMG-A") || -1 < location.href.indexOf("B1ASS1LMG-A") || -1 < location.href.indexOf("B2ALK1L0G-A") || -1 < location.href.indexOf("B2ALS1L0G-A") || -1 < location.href.indexOf("B1ALK7L0G-A")) && "pls" == b.toLowerCase()) {
                        fnopenAlertPop("'\ube0c\ub77c\uc6b4 \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc, '\ud50c\ub7ec\uc2a4\ud328\ud0a4\uc9c0'\ub294 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("B1ALS1J3L-A") || -1 < location.href.indexOf("B1ALS1J3G-A") || -1 < location.href.indexOf("B1ALS1K3G-A") || -1 < location.href.indexOf("B1ALS1L3G-A") || -1 < location.href.indexOf("B1ALK1J3L-A") || -1 < location.href.indexOf("B1ALK1J3G-A") || -1 < location.href.indexOf("B1ALK1K3G-A") || -1 < location.href.indexOf("B1ALK1L3G-A") || -1 < location.href.indexOf("B1ALD1J3L-A") || -1 < location.href.indexOf("B1ALD1J3G-A") || -1 < location.href.indexOf("B1ALD1K3G-A") || -1 < location.href.indexOf("B1ALD1L3G-A") || -1 < location.href.indexOf("B1YLK1M3G-A") || -1 < location.href.indexOf("B16LK1J3G-A") || -1 < location.href.indexOf("B1FLK1J3G-A") || -1 < location.href.indexOf("B1FLK1J3W-A")) && "5sw" == b.toLowerCase()) {
                        fnopenAlertPop("\u203b \uc790\ub3d9 \ubcc0\uc18d\uae30 \ucc28\ub7c9\uc73c\ub85c '5\ub2e8 \uc790\ub3d9\ubcc0\uc18d\uae30'\ub294 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("B13LK1J3P-A") || -1 < location.href.indexOf("B17LK1J3G-A") || -1 < location.href.indexOf("B1BLK1J3G-A") || -1 < location.href.indexOf("B1BLK1J3P-A") || -1 < location.href.indexOf("B1BLK1M3G-A") || -1 < location.href.indexOf("B1BLK1M3L-A") || -1 < location.href.indexOf("B1BLK1M3P-A") || -1 < location.href.indexOf("B1BLS1J3G-A") || -1 < location.href.indexOf("B1DLK1J3G-A") || -1 < location.href.indexOf("B1DLK1J3P-A") || -1 < location.href.indexOf("B1DLK1J3S-A") || -1 < location.href.indexOf("B1DLK1M3G-A") || -1 < location.href.indexOf("B1DLK1M3L-A") || -1 < location.href.indexOf("B1DLK1M3P-A") || -1 < location.href.indexOf("B1DLS1J3G-A") || -1 < location.href.indexOf("B1QLK1J3G-A") || -1 < location.href.indexOf("B1SLK1J3A-A") || -1 < location.href.indexOf("B1SLK1J3G-A") || -1 < location.href.indexOf("B1SLK1M3A-A") || -1 < location.href.indexOf("B1SLK1M3G-A") || -1 < location.href.indexOf("B1ULK1J3G-A") || -1 < location.href.indexOf("B13LK1J3P-A")) && "5sw" == b.toLowerCase()) {
                        fnopenAlertPop("\u203b \uc790\ub3d9 \ubcc0\uc18d\uae30 \ucc28\ub7c9\uc73c\ub85c '5\ub2e8 \uc790\ub3d9\ubcc0\uc18d\uae30'\ub294 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if (-1 < location.href.indexOf("DEJJ59GD7-A") && -1 < location.href.indexOf("SEL_PL") && "cpt2" == b.toLowerCase()) {
                        fnopenAlertPop("\u203b '\ud50c\ub7fc \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc, '\ucef4\ud3ec\ud2b82'\ub294 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if (-1 < location.href.indexOf("JRJS4CLA4-A") && -1 < location.href.indexOf("THENEW_K9_IN_TAUPE_GRAY") && "hlp" == b.toLowerCase()) {
                        fnopenAlertPop("\u203b\ubca0\uc2a4\ud2b8 \uc140\ub809\uc158\u2160 \ud2b8\ub9bc\uc5d0\uc11c \ub0b4\uc7a5 \ud1a0\ud504 \uadf8\ub808\uc774 \uc120\ud0dd\uc2dc \uc635\uc158\uc5d0\uc11c \ud504\ub9ac\ubbf8\uc5c4 \ud329 \uc120\ud0dd\ud574\uc81c\ub97c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", !1);
                        return
                    }
                    if (-1 < location.href.indexOf("JRJS4BLA4-A") && -1 < location.href.indexOf("THENEW_K9_IN_TAUPE_GRAY") && "hlp" == b.toLowerCase()) {
                        fnopenAlertPop("\u203b\ubca0\uc2a4\ud2b8 \uc140\ub809\uc158\u2160 \ud2b8\ub9bc\uc5d0\uc11c \ub0b4\uc7a5 \ud1a0\ud504 \uadf8\ub808\uc774 \uc120\ud0dd\uc2dc \uc635\uc158\uc5d0\uc11c \ud504\ub9ac\ubbf8\uc5c4 \ud329 \uc120\ud0dd\ud574\uc81c\ub97c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", !1);
                        return
                    }
                    if (-1 < location.href.indexOf("JRJS4CNA4-A") && -1 < location.href.indexOf("THENEW_K9_IN_TAUPE_GRAY") && "hlp" == b.toLowerCase()) {
                        fnopenAlertPop("\u203b\ub9c8\uc2a4\ud130\uc988 \ud2b8\ub9bc\uc5d0\uc11c \ub0b4\uc7a5 \ud1a0\ud504 \uadf8\ub808\uc774 \uc120\ud0dd\uc2dc \uc635\uc158\uc5d0\uc11c \ud504\ub9ac\ubbf8\uc5c4 \ud329 \uc120\ud0dd\ud574\uc81c\ub97c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", !1);
                        return
                    }
                    if (-1 < location.href.indexOf("JRJS4BNA4-A") && -1 < location.href.indexOf("THENEW_K9_IN_TAUPE_GRAY") && "hlp" == b.toLowerCase()) {
                        fnopenAlertPop("\u203b\ub9c8\uc2a4\ud130\uc988 \ud2b8\ub9bc\uc5d0\uc11c \ub0b4\uc7a5 \ud1a0\ud504 \uadf8\ub808\uc774 \uc120\ud0dd\uc2dc \uc635\uc158\uc5d0\uc11c \ud504\ub9ac\ubbf8\uc5c4 \ud329 \uc120\ud0dd\ud574\uc81c\ub97c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", !1);
                        return
                    }
                    if (-1 < location.href.indexOf("CKJS4BG37-A") && -1 < location.href.indexOf("IN_DR_STINGER") && "pfm" == b.toLowerCase()) {
                        fnopenAlertPop("\u203b '\ub2e4\ud06c\ub808\ub4dc \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc, '\ud37c\ud3ec\uba3c\uc2a4' \uc635\uc158\uc740 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("JRJS4CLA4-A") || -1 < location.href.indexOf("JRJS4CNA4-A") || -1 < location.href.indexOf("JRJS4BLA4-A") || -1 < location.href.indexOf("JRJS4BNA4-A")) && -1 < location.href.indexOf("K9_IN_TAG") && "hlp" == b.toLowerCase()) {
                        fnopenAlertPop("'\ud1a0\ud504 \uadf8\ub808\uc774 \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc, '\ud504\ub9ac\ubbf8\uc5c4 \ud329' \uc635\uc158\uc740 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if (-1 < location.href.indexOf("DEJJ59GD7-A") && -1 < location.href.indexOf("IN_PLUM_SELTOS") && "cpt2" == b.toLowerCase()) {
                        fnopenAlertPop("\u203b '\ud50c\ub7fc \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc, '\ucef4\ud3ec\ud2b82' \uc635\uc158\uc740 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    n = !0;
                    if ((-1 < location.href.indexOf("SUJJ5AAD4-A") || -1 < location.href.indexOf("SUJJ51AD4-A")) && "cvn" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        if ("uvo" == $(this).attr("opt").toLowerCase() || "sty" == $(this).attr("opt").toLowerCase())
                            n = !1;
                        "uvo" == $(this).attr("opt").toLowerCase() ? d = "10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158" : "sty" == $(this).attr("opt").toLowerCase() && (d = "\uc2a4\ud0c0\uc77c")
                    }),
                    !n)) {
                        fnopenAlertPop("'" + d + "' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\ucee8\ube44\ub2c8\uc5b8\uc2a4'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'" + d + "' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    if (-1 < location.href.indexOf("SUJJ5ABD4-A") || -1 < location.href.indexOf("SUJJ51BD4-A")) {
                        if ("uvo" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                            "hte" == $(this).attr("opt").toLowerCase() && (n = !1)
                        }),
                        !n)) {
                            fnopenAlertPop("'\ud558\uc774\ud14c\ud06c' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'\ud558\uc774\ud14c\ud06c' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                            return
                        }
                        if ("sty" == b.toLowerCase() || "uvo" == b.toLowerCase())
                            if ($(".box_u:eq(0) .box_l.on").each(function() {
                                "bos" == $(this).attr("opt").toLowerCase() && (n = !1);
                                "uvo" == $(this).attr("opt").toLowerCase() ? d = "10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158" : "sty" == $(this).attr("opt").toLowerCase() && (d = "\uc2a4\ud0c0\uc77c")
                            }),
                            !n) {
                                fnopenAlertPop("'" + d + "' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 'Bose \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc \ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'" + d + "' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                                return
                            }
                    }
                    if ((-1 < location.href.indexOf("SUJJ5ADD4-A") || -1 < location.href.indexOf("SUJJ5ADDG-A") || -1 < location.href.indexOf("SUJJ51DD4-A") || -1 < location.href.indexOf("SUJJ51DD5-A")) && "uvo" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        if ("hte" == $(this).attr("opt").toLowerCase() || "bos" == $(this).attr("opt").toLowerCase())
                            n = !1;
                        "hte" == $(this).attr("opt").toLowerCase() ? d = "\ud558\uc774\ud14c\ud06c" : "bos" == $(this).attr("opt").toLowerCase() && (d = "Bose \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc \ud329")
                    }),
                    !n)) {
                        fnopenAlertPop("'" + d + "' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'" + d + "' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    B = !0;
                    if (-1 < location.href.indexOf("XKF-KFA") && "sty" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "dwp" == $(this).attr("opt").toLowerCase() && (B = !1)
                    }),
                    !B)) {
                        fnopenAlertPop("'\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 'PHEV\uc2a4\ud0c0\uc77c UP'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    r = !0;
                    if ((-1 < location.href.indexOf("AYG-YGA") || -1 < location.href.indexOf("YGJS49D38-A") || -1 < location.href.indexOf("YGJS49K38-A")) && "dwp" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "dwpm" == $(this).attr("opt").toLowerCase() && (r = !1)
                    }),
                    !r)) {
                        fnopenAlertPop("'\ubaa8\ub2c8\ud130\ub9c1\ud329' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'\ubaa8\ub2c8\ud130\ub9c1\ud329' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    w = !0;
                    if (-1 < location.href.indexOf("TMJC5AG3A-A") && "pis1" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "cvn" == $(this).attr("opt").toLowerCase() && (w = !1)
                    }),
                    !w)) {
                        fnopenAlertPop("'\ucee8\ube44\ub2c8\uc5b8\uc2a4' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\ubc84\ud2bc\uc2dc\ub3d9 Pack'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'\ucee8\ube44\ub2c8\uc5b8\uc2a4' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    p = !0;
                    if ((-1 < location.href.indexOf("DLJS4CC32-A") || -1 < location.href.indexOf("DLJS4AC32-A")) && "pis" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "uvo" == $(this).attr("opt").toLowerCase() && (p = !1)
                    }),
                    !p)) {
                        fnopenAlertPop("'10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\ubc84\ud2bc \uc2dc\ub3d9\ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    v = !0;
                    d = "";
                    if ((-1 < location.href.indexOf("XJF-MJF") || -1 < location.href.indexOf("XJF-SJF") || -1 < location.href.indexOf("XJF-JFL") || -1 < location.href.indexOf("XTZ-KFJ") || -1 < location.href.indexOf("OTR-TFB")) && "uvo" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        if ("hud" == $(this).attr("opt").toLowerCase() || "kel" == $(this).attr("opt").toLowerCase() || "sct" == $(this).attr("opt").toLowerCase() || "scta" == $(this).attr("opt").toLowerCase())
                            v = !1;
                        "hud" == $(this).attr("opt").toLowerCase() ? d = "\ud5e4\ub4dc\uc5c5 \ub514\uc2a4\ud50c\ub808\uc774" : "kel" == $(this).attr("opt").toLowerCase() ? d = "KRELL \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc" : "sct" == $(this).attr("opt").toLowerCase() ? d = "\uc2a4\ub9c8\ud2b8 \ucee4\ub125\ud2b8" : "scta" == $(this).attr("opt").toLowerCase() && (d = "\uc2a4\ub9c8\ud2b8 \ucee4\ub125\ud2b8+\ubcf4\uc870 \ubc30\ud130\ub9ac")
                    }),
                    !v)) {
                        fnopenAlertPop("'" + d + "' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'" + d + "' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    E = !0;
                    if (-1 < location.href.indexOf("DLRS46B32-A") && "cvn" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "dsa" == $(this).attr("opt").toLowerCase() && (E = !1)
                    }),
                    !E)) {
                        fnopenAlertPop("'8\uc778\uce58 \ub514\uc2a4\ud50c\ub808\uc774 \uc624\ub514\uc624' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\ucee8\ube44\ub2c8\uc5b8\uc2a4'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'8\uc778\uce58 \ub514\uc2a4\ud50c\ub808\uc774 \uc624\ub514\uc624' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    C = !0;
                    if ((-1 < location.href.indexOf("DLRS46B32-A") || -1 < location.href.indexOf("DLRS46C32-A")) && "sbw" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "dwp" == $(this).attr("opt").toLowerCase() && (C = !1)
                    }),
                    !C)) {
                        fnopenAlertPop("'\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 'SBW \ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    F = !0;
                    if ((-1 < location.href.indexOf("MQJJ5ACD2-A") || -1 < location.href.indexOf("MQJJ5ADD2-A") || -1 < location.href.indexOf("MQJJ52CD2-A") || -1 < location.href.indexOf("MQJJ52DD2-A")) && "uvo" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        if ("hud" == $(this).attr("opt").toLowerCase() || "kre" == $(this).attr("opt").toLowerCase() || "sct" == $(this).attr("opt").toLowerCase())
                            F = !1;
                        "hud" == $(this).attr("opt").toLowerCase() ? d = "\ud5e4\ub4dc\uc5c5 \ub514\uc2a4\ud50c\ub808\uc774" : "kre" == $(this).attr("opt").toLowerCase() ? d = "KRELL \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc" : "sct" == $(this).attr("opt").toLowerCase() && (d = "\uc2a4\ub9c8\ud2b8\ucee4\ub125\ud2b8")
                    }),
                    !F)) {
                        fnopenAlertPop("'" + d + "' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'" + d + "' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    var e = !0;
                    if (-1 < location.href.indexOf("JRJS4CK33-A") && ("mnt" == b.toLowerCase() || "r19" == b.toLowerCase()) && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "rrr" == $(this).attr("opt").toLowerCase() && (e = !1)
                    }),
                    !e)) {
                        fnopenAlertPop("'\uc2a4\ud3ec\ud2f0 \uceec\ub809\uc158' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\ubaa8\ub2c8\ud130\ub9c1 \ud329'\uc635\uc158\uacfc '19\uc778\uce58 \ud720 \x26 \ud0c0\uc774\uc5b4'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'\uc2a4\ud3ec\ud2f0 \uceec\ub809\uc158' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    t = !0;
                    if (-1 < location.href.indexOf("DBJS4AA35-A")) {
                        if ("r16" == b.toLowerCase() || "sty" == b.toLowerCase())
                            if ($(".box_u:eq(0) .box_l.on").each(function() {
                                "dwp" == $(this).attr("opt").toLowerCase() && (t = !1)
                            }),
                            "r16" == b.toLowerCase() ? d = "16\uc778\uce58 \ud720" : "sty" == b.toLowerCase() && (d = "\uc2a4\ud0c0\uc77c"),
                            !t) {
                                fnopenAlertPop("'\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '" + d + "'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                                return
                            }
                        if ("pis" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                            "uvo" == $(this).attr("opt").toLowerCase() && (t = !1)
                        }),
                        !t)) {
                            fnopenAlertPop("'10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\ubc84\ud2bc\uc2dc\ub3d9 \ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                            return
                        }
                    }
                    p = !0;
                    if (-1 < location.href.indexOf("DLJS4CC33-A") && "pis" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "uvo" == $(this).attr("opt").toLowerCase() && (p = !1)
                    }),
                    !p)) {
                        fnopenAlertPop("'10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\ubc84\ud2bc\uc2dc\ub3d9 \ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    p = !0;
                    if (-1 < location.href.indexOf("DLJS4AC33-A") && "pis" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "uvo" == $(this).attr("opt").toLowerCase() && (p = !1)
                    }),
                    !p)) {
                        fnopenAlertPop("'10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\ubc84\ud2bc\uc2dc\ub3d9 \ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    G = !0;
                    if (-1 < location.href.indexOf("CKJS4CC37-A") && "sty" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "pfm" == $(this).attr("opt").toLowerCase() && (G = !1)
                    }),
                    !G)) {
                        fnopenAlertPop("'\ud37c\ud3ec\uba3c\uc2a4' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\uc2a4\ud0c0\uc77c'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'\ud37c\ud3ec\uba3c\uc2a4' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("DLJS4CC33-A") || -1 < location.href.indexOf("DLJS4CD33-A") || -1 < location.href.indexOf("DLJS4CE33-A") || -1 < location.href.indexOf("DLJS4AC33-A") || -1 < location.href.indexOf("DLJS4AD33-A") || -1 < location.href.indexOf("DLJS4AE33-A")) && "sty" == b.toLowerCase() && -1 < location.href.indexOf("K5_BROWN")) {
                        fnopenAlertPop("'\uc0c8\ub4e4 \ube0c\ub77c\uc6b4 \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc '\uc2a4\ud0c0\uc77c' \uc635\uc158\uc740 \ubc18\ub4dc\uc2dc \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    q = !0;
                    if (-1 < location.href.indexOf("DLRS46B33-A")) {
                        if ("cyn" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                            "dsa" == $(this).attr("opt").toLowerCase() && (q = !1)
                        }),
                        !q)) {
                            fnopenAlertPop("'8\uc778\uce58 \ub514\uc2a4\ud50c\ub808\uc774 \uc624\ub514\uc624' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\ucee8\ube44\ub2c8\uc5b8\uc2a4'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'8\uc778\uce58 \ub514\uc2a4\ud50c\ub808\uc774 \uc624\ub514\uc624' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                            return
                        }
                        if ("sbw" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                            "dwp" == $(this).attr("opt").toLowerCase() && (q = !1)
                        }),
                        !q)) {
                            fnopenAlertPop("'\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 'SBW \ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                            return
                        }
                    }
                    q = !0;
                    if (-1 < location.href.indexOf("DLRS46C33-A") && "sbw" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "dwp" == $(this).attr("opt").toLowerCase() && (q = !1)
                    }),
                    !q)) {
                        fnopenAlertPop("'\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 'SBW \ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("DBJS4AC35-A") || -1 < location.href.indexOf("DBJS4AD35-A") || -1 < location.href.indexOf("DBJS5BMD5-A")) && "uvo" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        if ("uvo3" == $(this).attr("opt").toLowerCase() || "uvo2" == $(this).attr("opt").toLowerCase())
                            t = !1;
                        "uvo3" == $(this).attr("opt").toLowerCase() ? d = "10.25\uc778\uce58 \ud074\ub7ec\uc2a4\ud130" : "uvo2" == $(this).attr("opt").toLowerCase() && (d = "KRELL \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc")
                    }),
                    !t)) {
                        fnopenAlertPop("'" + d + "' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'" + d + "' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    w = !0;
                    if (-1 < location.href.indexOf("TMJC5AG3C") && "pis1" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "cvn" == $(this).attr("opt").toLowerCase() && (w = !1)
                    }),
                    !w)) {
                        fnopenAlertPop("'\ucee8\ube44\ub2c8\uc5b8\uc2a4' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\ubc84\ud2bc\uc2dc\ub3d9PACK'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'\ucee8\ube44\ub2c8\uc5b8\uc2a4' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    H = !0;
                    if (-1 < location.href.indexOf("NQL") && "nav" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        if ("hte" == $(this).attr("opt").toLowerCase() || "nhte" == $(this).attr("opt").toLowerCase())
                            H = !1;
                        "hte" == $(this).attr("opt").toLowerCase() ? d = "\ud558\uc774\ud14c\ud06c" : "nhte" == $(this).attr("opt").toLowerCase() && (d = "\ud558\uc774\ud14c\ud06c(\ub514\uc9c0\ud138\ud0a4 \ubbf8\uc801\uc6a9)")
                    }),
                    !H)) {
                        fnopenAlertPop("'" + d + "' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '12.3\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'" + d + "' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    I = !0;
                    if ((-1 < location.href.indexOf("NQJJ5ABD1-A") || -1 < location.href.indexOf("NQJJ5ACD1-A") || -1 < location.href.indexOf("NQJJ5ADD1-A") || -1 < location.href.indexOf("NQJJ51B31-A") || -1 < location.href.indexOf("NQJJ51C31-A") || -1 < location.href.indexOf("NQJJ51D31-A")) && "nav" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        if ("mnt" == $(this).attr("opt").toLowerCase() || "kre" == $(this).attr("opt").toLowerCase())
                            I = !1;
                        "mnt" == $(this).attr("opt").toLowerCase() ? d = "\ubaa8\ub2c8\ud130\ub9c1 \ud329' \uc635\uc158" : "kre" == $(this).attr("opt").toLowerCase() && (d = "KRELL \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc")
                    }),
                    !I)) {
                        fnopenAlertPop("'" + d + "' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '12.3\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'" + d + "' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    J = !0;
                    if ((-1 < location.href.indexOf("NQJJ5ACD1-A") || -1 < location.href.indexOf("NQJJ5AED1-A") || -1 < location.href.indexOf("NQJJ51C31-A") || -1 < location.href.indexOf("NQJJ51C31-A")) && "sty" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "prm" == $(this).attr("opt").toLowerCase() && (J = !1)
                    }),
                    !J)) {
                        fnopenAlertPop("'\ud504\ub9ac\ubbf8\uc5c4' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\uc2a4\ud0c0\uc77c'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'\ud504\ub9ac\ubbf8\uc5c4' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    K = !0;
                    if ((-1 < location.href.indexOf("NQJJ5AAD1-A") || -1 < location.href.indexOf("NQJJ51A31-A")) && "cvn" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "nav" == $(this).attr("opt").toLowerCase() && (K = !1)
                    }),
                    !K)) {
                        fnopenAlertPop("'12.3\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\ucee8\ube44\ub2c8\uc5b8\uc2a4'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'12.3\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    L = !0;
                    if ((-1 < location.href.indexOf("NQJJ59B31-A") || -1 < location.href.indexOf("NQJJ59C31-A") || -1 < location.href.indexOf("NQJJ59D31-A")) && "nav" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        if ("hte" == $(this).attr("opt").toLowerCase() || "nhte" == $(this).attr("opt").toLowerCase() || "mnt" == $(this).attr("opt").toLowerCase() || "kre" == $(this).attr("opt").toLowerCase())
                            L = !1;
                        "hte" == $(this).attr("opt").toLowerCase() ? d = "\ud558\uc774\ud14c\ud06c" : "nhte" == $(this).attr("opt").toLowerCase() ? d = "\ud558\uc774\ud14c\ud06c(\ub514\uc9c0\ud138\ud0a4 \ubbf8\uc801\uc6a9)" : "mnt" == $(this).attr("opt").toLowerCase() ? d = "\ubaa8\ub2c8\ud130\ub9c1 \ud329" : "kre" == $(this).attr("opt").toLowerCase() && (d = "KRELL \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc")
                    }),
                    !L)) {
                        fnopenAlertPop("'" + d + "' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '12.3\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'" + d + "' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    M = !0;
                    if ((-1 < location.href.indexOf("NQJJ59C31-A") || -1 < location.href.indexOf("NQJJ59E31-A")) && "sty" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "prm" == $(this).attr("opt").toLowerCase() && (M = !1)
                    }),
                    !M)) {
                        fnopenAlertPop("'\ud504\ub9ac\ubbf8\uc5c4' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\uc2a4\ud0c0\uc77c'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'\ud504\ub9ac\ubbf8\uc5c4' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    N = !0;
                    if ((-1 < location.href.indexOf("CVJJ5VD31") || -1 < location.href.indexOf("CVJJ5VB31")) && "cvn" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        if ("hte" == $(this).attr("opt").toLowerCase() || "mda" == $(this).attr("opt").toLowerCase())
                            N = !1;
                        "hte" == $(this).attr("opt").toLowerCase() ? d = "\ud558\uc774\ud14c\ud06c" : "mda" == $(this).attr("opt").toLowerCase() && (d = "\uba54\ub9ac\ub514\uc548 \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc")
                    }),
                    !N)) {
                        fnopenAlertPop("'" + d + "' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\ucee8\ube44\ub2c8\uc5b8\uc2a4'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'" + d + "' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    O = !0;
                    d = "";
                    if ((-1 < location.href.indexOf("KPJG7AC32-A") || -1 < location.href.indexOf("KPJG7AE32-A") || -1 < location.href.indexOf("KPJG71C32-A") || -1 < location.href.indexOf("KPJG71E32-A") || -1 < location.href.indexOf("KPJG9AC32-A") || -1 < location.href.indexOf("KPJG91C32-A") || -1 < location.href.indexOf("KPJGBAC32-A") || -1 < location.href.indexOf("KPJGB1C32-A") || -1 < location.href.indexOf("KPJG9AB32-A") || -1 < location.href.indexOf("KPJG91B32-A") || -1 < location.href.indexOf("KPJGBAB32-A") || -1 < location.href.indexOf("KPJGB1B32-A")) && "uvo" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        if ("mnt" == $(this).attr("opt").toLowerCase() || "kre" == $(this).attr("opt").toLowerCase() || "sct" == $(this).attr("opt").toLowerCase())
                            O = !1;
                        "mnt" == $(this).attr("opt").toLowerCase() ? d = "\ubaa8\ub2c8\ud130\ub9c1\ud329" : "kre" == $(this).attr("opt").toLowerCase() ? d = "KRELL \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc" : "sct" == $(this).attr("opt").toLowerCase() && (d = "\uc2a4\ub9c8\ud2b8 \ucee4\ub125\ud2b8")
                    }),
                    !O)) {
                        fnopenAlertPop("'" + d + "' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '12.3\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'" + d + "' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    P = !0;
                    if (-1 < location.href.indexOf("RKA-KAA") || -1 < location.href.indexOf("RKA-KAB") || -1 < location.href.indexOf("RKA-KAC"))
                        if ("uvo" == b.toLowerCase() || "mnt" == b.toLowerCase())
                            if ($(".box_u:eq(0) .box_l.on").each(function() {
                                "rspa" == $(this).attr("opt").toLowerCase() && (P = !1)
                            }),
                            !P) {
                                "uvo" == b.toLowerCase() ? fnopenAlertPop("'\uc6d0\uaca9 \uc2a4\ub9c8\ud2b8 \uc8fc\ucc28 \ubcf4\uc870' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '12.3\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'\uc6d0\uaca9 \uc2a4\ub9c8\ud2b8 \uc8fc\ucc28 \ubcf4\uc870' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1) : "mnt" == b.toLowerCase() && fnopenAlertPop("'\uc6d0\uaca9 \uc2a4\ub9c8\ud2b8 \uc8fc\ucc28 \ubcf4\uc870' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\ubaa8\ub2c8\ud130\ub9c1 \ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'\uc6d0\uaca9 \uc2a4\ub9c8\ud2b8 \uc8fc\ucc28 \ubcf4\uc870' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                                return
                            }
                    Q = !0;
                    if (-1 < location.href.indexOf("CKJS4CC36-A") && "sty" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "pfm" == $(this).attr("opt").toLowerCase() && (Q = !1)
                    }),
                    !Q)) {
                        fnopenAlertPop("'\ud37c\ud3ec\uba3c\uc2a4' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\uc2a4\ud0c0\uc77c'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'\ud504\ub9ac\ubbf8\uc5c4 \ub514\uc790\uc778' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    y = !0;
                    if ((-1 < location.href.indexOf("GLJS4AA31-A") || -1 < location.href.indexOf("GLJS4BA31-A") || -1 < location.href.indexOf("GLJS49A31-A")) && "avnc" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        if ("dwp" == $(this).attr("opt").toLowerCase() || "sty" == $(this).attr("opt").toLowerCase())
                            y = !1;
                        "dwp" == $(this).attr("opt").toLowerCase() ? d = "\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988" : "sty" == $(this).attr("opt").toLowerCase() && (d = "\uc2a4\ud0c0\uc77c")
                    }),
                    !y)) {
                        fnopenAlertPop("'" + d + "' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\ub0b4\ube44\uac8c\uc774\uc158\ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'" + d + "' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("GLJS4BB31-A") || -1 < location.href.indexOf("GLJS4BC31-A") || -1 < location.href.indexOf("GLJS4AB31-A") || -1 < location.href.indexOf("GLJS4AC31-A") || -1 < location.href.indexOf("GLJS49B31-A") || -1 < location.href.indexOf("GLJS49C31-A")) && "cpt" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        if ("prm1" == $(this).attr("opt").toLowerCase() || "prm2" == $(this).attr("opt").toLowerCase())
                            y = !1
                    }),
                    !y)) {
                        fnopenAlertPop("'\ud504\ub9ac\ubbf8\uc5c4'\uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\ucef4\ud3ec\ud2b8'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'\ud504\ub9ac\ubbf8\uc5c4'\uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    R = !0;
                    if (-1 < location.href.indexOf("GLRS46F31-A") && "uvo" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        if ("dwp" == $(this).attr("opt").toLowerCase() || "cpt1" == $(this).attr("opt").toLowerCase())
                            R = !1;
                        "dwp" == $(this).attr("opt").toLowerCase() ? d = "\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988" : "cpt1" == $(this).attr("opt").toLowerCase() && (d = "\ucef4\ud3ec\ud2b8 + \uc804\uc790\uc2dd \ub8f8\ubbf8\ub7ec(ECM)+ \ud558\uc774\ud328\uc2a4 \uc790\ub3d9\uacb0\uc81c \uc2dc\uc2a4\ud15c")
                    }),
                    !R)) {
                        fnopenAlertPop("'" + d + "' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\ub0b4\ube44\uac8c\uc774\uc158\ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'" + d + "' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    S = !0;
                    if (-1 < location.href.indexOf("GLTS46E31-A") && "uvo" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        if ("dwp" == $(this).attr("opt").toLowerCase() || "cvna" == $(this).attr("opt").toLowerCase())
                            S = !1;
                        "dwp" == $(this).attr("opt").toLowerCase() ? d = "\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988 + \ud30c\ub178\ub77c\ubbf9 \ucee4\ube0c\ub4dc \ub514\uc2a4\ud50c\ub808\uc774 + \uc288\ud37c\ube44\uc804 \ud074\ub7ec\uc2a4\ud130(12.3\uc778\uce58 \ud480\uc0ac\uc774\uc988 \uce7c\ub77cTFT LCD)" : "cvna" == $(this).attr("opt").toLowerCase() && (d = "\uc6b4\uc804\uc11d \ucee8\ube44\ub2c8\uc5b8\uc2a4 + \uc804\uc790\uc2dd \ub8f8\ubbf8\ub7ec(ECM) + \ud558\uc774\ud328\uc2a4 \uc790\ub3d9\uacb0\uc81c \uc2dc\uc2a4\ud15c")
                    }),
                    !S)) {
                        fnopenAlertPop("'" + d + "' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '12.3\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158 + \ubc84\ud2bc\uc2dc\ub3d9 \uc2a4\ub9c8\ud2b8\ud0a4 \uc2dc\uc2a4\ud15c(\uc6d0\uaca9\uc2dc\ub3d9\ud3ec\ud568)'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'" + d + "' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    T = !0;
                    if ((-1 < location.href.indexOf("JAJH5AI36-A") || -1 < location.href.indexOf("JAJH5AD36-A") || -1 < location.href.indexOf("JAJH5AL36-A") || -1 < location.href.indexOf("JAJV5AV36-A") || -1 < location.href.indexOf("JAJV5AV3S-A")) && "dwp1" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "dwp2" == $(this).attr("opt").toLowerCase() && (T = !1)
                    }),
                    !T)) {
                        fnopenAlertPop("'\ub4dc\ub77c\uc774\ube0c\uc640\uc774\uc988\u2161' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '\ub4dc\ub77c\uc774\ube0c\uc640\uc774\uc988\u2160'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'\ub4dc\ub77c\uc774\ube0c\uc640\uc774\uc988\u2161' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    U = !0;
                    if ((-1 < location.href.indexOf("DLHS46E33") || -1 < location.href.indexOf("DLHS46F33")) && "uvo" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        if ("kel" == $(this).attr("opt").toLowerCase() || "sct" == $(this).attr("opt").toLowerCase() || "scta" == $(this).attr("opt").toLowerCase() || "hud" == $(this).attr("opt").toLowerCase())
                            U = !1;
                        "kel" == $(this).attr("opt").toLowerCase() ? d = "KRELL \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc" : "sct" == $(this).attr("opt").toLowerCase() ? d = "\uc2a4\ub9c8\ud2b8 \ucee4\ub125\ud2b8" : "scta" == $(this).attr("opt").toLowerCase() ? d = "\uc2a4\ub9c8\ud2b8 \ucee4\ub125\ud2b8 + \ubcf4\uc870 \ubc30\ud130\ub9ac" : "hud" == $(this).attr("opt").toLowerCase() && (d = "\ud5e4\ub4dc\uc5c5 \ub514\uc2a4\ud50c\ub808\uc774")
                    }),
                    !U)) {
                        fnopenAlertPop("'" + d + "' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'" + d + "' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    V = !0;
                    if ((-1 < location.href.indexOf("MQJJ59C32-A") || -1 < location.href.indexOf("MQJJ59D32-A") || -1 < location.href.indexOf("MQJJ59CA2-A") || -1 < location.href.indexOf("MQJJ59DA2-A")) && "nav" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        if ("hud" == $(this).attr("opt").toLowerCase() || "kre" == $(this).attr("opt").toLowerCase() || "sct" == $(this).attr("opt").toLowerCase())
                            V = !1;
                        "hud" == $(this).attr("opt").toLowerCase() ? d = "\ud5e4\ub4dc\uc5c5 \ub514\uc2a4\ud50c\ub808\uc774" : "kre" == $(this).attr("opt").toLowerCase() ? d = "KRELL \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc" : "sct" == $(this).attr("opt").toLowerCase() && (d = "\uc2a4\ub9c8\ud2b8\ucee4\ub125\ud2b8")
                    }),
                    !V)) {
                        fnopenAlertPop("'" + d + "' \uc635\uc158\uc774 \uc120\ud0dd\ub41c \uc0c1\ud0dc\uc5d0\uc11c\ub294 '10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud574\uc9c0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n'" + d + "' \uc635\uc158\uc744 \uba3c\uc800 \uc120\ud0dd \ud574\uc9c0\ud574\uc8fc\uc138\uc694.", !1);
                        return
                    }
                    if (-1 < location.href.indexOf("CKJS4AC32-A") || -1 < location.href.indexOf("CKJS41C33-A") || -1 < location.href.indexOf("CKJS4AC34-A") || -1 < location.href.indexOf("CKJS41C34-A") || -1 < location.href.indexOf("CKJS41CA4-A") || -1 < location.href.indexOf("CKJS4ACA4-A") || -1 < location.href.indexOf("CKJS41C35-A") || -1 < location.href.indexOf("CKJS4AC35-A"))
                        "pfm" != b.toLowerCase() || -1 < location.href.indexOf("IN_RED_STINGER") || $(".box_u:eq(0) .box_l").each(function() {
                            "awd" == $(this).attr("opt").toLowerCase() && ($(this).attr("price", "2450000"),
                            $(this).find(".price").text("2,450,000\uc6d0"))
                        });
                    -1 < location.href.indexOf("DBJS5BMD5-A") && "spe" == b.toLowerCase() && $(".box_u:eq(0) .box_l").each(function() {
                        "uvo" == $(this).attr("opt").toLowerCase() && ($(this).attr("price", "1250000"),
                        $(this).find(".price").text("1,250,000\uc6d0"))
                    });
                    -1 < location.href.indexOf("DBJS4AJ34-A") && "spe" == b.toLowerCase() && $(".box_u:eq(0) .box_l").each(function() {
                        "uvo" == $(this).attr("opt").toLowerCase() && ($(this).attr("price", "1150000"),
                        $(this).find(".price").text("1,150,000\uc6d0"));
                        "uvo2" == $(this).attr("opt").toLowerCase() && ($(this).attr("price", "1450000"),
                        $(this).find(".price").text("1,450,000\uc6d0"))
                    });
                    c.removeClass("on").find("a").removeAttr("title")
                } else {
                    var f = !0, h = {}, k, l = !1, b = $("div", this).attr("option_and_tuon"), m = $("span[class\x3d'h']", this).text(), B = !1;
                    if (-1 < location.href.indexOf("XKF-KFA") && "dwp" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "sty" == $(this).attr("opt").toLowerCase() && (B = !0)
                    }),
                    !B)) {
                        fnopenAlertPop("'\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988' \uc635\uc158\uc740 'PHEV\uc2a4\ud0c0\uc77c UP'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    var r = !1;
                    if ((-1 < location.href.indexOf("AYG-YGA") || -1 < location.href.indexOf("YGJS49D38-A") || -1 < location.href.indexOf("YGJS49K38-A")) && "dwpm" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "dwp" == $(this).attr("opt").toLowerCase() && (r = !0)
                    }),
                    !r)) {
                        fnopenAlertPop("'\ubaa8\ub2c8\ud130\ub9c1\ud329' \uc635\uc158\uc740 '\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    var w = !1;
                    if (-1 < location.href.indexOf("TMJC5AG3A-A") && "cvn" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "pis1" == $(this).attr("opt").toLowerCase() && (w = !0)
                    }),
                    !w)) {
                        fnopenAlertPop("'\ucee8\ube44\ub2c8\uc5b8\uc2a4' \uc635\uc158\uc740 '\ubc84\ud2bc\uc2dc\ub3d9 Pack'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    var p = !1;
                    if ((-1 < location.href.indexOf("DLJS4CC32-A") || -1 < location.href.indexOf("DLJS4AC32-A")) && "uvo" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "pis" == $(this).attr("opt").toLowerCase() && (p = !0)
                    }),
                    !p)) {
                        fnopenAlertPop("'10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158' \uc635\uc158\uc740 '\ubc84\ud2bc \uc2dc\ub3d9\ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    var v = !1
                      , d = "";
                    if (-1 < location.href.indexOf("XJF-MJF") || -1 < location.href.indexOf("XJF-SJF") || -1 < location.href.indexOf("XJF-JFL") || -1 < location.href.indexOf("XTZ-KFJ") || -1 < location.href.indexOf("OTR-TFB"))
                        if ("hud" == b.toLowerCase() || "kel" == b.toLowerCase() || "sct" == b.toLowerCase() || "scta" == b.toLowerCase())
                            if ($(".box_u:eq(0) .box_l.on").each(function() {
                                "uvo" == $(this).attr("opt").toLowerCase() && (v = !0)
                            }),
                            !v) {
                                "hud" == b.toLowerCase() ? d = "\ud5e4\ub4dc\uc5c5 \ub514\uc2a4\ud50c\ub808\uc774" : "kel" == b.toLowerCase() ? d = "KRELL \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc" : "sct" == b.toLowerCase() ? d = "\uc2a4\ub9c8\ud2b8 \ucee4\ub125\ud2b8" : "scta" == b.toLowerCase() && (d = "\uc2a4\ub9c8\ud2b8 \ucee4\ub125\ud2b8+\ubcf4\uc870 \ubc30\ud130\ub9ac");
                                fnopenAlertPop("'" + d + "' \uc635\uc158\uc740 '10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                                return
                            }
                    var E = !1;
                    if (-1 < location.href.indexOf("DLRS46B32-A") && "dsa" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "cvn" == $(this).attr("opt").toLowerCase() && (E = !0)
                    }),
                    !E)) {
                        fnopenAlertPop("'8\uc778\uce58 \ub514\uc2a4\ud50c\ub808\uc774 \uc624\ub514\uc624' \uc635\uc158\uc740 '\ucee8\ube44\ub2c8\uc5b8\uc2a4'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    var C = !1;
                    if ((-1 < location.href.indexOf("DLRS46B32-A") || -1 < location.href.indexOf("DLRS46C32-A")) && "dwp" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "sbw" == $(this).attr("opt").toLowerCase() && (C = !0)
                    }),
                    !C)) {
                        fnopenAlertPop("'\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988' \uc635\uc158\uc740 'SBW \ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    var F = !1;
                    if (-1 < location.href.indexOf("MQJJ5ACD2-A") || -1 < location.href.indexOf("MQJJ5ADD2-A") || -1 < location.href.indexOf("MQJJ52CD2-A") || -1 < location.href.indexOf("MQJJ52DD2-A"))
                        if ("hud" == b.toLowerCase() || "kre" == b.toLowerCase() || "sct" == b.toLowerCase())
                            if ($(".box_u:eq(0) .box_l.on").each(function() {
                                "uvo" == $(this).attr("opt").toLowerCase() && (F = !0)
                            }),
                            !F) {
                                "hud" == b.toLowerCase() ? d = "'\ud5e4\ub4dc\uc5c5 \ub514\uc2a4\ud50c\ub808\uc774' \uc635\uc158" : "kre" == b.toLowerCase() ? d = "'KRELL \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc' \uc635\uc158" : "sct" == b.toLowerCase() && (d = "'\uc2a4\ub9c8\ud2b8\ucee4\ub125\ud2b8' \uc635\uc158");
                                fnopenAlertPop(d + "\uc740 '10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                                return
                            }
                    var X = !1
                      , Y = !1;
                    if (-1 < location.href.indexOf("JRJS4CK33-A") && "rrr" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "mnt" == $(this).attr("opt").toLowerCase() && (X = !0);
                        "r19" == $(this).attr("opt").toLowerCase() && (Y = !0)
                    }),
                    !X || !Y)) {
                        fnopenAlertPop("'\uc2a4\ud3ec\ud2f0 \uceec\ub809\uc158' \uc635\uc158\uc740 '\ubaa8\ub2c8\ud130\ub9c1 \ud329'\uc635\uc158\uacfc '19\uc778\uce58 \ud720 \x26 \ud0c0\uc774\uc5b4'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    var t = !1;
                    if (-1 < location.href.indexOf("DBJS4AA35-A")) {
                        if ("dwp" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                            if ("r16" == $(this).attr("opt").toLowerCase() || "sty" == $(this).attr("opt").toLowerCase())
                                t = !0
                        }),
                        !t)) {
                            fnopenAlertPop("'\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988' \uc635\uc158\uc740 '16\uc778\uce58 \ud720'\uc635\uc158 \ub610\ub294 '\uc2a4\ud0c0\uc77c'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                            return
                        }
                        if ("uvo" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                            "pis" == $(this).attr("opt").toLowerCase() && (t = !0)
                        }),
                        !t)) {
                            fnopenAlertPop("'10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158' \uc635\uc158\uc740 '\ubc84\ud2bc\uc2dc\ub3d9 \ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                            return
                        }
                    }
                    if (-1 < location.href.indexOf("DBJS4AC35-A") || -1 < location.href.indexOf("DBJS4AD35-A") || -1 < location.href.indexOf("DBJS5BMD5-A"))
                        if ("uvo3" == b.toLowerCase() || "uvo2" == b.toLowerCase())
                            if ($(".box_u:eq(0) .box_l.on").each(function() {
                                "uvo" == $(this).attr("opt").toLowerCase() && (t = !0)
                            }),
                            !t) {
                                "uvo3" == b.toLowerCase() ? d = "'10.25\uc778\uce58 \ud074\ub7ec\uc2a4\ud130' \uc635\uc158" : "uvo2" == b.toLowerCase() && (d = "'KRELL \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc' \uc635\uc158");
                                fnopenAlertPop(d + "\uc740 '10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                                return
                            }
                    w = !1;
                    if (-1 < location.href.indexOf("TMJC5AG3C") && "cvn" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "pis1" == $(this).attr("opt").toLowerCase() && (w = !0)
                    }),
                    !w)) {
                        fnopenAlertPop("'\ucee8\ube44\ub2c8\uc5b8\uc2a4' \uc635\uc158\uc740 '\ubc84\ud2bc\uc2dc\ub3d9 PACK'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    var n = !1;
                    if (-1 < location.href.indexOf("SUJJ5AAD4-A") || -1 < location.href.indexOf("SUJJ51AD4-A"))
                        if ("uvo" == b.toLowerCase() || "sty" == b.toLowerCase())
                            if ($(".box_u:eq(0) .box_l.on").each(function() {
                                "cvn" == $(this).attr("opt").toLowerCase() && (n = !0)
                            }),
                            !n) {
                                "uvo" == b.toLowerCase() ? d = "'10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158' \uc635\uc158" : "sty" == b.toLowerCase() && (d = "'\uc2a4\ud0c0\uc77c' \uc635\uc158");
                                fnopenAlertPop(d + "\uc740 '\ucee8\ube44\ub2c8\uc5b8\uc2a4'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                                return
                            }
                    if (-1 < location.href.indexOf("SUJJ5ABD4-A") || -1 < location.href.indexOf("SUJJ51BD4-A")) {
                        if ("hte" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                            "uvo" == $(this).attr("opt").toLowerCase() && (n = !0)
                        }),
                        !n)) {
                            fnopenAlertPop("'\ud558\uc774\ud14c\ud06c' \uc635\uc158\uc740 '10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                            return
                        }
                        if ("bos" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                            "sty" == $(this).attr("opt").toLowerCase() && (n = !0)
                        }),
                        $(".box_u:eq(0) .box_l.on").each(function() {
                            "uvo" == $(this).attr("opt").toLowerCase() && (seltos2Op = !0)
                        }),
                        !n)) {
                            fnopenAlertPop("'Bose \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc \ud329'\uc635\uc158\uc740 '10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uacfc '\uc2a4\ud0c0\uc77c'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                            return
                        }
                    }
                    if (-1 < location.href.indexOf("SUJJ5ADD4-A") || -1 < location.href.indexOf("SUJJ5ADDG-A") || -1 < location.href.indexOf("SUJJ51DD4-A") || -1 < location.href.indexOf("SUJJ51DD5-A"))
                        if ("hte" == b.toLowerCase() || "bos" == b.toLowerCase())
                            if ($(".box_u:eq(0) .box_l.on").each(function() {
                                "uvo" == $(this).attr("opt").toLowerCase() && (n = !0)
                            }),
                            !n) {
                                "hte" == b.toLowerCase() ? d = "'\ud558\uc774\ud14c\ud06c' \uc635\uc158" : "bos" == b.toLowerCase() && (d = "'Bose \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc \ud329' \uc635\uc158");
                                fnopenAlertPop(d + "\uc740 '10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                                return
                            }
                    var O = !1;
                    if (-1 < location.href.indexOf("KPJG7AC32-A") || -1 < location.href.indexOf("KPJG7AE32-A") || -1 < location.href.indexOf("KPJG71C32-A") || -1 < location.href.indexOf("KPJG71E32-A") || -1 < location.href.indexOf("KPJG9AC32-A") || -1 < location.href.indexOf("KPJG91C32-A") || -1 < location.href.indexOf("KPJGBAC32-A") || -1 < location.href.indexOf("KPJGB1C32-A") || -1 < location.href.indexOf("KPJG9AB32-A") || -1 < location.href.indexOf("KPJG91B32-A") || -1 < location.href.indexOf("KPJGBAB32-A") || -1 < location.href.indexOf("KPJGB1B32-A"))
                        if ("mnt" == b.toLowerCase() || "kre" == b.toLowerCase() || "sct" == b.toLowerCase())
                            if ($(".box_u:eq(0) .box_l.on").each(function() {
                                "uvo" == $(this).attr("opt").toLowerCase() && (O = !0)
                            }),
                            !O) {
                                "mnt" == b.toLowerCase() ? d = "'\ubaa8\ub2c8\ud130\ub9c1\ud329' \uc635\uc158" : "kre" == b.toLowerCase() ? d = "'KRELL \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc' \uc635\uc158" : "sct" == b.toLowerCase() && (d = "'\uc2a4\ub9c8\ud2b8 \ucee4\ub125\ud2b8' \uc635\uc158");
                                fnopenAlertPop(d + "\uc740 '12.3\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                                return
                            }
                    var P = !1
                      , W = !1;
                    if ((-1 < location.href.indexOf("RKA-KAA") || -1 < location.href.indexOf("RKA-KAB") || -1 < location.href.indexOf("RKA-KAC")) && "rspa" == b.toLowerCase()) {
                        $(".box_u:eq(0) .box_l.on").each(function() {
                            "mnt" == $(this).attr("opt").toLowerCase() && (P = !0);
                            "uvo" == $(this).attr("opt").toLowerCase() && (W = !0);
                            if (-1 < location.href.indexOf("KPJG7AD32-A") || -1 < location.href.indexOf("KPJG71D32-A") || -1 < location.href.indexOf("KPJG9AD32-A") || -1 < location.href.indexOf("KPJG91D32-A") || -1 < location.href.indexOf("KPJGBAD32-A") || -1 < location.href.indexOf("KPJGB1D32-A"))
                                W = !0
                        });
                        if (!P) {
                            fnopenAlertPop("'\uc6d0\uaca9 \uc2a4\ub9c8\ud2b8 \uc8fc\ucc28 \ubcf4\uc870'\ub294 '\ubaa8\ub2c8\ud130\ub9c1 \ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                            return
                        }
                        if (!W) {
                            fnopenAlertPop("'\uc6d0\uaca9 \uc2a4\ub9c8\ud2b8 \uc8fc\ucc28 \ubcf4\uc870'\ub294 '12.3\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                            return
                        }
                    }
                    var Q = !1;
                    if (-1 < location.href.indexOf("CKJS4CC36-A") && "pfm" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "sty" == $(this).attr("opt").toLowerCase() && (Q = !0)
                    }),
                    !Q)) {
                        fnopenAlertPop("'\ud37c\ud3ec\uba3c\uc2a4' \uc635\uc158\uc740 '\uc2a4\ud0c0\uc77c'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    var y = !1;
                    if (-1 < location.href.indexOf("GLJS4AA31-A") || -1 < location.href.indexOf("GLJS4BA31-A") || -1 < location.href.indexOf("GLJS49A31-A"))
                        if ("dwp" == b.toLowerCase() || "sty" == b.toLowerCase())
                            if ($(".box_u:eq(0) .box_l.on").each(function() {
                                "avnc" == $(this).attr("opt").toLowerCase() && (y = !0)
                            }),
                            !y) {
                                "dwp" == b.toLowerCase() ? d = "'\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988' \uc635\uc158" : "sty" == b.toLowerCase() && (d = "'\uc2a4\ud0c0\uc77c' \uc635\uc158");
                                fnopenAlertPop(d + "\uc740 '\ub0b4\ube44\uac8c\uc774\uc158\ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                                return
                            }
                    if (-1 < location.href.indexOf("GLJS4BB31-A") || -1 < location.href.indexOf("GLJS4BC31-A") || -1 < location.href.indexOf("GLJS4AB31-A") || -1 < location.href.indexOf("GLJS4AC31-A") || -1 < location.href.indexOf("GLJS49B31-A") || -1 < location.href.indexOf("GLJS49C31-A"))
                        if ("prm1" == b.toLowerCase() || "prm2" == b.toLowerCase())
                            if ($(".box_u:eq(0) .box_l.on").each(function() {
                                "cpt" == $(this).attr("opt").toLowerCase() && (y = !0)
                            }),
                            !y) {
                                fnopenAlertPop("'\ud504\ub9ac\ubbf8\uc5c4'\uc635\uc158\uc740 '\ucef4\ud3ec\ud2b8'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                                return
                            }
                    var R = !1;
                    if (-1 < location.href.indexOf("GLRS46F31-A") && ("dwp" == b.toLowerCase() || "cpt1" == b.toLowerCase()) && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "uvo" == $(this).attr("opt").toLowerCase() && (R = !0)
                    }),
                    !R)) {
                        "dwp" == b.toLowerCase() ? d = "'\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988' \uc635\uc158" : "cpt1" == b.toLowerCase() && (d = "'\ucef4\ud3ec\ud2b8 + \uc804\uc790\uc2dd \ub8f8\ubbf8\ub7ec(ECM)+ \ud558\uc774\ud328\uc2a4 \uc790\ub3d9\uacb0\uc81c \uc2dc\uc2a4\ud15c' \uc635\uc158");
                        fnopenAlertPop(d + "\uc740 '\ub0b4\ube44\uac8c\uc774\uc158\ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    var S = !1;
                    if (-1 < location.href.indexOf("GLTS46E31-A") && ("dwp" == b.toLowerCase() || "cvna" == b.toLowerCase()) && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "uvo" == $(this).attr("opt").toLowerCase() && (S = !0)
                    }),
                    !S)) {
                        "dwp" == b.toLowerCase() ? d = "'\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988 + \ud30c\ub178\ub77c\ubbf9 \ucee4\ube0c\ub4dc \ub514\uc2a4\ud50c\ub808\uc774 + \uc288\ud37c\ube44\uc804 \ud074\ub7ec\uc2a4\ud130(12.3\uc778\uce58 \ud480\uc0ac\uc774\uc988 \uce7c\ub77cTFT LCD)' \uc635\uc158" : "cvna" == b.toLowerCase() && (d = "'\uc6b4\uc804\uc11d \ucee8\ube44\ub2c8\uc5b8\uc2a4 + \uc804\uc790\uc2dd \ub8f8\ubbf8\ub7ec(ECM) + \ud558\uc774\ud328\uc2a4 \uc790\ub3d9\uacb0\uc81c \uc2dc\uc2a4\ud15c' \uc635\uc158");
                        fnopenAlertPop(d + "\uc740 '12.3\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158 + \ubc84\ud2bc\uc2dc\ub3d9 \uc2a4\ub9c8\ud2b8\ud0a4 \uc2dc\uc2a4\ud15c(\uc6d0\uaca9\uc2dc\ub3d9\ud3ec\ud568)'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    var T = !1;
                    if ((-1 < location.href.indexOf("JAJH5AI36-A") || -1 < location.href.indexOf("JAJH5AD36-A") || -1 < location.href.indexOf("JAJH5AL36-A") || -1 < location.href.indexOf("JAJV5AV36-A") || -1 < location.href.indexOf("JAJV5AV3S-A")) && "dwp2" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "dwp1" == $(this).attr("opt").toLowerCase() && (T = !0)
                    }),
                    !T)) {
                        fnopenAlertPop("'\ub4dc\ub77c\uc774\ube0c\uc640\uc774\uc988\u2161' \uc635\uc158\uc740 '\ub4dc\ub77c\uc774\ube0c\uc640\uc774\uc988\u2160' \uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    p = !1;
                    if (-1 < location.href.indexOf("DLJS4CC33-A") && "uvo" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "pis" == $(this).attr("opt").toLowerCase() && (p = !0)
                    }),
                    !p)) {
                        fnopenAlertPop("'10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158' \uc635\uc158\uc740 '\ubc84\ud2bc\uc2dc\ub3d9 \ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    p = !1;
                    if (-1 < location.href.indexOf("DLJS4AC33-A") && "uvo" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "pis" == $(this).attr("opt").toLowerCase() && (p = !0)
                    }),
                    !p)) {
                        fnopenAlertPop("'10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158' \uc635\uc158\uc740 '\ubc84\ud2bc\uc2dc\ub3d9 \ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    var q = !1;
                    if (-1 < location.href.indexOf("DLRS46B33-A")) {
                        if ("dwp" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                            "sbw" == $(this).attr("opt").toLowerCase() && (q = !0)
                        }),
                        !q)) {
                            fnopenAlertPop("'\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988' \uc635\uc158\uc740 'SBW \ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                            return
                        }
                        if ("dsa" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                            "cyn" == $(this).attr("opt").toLowerCase() && (q = !0)
                        }),
                        !q)) {
                            fnopenAlertPop("'8\uc778\uce58 \ub514\uc2a4\ud50c\ub808\uc774 \uc624\ub514\uc624' \uc635\uc158\uc740 '\ucee8\ube44\ub2c8\uc5b8\uc2a4'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                            return
                        }
                    }
                    q = !1;
                    if (-1 < location.href.indexOf("DLRS46C33-A") && "dwp" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "sbw" == $(this).attr("opt").toLowerCase() && (q = !0)
                    }),
                    !q)) {
                        fnopenAlertPop("'\ub4dc\ub77c\uc774\ube0c \uc640\uc774\uc988' \uc635\uc158\uc740 'SBW \ud329'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    var U = !1;
                    if (-1 < location.href.indexOf("DLHS46E33") || -1 < location.href.indexOf("DLHS46F33"))
                        if ("kel" == b.toLowerCase() || "sct" == b.toLowerCase() || "scta" == b.toLowerCase() || "hud" == b.toLowerCase())
                            if ($(".box_u:eq(0) .box_l.on").each(function() {
                                "uvo" == $(this).attr("opt").toLowerCase() && (U = !0)
                            }),
                            !U) {
                                "kel" == b.toLowerCase() ? d = "'KRELL \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc' \uc635\uc158" : "sct" == b.toLowerCase() ? d = "'\uc2a4\ub9c8\ud2b8 \ucee4\ub125\ud2b8' \uc635\uc158" : "scta" == b.toLowerCase() ? d = "'\uc2a4\ub9c8\ud2b8 \ucee4\ub125\ud2b8 + \ubcf4\uc870 \ubc30\ud130\ub9ac' \uc635\uc158" : "hud" == b.toLowerCase() && (d = "'\ud5e4\ub4dc\uc5c5 \ub514\uc2a4\ud50c\ub808\uc774' \uc635\uc158");
                                fnopenAlertPop(d + "\uc740 '10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                                return
                            }
                    var V = !1;
                    if (-1 < location.href.indexOf("MQJJ59C32-A") || -1 < location.href.indexOf("MQJJ59D32-A") || -1 < location.href.indexOf("MQJJ59CA2-A") || -1 < location.href.indexOf("MQJJ59DA2-A"))
                        if ("hud" == b.toLowerCase() || "kre" == b.toLowerCase() || "sct" == b.toLowerCase())
                            if ($(".box_u:eq(0) .box_l.on").each(function() {
                                "nav" == $(this).attr("opt").toLowerCase() && (V = !0)
                            }),
                            !V) {
                                "hud" == b.toLowerCase() ? d = "'\ud5e4\ub4dc\uc5c5 \ub514\uc2a4\ud50c\ub808\uc774' \uc635\uc158" : "kre" == b.toLowerCase() ? d = "'KRELL \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc' \uc635\uc158" : "sct" == b.toLowerCase() && (d = "'\uc2a4\ub9c8\ud2b8\ucee4\ub125\ud2b8' \uc635\uc158");
                                fnopenAlertPop(d + "\uc740 '10.25\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                                return
                            }
                    if ((-1 < location.href.indexOf("NQL-ANQ") || -1 < location.href.indexOf("NQL-BNQ") || -1 < location.href.indexOf("NQH-NQA")) && "prm" == b.toLowerCase() && -1 < location.href.indexOf("BRI")) {
                        fnopenAlertPop("STEP2\uc5d0\uc11c '\ube0c\ub77c\uc6b4 \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc\n'\ud504\ub9ac\ubbf8\uc5c4'\uc635\uc158\uc740 \uc120\ud0dd\ud558\uc2e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", !1);
                        return
                    }
                    var H = !1;
                    if (-1 < location.href.indexOf("NQL") && ("hte" == b.toLowerCase() || "nhte" == b.toLowerCase()) && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "nav" == $(this).attr("opt").toLowerCase() && (H = !0)
                    }),
                    !H)) {
                        "hte" == b.toLowerCase() ? d = "'\ud558\uc774\ud14c\ud06c' \uc635\uc158" : "nhte" == b.toLowerCase() && (d = "'\ud558\uc774\ud14c\ud06c(\ub514\uc9c0\ud138\ud0a4 \ubbf8\uc801\uc6a9)' \uc635\uc158");
                        fnopenAlertPop(d + "\uc740 '12.3\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    var I = !1;
                    if (-1 < location.href.indexOf("NQJJ5ABD1-A") || -1 < location.href.indexOf("NQJJ5ACD1-A") || -1 < location.href.indexOf("NQJJ5ADD1-A") || -1 < location.href.indexOf("NQJJ51B31-A") || -1 < location.href.indexOf("NQJJ51C31-A") || -1 < location.href.indexOf("NQJJ51D31-A"))
                        if ("mnt" == b.toLowerCase() || "kre" == b.toLowerCase())
                            if ($(".box_u:eq(0) .box_l.on").each(function() {
                                "nav" == $(this).attr("opt").toLowerCase() && (I = !0)
                            }),
                            !I) {
                                "mnt" == b.toLowerCase() ? d = "'\ubaa8\ub2c8\ud130\ub9c1 \ud329' \uc635\uc158" : "kre" == b.toLowerCase() && (d = "'KRELL \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc' \uc635\uc158");
                                fnopenAlertPop(d + "\uc740 '12.3\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                                return
                            }
                    var J = !1;
                    if ((-1 < location.href.indexOf("NQJJ5ACD1-A") || -1 < location.href.indexOf("NQJJ5AED1-A") || -1 < location.href.indexOf("NQJJ51C31-A") || -1 < location.href.indexOf("NQJJ51C31-A")) && "prm" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "sty" == $(this).attr("opt").toLowerCase() && (J = !0)
                    }),
                    !J)) {
                        fnopenAlertPop("'\ud504\ub9ac\ubbf8\uc5c4' \uc635\uc158\uc740 '\uc2a4\ud0c0\uc77c'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    var K = !1;
                    if ((-1 < location.href.indexOf("NQJJ5AAD1-A") || -1 < location.href.indexOf("NQJJ51A31-A")) && "nav" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "cvn" == $(this).attr("opt").toLowerCase() && (K = !0)
                    }),
                    !K)) {
                        fnopenAlertPop("'12.3\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158' \uc635\uc158\uc740 '\ucee8\ube44\ub2c8\uc5b8\uc2a4'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    var L = !1;
                    if (-1 < location.href.indexOf("NQJJ59B31-A") || -1 < location.href.indexOf("NQJJ59C31-A") || -1 < location.href.indexOf("NQJJ59D31-A"))
                        if ("hte" == b.toLowerCase() || "nhte" == b.toLowerCase() || "mnt" == b.toLowerCase() || "kre" == b.toLowerCase())
                            if ($(".box_u:eq(0) .box_l.on").each(function() {
                                "nav" == $(this).attr("opt").toLowerCase() && (L = !0)
                            }),
                            !L) {
                                "hte" == b.toLowerCase() ? d = "'\ud558\uc774\ud14c\ud06c' \uc635\uc158" : "nhte" == b.toLowerCase() ? d = "'\ud558\uc774\ud14c\ud06c(\ub514\uc9c0\ud138\ud0a4 \ubbf8\uc801\uc6a9)' \uc635\uc158" : "mnt" == b.toLowerCase() ? d = "'\ubaa8\ub2c8\ud130\ub9c1 \ud329' \uc635\uc158" : "kre" == b.toLowerCase() && (d = "'KRELL \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc' \uc635\uc158");
                                fnopenAlertPop(d + "\uc740 '12.3\uc778\uce58 \ub0b4\ube44\uac8c\uc774\uc158'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                                return
                            }
                    var M = !1;
                    if ((-1 < location.href.indexOf("NQJJ59C31-A") || -1 < location.href.indexOf("NQJJ59E31-A")) && "prm" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "sty" == $(this).attr("opt").toLowerCase() && (M = !0)
                    }),
                    !M)) {
                        fnopenAlertPop("'\ud504\ub9ac\ubbf8\uc5c4' \uc635\uc158\uc740 '\uc2a4\ud0c0\uc77c'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    var N = !1;
                    if (-1 < location.href.indexOf("CVJJ5VD31") || -1 < location.href.indexOf("CVJJ5VB31"))
                        if ("hte" == b.toLowerCase() || "mda" == b.toLowerCase())
                            if ($(".box_u:eq(0) .box_l.on").each(function() {
                                "cvn" == $(this).attr("opt").toLowerCase() && (N = !0)
                            }),
                            !N) {
                                "hte" == b.toLowerCase() ? d = "'\ud558\uc774\ud14c\ud06c' \uc635\uc158" : "mda" == b.toLowerCase() && (d = "'\uba54\ub9ac\ub514\uc548 \ud504\ub9ac\ubbf8\uc5c4 \uc0ac\uc6b4\ub4dc' \uc635\uc158");
                                fnopenAlertPop(d + "\uc740 '\ucee8\ube44\ub2c8\uc5b8\uc2a4'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                                return
                            }
                    var G = !1;
                    if (-1 < location.href.indexOf("CKJS4CC37-A") && "pfm" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "sty" == $(this).attr("opt").toLowerCase() && (G = !0)
                    }),
                    !G)) {
                        fnopenAlertPop("'\ud37c\ud3ec\uba3c\uc2a4' \uc635\uc158\uc740 '\uc2a4\ud0c0\uc77c'\uc635\uc158\uc744 \uc120\ud0dd\ud558\uc154\uc57c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("YWJJ5AC33-A") || -1 < location.href.indexOf("YWJJ5BC33-A")) && "srf" == b.toLowerCase() && (-1 < location.href.indexOf("UD_ABP") || -1 < location.href.indexOf("UD_ARG") || -1 < location.href.indexOf("BEG_ABP") || -1 < location.href.indexOf("EU3_UD") || -1 < location.href.indexOf("MYW_ABP") || -1 < location.href.indexOf("AUD") || -1 < location.href.indexOf("BUD") || -1 < location.href.indexOf("BBE") || -1 < location.href.indexOf("UEU"))) {
                        fnopenAlertPop("STEP 2\uc5d0\uc11c \ud22c\ud1a4 \uceec\ub7ec \uc120\ud0dd \uc2dc \uc120\ub8e8\ud504 \uc635\uc158\uc740 \uc120\ud0dd\ud558\uc2e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", !1);
                        return
                    }
                    if (!(!(-1 < location.href.indexOf("CKJS41C35-A") || -1 < location.href.indexOf("CKJS4AC35-A")) || -1 < location.href.indexOf("IN_RED_STINGER") || "pfm" != b.toLowerCase() && "pfmu" != b.toLowerCase())) {
                        fnopenAlertPop("STEP 2\uc5d0\uc11c '\ub2e4\ud06c \ub808\ub4dc\ud329' \uc774\uc678\uc758 \ub0b4\uc7a5\uceec\ub7ec \uc120\ud0dd \uc2dc, '\ud37c\ud3ec\uba3c\uc2a4(\ub2e4\ud06c \ub808\ub4dc\ud329)' \uc635\uc158\uc740 \uc120\ud0dd\ud558\uc2e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("PSJC5AE36-A") || -1 < location.href.indexOf("PSJC51SD6-A")) && "styu" == b.toLowerCase() && -1 < location.href.indexOf("BNF_IN_SOUL")) {
                        fnopenAlertPop("STEP 2\uc5d0\uc11c \ube0c\ub77c\uc6b4\ud22c\ud1a4 \ub0b4\uc7a5\uceec\ub7ec \uc120\ud0dd \uc2dc \uc2a4\ud0c0\uc77c UP \uc635\uc158\uc744 \uc120\ud0dd\ud558\uc2e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("SWJC5ADD1-A") || -1 < location.href.indexOf("SWJC5VC31-A") || -1 < location.href.indexOf("SWJC5VC33-A") || -1 < location.href.indexOf("SWJC5ADD3-A")) && "srf" == b.toLowerCase() && (-1 < location.href.indexOf("AH1") || -1 < location.href.indexOf("SE4") || -1 < location.href.indexOf("SE2") || -1 < location.href.indexOf("AH5"))) {
                        fnopenAlertPop("\u203b \ud22c\ud1a4\ub8e8\ud504 \uc120\ud0dd \uc2dc, \uc120\ub8e8\ud504\uc640 \uc911\ubcf5\uc120\ud0dd\uc774 \ubd88\uac00\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if (-1 < location.href.indexOf("TMJC5AG3A-C") && "spc" == b.toLowerCase() && !(-1 < location.href.indexOf("ORG_IN_RAY"))) {
                        fnopenAlertPop("STEP 2\uc5d0\uc11c '\uc624\ub80c\uc9c0 \uc2a4\ud398\uc15c \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc\uc5d0\ub9cc\n'\uc2a4\ud398\uc15c Pack'\uc744 \uc120\ud0dd\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("SUJJ5ADD4-A") || -1 < location.href.indexOf("SUJJ51DD4-A")) && "srf" == b.toLowerCase() && (-1 < location.href.indexOf("GAG") || -1 < location.href.indexOf("GAA"))) {
                        fnopenAlertPop("STEP2\uc5d0\uc11c \ud22c\ud1a4\ub8e8\ud504 \uc120\ud0dd \uc2dc, \uc120\ub8e8\ud504\uc640 \uc911\ubcf5\uc120\ud0dd\uc774 \ubd88\uac00\ud569\ub2c8\ub2e4.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("SUJJ5ADD4-A") || -1 < location.href.indexOf("SUJJ5ADDG-A") || -1 < location.href.indexOf("SUJJ51DD4-A") || -1 < location.href.indexOf("SUJJ51DD5-A")) && "cptb" == b.toLowerCase() && (-1 < location.href.indexOf("SEL_GR") || -1 < location.href.indexOf("SEL_BL") || -1 < location.href.indexOf("SEL_PL"))) {
                        fnopenAlertPop("STEP2\uc5d0\uc11c '\ube0c\ub77c\uc6b4 \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc\uc5d0\ub9cc\n'\ud558\uc774\ucef4\ud3ec\ud2b8 + \uac00\uc8fd\uc2dc\ud2b8 + \ube0c\ub77c\uc6b4 \uc778\ud14c\ub9ac\uc5b4'\ub97c \uc120\ud0dd\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("B1ALK1L3G-A") || -1 < location.href.indexOf("B1ALD1L3G-A") || -1 < location.href.indexOf("B1ALS1L3G-A") || -1 < location.href.indexOf("B1ASK1LMG-A") || -1 < location.href.indexOf("B1ASD1LMG-A") || -1 < location.href.indexOf("B1ASS1LMG-A") || -1 < location.href.indexOf("B2ALK1L0G-A") || -1 < location.href.indexOf("B2ALS1L0G-A") || -1 < location.href.indexOf("B1ALK7L0G-A")) && "pls" == b.toLowerCase() && -1 < location.href.indexOf("IN_YF8_BNG")) {
                        fnopenAlertPop("\uc774\uc804\ub2e8\uacc4\uc5d0\uc11c '\ube0c\ub77c\uc6b4 \uc778\ud14c\ub9ac\uc5b4' \uc120\ud0dd \uc2dc\uc5d0\ub9cc\n'\ud50c\ub7ec\uc2a4\ud328\ud0a4\uc9c0'\ub97c \uc120\ud0dd\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", !1);
                        return
                    }
                    (-1 < location.href.indexOf("CKJS4AC32-A") || -1 < location.href.indexOf("CKJS41C33-A") || -1 < location.href.indexOf("CKJS4AC34-A") || -1 < location.href.indexOf("CKJS41C34-A") || -1 < location.href.indexOf("CKJS41CA4-A") || -1 < location.href.indexOf("CKJS4ACA4-A") || -1 < location.href.indexOf("CKJS41C35-A") || -1 < location.href.indexOf("CKJS4AC35-A")) && ("pfm" == b.toLowerCase() || "pfmu" == b.toLowerCase()) && -1 < location.href.indexOf("IN_RED_STINGER") && $(".box_u:eq(0) .box_l").each(function() {
                        "awd" == $(this).attr("opt").toLowerCase() && ($(this).attr("price", "2260000"),
                        $(this).find(".price").text("2,260,000\uc6d0"))
                    });
                    -1 < location.href.indexOf("DBJS5BMD5-A") && "spe" == b.toLowerCase() && $(".box_u:eq(0) .box_l").each(function() {
                        "uvo" == $(this).attr("opt").toLowerCase() && ($(this).attr("price", "650000"),
                        $(this).find(".price").text("650,000\uc6d0"))
                    });
                    if (-1 < location.href.indexOf("DBJS4AJ34-A") && "spe" == b.toLowerCase()) {
                        var Z = !1;
                        $(".box_u:eq(0) .box_l.on").each(function() {
                            "cpt" == $(this).attr("opt").toLowerCase() && (Z = !0)
                        });
                        Z && $(".box_u:eq(0) .box_l").each(function() {
                            "uvo" == $(this).attr("opt").toLowerCase() && ($(this).attr("price", "700000"),
                            $(this).find(".price").text("700,000\uc6d0"));
                            "uvo2" == $(this).attr("opt").toLowerCase() && ($(this).attr("price", "1000000"),
                            $(this).find(".price").text("1,000,000\uc6d0"))
                        })
                    }
                    if ((-1 < location.href.indexOf("B1ALS1J0L-A") || -1 < location.href.indexOf("B1ALS1J0G-A") || -1 < location.href.indexOf("B1ALS1K0G-A") || -1 < location.href.indexOf("B1ALS1L0G-A") || -1 < location.href.indexOf("B1ALK1J0L-A") || -1 < location.href.indexOf("B1ALK1J0G-A") || -1 < location.href.indexOf("B1ALK1K0G-A") || -1 < location.href.indexOf("B1ALK1L0G-A") || -1 < location.href.indexOf("B1ALD1J0L-A") || -1 < location.href.indexOf("B1ALD1J0G-A") || -1 < location.href.indexOf("B1ALD1K0G-A") || -1 < location.href.indexOf("B1ALD1L0G-A") || -1 < location.href.indexOf("B1YLK1M0G-A") || -1 < location.href.indexOf("B16LK1J0G-A") || -1 < location.href.indexOf("B1FLK1J0G-A") || -1 < location.href.indexOf("B1FLK1J0W-A")) && "5sw" == b.toLowerCase()) {
                        fnopenAlertPop(" \u203b '5\ub2e8 \uc790\ub3d9\ubcc0\uc18d\uae30'\ub294 '\uc790\ub3d9' \ubcc0\uc18d\uae30 \ucc28\ub7c9\uc5d0\uc11c \uc120\ud0dd\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc785\ub2c8\ub2e4.", !1);
                        return
                    }
                    if ((-1 < location.href.indexOf("B13LK1J0P-A") || -1 < location.href.indexOf("B17LK1J0G-A") || -1 < location.href.indexOf("B1BLK1J0G-A") || -1 < location.href.indexOf("B1BLK1J0P-A") || -1 < location.href.indexOf("B1BLK1M0G-A") || -1 < location.href.indexOf("B1BLK1M0L-A") || -1 < location.href.indexOf("B1BLK1M0P-A") || -1 < location.href.indexOf("B1BLS1J0G-A") || -1 < location.href.indexOf("B1DLK1J0G-A") || -1 < location.href.indexOf("B1DLK1J0P-A") || -1 < location.href.indexOf("B1DLK1J0S-A") || -1 < location.href.indexOf("B1DLK1M0G-A") || -1 < location.href.indexOf("B1DLK1M0L-A") || -1 < location.href.indexOf("B1DLK1M0P-A") || -1 < location.href.indexOf("B1DLS1J0G-A") || -1 < location.href.indexOf("B1QLK1J0G-A") || -1 < location.href.indexOf("B1SLK1J0A-A") || -1 < location.href.indexOf("B1SLK1J0G-A") || -1 < location.href.indexOf("B1SLK1M0A-A") || -1 < location.href.indexOf("B1SLK1M0G-A") || -1 < location.href.indexOf("B1ULK1J0G-A")) && "5sw" == b.toLowerCase()) {
                        fnopenAlertPop(" \u203b '5\ub2e8 \uc790\ub3d9\ubcc0\uc18d\uae30'\ub294 '\uc790\ub3d9' \ubcc0\uc18d\uae30 \ucc28\ub7c9\uc5d0\uc11c \uc120\ud0dd\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc785\ub2c8\ub2e4.", !1);
                        return
                    }
                    var aa = !1;
                    if ((-1 < location.href.indexOf("B1BLK1J0G-A") || -1 < location.href.indexOf("B1BLK1J0P-A") || -1 < location.href.indexOf("B1DLK1J0S-A") || -1 < location.href.indexOf("B1DLK1J0P-A") || -1 < location.href.indexOf("B1SLK1J0G-A") || -1 < location.href.indexOf("B1SLK1J0A-A")) && "nav" == b.toLowerCase() && ($(".box_u:eq(0) .box_l.on").each(function() {
                        "5sw" == $(this).attr("opt").toLowerCase() && (aa = !0)
                    }),
                    !aa)) {
                        fnopenAlertPop("'\ub0b4\ube44\uac8c\uc774\uc158\x26\ud558\uc774\ud328\uc2a4 \uc790\ub3d9\uacb0\uc81c \uc2dc\uc2a4\ud15c'\uc740 '5\ub2e8 \uc790\ub3d9\ubcc0\uc18d\uae30' \uc120\ud0dd \uc2dc \uc120\ud0dd\ud560 \uc218 \uc788\ub294 \uc635\uc158\uc785\ub2c8\ub2e4.", !1);
                        return
                    }
                    0 < $(".box_u:eq(1) .box_l").length && ("undefined" != typeof c.attr("optionname") ? $(".box_u:eq(1) .box_l.on").each(function() {
                        l = !1;
                        k = c.attr("tuonConflict").split(",");
                        for (var b = 0; k.length > b; b++)
                            k[b].toLowerCase() == $(this).attr("tuon").toLowerCase() && (l = !0);
                        l || (x = $(this).attr("tuonName"),
                        f = !1)
                    }) : $(".box_u:eq(0) .box_l.on").each(function() {
                        l = !1;
                        k = $(this).attr("tuonConflict").split(",");
                        for (var b = 0; k.length > b; b++)
                            k[b].toLowerCase() == c.attr("tuon").toLowerCase() && (l = !0);
                        l || (x = $(this).attr("optionName"),
                        f = !1)
                    }));
                    $(".box_u:eq(0) .box_l").each(function() {
                        h[$(this).attr("opt")] = $(this).attr("optionname")
                    });
                    $(".box_u:eq(1) .box_l").each(function() {
                        h[$(this).attr("tuon")] = $(this).attr("tuonname")
                    });
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
                updateBuildOption()
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
            updateBuildColor()
        });
        m.eq(0).find("li:first \x3e a").trigger("click");
        m.eq(1).find("li:first \x3e a").trigger("click")
    }
    )();
    c();
    var m = 800
      , r = 800;
    $(window).resize(function() {
        if ($(window).height() != m || $(window).width() != r) {
            m = $(window).height();
            r = $(window).width();
            document.body.style.overflow = "hidden";
            var a = $(window).width();
            document.body.style.overflow = "";
            repeatNum = 9 > IE_VER && !1 !== IE_VER ? 4 : 767 < a ? 1024 > a ? 3 : 4 : 2;
            noCarDivHide(repeatNum)
        }
    }).resize();
    if (0 < $(".build_graph").length)
        if ($(".build_graph").offset().top < $(window).height() / 3 * 2)
            setTimeout(a, 1E3);
        else
            $(window).on("scroll", a);
    var v = new OpenDimPop($("#paymentGuide"))
      , w = new OpenDimPop($("#pointGuide"));
    new OpenDimPop($("#emailLayer"));
    var C = new OpenDimPop($("#disabledGuide"));
    new OpenDimPop($("#disabilityGuide"));
    var ca = new OpenDimPop($("#redpointGuide"))
      , da = new OpenDimPop($("#costPop1"))
      , ea = new OpenDimPop($("#costPop2"))
      , fa = new OpenDimPop($("#costPop3"));

    (function() {
        $(".pay_sel .form_select:eq(0)").change(function() {
            $("#transfeeGuH").val("");
            updateRegion($(this).find("option:selected").attr("value"))
        });
        $(".pay_sel .vspace select").change(function() {
            updateTransfee()
        })
    }
    )();
    (function() {
        $(".popup_wrap a.btnCancel, .popup_wrap a.btnSubmit").on("click", function(a) {
            a.stopPropagation();
            a.preventDefault();
            selectIndex = null;
            $(".emailid_field").val("");
            $(".email_field").removeAttr("readonly");
            $(".email_field").val("");
            compare && compare.closePopup();
            $(this).closest(".popup_wrap").hide();
            $(".dimmed").hide()
        });
        $(".email_sel select").change(function() {
            var a = $(this).find(":selected").val();
            "" == a ? ($(".email_field").removeAttr("readonly"),
            $(".email_field").val("")) : ($(".email_field").attr("readonly", "readonly"),
            $(".email_field").val(a))
        })
    }
    )()
}
  , drivingCenterInit = function() {
    var c = 800
      , a = 800
      , e = 4
      , g = new OpenDimPop($("#drivingCenter"));
    $(window).resize(function() {
        if ($(window).height() != c || $(window).width() != a) {
            c = $(window).height();
            a = $(window).width();
            document.body.style.overflow = "hidden";
            var f = $(window).width();
            document.body.style.overflow = "";
            e = 9 > IE_VER && !1 !== IE_VER ? 4 : 767 < f ? 1024 > f ? 3 : 4 : 2;
            noCarDivHide(e)
        }
    }).resize();
    $(".drivingIntro").on("click", "a.btnLarge", function(a) {
        a.preventDefault();
        g.open()
    });
    $(".car_list").on("click", "a.car_a", function(a) {
        a.stopPropagation();
        a.preventDefault();
        $(this).hasClass("on") ? ($("a.car_a").removeClass("on"),
        $("a.car_a").attr("title", ""),
        $(this).removeClass("on"),
        $(this).attr("title", ""),
        $(".txt_hidden").text("\uc120\ud0dd\ub41c \ucc28\uc885 : ")) : ($("a.car_a").removeClass("on"),
        $("a.car_a").attr("title", ""),
        $(this).addClass("on"),
        $(this).attr("title", "\uc120\ud0dd"),
        a = $(this).find(".car_name").text(),
        $(".txt_hidden").text("\uc120\ud0dd\ub41c \ucc28\uc885 : " + a))
    })
};

var shoppingtoolsCategoryInit = function() {
    var a = $(".car_list")
      , e = $("div.category label")
      , g = 800
      , f = 800
      , l = 4;
    $("div.category input:checkbox").on("click", function(f) {
        f = $(this).attr("id");
        $(this).attr("name");
        f = $("label[for\x3d'" + f + "']").closest("span").index();
        e.eq(f).hasClass("c_on");
        a.hide();
        0 === f ? (e.removeClass("c_on").prev().attr("checked", !1).end().eq(0).addClass("c_on"),
        a.show()) : (e.eq(0).removeClass("c_on").prev().attr("checked", !1),
        c())
    });
    e.on("click", function(f) {
        f = $(this).closest("span").index();
        var g = $(this).hasClass("c_on");
        a.hide();
        g ? 0 === f ? (e.removeClass("c_on").prev().attr("checked", !1).end().eq(f).addClass("c_on"),
        a.show()) : (e.eq(0).removeClass("c_on").prev().attr("checked", !1),
        e.eq(f).addClass("c_on"),
        c()) : c()
    });
    $(window).resize(function() {
        if ($(window).height() != g || $(window).width() != f) {
            g = $(window).height();
            f = $(window).width();
            document.body.style.overflow = "hidden";
            var a = $(window).width();
            document.body.style.overflow = "";
            l = 9 > IE_VER && !1 !== IE_VER ? 4 : 767 < a ? 1024 > a ? 3 : 4 : 2;
            noCarDivHide(l)
        }
    }).resize();
    e.eq(0).triggerHandler("click")
}
  , shoppingToolsGateInit = function() {
    $(".gateCon").on("mouseenter", function() {
        $(".gateCon").removeClass("on");
        $(this).addClass("on")
    });
    $(".gateCon").on("mouseleave", function() {
        $(".gateCon").removeClass("on");
        $(".gateCon:eq(0)").addClass("on")
    })
};
function grapAnimateFnc() {
    function c() {
        var e = $(window).scrollTop() + $(window).height()
          , g = $(".build_graph").offset().top + 100;
        e > g && ($(window).off("scroll", c),
        $(".build_graph .graph").each(function(c, e) {
            c = $(this).find(".rate .num").text();
            e = $(this).height();
            a(this, e, c)
        }))
    }
    function a(a, c, f) {
        function e() {
            var a = (new Date).getTime();
            a = Math.round(f - Math.max((r - a) / 1E3, 0) * m);
            g(a);
            a == f && clearInterval(v)
        }
        function g(a) {
            h.css("background-position", "0px " + c * -a + "px")
        }
        var h = $(a)
          , m = f - 0
          , r = (new Date).getTime() + 1E3;
        var v = setInterval(e, 50);
        e();
        $(window).resize(function(a) {
            c = $(".build_graph .graph").height();
            g(f)
        })
    }
    $(".build_graph .graph").css("background-position", "0px 0px");
    if (0 < $(".build_graph").length)
        if ($(".build_graph").offset().top < $(window).height() / 3 * 2)
            setTimeout(c, 1E3);
        else
            $(window).on("scroll", c)
}
function goInitPage() {
    0 < location.href.indexOf("/build-your-car/simple") ? location.href = "/content/kwcms/kr/ko/shopping-tools/build-your-car/simple.html" : location.href = "/content/kwcms/kr/ko/shopping-tools/build-your-car/detail.html"
}

$(document).ready(function() {
    $(".car_list.disabled .btnLarge").click(function() {
        $(".car_list.disabled .car_l[grade!\x3d" + $(".disabled_search .r_on").attr("grade") + "]").hide();
        var c = $(".car_list.disabled .car_l[grade\x3d" + $(".disabled_search .r_on").attr("grade") + "]").show().length;
        $(".car_list.disabled .pointcolor1").text(c);
        c = 4 - c;
        for (var a = 0; 4 > a; a++) {
            var e = $($(".car_list.disabled .noCar")[a]);
            a < c ? e.show() : e.hide()
        }
    });
    0 < $(".build_trim").length && updateBuildTrim($(".trimselector:visible .box_l.on"))
});
function updateTotalPrice() {
    var c = 0
      , a = $(".totalList .list01 .con");
    c += parseInt(a.attr("price"));
    $(".totalCon .totalFinish .con").find("span:not(.fixed)").remove();
    $(".build_trim");
    $(".totalList .list02 .con");
    a = $(".totalList .list02 .con_exterior");
    var e = $(".totalList .list02 .con_interior");
    c += parseInt(a.attr("price1"));
    c += parseInt(e.attr("price2"));
    $(".build_color");
    e = $(".totalList .list03 .con span");
    for (a = 0; a < e.length; a++)
        $(e[a]).attr("price") && (c += parseInt($(e[a]).attr("price")));
    if (0 < $(".build_option").length)
        for (e = $(".build_option .box_l.on"),
        a = 0; a < e.length; a++) {
            var g = e[a];
            $(g).find("span").text();
            parseInt($(g).attr("price"))
        }
    if (0 < $(".build_tuon").length)
        for (e = $(".build_tuon .box_l.on"),
        a = 0; a < e.length; a++)
            g = e[a],
            $(g).find("span").text(),
            parseInt($(g).attr("price"));
    a = $(".totalList .list04 .con_etc");
    0 < $(".benefitdc").length && (e = parseInt($(".benefitdc").attr("price") || 0),
    c -= e);
    0 < $(".build_trim").length || 0 < $(".build_color").length || 0 < $(".build_option").length || 0 < $(".build_tuon").length ? e = 0 : (e = getCarPrice(c),
    e = c - e);
    0 < $(".transfee").length && (g = parseInt($(".transfee").attr("price") || 0),
    c += g,
    a.append('\x3cspan\x3e\x3cem class\x3d"tit"\x3e\ud0c1\uc1a1\ub8cc\x3c/em\x3e\x3cem class\x3d"txt"\x3e' + g.format() + " \uc6d0\x3c/em\x3e\x3c/span\x3e"));
    0 < e && (c -= e,
    a.append('\x3cspan\x3e\x3cem class\x3d"tit"\x3e\uba74\uc138 \ud560\uc778\x3c/em\x3e\x3cem class\x3d"txt"\x3e\x3ci\x3e-' + e.format() + "\x3c/i\x3e \uc6d0\x3c/em\x3e\x3c/span\x3e"));
    0 < $(".pointdc").length && (e = parseInt($(".pointdc").attr("price") || 0),
    c -= e,
    0 < $(".build_pay").length && a.append('\x3cspan\x3e\x3cem class\x3d"tit"\x3e\ud3ec\uc778\ud2b8\x3c/em\x3e\x3cem class\x3d"txt"\x3e\x3ci\x3e-' + e.format() + "\x3c/i\x3e \uc6d0\x3c/em\x3e\x3c/span\x3e"));
    $(".byoTotal .price").text(c.format());
    $(".buildStep .totalPrice span").text(c.format())
}
function updateBuildTrim(c) {
    if (0 < $(".build_trim").length) {
        $(".btn_totalCon_open .price").html(parseInt(c.attr("price")).format());
        var a = $(".totalList .list01 .con");
        a.attr("price", c.attr("price"));
        a.find(".conTitle").text(c.find("span.h").text());
        a.find("img").attr("src", c.attr("aimg"));
        a.find(".conPrice").html(c.find("span.price").html());
        "NQJJ5ADD1-A" == c.attr("trim") || "NQJJ5AFD1-A" == c.attr("trim") || "NQJJ51D31-A" == c.attr("trim") || "NQJJ51F31-A" == c.attr("trim") ? $(".build_car .car_img img").attr("src", "/content/dam/kwcms/kr/ko/images/byo/car_nq_sportage_jug.png") : "CVJJ5VI31-A" == c.attr("trim") ? $(".build_car .car_img img").attr("src", "/content/dam/kwcms/kr/ko/images/byo/car_ev6_standard.png") : $(".build_car .car_img img").attr("src", c.attr("aimg"));
        updateTotalPrice()
    }
}
function updateBuildColor() {
    if (0 < $(".build_color").length) {
        var c = $(".color_l.exteriorOption.on")
          , a = $(".color_l.interiorOption.on")
          , e = c.find(".name").text()
          , g = c.find("img").attr("src")
          , f = a.find(".name").text()
          , l = a.find("img").attr("src")
          , k = $(".totalList .list02 .con")
          , h = $(".totalList .list02 .con_exterior")
          , m = $(".totalList .list02 .con_interior");
        h.attr("price1", c.attr("price"));
        m.attr("price2", a.attr("price"));
        k.empty();
        h.append('\x3cspan\x3e\x3cspan class\x3d"colorArea"\x3e\x3cimg src\x3d"' + g + '" alt\x3d"' + e + '" class\x3d"colorImg"\x3e\x3c/span\x3e\x3cem class\x3d"conTitle"\x3e' + e + '\x3c/em\x3e\x3c/span\x3e\x3cspan class\x3d"conPrice"\x3e' + parseInt(c.attr("price")).format() + "\x3cem\x3e\uc6d0\x3c/em\x3e\x3c/span\x3e");
        m.append('\x3cspan\x3e\x3cspan class\x3d"colorArea"\x3e\x3cimg src\x3d"' + l + '" alt\x3d"' + f + '" class\x3d"colorImg"\x3e\x3c/span\x3e\x3cem class\x3d"conTitle"\x3e' + f + '\x3c/em\x3e\x3c/span\x3e\x3cspan class\x3d"conPrice"\x3e' + parseInt(a.attr("price")).format() + "\x3cem\x3e\uc6d0\x3c/em\x3e\x3c/span\x3e");
        updateTotalPrice()
    }
}

