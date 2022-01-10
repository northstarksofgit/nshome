/**
 * vue 적용 파일
 */

$(()=>{

	//build-001.html
	if(document.getElementById('vue-app-001') != null ){
			
		new Vue({
			
			el: '#vue-app-001',
			created: function(){
				const vm = this;
				window.addEventListener('scroll', vm.cateogryScroll);
			}, 
			
			methods:{
				cateogryScroll,
			} 
			
		});// vue 인스턴스 닫기
	
	};//vue-app-001 check 닫기
	
	
	//navi.html
	if(document.getElementById('vue-app-navi') != null ){
			
		new Vue({
			
			el: '#vue-app-navi',
			
			mounted: function(){
				const vm = this;
				
				$(".build_car").length && vm.naviBarInit();
				 vm.naviBar();
			},
			
			methods:{
				naviBarInit,
				naviBar
				
			} //method 닫기
			
		});// vue 인스턴스 닫기
	
	};//vue-app-navi check 닫기
	
	
	
	

	
	
}); //ready function닫기






	
	
		

/*
* 카테고리 관련 js
*/

if($(".category").length>0){

	console.log('category check');

	var category = $(".category").offset().top;
	var carTab = $(".estimate_online_wrap > .inner > div");

	
};
	
	
const cateogryScroll = () =>{
		
  	var windowTop = $(document).scrollTop();
	var carMenu = $(".category .inbox a");

	if($(".category").length>0){
			

	    (category <= windowTop) ? $(".category").addClass("fixed") : $(".category").removeClass("fixed");

		var carTab = $('.estimate_online_wrap > .inner > div');
		var carTabTop = new Array();	
		var carTabBottom = new Array();
		
		for(var i=0; i<carTab.length; i++){
			
			/* carTab top 위치 저장하기	
			* 첫 화면에서 첫번째 탭이 무조건 선택되어 있게 하기 위함
			*/
			i==0 ? carTabTop[i] = 0 : carTabTop[i] = $(carTab[i]).offset().top-100;
			
			/*
			* div의 bottom 위치 저장하기
			*/
			carTabBottom[i] = $(carTab[i]).offset().top-100 + carTab[i].offsetHeight;
		}


		for(var i=0; i<carTabTop.length; i++){
			
			
			/*
			* car tab에 on 적용
			*/
			(windowTop >= carTabTop[i] && windowTop <= carTabBottom[i]) ? $(carMenu[i]).addClass("on") : $(carMenu[i]).removeClass("on");
			
		}

	}
};


/*
* navi 관련 js
*/

const naviBarInit = ()=> {
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



const naviBar = () => {
	
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







