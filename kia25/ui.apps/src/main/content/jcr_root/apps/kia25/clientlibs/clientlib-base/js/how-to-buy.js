

    $("input:radio[name=sample1]").click(function() {

        if($(this).find('input').context.id == "sample1_2") {
			$('.installment').css('display','block');
        } else {
            $('.installment').css('display','none');
        }

    })


    $("input:radio[name=sample12]").click(function() {

        if($(this).find('input').context.id == "sample12_2") {
			$('.pay_sel.mhet').css('display','block');
        } else {
            $('.pay_sel.mhet').css('display','none');
        }

    })


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

    $('.select-list').mouseleave(function() {
		$('.select-list').css('display','none')
    });

    $('.select-list-link').mouseenter(function() {
        //console.log($(this).find('a'))
    	//$('.select-list-link').addClass('select-list-hover');
    })
