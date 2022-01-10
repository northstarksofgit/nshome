/**
 *  navi와 다른 컴포넌트 간에 연결되는 함수
 */



function updateBuildOption() {
	
	if (0 < $(".build_option").length) {
		
		var c = $(".totalList .list03 .con");
		c.empty();

		for (var l = $(".build_option .box_l.on"), k = 0; k < l.length; k++) {
			var h = l[k]
			  , m = $(h).find("span.h").text();
			h = $(h).attr("data-price");
			h = makeComma(h);
			c.append("\x3cspan price\x3d" + h + '\x3e\x3cem class\x3d"conTitle"\x3e' + m + '\x3c/em\x3e\x3cspan class\x3d"conPrice"\x3e' + h+ "\x3cem\x3e\uc6d0\x3c/em\x3e\x3c/span\x3e\x3c/span\x3e");

		}
		
	}
	
}



/*
* navi의 total sum을 구하는 함수
*/
function totalSum(price){
	
	var sumPrice = price + parseInt($('.btn_totalCon_open > .price').attr('initprice'));
	
	$('.btn_totalCon_open > .price').text(makeComma(sumPrice));
	
}


/*
* navi의 total sum을 구한 뒤, , 를 찍어서 다시 보여주는 함수
*/
function makeComma(str) {

	 str = String(str);

	 return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');

 }



/*
* 사용자가 선택한 trim에 대한 내용이 navi에 할당됩니다.
*/
function addTrimToNavi(){
	

	var trimClick = $('.trim_click');

	for(var i = 0; i<trimClick.length; i++){
		
		if($(trimClick[i]).hasClass('on')){
			
			/*
			*  trim name 할당
			*/
			$('.list01 > .list_in > .con > .conTitle').text($(trimClick[i]).find('.h').text());

			/*
			* trim img 할당
			*/
			$('.list01 > .list_in > .con > .carImg > img').attr('src', $('.carGroupImg').attr('src'));


			/*
			*  trim price 할당 -- int 로
			*/
			var priceInt = parseInt($($('.trim-list')[i]).attr('data-price'));
			$('.list01 > .list_in > .con').attr('price', priceInt);

			/*
			*  trim price 할당 -- str로
			*/
			var priceStr = makeComma(priceInt);
			$('.list01 > .list_in > .con > .conPrice').html(priceStr+'<em>원<em>');

			/*
			* 합계 변경
			*/
			$('.btn_totalCon_open > .price').attr('initprice', 0);
			totalSum(priceInt);
			
		}
	
	}
	
}



/*
* 사용자가 선택한 color 정보가 navi에 반됩니다.
*/

function addColorToNavi(){


	var extPrice;
	var intPrice;

	var ext = $('.exteriorOption');

	for(var i=0; i<ext.length; i++){

		if($(ext[i]).hasClass('on')){

		
			/*
			* 외장재 가격 삽입
			*/
			extPrice = $(ext[i]).attr('price');
			$('.con_exterior').attr('price1', makeComma(extPrice));
			$('.con_exterior').find('.conPrice').html(makeComma(extPrice)+'<em>원</em>');
			
			/*
			* 외장재 이미지 삽입
			*/
			$('.con_exterior').find('.colorImg').attr('src', $(ext[i]).find('img').attr('src'));

			/*
			* 외장재 이름 삽입
			*/
			$('.con_exterior').find('.conTitle').text($(ext[i]).find('.color_info > .name').text());

		}

	}


	var interior = $('.interiorOption');

	for(var i=0; i<interior.length; i++){
		
		if($(interior[i]).hasClass('on')){
			
			
			/*
			* 내장재 가격 저장
			*/
			intPrice = $(interior[i]).attr('price');
			$('.con_interior').attr('price2', makeComma(intPrice));
			$('.con_interior').find('.conPrice').html(makeComma(intPrice)+'<em>원</em>');
			
			/*
			* 내장재 이미지 저장
			*/
			$('.con_interior').find('.colorImg').attr('src', $(interior[i]).find('img').attr('src'));
			
			/*
			* 내장재 이름 저장
			*/
			$('.con_interior').find('.conTitle').text($(interior[i]).find('.color_info > .name').text());

		}

	}
	
	/*
	* 합계 변경
	*/
	totalSum(parseInt(extPrice)+parseInt(intPrice));

}



/*
* 사용자가 선택한 구매 방법이 navi에 반영됨
*/
function addHowToBuy(){
	
	$('.list_in > p').remove();
	$('.con_pay').empty();
	
	/*
	* 현금 or 할부
	*/
	var payType = $('input[name=pay_sel_radio]:checked').attr('data-method');
	
	/*
	* 차량가 : 과세(no) 면세(yes)
	*/
	var pricefree = $('input[name=sample3]:checked').attr('pricefree');
	
	if(payType == 'cash'){
		
		/*
		* 현금일 경우
		*/
		$('.con_pay').append('<span><em class="tit">지불방법</em><em class="txt">현금구입</em></span>');
		
	}else{
		
		/*
		* 할부일 경우
		*/
		$('.con_pay').append('<span><em class="tit">지불방법</em><em class="txt">오토할부</em></span>');
		$('.con_pay').append('<span><em class="tit">할부</em><em class="txt">'+$('input[name=pay_date_radio]:checked').attr('data-term')+'개월</em></span>');
		$('.con_pay').append('<span><em class="tit">할부원금</em><em class="txt">'+makeComma(parseInt($('.initFee').val()+'0000'))+'원</em></span>');
	}
	
	if(pricefree == 'no'){
		
		/*
		* 과세일 경우
		*/
		$('.con_pay').append('<span><em class="tit">차량가</em><em class="txt">과세</em></span>');
		
	}else{
		
		/*
		* 면세일 경우
		*/
		$('.con_pay').append('<span><em class="tit">차량가</em><em class="txt">면세</em></span>');
	}
	
}
