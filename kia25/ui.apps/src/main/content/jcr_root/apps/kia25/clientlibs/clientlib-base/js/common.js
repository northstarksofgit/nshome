/*
 *  2014.12.02  zt
 *  kia common.js 
 */

if(window.console == undefined){console={log:function(){}};}
var MOBILE_WIDTH = 767, TABLET_WIDTH =1024, GNB_VISIBLE_HEIGHT = 1023, IE_VER = msieversion();

$(document).ready(function() {
    //checkbox
    if($(".check_box").length){
        checkBoxInit();
    }
    
    //radiobutton
    if($(".radio_box").length){
        radioBoxInit();
    }

    //searchButton
    if($(".sch_open").length){
        searchButtonInit();
    }

    //공통 탭
    if($("div.tab_type3").length){
        tabInit($("div.tab_type3"));
    }

    //공통 탭 : 컨텐츠 변경용
    if($('div.tab_head').length) {
        tabInit($('div.tab_head'));
    }

    //모션없는 아코디언 : 중복 확장 가능
    if($(".bbs_type1").length){
        bbsType1Init();
    }
      
    //팝업
    if($(".popup_wrap").length){
        layerPopupInit();
        thumbnailInit(); //이미지 섭네일 버튼 있는 팝업 wddo.. html/shopping-tools/branch/branch-list
    }
   
    //달력
    if($('a.spr_calendar').length){
        calendarInit();
    }
   
    //한번에 두개의 셀이 노출되는 테이블
    if($('div.tableWrap').length){
        var twoTable;
        $('.tableWrap').each(function (i) {
            twoTable = new KIATwoTable($(this), {wViewTotal:4});
            twoTable.init();
        });
        //초기화 방법 : $(KIATwoTable 1번째 인자로 넣은 타깃).getInstance().reset();
        //ex) $('.tableWrap').eq(0).getInstance().reset();
    }
    
    //뉴스, 프로모션, 리스트에서 제목 2줄 말줄임표
    if ($('.bbs_type2').length) {
        $(".bbs_tit").dotdotdot({
            ellipsis : '...',
            wrap  : 'letter',
            watch : "window"
        });
       window.onload=function(){
            $(".bbs_tit").trigger("update");   
       }
    }   
     if ($('.bbs_type2').length) {
        $(".bbs_txt").dotdotdot({
            ellipsis : '...',
            wrap  : 'letter',
            watch : "window"
        });
       window.onload=function(){
            $(".bbs_txt").trigger("update");   
       }
    }   
     
    //2020-04-01 고객응대절차 관련 스크립트
     var _$tarGetPc = $('.counsel_guide .pcView li');
     var _$tarGetMo = $('.counsel_guide .moView li');
     _$tarGetPc.on('mouseenter focusin', function() {
        $('.counsel_guide .pcTip').hide();
     });
     _$tarGetPc.on('mouseleave focusout', function() {
       $('.counsel_guide .pcTip').show();
     });
     _$tarGetMo.on('click',function(){
       _$tarGetMo.removeClass('view');
       $(this).addClass('view');
       $('.counsel_guide .moTip').hide();
     });
     _$tarGetMo.on('focusin', function() {
       _$tarGetMo.removeClass('view');
       $(this).addClass('view');
       $('.counsel_guide .moTip').hide();
     });
     _$tarGetMo.on('focusout', function() {
       $('.counsel_guide .moTip').show();
        _$tarGetMo.removeClass('view');
     });
});

function checkBoxInit(){
     $(".check_box").off("click.check").on("click.check", function(e){
        e.stopPropagation();
        e.preventDefault();
        var targetFor = $(this).attr("for");
        var targetInput = $("input:checkbox[id="+targetFor+"]");
        
        if ($(this).hasClass("c_on")) {
            $(this).removeClass("c_on");
             targetInput.attr("checked", false);
        } else {
            $(this).addClass("c_on");    
            targetInput.attr("checked", true);
        }
        
        //wddo 체크 박스의 체크 여부를 상품 추천(shopping-tools/comparisons/lifestyle-recommend04)에 차량비교 로직으로 전달 
        var advisorListContainer = $(this).closest(".car_list.advisorList");
        if (advisorListContainer.length > 0) advisorListContainer.trigger("advisorListChk.kia", $(this));
    });
    
    $("input:checkbox").off("click.check2").on("click.check2", function(e){
        var targetId = $(this).attr("id");
        var targetName = $(this).attr("name");
        var targetLabel = $("label[for='"+targetId+"']");
        
        if (targetLabel.hasClass("c_on")) {
            targetLabel.removeClass("c_on");
        } else {
            targetLabel.addClass("c_on");    
        }  
        
         //zt 탭이동으로 클릭시 이벤트 발생
        var advisorListContainer = $(this).closest(".car_list.advisorList");
        if (advisorListContainer.length > 0) advisorListContainer.trigger("advisorListChk.kia", targetLabel);
    });
    
    $("input:checkbox").off("focusin.check").on("focusin.check", function(e){
        var targetId = $(this).attr("id");
        var targetLabel = $("label[for='"+targetId+"']");
        targetLabel.addClass("focus");
    });
    
    $("input:checkbox").off("focusout.check").on("focusout.check", function(e){
        var targetId = $(this).attr("id");
        var targetLabel = $("label[for='"+targetId+"']");
        targetLabel.removeClass("focus");
    });
    
    // 150604 checkbox 체크 후 프로세스 진행
    if($('.popup_elead input:checkbox').length) {
    	$('.elead_con > .btn_area > a').on('click', function (e) {
    		var checked = $('.elead_con > .form_chk > input:checkbox').is(':checked');
    		e.stopPropagation();
    		if (!checked) e.preventDefault();
    	});
    }
    // -- 150604
}

function radioBoxInit(){
    $("input:radio").off("focusin.radio").on("focusin.radio", function(e){
        var targetId = $(this).attr("id");
        var targetName = $(this).attr("name");
        var targetLabel = $("label[for='"+targetId+"']");

        if($(this).is(':checked')){
             $("input:radio[name="+targetName+"]").siblings().removeClass("r_on");
             targetLabel.addClass("r_on");   
             //$(this).attr("title",targetLabel.text()+" 선택");
        }
        
        targetLabel.addClass("focus");
    });
    
    $("input:radio").off("focusout.radio").on("focusout.radio", function(e){
        var targetId = $(this).attr("id");
        var targetLabel = $("label[for='"+targetId+"']");
          
        targetLabel.removeClass("focus");
    });

    $("input:radio").off("click.radio").on("click.radio", function(e){
        var targetId = $(this).attr("id");
        var targetName = $(this).attr("name");
        var targetLabel = $("label[for='"+targetId+"']");
        $("input:radio[name="+targetName+"]").siblings().removeClass("r_on");
        targetLabel.addClass("r_on");
        targetLabel.removeClass("focus");
        if (IE_VER < 9 && IE_VER !== false) {
            $(document.body).addClass('ieFix').removeClass('ieFix');
        }
    });
    
    $("input:radio:checked").trigger("click");
}

function searchButtonInit(){
    $(".sch_open").on("click", function(e){
        e.stopPropagation();
        e.preventDefault();
        $(this).css("display","none");
        $(this).siblings(".sch_round").css("display","block");
        $(this).parent().css("width","100%");
    });
}

//탭 공통
function tabInit(target) {
     var viewportWidth;                                 //리사이징 브라우저 width 값
     var lastWindowWidth = 800, lastWindowHeight = 800; //IE8 리사이징 버그 전용 변수
     var container = target;                            //컨테이너
     
     container.off(".kia"); //이벤트 하나만 걸기위한 삭제
     
     container.on("click.kia", "ul > li > a", function (e) {
        var href= $(this).attr("href");
        if(href == "#" || href == "javascript:;"){
            e.preventDefault();
        }
        var str = $(this).text();                       //탭 텍스트
        var idx = $(this).closest('li').index();        //인덱스
        var tabBody = $(this).parent().parent().parent().siblings('.tab_body');  //컨텐츠
        
        //탭 전부 비활성화
        container.find("ul > li > a").removeClass("tab_on");
        
        //클릭 탭 활성화
        $(this).addClass("tab_on");
        
        //모바일 셀렉트박스 텍스트 동기화
        if (container.find("a.input_box").length > 0) container.find("a.input_box > span").text(str);
        
        //모바일에서 리스트 클릭 시 닫힘
        if (viewportWidth < MOBILE_WIDTH){
            if(IE_VER < 9 && IE_VER !== false){ 
            }else{
                //ie8을 제외한 브라우저
                container.find("ul").css("display", "none");    
            }
        }
        
        //모바일에서 리스트 클릭 시 닫고 포커스 이동
        if ($("*:focus").length > 0) container.find("a.input_box").focus();

        //히든 텍스트 변경
        container.closest(".inner").find("h4.hidden").text(str);
        
        //컨텐츠에 해당하는 tab_body 가 있다면
        if (tabBody.length > 0) {
            tabBody.removeClass("current");
            tabBody.eq(idx).addClass("current");   
        }
    });
    
    //모바일 셀렉트 박스 열고 닫기
    container.on("click.kia", "a.input_box", function(e){
        e.preventDefault();
        
        var ul = container.find("ul");
        
        if (ul.css("display") === "none") {
            ul.css("display", "block");
            $(this).children('.inp_arrow').addClass('on');
        }else{
            ul.css("display", "none");
            $(this).children('.inp_arrow').removeClass('on');
        }
    });
    
    $(window).resize(function() {
        if ($(window).height() !== lastWindowHeight || $(window).width() !== lastWindowWidth) {
            lastWindowHeight = $(window).height();
            lastWindowWidth = $(window).width();
            
            tabResize();
        }
    }).resize();
    
    function tabResize(){
        container.find("ul").css("display", "");
        
        document.body.style.overflow = "hidden";
        viewportWidth = $(window).width();
        document.body.style.overflow = "";
    }
}

//모션없는 아코디언 : 중복 확장 가능
function bbsType1Init(){
    $(".bbs_type1").on("click", "a.bbs_a", function(e){
        e.preventDefault();
        
        var parentLi = $(this).closest('li');
        if(!parentLi.hasClass("bbs_open")){
          $(".bbs_li").removeClass("bbs_open");  
          var posTop = $(this).offset().top - parentLi.height();
          //$("html, body").animate({scrollTop: posTop}, 30);
        }
        parentLi.toggleClass( "bbs_open" );
    });
   
    $(".answer_area a.a_view").on("click", function(e){
        e.preventDefault();
        
        $(this).parent().parent().addClass( "answer_open" );
    });
    
    $(".answer_area a.a_close").on("click", function(e){
        e.preventDefault();
        
        $(this).parent().parent().removeClass( "answer_open" );
    });
};

function layerPopupInit(){
    var viewportWidth,viewportHeight, popupMarginLeft = 30 , popupMarginTop = 82;
    var lastWindowHeight = 800;
    var lastWindowWidth = 800;
    
    $(window).resize(function() {
        if($(window).height()!=lastWindowHeight || $(window).width()!=lastWindowWidth){
            lastWindowHeight = $(window).height();
            lastWindowWidth = $(window).width();
            popupResize();
        }
    }).resize();
    
    function popupResize(){
        $(".popup_wrap").not("#featureLayer1, #kdicLayer").css({"width":""});
        document.body.style.overflow = "hidden";
        viewportWidth = $(window).width();
        if($(window).height() < $(document).height()){
            viewportHeight = $(document).height();
        }else{
            viewportHeight = $(window).height();
        }
        document.body.style.overflow = "";
        
        var popWidth = viewportWidth - popupMarginLeft;
        $(".popup_wrap").not("#featureLayer1, #kdicLayer").css({"width":popWidth});
        popupPosSet();
    }
    
    function popupPosSet(){
        $(".popup_wrap").not("#featureLayer1, #kdicLayer, #centerInfoPop").each(function(i,t){
            var h1 = $(window).height();
            var h2 = $(this).height();
            var w1 = $(window).width();
            var w2 = $(this).width();
            if (IE_VER < 9 && IE_VER !== false) {
                if($(window).width() < 1024){
                    w1 = 1024;
                }
            }
            var popleft = w1/2 - w2/2 -popupMarginLeft/2;
            
            $(this).css( { position:"absolute" , left:popleft } );    
        });
    }
}

function thumbnailInit(){
    if ($('div.tab_head').length === 0) return;
    var contentDIV = $('div.tab_body');
    var thumbnailLI = contentDIV.find('ul.photo_s li');
    var photoDIV = contentDIV.find('div.photo_b');
    thumbnailLI.find('a').attr('title','').eq(0).attr('title','선택');
    
    contentDIV.on('click', 'ul.photo_s a', function (e) {
        e.stopPropagation();
        e.preventDefault();
        
        var target = $(this);
        var li = target.closest('li');
        var idx = li.index();
        var src = target.find('img').attr('src');
        
        //섭네일 활성화 변경
        li.siblings().andSelf().removeClass('on').eq(idx).addClass('on');
        thumbnailLI.find('a').removeAttr('title').eq(idx).attr('title','선택');
        
        //큰이미지 src 변경
        if (typeof src !== 'undefined') photoDIV.find('img').attr('src', src);
    });
}

//wddo 달력
function calendarInit() {
    var calendarDIV = $('.layer_calendar');
    if (calendarDIV.length > 0) calendarDIV.remove();
    
    var btn = $('a.spr_calendar');
    var calendar;
    
    btn.each(function () {
        calendar = new KIACalendar($(this), {});
        calendar.init();
    })
    
    calendarDIV = $('.layer_calendar');
    calendarDIV.on('select.calendar', function (e, year, month, day) {
        var now = new Date(); 
        var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        var selectDay = new Date(year,month-1,day);
        if (selectDay <= today ){
            alert("오늘보다 이전 날짜는 선택 불가능");
            return;            
        }
        $(this).siblings('input').val(year +'-'+ month +'-'+ day);
    });
}

/*
 *  @mainslider
 *  var slider = new mainSlider($object, false, false); 
 *  slider.moveEnd = function(dragFlag , disX , conX){};
 * 
 */
function mainSlider(obj, limit, css) {
    var self = this;
    this.tar = obj;
    this.limitlast = limit;
    this.usecss3 = css;
    this.init();
}

mainSlider.prototype = {
    init : function() {
        var self = this, sx, sy, conX, disX,disY, interval, dragFlag, scrollLock,firstCheck;
        if(self.usecss3){
            self.tar.css({"-webkit-transform" : "matrix(1,0,0,1,0,0)"});
        }
        self.tar.bind("touchstart", touchstart);
        //self.tar.bind("mousedown", mousestart);

        function mousestart(e) {
            e.stopPropagation();
            clearTimeout(interval);
            setTimeout(setTimer, 200);
            sx = e.pageX;
            sy = e.pageY;
            if(self.usecss3){
                var wx = matrixToArray(self.tar.css("-webkit-transform"))[4];
            }else{
                var wx =  self.tar.css("left");
            }
            
            conX = parseInt(wx);
            disX = 0;
            dragFlag = false;
            scrollLock = true;
            firstCheck = true;
            
            self.tar.bind("mousemove", mousemove).bind("mouseup", mouseend);
        }

        function mousemove(e) {
            e.stopPropagation();
            disX = sx - e.pageX;
            disY = sy - e.pageY;
    
            if (firstCheck) {
                if (Math.abs(disX) > Math.abs(disY)) {
                    scrollLock = false;
                }
            }
    
            firstCheck = false;
            var scl = self.scrollLock;
            if (scl) {
                scrollLock = true;
            }
    
            if (!scrollLock) {
                e.preventDefault();
                 if(self.usecss3){
                    var wx = matrixToArray(self.tar.css("-webkit-transform"))[4];
                    if (self.limitlast) {
                        if (targetX > 0) {
                            self.tar.css("-webkit-transform", "matrix(1, 0, 0, 1, 0, 0)");
                            return;
                        } else if (targetX < -self.tar.width()) {
                            self.tar.css("-webkit-transform", "matrix(1, 0, 0, 1, " + (-self.tar.width()) + ", 0)");
                            return;
                        }
                    }
                     var targetX = conX - disX;
                     TweenMax.to(self.tar, 0, {x : targetX});
                }else{
                    var wx =  self.tar.css("left");
                    var targetX = conX - disX;
                    TweenMax.to(self.tar, 0, {left : targetX});
                }
            } else {
                self.tar.unbind("mousemove", mousemove).unbind("mouseup", mouseend);
            }
        }
        
        function mouseend(e) {
            self.tar.unbind("mousemove", mousemove).unbind("mouseup", mouseend);
            e.stopPropagation();
            clearTimeout(interval);
            if (!scrollLock) {
                self.moveEnd(dragFlag, disX, conX);
            }
        }
        
        function touchstart(e) {
            e.stopPropagation();
            clearTimeout(interval);
            setTimeout(setTimer, 200);
            sx = e.originalEvent.touches[0].pageX;
            sy = e.originalEvent.touches[0].pageY;
            
            if(self.usecss3){
                var wx = matrixToArray(self.tar.css("-webkit-transform"))[4];
            }else{
                var wx =  self.tar.css("left");
            }
            
            conX = parseInt(wx);
            disX = 0;
            dragFlag = false;
            scrollLock = true;
            firstCheck = true;
    
            self.tar.bind("touchmove", touchmove).bind("touchend", touchend);
        }

        function touchmove(e) {
            e.stopPropagation();
            disX = sx - e.originalEvent.touches[0].pageX;
            disY = sy - e.originalEvent.touches[0].pageY;
    
            if (firstCheck) {
                if (Math.abs(disX) > Math.abs(disY)) {
                    scrollLock = false;
                }
            }
    
            firstCheck = false;
            var scl = self.scrollLock;
            if (scl) {
                scrollLock = true;
            }
    
            if (!scrollLock) {
                e.preventDefault();
                 if(self.usecss3){
                    var wx = matrixToArray(self.tar.css("-webkit-transform"))[4];
                    if (self.limitlast) {
                        if (targetX > 0) {
                            self.tar.css("-webkit-transform", "matrix(1, 0, 0, 1, 0, 0)");
                            return;
                        } else if (targetX < -self.tar.width()) {
                            self.tar.css("-webkit-transform", "matrix(1, 0, 0, 1, " + (-self.tar.width()) + ", 0)");
                            return;
                        }
                    }
                     var targetX = conX - disX;
                     TweenMax.to(self.tar, 0, {x : targetX});
                }else{
                    var wx =  self.tar.css("left");
                    var targetX = conX - disX;
                    TweenMax.to(self.tar, 0, {left : targetX});
                }
            } else {
                self.tar.unbind("touchmove", touchmove).unbind("touchend", touchend);
            }
        }

        function touchend(e) {
            self.tar.unbind("touchmove", touchmove).unbind("touchend", touchend);
            e.stopPropagation();
            clearTimeout(interval);
            if (!scrollLock) {
                self.moveEnd(dragFlag, disX, conX);
            }
        }
    
        function setTimer() {
            dragFlag = true;
        }
    
        function matrixToArray(str) {
            return str.match(/(-?[0-9\.]+)/g);
        }
    }, 
    
    destory : function() {
        var self = this;
        self.tar.off();
        self =null;
        delete self;
    }, 
    
    moveEnd : function(dragFlag , disX , conX) {
        this.moveEnd(dragFlag, disX, conX);
    }, 
    
    scrollLockFlag : function(dragFlag) {
        this.scrollLock = dragFlag;
    }
};


/*
 *  @onSwipeFnc
 *  var mainSwipe = new onSwipeFnc(object); 
 *  mainSwipe.moveEnd = function(evt, dir, phase, swipetype, distance){};
 * 
 */
function onSwipeFnc(el){
    this.el = el;
    this.init();
}

onSwipeFnc.prototype = {
    init : function() {
        var  self = this, touchsurface = $(self.el), dir, swipeType, startX, startY, distX, distY, threshold = 150, restraint = 100, allowedTime = 500, elapsedTime, startTime,
        handletouch = self.callback ||function(evt, dir, phase, swipetype, distance) {};
        touchsurface.on('touchstart', touchStart);
       
    
        function touchStart(e) {
            var touchobj = e.originalEvent.changedTouches[0];
            dir = 'none';
            swipeType = 'none';
            dist = 0;
            startX = touchobj.pageX;
            startY = touchobj.pageY;
            startTime = new Date().getTime();
            touchsurface.on('touchmove', touchMove);
            touchsurface.on('touchend', touchEnd);
        }
    
        function touchMove(e) {
            var touchobj = e.originalEvent.changedTouches[0];
            distX = touchobj.pageX - startX;
            distY = touchobj.pageY - startY;
            if (Math.abs(distX) > Math.abs(distY)) {
                dir = (distX < 0) ? 'left' : 'right';
                e.preventDefault();
            }else{
                touchsurface.off('touchmove', touchMove);
                touchsurface.off('touchend', touchEnd);
            }
        }
    
        function touchEnd(e) {
            var touchobj = e.originalEvent.changedTouches[0];
            elapsedTime = new Date().getTime() - startTime;
            if (elapsedTime <= allowedTime) {
                if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                    swipeType = dir;
                } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
                    swipeType = dir;
                }
            }
           touchsurface.off('touchmove', touchMove);
           touchsurface.off('touchend', touchEnd);
           self.moveEnd(e, dir, 'end', swipeType, (dir == 'left' || dir == 'right') ? distX : distY);
        }
    },
    
    moveEnd : function(evt, dir, phase, swipetype, distance){
        this.moveEnd(evt, dir, phase, swipetype, distance);
    }
}


/*
 * @tapIndex focus
 * tapIndexFnc.Init($(".layer_Popup"));
 * 
 */
var tapIndexFnc = {
    focusableElementsString : "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]",
    focusedElementBeforeModal : null,
    Init : function(con){
        var self = this;
        var obj = con;
        var o = obj.find('*');
        self.focusedElementBeforeModal = $(':focus');
        obj.keydown(function(event){self.trapTabKey($(obj),event);});
        obj.keydown(function(event){self.trapEscapeKey($(obj),event);});
        obj.find(".closeBtn, .wide_close").keydown(function(event){self.trapSpaceKey($(obj),event);});
        o.filter(self.focusableElementsString).filter(':visible').last().focus();
    },
    
    Close :function(){
         if(this.focusedElementBeforeModal){
            this.focusedElementBeforeModal.focus();
            this.focusedElementBeforeModal = null;
        }
    },
    
    trapSpaceKey : function(obj, evt){
         if ( evt.which == 32 ) {
            evt.preventDefault();
        }   
    },
    
    trapEscapeKey : function(obj, evt){
         if ( evt.which == 27 ) {
            var o = obj.find('*');
            var cancelElement;
            cancelElement = o.filter(".cancel");
            cancelElement.click();
            evt.preventDefault();
        }    
    },
    
     trapTabKey : function(obj, evt){
         if ( evt.which == 9 ) {
            var o = obj.find('*');
            var focusableItems = o.filter(this.focusableElementsString).filter(':visible');
            var focusedItem = $(':focus');
            var numberOfFocusableItems = focusableItems.length;
            var focusedItemIndex = focusableItems.index(focusedItem);
            if (evt.shiftKey) {
                if(focusedItemIndex == 0){
                    focusableItems.get(numberOfFocusableItems-1).focus();
                    evt.preventDefault();
                }
            } else {
                if(focusedItemIndex == numberOfFocusableItems-1){
                    focusableItems.get(0).focus();
                    evt.preventDefault();               
                }
            }
        }
    }
}

//internet Explorer version check
function msieversion() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){
           return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))); 
        } 
   return false;
}

//ie8 substr error fix
if ('ab'.substr(-1) != 'b') {
   String.prototype.substr = function(substr) {
     return function(start, length) {
       if (start < 0) start = this.length + start;
       return substr.call(this, start, length);
     }
   }(String.prototype.substr);
 }
 
//css3 support check
$.support.transition = (function(){ 
    var thisBody = document.body || document.documentElement,
    thisStyle = thisBody.style,
    support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;
    return support; 
})();

/**
 * dim 팝업
 * 
 *  ex) 
 *  var dimPop = new OpenDimPop($(".popup_wrap"), $(".popup_wrap .pop_con"), {topValue:41});
 * 
 *  dimPop.open(); //팝업 열기
 *  dimPop.close(); //팝업 닫기
 * 
 * @param pTarget        ::: 팝업 컨테이너
 * @param hTarget        ::: 팝업 높이를 지정할 타깃 [default: pTarget]
 * 
 * options {
 *     topValue : 0,        ::: 팝업이 화면보다 높을때 top 값 [default : 0]
 *     plusHeaderHeight : 0 ::: header 높이 추가값 [default : 0]
 * }
 * 
 */
var OpenDimPop = (function ($) {
    var wddoObj = function (pTarget, hTarget, _options, focusTop, tCloseId) {
        var scope,                          //스코프
            $pTarget = pTarget,             //팝업 타깃
            $hTarget = hTarget || pTarget,  //높이기준 타깃
            opts,                           //옵션
            defaults = defaultOptions(),    //기본값
            $focusTop = focusTop,			//닫기시 포커스를 body로
            $tCloseId = tCloseId;			//오늘보지않기 Id
        
        function defaultOptions() {
            return {
                topValue : 0,
                plusHeaderHeight : 0
            };
        }
        
        scope = this;
        
        function init () {            
            opts = $.extend(defaults, _options);
            
            if ($pTarget.length === 0) return;
            
            $pTarget.data('scope', scope);
            
            $pTarget.find(" > a.closeBtn").on("click", function(e){
                e.stopPropagation();
                e.preventDefault();
                close();

                if($pTarget.attr("id") == "featureLayer2"){
                    $("#featureLayer2 .pop_con .youtube").html("");
                }
                if($pTarget.attr("id") == "videoLayer"){
                    $("#videoLayer .pop_con .youtube").html("");
                }
                if($pTarget.attr("id") == "eleadLayer2"){
                    $("#D02_movie").attr("src","");
                }
                if($pTarget.attr("id") == "kdic_popup"){
                    $("#kdicType2-iframe").attr("src","");
                }
                if($pTarget.attr("id") == "micrositeVideoLayer"){
                	$("#micrositeVideoLayer .pop_con .youtube").html("");
                }

				if($pTarget.attr("id") == "drivingCenter"){
                    $(".drivingMovie iframe").attr("src", $(".drivingMovie iframe").attr("src").replace("?wmode=opaque", ""));
                }
				if($focusTop){
					$("body").attr("tabindex","0");
					$("body").focus();
				}
				
				if(typeof $tCloseId != "undefined" && $tCloseId != ""){
					if($("input:checkbox[id="+$tCloseId+"]").is(':checked')){
						$.cookie($tCloseId, '1', { expires: 1, path : '/' }); //1일
					}
				}
            });
            
            var dim = $('.dimmed');
            dim.on("click", function(e){
                e.stopPropagation();
                e.preventDefault();
                close();

                if($pTarget.attr("id") == "featureLayer2"){
                    $("#featureLayer2 .pop_con .youtube").html("");
                }
                if($pTarget.attr("id") == "videoLayer"){
                    $("#videoLayer .pop_con .youtube").html("");
                }
                if($pTarget.attr("id") == "eleadLayer2"){
                    $("#D02_movie").attr("src","");
                }
                if($pTarget.attr("id") == "kdic_popup"){
                    $("#kdicType2-iframe").attr("src","");
                }
                if($pTarget.attr("id") == "micrositeVideoLayer"){
                	$("#micrositeVideoLayer .pop_con .youtube").html("");
                }

				if($pTarget.attr("id") == "drivingCenter"){
                    $(".drivingMovie iframe").attr("src", $(".drivingMovie iframe").attr("src").replace("?wmode=opaque", ""));
                }
				
				if($focusTop){
					$("body").attr("tabindex","0");
					$("body").focus();
				}
				
				if(typeof $tCloseId != "undefined" && $tCloseId != ""){
					if($("input:checkbox[id="+$tCloseId+"]").is(':checked')){
						$.cookie($cookieNm, '1', { expires: 1, path : '/' }); //1일
					}
				}
            });
            
            close();
        }
        
        init();

        function open() {
            if ($pTarget.length === 0) return;

            setTimeout(timeFun, 150);
            
            function timeFun() {
                var top = $(window).scrollTop();
                var h1 = $(window).height();
                var h2, t;
                var headerHeight = $("#header").outerHeight() + opts.plusHeaderHeight; //웹 90, 모바일 41
                
                //브라우저 높이가 기본높이 GNB_VISIBLE_HEIGHT 보다 낮고, 가로가 모바일크기가 아니면
                if (h1 < GNB_VISIBLE_HEIGHT && $(window).width() > MOBILE_WIDTH) { headerHeight = 0; }
        
                //팝업 보이기
                $pTarget.show();
                $pTarget.find(".pop_con").scrollTop(0);

                h2 = $hTarget.outerHeight();

                if($(window).width() > MOBILE_WIDTH){ //웹
                    t = top + h1/2 - h2/2 + headerHeight / 2;
                    //20160603 J.H.KIM 마이크로사이트 동영상팝업 위치 수정
                    if($pTarget.attr("id") == "micrositeVideoLayer"){
                    	if(t < 350) t=350;
                    }
                }else{ //모바일
                    t = top + h1/2 - h2/2 - headerHeight;
                    //20160603 J.H.KIM 마이크로사이트 동영상팝업 위치 수정
                    if($pTarget.attr("id") == "micrositeVideoLayer"){
                    	if(t < 200) t=200;
                    }
                }

                //top 값이 상단으로 먹고 들어가면 topValue 값으로. 기본값 0
                if ( t < opts.topValue ){ t = opts.topValue; }

                //팝업 세로 위치 적용
                $pTarget.css( { position:"absolute" , top:t  } );

                //포커스 이동
                if($("*:focus").length > 0){
                   tapIndexFnc.Init($pTarget);
                }
                
                //딤 셋팅
                var dim = $('.dimmed:eq(0)');
                dim.css({"height":""});
                var docH = $(document).height();
                dim.css({"height":docH,"position":"fixed"});
                dim.show();
                //팝업에 차량비교가 잇으면 리사이즈(온라인견적 완료견적서 팝업)
                if(typeof compare !== "undefined"){
                    compare.resize();    
                }
                
            }
        }
        
        function close() {
            if ($pTarget.length === 0) return;
            
            $pTarget.hide();
            
            var dim = $('.dimmed');
            dim.hide();
            tapIndexFnc.Close();

        }
        
        //open
        this.open = function () {
            open();
        }
        
        //close
        this.close = function () {
            close();

        }
        
    };//end Obj

    return wddoObj;
}(jQuery));


var OpenDimPop_outClick = (function ($) {
    var wddoObj = function (pTarget, hTarget, _options) {
        var scope,                          //스코프
            $pTarget = pTarget,             //팝업 타깃
            $hTarget = hTarget || pTarget,  //높이기준 타깃
            opts,                           //옵션
            defaults = defaultOptions();    //기본값
        
        function defaultOptions() {
            return {
                topValue : 0,
                plusHeaderHeight : 0
            };
        }
        
        scope = this;
        init();
        function init () {            
            opts = $.extend(defaults, _options);
            
            if ($pTarget.length === 0) return;
            
            $pTarget.data('scope', scope);
            
            $pTarget.find(" > a.closeBtn").on("click", function(e){
                e.stopPropagation();
                e.preventDefault();
                if($pTarget.find(" > a.closeBtn").attr("class").indexOf("historyBack") > -1){
                	close(true);
                }
                close();
            });   
        }
        
        

        function open() {        	
            if ($pTarget.length === 0) return;

            setTimeout(timeFun, 150);
            
            function timeFun() {
                var top = $(window).scrollTop();
                var h1 = $(window).height();
                var h2, t;
                var headerHeight = $("#header").outerHeight() + opts.plusHeaderHeight; //웹 90, 모바일 41
                var marginLeftNum =-1*$pTarget.outerWidth()/ 2;
                var marginTopNum =-1*$pTarget.outerHeight()/ 2;
                var marginLeft =marginLeftNum+"px";
                var marginTop =marginTopNum+"px";
                
                //브라우저 높이가 기본높이 GNB_VISIBLE_HEIGHT 보다 낮고, 가로가 모바일크기가 아니면
                if (h1 < GNB_VISIBLE_HEIGHT && $(window).width() > MOBILE_WIDTH) { headerHeight = 0; }
        
                //팝업 보이기
                $pTarget.show();
                $pTarget.find(".pop_con").scrollTop(0);

                h2 = $hTarget.outerHeight();

                if($(window).width() > MOBILE_WIDTH){ //웹
                    t = top + h1/2 - h2/2 + headerHeight / 2;
                    //20160603 J.H.KIM 마이크로사이트 동영상팝업 위치 수정
                    if($pTarget.attr("id") == "micrositeVideoLayer"){
                    	if(t < 350) t=350;
                    }
                }else{ //모바일
                    t = top + h1/2 - h2/2 - headerHeight;
                    //20160603 J.H.KIM 마이크로사이트 동영상팝업 위치 수정
                    if($pTarget.attr("id") == "micrositeVideoLayer"){
                    	if(t < 200) t=200;
                    }
                }

                //top 값이 상단으로 먹고 들어가면 topValue 값으로. 기본값 0
                if ( t < opts.topValue ){ t = opts.topValue; }

                //팝업 세로 위치 적용
                $pTarget.css( { position:"absolute" , top:t  } );
                
                if($pTarget.attr("id") == "branchLocationPop"){
                	$pTarget.css( { 'position':"fixed" , 'left':"50%", 'top':"50%", 'margin-left':marginLeft , 'margin-top':marginTop  } );
                }
                
                
                //포커스 이동
                if($("*:focus").length > 0){
                   tapIndexFnc.Init($pTarget);
                }
                
                //딤 셋팅
                var dim = $('.dimmed_outClick:eq(0)');
                dim.css({"height":""});
                var docH = $(document).height();
                dim.css({"height":docH,"position":"fixed"});
                
                dim.show();
                //팝업에 차량비교가 잇으면 리사이즈(온라인견적 완료견적서 팝업)
                if(typeof compare !== "undefined"){
                    compare.resize();    
                }
                
            }
        }
        
        function close(historybackYn) {        	
            if ($pTarget.length === 0) return;
            
            $pTarget.hide();
            /* S : 180808 */
            $pTarget.find(".pop_con").removeClass("next prev");
            /* E : 180808 */
            var dim = $('.dimmed_outClick');
            dim.hide();
            tapIndexFnc.Close();
            if(historybackYn){
            	history.back();
            }
        }
        
        //open
        this.open = function () {
            open();
        }
        
        //close
        this.close = function () {
            close();

        }
        
    };//end Obj

    return wddoObj;
}(jQuery));

/**
 * calendar :: wddo
 * 
 *  // 1번째 인자로 달력을 열때 클릭할 버튼을 넣음
 *  var calendar = new KICalendar($('.btnCal:eq(0)'), {});
 *  calendar.init();
 * 
 *  instance.getDate();            //날짜반환, Date 객체 반환
 *  instance.setDate(2014, 2, 12); //날짜지정 2014년 2월 12일 적용
 *  instance.setDisable(boolean);  //비활성화
 * 
 * @param _btn          ::: 달력과 연결할 버튼 element
 * @param _options      ::: 옵션 
 * 
 * options object
 *  only    - 한 페이지에 한 달력이 열릴지 유무
 *  zindex  - 열릴 때 뎁스
 *  inputId - 일 클릭 이벤트에서 전달해줄 아이디
 */
var KIACalendar = (function ($) {
    var wddoObj = function (_btn, _options) {
        var scope,                          //스코프
            $btn = _btn,                    //달력버튼
            $target,                        //컨테이너
            $month,                         //월
            $prve,                          //이전
            $next,                          //다음
            now,                            //현재 날짜
            current,                        //이동 날짜
            monthArr,                       //달
            opts,                           //옵션
            defaults = defaultOptions(),    //기본값;
            zindex;                         //현재 뎁스
        
        function defaultOptions() {
            return {
                inputId: undefined,         //인풋 아이디
                only: true,                 //한 페이지에 한 달력이 열릴지 유무
                zindex: 840212,             //열릴 때 뎁스
                isDisable: false            //비활성화
            };
        }
        
        function init () {            
            opts = $.extend(defaults, _options);
            
            current = new Date();
            now = new Date();
            monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            createLayout();
            createDate();
            changeMonth();
            changeToday();
            initEvent();
            
            hide();
            
            $target.data('scope', scope);
        }
        
        function initEvent() {
            $btn.on('click', function (e) {
                if (!opts.isDisable) {
                    if ($target.filter(':hidden').length > 0) {
                        show();
                        window.tab.setTarget($(this)[0]);
                    } else {
                        hide();   
                    }
                }
                
                e.preventDefault();
            });
            
            $next.on('click', function (e) {
                var target = (e.currentTarget);
                
                current.setMonth(current.getMonth() + 1);
                
                removeDate();
                createDate();
                changeMonth();
                changeToday();
                
                e.preventDefault();
            });
            
            $prve.on('click', function (e) {
                var target = (e.currentTarget);
                
                current.setMonth(current.getMonth() - 1);
                
                removeDate();
                createDate();
                changeMonth();
                changeToday();
                
                e.preventDefault();
            });
            
            $target.find('a.calbtn_x').on('click', function (e) {
                hide();
                
                e.preventDefault();
            });
            
            //일 클릭
            $target.find('tbody').on('click', 'a', function (e) {
                selectDate(current.getFullYear(), current.getMonth(), $(this).text());
                changeToday();
                hide();
                
                //event binding
                //$target.trigger('select.calendar', [scope.getDate(), opts.inputId]);
                $target.trigger('select.calendar', [current.getFullYear(), force2Digits(current.getMonth()+1), force2Digits(parseInt($(this).text())), opts.inputId, current]);
                
                var tt = window.tab.getTarget();
                if (tt !== undefined) tt.focus();
                
                e.preventDefault();
            });
        }
        
        //달력 외 영역 이벤트
        function addDocumentEvent() {
            $(document).on('mousedown.calendar focusin.calendar touchstart.calendar', function (e) {
                if ($(e.target).closest('.layer_calendar').length ===  0 && $(e.target).get(0) !== $btn.get(0)) {
                    //closeAll();   
                    hide();
                }
            });
        }
        
        function removeDocumentEvent() {
            $(document).off('mousedown.calendar touchstart.calendar');
        }
        
        //날짜 삭제
        function removeDate() {
            var tbody = $target.find('tbody');
            
            tbody.find('> tr').remove();
        }
        
        //날짜 생성
        function createDate() {
            var date = new Date(current.getFullYear(), current.getMonth(), 1); //새로운 date 객체
            var tbody = $target.find('tbody');
            
            //일 빈공간 생성
            var i = 0;
            var max = 42; //최대 줄수 만큼의 일 갯수 (7*6)
            for (; i < max; i += 1)  {
                if ((i % 7) === 0) tbody.append('<tr></tr>');
                
                tbody.find('tr:last').append('<td></td>');
            }

            //일 채워 넣기
            i = 1;
            max = 41; //최대 일 수
            
            var targetTR = tbody.find('> tr:eq(1)');
            var idx, td;
            for (; i <= max; i += 1) {
                date.setDate(i); //새로운 date 1씩 증가
                
                if (date.getMonth() === current.getMonth()) { //새로운 date와 비교하여 월이 같으면.. 즉, current 일수 만큼 반복
                    idx = date.getDay(); //요일 0(일)~6

                    if (date.getDay() === 0 && i !== 1) targetTR = targetTR.next(); //줄 내림
                    
                    td = targetTR.find('> td').eq(idx).append('<a href="#"></a>').find('> a').text(i).end(); //날짜 입력
                    
                    if (date.getDay() === 0) td.addClass('sun'); //일
                    if (date.getDay() === 6) td.addClass('sat'); //토
                }
            }
            
            //일 채워 넣고 남은 빈tr 삭제
            tbody.find('tr').filter(function () {
                return $(this).text().length === 0;
            }).remove(); 
        }
        
        //레이아웃 생성
        function createLayout() {
            $btn.after('<div class="layer_calendar">'
            + '<div class="sel_month">'
            + '<button type="button" class="btn"><span class="cmm_spr calbtn_l">month of Previous</span></button>'
            + '<strong class="this">2014.12</strong>'
            + '<button type="button" class="btn"><span class="cmm_spr calbtn_r">month of Next</span></button></div>'
            + '<div class="sel_date"><table><caption>select of calendar</caption><thead><tr>'
            + '<th scope="col" class="sun">S</th><th scope="col">M</th><th scope="col">T</th><th scope="col">W</th><th scope="col">T</th><th scope="col">F</th><th scope="col" class="sat">S</th>'
            + '</tr></thead><tbody></tbody></table></div><a href="#" class="cmm_spr calbtn_x">Close</a></div>');
            
            $target = $btn.siblings('.layer_calendar');
            $month = $target.find('.sel_month > strong');
            $prve = $target.find('.calbtn_l').parent();
            $next = $target.find('.calbtn_r').parent();
            
            //zindex = $target.css('z-index');
            zindex =  $target.closest('div.calendarWrap').css('z-index');
        }
        
        //날짜 선택 시
        function selectDate(_year, _month, _date) {
            now.setFullYear(_year);
            now.setMonth(_month);
            now.setDate(_date);
        }
        
        //오늘 변경
        function changeToday(_date) {
            var tbody = $target.find('tbody');

            if (now.getFullYear() === current.getFullYear() && now.getMonth() === current.getMonth()) {
                tbody.find('> tr').not(':first').find('td').removeClass('today').find('> a').eq(now.getDate() - 1).parent().addClass('today');   
            }
        }
        
        //월 변경
        function changeMonth() {
            //$month.text( monthArr[current.getMonth()] );
            $month.text(current.getFullYear()  + '.' + force2Digits(current.getMonth() + 1));
        }
        
        //보이기
        function show() {
            //if (opts.only) closeAll(); // addDocumentEvent 대체
            
            $target.show();

            //$target.css('z-index', opts.zindex);
            $target.closest('div.calendarWrap').css('z-index', opts.zindex);
            
            if (opts.only) addDocumentEvent(); // 마우스 사용자를 위한
        }
        
        //숨기기
        function hide() {
            $target.hide();
            
            //$target.css('z-index', zindex);
            $target.closest('div.calendarWrap').css('z-index', zindex);
            
            if (opts.only) removeDocumentEvent();
        }
        
        function closeAll() {
            $('.layer_calendar').each(function () {
                $(this).getInstance().setHide();  
            });
        }
        
        //숫자 1자릿수 앞에 0 붙이기
        function force2Digits(value) {
            return (value < 10) ? '0' + value.toString() : value.toString();
        }

        //public
        this.init = function () {
            scope = this;
            
            if ($btn.length === 0) return;
            
            init() ;
        };
        
        this.getDate = function () {
            return now;
            //return now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
        };
        
        this.setDate = function (_year, _month, _date) {
            now.setFullYear(_year);
            now.setMonth(_month - 1);
            now.setDate(_date);
            
            current.setFullYear(_year);
            current.setMonth(_month - 1);
            current.setDate(_date);
            
            removeDate();
            createDate();
            changeMonth();
            changeToday();
        };
        
        this.setHide = function () {
            hide();  
        };
        
        this.setDisable = function (value) {
            opts.isDisable = value;
        };
        
    };//end Obj

    return wddoObj;
}(jQuery));

if (jQuery.fn.getInstance === undefined) jQuery.fn.getInstance = function () { return this.data('scope'); };

window.tab = {tabTarget: []};

window.tab.getTab = function (keydownEvent) {
    var e = keydownEvent,
        isDown;
    
    if (e.keyCode === 9) {
        isDown = (e.shiftKey) ? false : true;
    } else {
        isDown = undefined;
    }
    
    return isDown;
};

window.tab.setTarget = function(target) {
    this.tabTarget.push(target);
};

window.tab.getTarget = function() {
    return this.tabTarget.pop();
};

/**
 * 2단 table :: wddo
 * 
 *  // 1번째 인자로 테이블 컨테이너를 넣음
 *  var twoTable = new KIATwoTable($('div.tableWrap'), {});
 *  twoTable.init();    //초기화
 * 
 *  instance.resize();  //리사이징
 *  instance.reset();   //데이터변경에 대한 리셋
 * 
 * @param _taget        ::: 두 테이블을 감싸고 있는 DIV
 * @param _options      ::: 옵션
 * 
 * options object
 *  wViewTotal - 웹크기 일때 몇개 보여질지
 *  tViewTotal - 타블릿 크기 일때 몇개 보여질지
 */
var KIATwoTable = (function ($) {
    var wddoObj = function (_taget, _options) {
        var scope,                          //스코프
            $target = _taget,               //컨테이너
            $leftTABLE,                     //왼쪽 고정 테이블
            $rightTABLE,                    //오른쪽 스크롤 테이블
            colWidth,                       //열의 폭    
            colLength,                      //총 열의 갯수
            maxRightTableWidth,             //테이블 전체크기
            viewLength,                     //보이는 열의 갯수
            defaults = defaultOptions(),    //기본값
            len;                            //변경되는 열의 갯수 (갯수가 변겨되면 resize 에서 수정)
        
        function defaultOptions() {
            return {
                wViewTotal : 2,
                tViewTotal : 2
            };
        }

        function init () {            
            opts = $.extend(defaults, _options);

            $leftTABLE = $target.find('table.fixArea'),
            $rightTABLE = $target.find('table.scrollArea'),

            initLayout();
            initEvent();
            //resize(); //window load
            initTitleLayout();

            $target.find(".scrollArea tbody tr:eq(0) td").each(function(){
                var colspan = $(this).attr("colspan");  
                var text = $(this).find("p").text(); //$(this).html(text)
                text = text.replace(/\n/g, "<br>");

                if(colspan !== undefined){
                    $(this).replaceWith("<th class='tableTh' colspan='"+colspan+"'><div><span class='hidden'></span>"+text +"</div></th>");
                }else{
                    $(this).replaceWith("<th class='tableTh'><div><span class='hidden'></span>"+text +"</div></th>");
                }
            });

            $target.find(".scrollArea tbody tr:not(:eq(0)) td").each(function(){
                if($(this).find("span").length==0){ 
                    $(this).prepend("<span class='hidden'></span>");
                }
            });
            
            $(".scrollArea").attr("border","0");
            
            createHint();

            $target.data('scope', scope);
        }
        
        function initLayout() {
            var leftTR = $leftTABLE.find('tbody tr');
            var rightTR = $rightTABLE.find('tbody tr');
            var trHeightArr = [], tbodyTrHeightArr = [], trMaxHeightArr = [];
            var trHeight;
            
            if(IE_VER < 9 && IE_VER !== false){
                len = opts.wViewTotal;  
            }
            
            //왼쪽 테이블 초기 데이터
            leftTR.each(function(i,e) {
//                $(this).css("height", "");
                $(this).removeAttr("style"); // 150729 수정
                trHeight = $(this).height();

                trHeightArr.push(trHeight); 
                
                //오른쪽
                rightTR.eq(i).css("height", "");
                trHeight = rightTR.eq(i).height();
                tbodyTrHeightArr.push(trHeight);     
            });
            
            //두 초기 데이터중 큰값 취합
            trMaxHeightArr = compareArr(trHeightArr, tbodyTrHeightArr)
            
            //왼쪽 테이블 데이터 적용
            var rowH = 0; //행 병합용 변수
            var maxH;
            leftTR.each(function(i, e) {
                maxH = trMaxHeightArr[i];
                
                $(this).css("height", maxH); 
                
                //오른쪽
                rightTR.eq(i).css("height", maxH);
                
                //행 병합
                var currentTxt = $(this).text();
                var next = $(this).next();
                var nextTxt = next.text();

                if (next.length > 0 && currentTxt === nextTxt) {
                    rowH += maxH;
                    $(this).hide();
                } else {
                    $(this).css("height", maxH + rowH);
                    rowH = 0;
                }
            });

            //전체테이블 크기 지정
            colLength = rightTR.filter(':last').children().length;  //총 열갯수
            
            //보이는 열갯수
            viewLength = Math.min(colLength, len);

            //보이는 열갯수 보다 총 열갯수가 적으면
            if (viewLength >= colLength) {
                $rightTABLE.parent().css('overflow-x', 'hidden');
            } else {
                $rightTABLE.parent().css('overflow-x', 'scroll');
            }

            //1개의 열애대한 예외 처리
            colWidth = Math.round(($target.outerWidth() - $leftTABLE.closest('div').outerWidth()) / viewLength);
            if (colLength === 1) {
                maxRightTableWidth = colWidth * viewLength;
            } else {
                maxRightTableWidth = colWidth * colLength;
            }
            
            $rightTABLE.css('width', maxRightTableWidth);
        }
        
        //숨김 텍스트 정의
        function createHint() {
            var leftTR = $leftTABLE.find('tbody tr');
            var rightTR = $rightTABLE.find('tbody tr');

            rightTR.find('> td, th[class^="tableTh"]').each(function (i) { //모든 데이터셀 반복
                var target = $(this);
                
                var hiddenSpan = target.find('span.hidden');
                hiddenSpan.empty();
                
                var labelIndex = target.closest('tr').index();
                var titleIndex = target.index();
                var leftText = leftTR.eq(labelIndex).text();
                var txt = target.text();

                var titleText = "";

                //데이터들 th가 있는 tr 찾기.. 즉 타이틀 찾기
                var titleTR = target.closest('tbody').find('th').parent();

                titleTR.each(function (i) { // 타이틀 2개.. 0, 1
                    if (i < labelIndex) { // 타이틀중 자신보다 상단에 있는 것만
                        var colspanAttr = parseInt($(this).find('th').attr('colspan'));
                        var colIndex = (!isNaN(colspanAttr)) ? getcol(titleIndex, $(this).find('th')) : titleIndex;  //% 계산에 의한 00, 11 이거나, 가로 인덱스 이거나  
    
                        //스크롤 없는 기본 테이블은 contents() 가 div 이므로 한번더 contents() 호출
                        var content = ($(this).find('th').eq(colIndex).contents().is('div')) ? $(this).find('th').eq(colIndex).contents().contents() : $(this).find('th').eq(colIndex).contents();
    
                        //colspan이 있는 것과 없는 타이틀을 구분 ? 있다 : 없다
                        titleText += (!isNaN(colspanAttr)) ? $(this).find('th').eq(colIndex).find('span.scrollTh').text() + ' ' : content.not('span.hidden').text() + ' ';
                    }
                });
                
                hiddenSpan.text(titleText + leftText);
                //
                //console.log(leftText, titleText, txt, '세로' + labelIndex, '가로' + titleIndex);
            });
        }
        
        //colspan 으로 합쳐진 감안한 해당 인덱스 찾기
        function getcol(idx, th) {
            var value = 0;
            var colspanAttr = parseInt(th.attr('colspan'));
            th.each(function (i) {
                if (idx < colspanAttr) {
                    return false;
                } else {
                    value ++;
                    return false;
                }
            })
            
            return value;
        }
    
        //이벤트
        function initEvent() {
            var lastWindowHeight = 800, lastWindowWidth = 800;
            $(window).on('resize.twotable', function() {
                if ($(window).height() !== lastWindowHeight || $(window).width() !== lastWindowWidth) {
                    lastWindowHeight = $(window).height();
                    lastWindowWidth = $(window).width();
                    resize();
                }
            });
            
            //스크롤에 영향을 받는 타이틀에만 이벤트 적용
            if ($rightTABLE.find('tbody tr').filter(':first').children().length === 1) {
                $rightTABLE.parent().on('scroll.twotable', function () {
                    initTitleLayout();
                });
            }
            
            //
            $(window).load(function () {
                if(IE_VER < 9 && IE_VER !== false){
                    initLayout();
                }else{
                    resize();   
                }
            });
        }
        
        //colspan 제목 중앙정렬
        function initTitleLayout() {
            var scrollTh = $target.find('.scrollTh');
            
            //테이블안에 두개 이상..
            scrollTh.each(function () {
                var t = $(this);
                var th = t.closest('th');
                var paddingLeft = parseInt(th.css('paddingLeft'));
                
                //스크롤에 영향을 받는 타이틀
                if ($rightTABLE.find('tbody tr').filter(':first').children().length === 1) { //영형 받음
                    t.css({
                        top : (t.parent().outerHeight() / 2) - (t.height() * 0.5),
                        left : (colWidth * viewLength / 2) - (t.width() * 0.5) + ($rightTABLE.parent().scrollLeft() * 1)// - paddingLeft
                    });
                } else { //안받음
                    t.css({
                        top : (t.parent().outerHeight() / 2) - (t.height() * 0.5),
                        left : (th.outerWidth() / 2) - (t.width() * 0.5)// - paddingLeft
                    });
                }
            });
        }
        
        //리사이징
        function resize() {
            document.body.style.overflow = "hidden";
            var viewportWidth = $(window).width();
            document.body.style.overflow = "";
            
            if(IE_VER < 9 && IE_VER !== false){
                
            }else{                
                //테블릿
                if (viewportWidth <= 1024) {
                    len = opts.tViewTotal;
                    
                    if (colLength === 1) {
                        maxRightTableWidth = $target.width() - $leftTABLE.closest('div').width();
                    } else {
                        //$rightTABLE.find('tbody tr').children().css('width', colWidth);
                        maxRightTableWidth = colWidth * colLength;
                    }
                    
                    $rightTABLE.css('width', maxRightTableWidth);
                } else {
                    len = opts.wViewTotal;
                }
                                
                initLayout();
                initTitleLayout();
                
                //텍스트 줄내림의 딜레이에 의한 라인 어그러짐 방지
                stopTimer();              
                startTimer();
            }
        
            //colspan 들어간 셀 제목 중앙정렬 padding 때문에 틀어져서 좌우 0처리
            $rightTABLE.find('th[colspan]').css({
                'paddingLeft' : 0,
                'paddingRight' : 0
            });
        }
        
        //텍스트 줄내림의 딜레의에 의한 라인 어그러짐 방지 타이머 함수
        var timeId;
        function startTimer() {
            timeId = setTimeout(function () {
                initLayout();

                timeId = undefined;
            }, 300);
        }
        
        function stopTimer() {
            if (timeId !== undefined) {
                clearTimeout(timeId);
                timeId = undefined;
            }
        }
        
        //배열 비교 함수
        function compareArr(arr1,arr2){
            var maxArr = [];
            for(var i = 0; i < arr1.length; i++){
                if(arr1[i] == 0){
                    maxArr.push(0);
                }else{
                    maxArr.push(Math.max(arr1[i],arr2[i]));    
                }
            }
            return maxArr;
        }   
        
        //public
        this.init = function () {
            scope = this;
            
            if ($target.length === 0) return;
            
            init() ;
            resize();
        };
        
        //resize
        this.resize = function () {
            resize();
        }
        
        //reset
        this.reset = function () {
            //console.log('reset');
            initLayout();
            initTitleLayout();
            resize();
            createHint();
        }
        
    };//end Obj

    return wddoObj;
}(jQuery));


//특정영역 인쇄를 위한 함수. defualit.css, content.css 스타일을 실제 적용될 경로로 바꿔줘야함
function printIt(targetID)  {
    var printThis = document.getElementById(targetID).innerHTML;
    var win = null;
    win = window.open();
    win.focus();
    win.document.write('<'+'html'+'><'+'head'+'>');
    win.document.write("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">");
    win.document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"/etc/designs/kia-korea/clientlib/css/default.css\" />");
    win.document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"/etc/designs/kia-korea/clientlib/css/content.css\" />");
    win.document.write('<'+'/'+'head'+'><'+'body'+'>');
    win.document.write(printThis);
    win.document.write('<'+'/'+'body'+'><'+'/'+'html'+'>');
    win.document.close();
    setTimeout(function(){
         win.print();
         win.close();
    }, 300);   
}

function printTable(targetID)  {
    var tableStyle = "<style type='text/css'>";
    tableStyle += "@font-face{";
    tableStyle += "font-family:'kiaB';font-weight:normal;font-style:normal;";
    tableStyle += "src:url('/content/dam/kwcms/kr/ko/font/kia_bold.eot');";
    tableStyle += "src:url('/content/dam/kwcms/kr/ko/font/kia_bold.eot?#iefix') format('embedded-opentype'),";
    tableStyle += " url('/content/dam/kwcms/kr/ko/font/kia_bold.woff') format('woff')";
    tableStyle += "}";
    tableStyle += "@font-face{";
    tableStyle += "font-family:'kiaM';font-weight:normal;font-style:normal;";
    tableStyle += "src:url('/content/dam/kwcms/kr/ko/font/kia_medium.eot');";
    tableStyle += "src:url('/content/dam/kwcms/kr/ko/font/kia_medium.eot?#iefix') format('embedded-opentype'),";
    tableStyle += " url('/content/dam/kwcms/kr/ko/font/kia_medium.woff') format('woff')";
    tableStyle += "}";
    tableStyle += ".tleft{text-align:left!important} ";
    tableStyle += ".tright{text-align:right!important} ";
    tableStyle += ".tcenter{text-align:center!important} ";
    tableStyle += ".hidden{display:none;} ";
    tableStyle += "table{border-collapse: collapse;} ";
    tableStyle += " .tableWrap{position:relative;margin-top:15px;}";
    tableStyle += " .tableTit strong{display:block;padding:15px 14px;background:#424242;font-size:15px;color:#fff;text-transform:uppercase} ";
    tableStyle += " th{padding:12px 14px} ";
    tableStyle += " td{padding:12px 14px;border-top:1px solid #d6d6d6;color:#666;font-family:kiaM;text-align:left;font-size:13px} ";
    tableStyle += " th[class*=tableTh]{height:18px;background:#f8f8f8;font-family:kiaB;font-size:14px;color:#000;text-align:left} ";
    tableStyle += " th.tableTh2{border-top:1px solid #d6d6d6} ";
    tableStyle += " th.tableTh3{background:#fff;font-size:13px;border-top:1px solid #d6d6d6;color:#333;font-family:kiaM} ";
    tableStyle += " .tableFix{position:relative;float:left;width:212px;z-index:9} ";
    tableStyle += " .fixArea{display:none;background:#fff} ";
    tableStyle += " .fixArea .mbr{display:none} ";
    tableStyle += " .fixArea th, .fixArea td{border-right:1px solid #d6d6d6;width:258px} ";
    tableStyle += " .scrollArea{width:100%;background:#fff;border:1px solid #7d7d7d;} ";
    tableStyle += " .scrollArea caption{display:none;} ";
    tableStyle += " .scrollArea th{border-left:1px solid #d6d6d6;font-family:kiaB;font-size:14px;color:#000;text-align:center} ";
    tableStyle += " .scrollArea th.tableTh{border-bottom:1px solid #d6d6d6;border-top:0} ";
    tableStyle += " .scrollArea th.tableTh2{border-bottom:1px solid #d6d6d6;border-top:0} ";
    tableStyle += " .scrollArea th div{position:relative;margin:0;padding:0} ";
    tableStyle += " .scrollArea td{border-left:1px solid #d6d6d6;color:#666;text-align:center} ";
    tableStyle += " .scrollArea th:first-child, .tableWrap .scrollArea td:first-child{border-left:0;} ";
    tableStyle += "</style>";
    
    var $printElement = $("#"+targetID).clone();
    var rowH = 1;
    $printElement.find(".fixArea tbody tr").each(function(i,e){
        var $th = $(this).find("th");
        var $nextTh = $(this).next().find("th");
        var thisThStr = $(this).find("th").text();
        var nextThStr = $(this).next().find("th").text(); 
          
        if(thisThStr == nextThStr){
            $nextTh.hide();
            rowH = rowH+1;
            if(rowH > 2){
                $th.hide();
                $th.parent().addClass("th_none");
                var thi = $(this).prevUntil().not('.th_none').eq(0).find("th");
                thi.attr("rowspan",rowH);
            }else{
              $nextTh.hide();
              $th.attr("rowspan",rowH);  
            }
        }else{
            rowH = 1;
        }
    });
    
    $printElement.find(".fixArea tbody tr").each(function(i,e){
        var $th = $(this).find("th");
        $printElement.find(".tableScroll").removeAttr("style");
        $printElement.find(".scrollArea").removeAttr("style");
        $printElement.find(".scrollTh").removeAttr("style");
        $printElement.find(".scrollArea tbody tr:eq("+i+")").prepend($th);
        
    });
    
    var tablePrint = $printElement.html();
    var win = null;
    win = window.open();
    win.focus();
    win.document.write('<'+'html'+'><'+'head'+'>');
    win.document.write("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">");    
    win.document.write(tableStyle);
    win.document.write('<'+'/'+'head'+'><'+'body'+'>');
    win.document.write('<'+'div class="tableWrap"'+'>');
    win.document.write(tablePrint);
    win.document.write('<'+'/'+'div'+'>');
    win.document.write('<'+'/'+'body'+'><'+'/'+'html'+'>');
    win.document.close();
    setTimeout(function(){
         win.print();
         win.close();
    }, 150);
}

/* S : 181130 */
function printIt_recurrence_notice()  {
 var printThis = document.getElementById("print-recurrence-notice").innerHTML;

 var tableStyle = "<style type='text/css'>";
 tableStyle += "body, p, h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, table, th, td, form, fieldset, input, textarea, btn, select{margin:0;padding:0}";
 tableStyle += "body, input, textarea, select, btn, table{font-family:kiaM,Hevetica;line-height:18px;font-size:13px;color:#333}";
 tableStyle += "body{-webkit-text-size-adjust:none}";
 tableStyle += "strong, th, h1, h2, h3, h4, h5, h6{font-weight:normal;font-family:kiaB}";
 tableStyle += "table{width:100%;border-collapse:collapse}";
 tableStyle += "img, fieldset{border:0;vertical-align:top}";
 tableStyle += "ul, ol{list-style:none}";
 tableStyle += "em, address{font-style:normal}";
 tableStyle += "caption{position:absolute;top:-999999px;left:-999999px;font-size:1;line-height:1;width:1;height:1;overflow:hidden;}";
 tableStyle += "ul, ol{zoom:1}";
 tableStyle += "ul:after, ol:after{content:'';clear:both;display:block}";
 tableStyle += "@font-face{";
 tableStyle += "font-family:'kiaB';font-weight:normal;font-style:normal;";
 tableStyle += "src:url('/content/dam/kwcms/kr/ko/font/kia_bold.eot');";
 tableStyle += "src:url('/content/dam/kwcms/kr/ko/font/kia_bold.eot?#iefix') format('embedded-opentype'),";
 tableStyle += "url('/content/dam/kwcms/kr/ko/font/kia_bold.woff') format('woff')";
 tableStyle += "}";
 tableStyle += "@font-face{";
 tableStyle += "font-family:'kiaM';font-weight:normal;font-style:normal;";
 tableStyle += "src:url('/content/dam/kwcms/kr/ko/font/kia_medium.eot');";
 tableStyle += "src:url('/content/dam/kwcms/kr/ko/font/kia_medium.eot?#iefix') format('embedded-opentype'),";
 tableStyle += "url('/content/dam/kwcms/kr/ko/font/kia_medium.woff') format('woff')";
 tableStyle += "}";
 tableStyle += "body {padding:15px 0;}";
 tableStyle += ".tleft{text-align:left!important} ";
 tableStyle += ".tright{text-align:right!important} ";
 tableStyle += ".tcenter{text-align:center!important} ";
 tableStyle += ".hidden{display:none;} ";
 tableStyle += ".con_tit{padding-left:5px;padding-bottom:20px;font-size:30px;color:#000;line-height:30px;text-transform:uppercase}";
 tableStyle += "table{border-collapse: collapse;} ";
 tableStyle += ".table_type2{border:1px solid #e2e2e2}";
 tableStyle += ".table_type2 th, .table_type2 td{border:1px solid #e2e2e2;font-family:kiaM;padding:8px 15px;text-align:center}";
 tableStyle += ".table_type2 th{background:#f8f8f8;border-bottom:0;font-family:kiaB}";
 tableStyle += ".table_type2 td{color:#666}";
 tableStyle += ".table_type2 td .base{color:#000}";
 tableStyle += ".table_type2 th.pColor, .table_type2 td.pColor {color:#bb162b;}";
 tableStyle += ".tableArea {padding:0 2px;}";
 tableStyle += ".tableArea + .tableArea {margin-top:20px;}";
 tableStyle += ".table_type2 {border:none;}";
 tableStyle += ".table_type2 thead th {border-bottom:1px solid #f8f8f8;}";
 tableStyle += ".table_type2 th {border:1px solid #e2e2e2;}";
 tableStyle += ".table_type2 th.stit {font-family:kiaM;background:none;color:#666;}";
 tableStyle += ".table_type2 th.stit span.min {display:block; font-size:9px;letter-spacing:-1px;}";
 tableStyle += ".txt_desc3 {padding-top:15px;}";
 tableStyle += "</style>";

 var win = null;
 win = window.open();
 win.focus();
 win.document.write('<'+'html'+'><'+'head'+'>');
 win.document.write("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">");
 win.document.write(tableStyle);
 win.document.write('<'+'/'+'head'+'><'+'body'+'><h3 class="con_tit">하자재발통보 내역</h3>');
 win.document.write(printThis);
 win.document.write('<'+'/'+'body'+'><'+'/'+'html'+'>');
 win.document.close();
 setTimeout(function(){
      win.print();
      win.close();
 }, 150);   
}
/* E : 181130 */


/*! Picturefill - v2.2.0-beta - 2014-11-19
* http://scottjehl.github.io/picturefill
* Copyright (c) 2014 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a,b,c){"use strict";function d(a){var b,c,d,e,g,h=a||{};b=h.elements||f.getAllElements();for(var i=0,j=b.length;j>i;i++)if(c=b[i],d=c.parentNode,e=void 0,g=void 0,"IMG"===c.nodeName.toUpperCase()&&(c[f.ns]||(c[f.ns]={}),h.reevaluate||!c[f.ns].evaluated)){if("PICTURE"===d.nodeName.toUpperCase()){if(f.removeVideoShim(d),e=f.getMatch(c,d),e===!1)continue}else e=void 0;("PICTURE"===d.nodeName.toUpperCase()||c.srcset&&!f.srcsetSupported||!f.sizesSupported&&c.srcset&&c.srcset.indexOf("w")>-1)&&f.dodgeSrcset(c),e?(g=f.processSourceSet(e),f.applyBestCandidate(g,c)):(g=f.processSourceSet(c),(void 0===c.srcset||c[f.ns].srcset)&&f.applyBestCandidate(g,c)),c[f.ns].evaluated=!0}}function e(){function c(){var b;a._picturefillWorking||(a._picturefillWorking=!0,a.clearTimeout(b),b=a.setTimeout(function(){d({reevaluate:!0}),a._picturefillWorking=!1},60))}d();var e=setInterval(function(){return d(),/^loaded|^i|^c/.test(b.readyState)?void clearInterval(e):void 0},250);a.addEventListener?a.addEventListener("resize",c,!1):a.attachEvent&&a.attachEvent("onresize",c)}if(a.HTMLPictureElement)return void(a.picturefill=function(){});b.createElement("picture");var f={};f.ns="picturefill",function(){f.srcsetSupported="srcset"in c,f.sizesSupported="sizes"in c}(),f.trim=function(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")},f.endsWith=function(a,b){return a.endsWith?a.endsWith(b):-1!==a.indexOf(b,a.length-b.length)},f.restrictsMixedContent=function(){return"https:"===a.location.protocol},f.matchesMedia=function(b){return a.matchMedia&&a.matchMedia(b).matches},f.getDpr=function(){return a.devicePixelRatio||1},f.getWidthFromLength=function(a){a=a&&a.indexOf("%")>-1==!1&&(parseFloat(a)>0||a.indexOf("calc(")>-1)?a:"100vw",a=a.replace("vw","%"),f.lengthEl||(f.lengthEl=b.createElement("div"),f.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden"),f.lengthEl.style.width=a,b.body.appendChild(f.lengthEl),f.lengthEl.className="helper-from-picturefill-js",f.lengthEl.offsetWidth<=0&&(f.lengthEl.style.width=b.documentElement.offsetWidth+"px");var c=f.lengthEl.offsetWidth;return b.body.removeChild(f.lengthEl),c},f.types={},f.types["image/jpeg"]=!0,f.types["image/gif"]=!0,f.types["image/png"]=!0,f.types["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),f.types["image/webp"]=function(){var a="image/webp";c.onerror=function(){f.types[a]=!1,d()},c.onload=function(){f.types[a]=1===c.width,d()},c.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="},f.verifyTypeSupport=function(a){var b=a.getAttribute("type");return null===b||""===b?!0:"function"==typeof f.types[b]?(f.types[b](),"pending"):f.types[b]},f.parseSize=function(a){var b=/(\([^)]+\))?\s*(.+)/g.exec(a);return{media:b&&b[1],length:b&&b[2]}},f.findWidthFromSourceSize=function(a){for(var b,c=f.trim(a).split(/\s*,\s*/),d=0,e=c.length;e>d;d++){var g=c[d],h=f.parseSize(g),i=h.length,j=h.media;if(i&&(!j||f.matchesMedia(j))){b=i;break}}return f.getWidthFromLength(b)},f.parseSrcset=function(a){for(var b=[];""!==a;){a=a.replace(/^\s+/g,"");var c,d=a.search(/\s/g),e=null;if(-1!==d){c=a.slice(0,d);var f=c.slice(-1);if((","===f||""===c)&&(c=c.replace(/,+$/,""),e=""),a=a.slice(d+1),null===e){var g=a.indexOf(",");-1!==g?(e=a.slice(0,g),a=a.slice(g+1)):(e=a,a="")}}else c=a,a="";(c||e)&&b.push({url:c,descriptor:e})}return b},f.parseDescriptor=function(a,b){var c,d=b||"100vw",e=a&&a.replace(/(^\s+|\s+$)/g,""),g=f.findWidthFromSourceSize(d);if(e)for(var h=e.split(" "),i=h.length-1;i>=0;i--){var j=h[i],k=j&&j.slice(j.length-1);if("h"!==k&&"w"!==k||f.sizesSupported){if("x"===k){var l=j&&parseFloat(j,10);c=l&&!isNaN(l)?l:1}}else c=parseFloat(parseInt(j,10)/g)}return c||1},f.getCandidatesFromSourceSet=function(a,b){for(var c=f.parseSrcset(a),d=[],e=0,g=c.length;g>e;e++){var h=c[e];d.push({url:h.url,resolution:f.parseDescriptor(h.descriptor,b)})}return d},f.dodgeSrcset=function(a){a.srcset&&(a[f.ns].srcset=a.srcset,a.removeAttribute("srcset"))},f.processSourceSet=function(a){var b=a.getAttribute("srcset"),c=a.getAttribute("sizes"),d=[];return"IMG"===a.nodeName.toUpperCase()&&a[f.ns]&&a[f.ns].srcset&&(b=a[f.ns].srcset),b&&(d=f.getCandidatesFromSourceSet(b,c)),d},f.applyBestCandidate=function(a,b){var c,d,e;a.sort(f.ascendingSort),d=a.length,e=a[d-1];for(var g=0;d>g;g++)if(c=a[g],c.resolution>=f.getDpr()){e=c;break}if(e&&!f.endsWith(b.src,e.url))if(f.restrictsMixedContent()&&"http:"===e.url.substr(0,"http:".length).toLowerCase())void 0!==typeof console&&console.warn("Blocked mixed content image "+e.url);else{b.src=e.url,b.currentSrc=b.src;var h=b.style||{},i="webkitBackfaceVisibility"in h,j=h.zoom;i&&(h.zoom=".999",i=b.offsetWidth,h.zoom=j)}},f.ascendingSort=function(a,b){return a.resolution-b.resolution},f.removeVideoShim=function(a){var b=a.getElementsByTagName("video");if(b.length){for(var c=b[0],d=c.getElementsByTagName("source");d.length;)a.insertBefore(d[0],c);c.parentNode.removeChild(c)}},f.getAllElements=function(){for(var a=[],c=b.getElementsByTagName("img"),d=0,e=c.length;e>d;d++){var g=c[d];("PICTURE"===g.parentNode.nodeName.toUpperCase()||null!==g.getAttribute("srcset")||g[f.ns]&&null!==g[f.ns].srcset)&&a.push(g)}return a},f.getMatch=function(a,b){for(var c,d=b.childNodes,e=0,g=d.length;g>e;e++){var h=d[e];if(1===h.nodeType){if(h===a)return c;if("SOURCE"===h.nodeName.toUpperCase()){null!==h.getAttribute("src")&&void 0!==typeof console&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var i=h.getAttribute("media");if(h.getAttribute("srcset")&&(!i||f.matchesMedia(i))){var j=f.verifyTypeSupport(h);if(j===!0){c=h;break}if("pending"===j)return!1}}}}return c},e(),d._=f,"object"==typeof module&&"object"==typeof module.exports?module.exports=d:"function"==typeof define&&define.amd?define(function(){return d}):"object"==typeof a&&(a.picturefill=d)}(this,this.document,new this.Image);


var filter = "win16|win32|win64|mac|macintel";

$('.mobility_Change .app_box .img .btnSmall').click(function(e){

  if ( navigator.platform ) {

    if ( filter.indexOf( navigator.platform.toLowerCase() ) > 0 ) {

      e.preventDefault();

      alert('모바일에서 참여하실 수 있습니다.').stop();

    }

  }

});


