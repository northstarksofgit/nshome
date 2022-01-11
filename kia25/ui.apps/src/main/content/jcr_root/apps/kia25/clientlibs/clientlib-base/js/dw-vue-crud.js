/**
 * crud 페이지 관련 js - vue 적용
 */



$(()=>{

	//build-001.html
	if(document.getElementById('vue-app-crud') != null ){
			
		new Vue({
			
			el: '#vue-app-crud',
			
			mounted: function(){
				const vm = this;
				
				vm.bindingEvents();
				vm.radioChk();
			}, 
			
			methods:{
				bindingEvents,
				radioChk,
				getModelList
			} 
			
		});// vue 인스턴스 닫기
	
	};//vue-app-001 check 닫기

}); //ready function닫기





/*
* 기본 이벤트 바인딩
*/
function bindingEvents(){
	
	
	$('input[type="checkbox"]').on('click', function(){ 
                                $(this).parents('tr').toggleClass('checkedTr');
                            });

	$('.modal').on('click', function(){
	                                $('.modal').css('display', 'none');
	                                $('.modal').find('.onModal').removeClass('onModal');
									 return false;
	                        });
	
	
	
	
	$('.btn.reg.model').on('click', function(){ 
	                                    $('.modal').css('display', 'block');
	                                    $('.model.regBox').addClass('onModal');
	
										$('.onModal').on('click', function(){
	                             	 			return false;
	                           			});
	
	
	                                });
	
	$('.btn.update.model').on('click', function(){ 
	                        $('.modal').css('display', 'block');
	                        $('.model.modBox').addClass('onModal');
							
							$('.onModal').on('click', function(){
	                 	 			return false;
	               			});
	
	
							$('.onModal > .categoryCode').val($(this).attr('categoryCode'));
							$('.onModal > .modelCode').text($(this).attr('modelCode'));
							$('.onModal > .modelYear').text($(this).attr('modelYear'));
							$('.onModal > .modelName').val($(this).attr('modelName'));
							$('.onModal > .modelImg').val($(this).attr('carImagePath'));
							$('.onModal > .modelOrder').val($(this).attr('sortOrder'));
							$('.onModal > .modelUseYn').val($(this).attr('useYn'));
	
	                    });
	
	$('.btn.reg.cate').on('click', function(){ 
	                                            $('.modal').css('display', 'block');
	                                            $('.cate.regBox').addClass('onModal');
	
												$('.onModal').on('click', function(){
		                             	 			return false;
	                           					});
	
	                                        });
	
	$('.btn.update.cate').on('click', function(){ 
										
										
	                                    $('.modal').css('display', 'block');
	                                    $('.cate.modBox').addClass('onModal');
	
										$('.onModal').on('click', function(){
	                             	 			return false;
	                           			});
	
										$('.onModal > .categoryCode').text($(this).attr('categoryCode'));
										$('.onModal > .categoryName').val($(this).attr('categoryName'));
										$('.onModal > .categoryOrder').val($(this).attr('sortOrder'));
										$('.onModal > .categoryUseYn').val($(this).attr('useYn'));
	                                });

}




/*
* 라디오 버튼 기본 체크
*/

function radioChk(){
	
	var radio = $('.radioCURD');
	
	if($(radio[i]).attr('index') == 1){
		$(radio[i]).prop('checked', true);

	};
};
	

/*
* 모델 리스트 가져오기
*/

function getModelList(){
	
	console.log("chk"+$('.radioCURD:checked').val());
	
	
	
	axios.post("/services/model/list", null, {params :{
         categoryCode : $('.radioCURD:checked').val()
    }})
    .then(response => {
         console.log(response); 
    }).catch(error => {
        // 오류발생시 실행
    }).then(() => {
        // 항상 실행
    });
	
	
	
	/*
	$.ajax({
		
		type: "POST", 
		url:"/services/model/list",
		dataType: "json",
				
		data: {
			"categoryCode" : $('.radioCURD:checked').val()
		},
		
	
		success : function(result){

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
													<td><div class="btn update model" categoryCode="${result[i].categoryCode}" modelCode="${result[i].modelCode}" modelYear="${result[i].modelYear}" modelName="${result[i].modelName}">수정</div></td>
												</tr>
												`
			)}
			
			$('input[type="checkbox"]').on('click', function(){ 
                                $(this).parents('tr').toggleClass('checkedTr');
                            });
			
			
		},
		
		error : function(a, b, c){
			console.log(a);
			console.log(b);
			console.log(c);
		}
	});
	
	*/

}


