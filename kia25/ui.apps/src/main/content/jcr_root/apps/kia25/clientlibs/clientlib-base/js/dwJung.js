






/*
* crud page 관련 js
*/



/*
* ajax 공통화 필요
*/

function postAjax(url, dataType, data, traditional, func){
	
	$.ajax({
		
		type: "POST", 
		url: url,
		dataType: dataType,
     	traditional: traditional,
		data: data,
		
		success : function(result){
			
			func(result);
		},
		
		error : function(a, b, c){
			console.log(a);
			console.log(b);
			console.log(c);
		}
	});
	
}






/*
* 카테고리 리스트 가져오기
*/
function getCategoryList(){
	
	$.ajax({
	
		type: "POST", 
		url:"/services/category/list",
		dataType: "json",
		
		success : function(result){
			
			
			
			$('.categoryTbl > tbody').empty();
			
			for(var i=0; i < result.length; i++){
				$('.categoryTbl > tbody').append(
				
					`
						<tr>
		                    <td><input type="checkbox" name="categoryChk" class="chk" categoryCode="${result[i].categoryCode}"></td>
		                    <td>${result[i].categoryCode}</td>
		                    <td>${result[i].categoryName}</td>
		                    <td>${result[i].sortOrder}</td>
		                    <td>${result[i].useYn}</td>
		                    <td><div class="btn update cate" 
									 categoryCode="${result[i].categoryCode}" 
									 categoryName="${result[i].categoryName}"
									 sortOrder="${result[i].sortOrder}" 
									 useYn="${result[i].useYn}">수정</div></td>
		                </tr>
					
					`
				);

			}
			
			bindingEvents();


			
		},
		
		
		error : function(a, b, c){
			console.log(a);
			console.log(b);
			console.log(c);
		}
	});
	
	
}



/*
* 카테고리 등록 이벤트
*/
$('.cate.regBox > .confirm').on('click',function(){

	
	if($('input[name=categoryRegCode]').val() == ''
	  || $('input[name=categoryRegName]').val() == ''){
		
		alert('항목을 모두 입력하여주세요');
		
		return;
	}
	

	$.ajax({
			
			type: "POST", 
			url:"/services/category/save",
			dataType: "text",
					
			data: {
				"categoryCode" : $('input[name=categoryRegCode]').val(),
				"categoryName" : $('input[name=categoryRegName]').val(),
				"sortOrder" : $('input[name=categoryRegOrder]').val(),
				"useYn" : $('input[name=categoryRegUseYn]').val()
			},
			
		
			success : function(result){
				alert(result);
				getCategoryList();
			},
			
			error : function(a, b, c){
				console.log(a);
				console.log(b);
				console.log(c);
			}
		});
	
});


/*
* 카테고리 수정 이벤트
*/

$('.cate.modBox > .btn.confirm').on('click', function(){
	
	
	$.ajax({
		
		type: "POST", 
		url:"/services/category/save",
		dataType: "text",
				
		data: {
			"categoryCode" : $(this).siblings('.categoryCode').text(),
			"categoryName" : $(this).siblings('.categoryName').val(),
			"sortOrder" : $(this).siblings('.categoryOrder').val(),
			"useYn" : $(this).siblings('.categoryUseYn').val()
		},
		
		success : function(result){
			alert(result);
			getCategoryList();
			
		},
		
		error : function(a, b, c){
			console.log(a);
			console.log(b);
			console.log(c);
		}
	});
	
})



/*
* 카테고리 삭제 이벤트
*/
$('.btn.delete.cate').on('click', function(){
	
	var box = $('input[name=categoryChk]:checked');
	var chk = new Array();
	for(var i=0; i < box.length; i++){		
		chk[i] = $(box[i]).attr('categorycode');
	}
	
	$.ajax({
			
			type: "POST", 
			url:"/services/category/delete",
			dataType: "text",
					
			data: {
				"categoryCode" : chk.join()
			},
			
		
			success : function(result){
				alert(result);
				getCategoryList();
			},
			
			error : function(a, b, c){
				console.log(a);
				console.log(b);
				console.log(c);
			}
		});
	
})




/*
* 카테고리 검색 버튼 클릭시 필터 작동
*/
$('.sConfirm').on('click', function(){

//	setTimeout(function(){
//		getCategoryList();
//	}, 1000)
	
	categoryFilter();
	bindingEvents();

})





/*
* 카테고리 필터
*/


function categoryFilter(){
	
	var orgin = $('.categoryTbl > tbody > tr');
	
	var selected = $('select[name=categoryCon] option:selected').val();
	var condition = $('input[name=categoryCon]').val();
	
	var compared = [];
	var result = [];
	
	if(selected=='none' || $('input[name=categoryCon]').val() == ''){
		alert('검색 조건을 입력하세요');
		return;
	}

	
	for(var i=0; i<orgin.length; i++){
		
		var data = {
		categoryCode: $(orgin[i]).find('.btn.update.cate').attr('categorycode'),
		categoryName: $(orgin[i]).find('.btn.update.cate').attr('categoryname'),
		sortOrder: $(orgin[i]).find('.btn.update.cate').attr('sortOrder'),
		useYn: $(orgin[i]).find('.btn.update.cate').attr('useYn')};
					
		compared.push(data);
		
	}

	
	if(selected == "categoryName"){
		result = compared.filter((category, index, target) => {
			
			var chk = category.categoryName;	
			return  chk.includes(condition) });
		
	}else{	
		result = compared.filter((category, index, target) => {
			
			var chk = category.categoryCode;
			return chk.includes(condition) });
	}
	

	
	$('.categoryTbl > tbody').empty();
			
	for(var i=0; i < result.length; i++){
		
		$('.categoryTbl > tbody').append(
			`
				<tr>
                    <td><input type="checkbox" name="categoryChk" class="chk" categoryCode="${result[i].categoryCode}"></td>
                    <td>${result[i].categoryCode}</td>
                    <td>${result[i].categoryName}</td>
                    <td>${result[i].sortOrder}</td>
                    <td>${result[i].useYn}</td>
                    <td><div class="btn update cate" 
							 categoryCode="${result[i].categoryCode}" 
							 categoryName="${result[i].categoryName}"
							 sortOrder="${result[i].sortOrder}" 
							 useYn="${result[i].useYn}">수정</div></td>
                </tr>
			
			`
		);

	}
	
}











/*
* 모델 등록 이벤트
*/
$('.model.regBox > .confirm').on('click',function(){

	
	if($('input[name=modelCateRegCode]').val() == ''
	  || $('input[name=modelRegCode]').val() == ''
	  || $('input[name=modelRegYear]').val() == ''
	  || $('input[name=modelRegName]').val() == ''
	  || $('input[name=modelRegImg]').val() == ''){
		
		alert('항목을 모두 입력하여주세요');
		
		return;
	}
	
	
	
	var url = "/services/model/save";
	var dataType = "text";
	
	var data = {
				"categoryCode" : $('input[name=modelCateRegCode]').val(),
				"modelCode" : $('input[name=modelRegCode]').val(),
				"modelYear" : $('input[name=modelRegYear]').val(),
				"modelName" : $('input[name=modelRegName]').val(),
				"carImagePath" : $('input[name=modelRegImg]').val(),
				"sortOrder" : $('input[name=modelRegOrder]').val(),
				"useYn" : $('input[name=modelRegUseYn]').val()
			};
		
	var traditional = false;
	
	function func(result){
		alert(result);				
		getModelList();
	}
	
	 postAjax(url, dataType, data, traditional, func);
	
	
});


/*
* 모델 수정 이벤트
*/
$('.model.modBox > .confirm').on('click',function(){

	
	if($('input[name=modelCateModCode]').val() == ''
	  || $('input[name=modelModName]').val() == ''
	  || $('input[name=modelModImg]').val() == ''
	  || $('input[name=modelModOrder]').val() == ''
	  || $('input[name=modelModUseYn]').val() == ''){
		
		alert('항목을 모두 입력하여주세요');
		
		return;
	}
	
	
	
	var url = "/services/model/save";
	var dataType = "text";
	
	var data = {
				"categoryCode" : $('input[name=modelCateModCode]').val(),
				"modelCode" : $('.modelCode').text(),
				"modelYear" : $('.modelYear').text(),
				"modelName" : $('input[name=modelModName]').val(),
				"carImagePath" : $('input[name=modelModImg]').val(),
				"sortOrder" : $('input[name=modelModOrder]').val(),
				"useYn" : $('input[name=modelModUseYn]').val()
			};
		
	var traditional = false;
	
	function func(result){
		alert(result);				
		getModelList();
	}
	
	 postAjax(url, dataType, data, traditional, func);
	
	
});





/*
* 모델 삭제 이벤트
*/
$('.btn.delete.model').on('click', function(){
	
	var box = $('input[name=modelChk]:checked');
	var chk = [];
	
	for(var i=0; i < box.length; i++){
		var data = {
					modelCode: $(box[i]).attr('modelCode'),
					modelYear: $(box[i]).attr('modelYear')}		
		chk.push(data);
	}
	
	console.log(chk);
	
	$.ajax({
		
		type: "POST", 
		url:"/services/model/delete",
		dataType: "text",
		
     	traditional: true,
		data: {
			data: JSON.stringify(chk)	
		},
		
		success : function(result){
			
			alert(result);
			getModelList();
		},
		
		error : function(a, b, c){
			console.log(a);
			console.log(b);
			console.log(c);
		}
	});
	
	
	
});



/*
* 모델 검색
*/
$('.mConfirm').on('click', function(){
	
	getModelList();
//  모델 리스트 갱신

	setTimeout(function(){
		modelFilter();
		bindingEvents();	
	}, 200)

	

})




/*
* 모델 필터
*/

function modelFilter(){
	
	
	var orgin = $('.modelTbl > tbody > tr');
	
	var selected = $('select[name=modelCon] option:selected').val();
	var condition = $('input[name=modelCon]').val();
	
	var compared = [];
	var result = [];
	
	if(selected=='none' || $('input[name=modelCon]').val() == ''){
		alert('검색 조건을 입력하세요');
		return;
	}

	
	
	for(var i=0; i<orgin.length; i++){
		
		var data = {
			categoryCode: $(orgin[i]).find('.btn.update.model').attr('categorycode'),
			modelCode: $(orgin[i]).find('.btn.update.model').attr('modelCode'),
			modelYear: $(orgin[i]).find('.btn.update.model').attr('modelYear'),
			modelName: $(orgin[i]).find('.btn.update.model').attr('modelName'),
			carImagePath: $(orgin[i]).find('img').attr('src'),
			sortOrder: $(orgin[i]).find('.btn.update.model').attr('sortOrder'),
			useYn: $(orgin[i]).find('.btn.update.model').attr('useYn'),
			}
						
		compared.push(data);
		
	}
	
	if(selected == "modelCode"){
		result = compared.filter((model, index, target) => {
			
			var chk = model.modelCode;	
			return  chk.includes(condition) });
		
	}else if(selected == "modelName"){	
		result = compared.filter((model, index, target) => {
		
			var chk = model.modelName;	
			return  chk.includes(condition) });
		
	}else{	
		// modelYear
		result = compared.filter((model, index, target) => {
		
			var chk = model.modelYear;	
			return  chk.includes(condition) });
		
	}
	
	
	$('.modelTbl > tbody').empty();
			
	for(var i=0; i < result.length; i++){
		$('.modelTbl > tbody').append(
				`
					<tr>
						<td> <input type="checkbox" name="modelChk" class="chk" modelCode="${result[i].modelCode}" modelYear="${result[i].modelYear}"> </td>
						<td>${result[i].categoryCode}</td>
						<td>${result[i].modelCode}</td>
						<td>${result[i].modelYear}</td>
						<td>${result[i].modelName}</td>
						<td><img style="height:100px;" src="${result[i].carImagePath}"></td>
						<td>${result[i].sortOrder}</td>
						<td>${result[i].useYn}</td>
						<td><div class="btn update model" 
								 categoryCode="${result[i].categoryCode}" 
								 modelCode="${result[i].modelCode}" 
								 modelYear="${result[i].modelYear}" 
								 modelName="${result[i].modelName}"
								 carImagePath="${result[i].carImagePath}"
								 sortOrder="${result[i].sortOrder}"
	 							 useYn="${result[i].useYn}">수정</div></td>
					</tr>
				`
	)}

	
}




