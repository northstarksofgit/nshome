(function ($) {
	
	$("#category-save").on('click'), function() {
		alert("abc");
		var data = {
                categoryCode : '006'
                , categoryName : 'TEST'
            };
            
        $.ajax({
			url: "/services/db/category/save",
			data: data
		});
        
	}
	
	
})(jQuery);
