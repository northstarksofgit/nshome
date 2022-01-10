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
			created: function(){
				
				const vm = this;

			}, 
			
			methods:{
			} 
			
		});// vue 인스턴스 닫기
	
	};//vue-app-001 check 닫기
	
	
	
	
	
	
	
	
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


