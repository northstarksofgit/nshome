////$(document).ready(function() {
//
//	/**
//	 *  지불방법 클릭 display 제어
//	 */
//    $("input:radio[name=sample1]").click(function() {
//
//        if($(this).find('input').context.id == "sample1_2") {
//			$('.installment').css('display','block');
//        } else {
//            $('.installment').css('display','none');
//        }
//
//    })
//    
//
//	/**
//	 *  페이지 첫 진입 시 탁송방법 display 제어
//	 */
//	var transfer = $("input:radio[name=sample12]");
//	for(var i=0; i<transfer.length; i++) {
//		if(transfer[i].checked && transfer[i].id == "sample12_1") {
//			$('.pay_sel.mhet').css('display', 'none');
//		} 
//	}
//	
//	/**
//	 *  탁송방법 display 제어
//	 */
//	$("input:radio[name=sample12]").click(function() {
//
//        if($(this).find('input').context.id == "sample12_2") {
//			$('.pay_sel.mhet').css('display','block');
//        } else {
//            $('.pay_sel.mhet').css('display','none');
//        }
//
//    })
//
//	
//    
//
//
//    $('.form_spr.selected-headline').mouseenter(function() {
//        $('.form_spr.selected-headline').addClass('select-list-selfocus')
//    });
//
//	$('.form_spr.selected-headline').mouseleave(function() {
//        $('.form_spr.selected-headline').removeClass('select-list-selfocus')
//    });
//
//	$('.form_spr.selected-headline').click(function() {
//
//        if($(this).parent().find('.select-list').css('display') == 'block') {
//			$(this).parent().find('.select-list').css('display','none')
//        } else {
//			$(this).parent().find('.select-list').css('display','block')
//        }
//
//	})
//
//    $('.transfeeSi').mouseleave(function() {
//		$('.transfeeSi').css('display','none');
//    });
//
//    $('.select-list-link').mouseenter(function() {
//        //console.log($(this).find('a'))
//    	//$('.select-list-link').addClass('select-list-hover');
//    })
//    
//    $('.transfeeSi').click(function() {
//    	console.log($(this))
//    })
//    
//    $('.transfeeSi-item').click(function() {
//    	$('.transfeeSi-item').removeClass('select-list-selected');
//    	$(this).addClass('select-list-selected');
//    	$('.selected-si').text($(this)[0].title);
//    	$('.transfeeSi').trigger('mouseleave');
//    })
//    
//    
//    var si_area = {
//    	
//    }
//    
//    
////})
