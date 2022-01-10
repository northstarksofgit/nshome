/**
 * vue 적용 파일
 */

$(()=>{

	if(document.getElementById('vue-app') != null ){	
	
		new Vue({
			
			el: '#vue-app',
	
			created: function(){
				
				const vm = this;
				window.addEventListener('scroll', vm.cateogryScroll);

			}, //created 닫기
			
			methods:{
				
				cateogryScroll,
				
				
				
			} //method 닫기
			
			
			
			
			
			
		})// vue 인스턴스 닫기
	
	}//vue-app null check 닫기
	
}); //ready function닫기






	
	
		

/*
* 카테고리 관련 js
*/

if($(".category").length>0){

	console.log('category check');

	var category = $(".category").offset().top;
	var carTab = $(".estimate_online_wrap > .inner > div");
	var carMenu = $(".category .inbox a");
	
};
	
	
const cateogryScroll = () =>{
					
  	var windowTop = $(document).scrollTop();

	if($(".category").length>0){
			

	    (category <= windowTop) ? $(".category").addClass("fixed") : $(".category").removeClass("fixed");

		var carTab = $('.estimate_online_wrap > .inner > div');
		var carTabTop = new Array();	
		var carTabBottom = new Array();
		
		for(var i=0; i<carTab.length; i++){
			
			/* carTab top 위치 저장하기	
			* 첫 화면에서 첫번째 탭이 무조건 선택되어 있게 하기 위함
			*/
			i==0 ? carTabTop[i] = 0 : carTabTop[i] = $(carTab[i]).offset().top-29;
			
			/*
			* div의 bottom 위치 저장하기
			*/
			carTabBottom[i] = $(carTab[i]).offset().top-29 + carTab[i].offsetHeight;
		}


		for(var i=0; i<carTabTop.length; i++){
			
			/*
			* car tab에 on 적용
			*/
			(windowTop >= carTabTop[i] && windowTop <= carTabBottom[i]) ? $(carMenu[i]).addClass("on") : $(carMenu[i]).removeClass("on");
		}

	}
}


