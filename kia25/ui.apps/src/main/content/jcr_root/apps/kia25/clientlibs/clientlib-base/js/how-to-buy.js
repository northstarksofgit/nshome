//$(document).ready(function() {

	/**
	 * 차량보기 버튼
	 */
	$('.bl_type_b.btn_car_view').on('click', function() {
		$('.car_view_more').css('display') == 'none' ? 
				$('.car_view_more').css('display','block') : $('.car_view_more').css('display','none');
	})


	/**
	 *  지불방법 클릭 display 제어
	 */
    $("input:radio[name=pay_sel_radio]").click(function() {

        if($(this).find('input').context.id == "pay_sel_radio_2") {
			$('.installment').css('display','block');
        } else {
            $('.installment').css('display','none');
        }

    })
    

	/**
	 *  페이지 첫 진입 시 탁송방법 display 제어
	 */
	var transfer = $("input:radio[name=pay_sel_trans]");
	for(var i=0; i<transfer.length; i++) {
		if(transfer[i].checked && transfer[i].id != "pay_sel_trans_1") {
			$('.pay_sel.mhet').css('display', 'none');
		} 
	}
	
	/**
	 *  탁송방법 display 제어
	 */
	$("input:radio[name=pay_sel_trans]").click(function() {

        if($(this).find('input').context.id != "pay_sel_trans_2") {
			$('.pay_sel.mhet').css('display','block');
        } else {
            $('.pay_sel.mhet').css('display','none');
        }

    })

	
    

    /**
     * 탁송방법 select Box 제어 start
     */

    $('.form_spr.selected-headline').mouseenter(function() {
        $('.form_spr.selected-headline').addClass('select-list-selfocus')
    });

	$('.form_spr.selected-headline').mouseleave(function() {
        $('.form_spr.selected-headline').removeClass('select-list-selfocus')
    });

	$('.form_spr.selected-headline').click(function() {

        if($(this).parent().find('.select-list').css('display') == 'block') {
			$(this).parent().find('.select-list').css('display','none')
        } else {
			$(this).parent().find('.select-list').css('display','block')
        }

	})

    $('.transfeeSi').mouseleave(function() {
		$('.transfeeSi').css('display','none');
    });
	
	$('.transfeeSi-sub').mouseleave(function() {
		$('.transfeeSi-sub').css('display','none');
    });
	
	$('.trans-sub').mouseleave(function() {
		$('.trans-sub').css('display','none');
    });

    $('.transfeeSi-item').click(function() {
    	$('.selected-si-sub').text("선택하세요");
    	$('.transfeeSi-sub')[0].style.height = '56px';
    	var parentValue = $(this)[0].dataset.value;
    	var subItemList = $('.transfeeSi-subItem');
    	
    	for(var i=0; i<subItemList.length; i++) {
    		if(parentValue == $(subItemList[i])[0].dataset.parentvalue) {
    			$(subItemList[i])[0].style.display = 'block';
    		} else {
    			$(subItemList[i])[0].style.display = 'none';
    		}
    	}
    	
    	var cnt = 0;
    	for(var j=0; j<subItemList.length; j++) {
    		if($(subItemList[j])[0].style.display == 'block') {
    			cnt++;
    		}
    	}
    	
    	var height = $('.transfeeSi-sub')[0].style.height;
    	height = height.replace('px','');
    	height = height*cnt;
    	if(height > 150) {
    		height = '130px'; 
    	} else {
    		height = height+'px'; 
    	}
		$('.transfeeSi-sub')[0].style.height = height;
    	
    })
    
    $('.transfeeSi-item').click(function() {
    	$('.transfeeSi-item').removeClass('select-list-selected');
    	$(this).addClass('select-list-selected');
    	$('.selected-si').text($(this)[0].title);
    	$('.transfeeSi').trigger('mouseleave');
    })
    
    $('.transfeeSi-subItem').click(function() {
    	$('.transfeeSi-subItem').removeClass('select-list-selected');
    	$(this).addClass('select-list-selected');
    	$('.selected-si-sub').text($(this)[0].title);
    	$('.transfeeSi-sub').trigger('mouseleave');
    })
    
    
    $('.trans-item').on('click', function() {
    	$('.trans-item').removeClass('select-list-selected');
    	$(this).addClass('select-list-selected');
    	$('.trans-text').text($(this)[0].title);
    	$('.trans-sub').trigger('mouseleave');
    })
    
    
    
    /**
     * 탁송방법 select Box 제어 end
     */
    
    
    
    /**
     * 등록비용 select Box 제어 start
     */
    $('.regist-item').on('click', function() {
    	$('.regist-item').removeClass('select-list-selected');
    	$(this).addClass('select-list-selected');
    	$('.regist-text').text($(this)[0].title);
    	$('.regist-sub').trigger('mouseleave');
    })
    
    
	
	$('.regist-sub').mouseleave(function() {
		$('.regist-sub').css('display','none');
    });
    /**
     * 등록비용 select Box 제어 end
     */
    
    
    
    /**
     * 포인트 radio Button 제어 start
     */
    $("input:radio[name=buy-count-radio]").click(function() {
    	var val = $(this)[0].value;
    	$('#redSavePoint').val(val);
    })
    /**
     * 포인트 radio Button 제어 end
     */
    