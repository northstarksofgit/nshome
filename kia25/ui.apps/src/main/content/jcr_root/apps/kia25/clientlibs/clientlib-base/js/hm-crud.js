

const url = new URL(window.location.href);
const urlParams = url.searchParams;
var trimCode = urlParams.get('trimCode');
var optionListURL = "/services/option/";
var dataObj;

$(function() {
	new Vue({
		el: '#vue-test',
		data: {
			url1 : new URL(window.location.href),
			urlParams1 : url.searchParams,
			trimCode1 : urlParams.get('trimCode'),
			optionListURL1 : "/services/option/",
			dataObj1 : null
		},
		methods: {
//			init() {
//				var carOptionCode = $("#soflow option:selected").val();
//				var data = {
//						"trimCode" : trimCode,
//						"carOptionCode": carOptionCode
//				}
//				
//				data = JSON.stringify(data)
//				$.ajax({
//					type:"POST",
//					url : optionListURL + "list",
//					data: {
//						data : data
//						},
//					success:function(result){
//						console.log(result);
//						var data = result.list;
//						var select = result.select;
//						$('.option-list-table').empty();
//						var str = "";
//						
//						if(data.length) {
//							for(var i=0; i<data.length; i++) {
//								str += `
//									<tr class="opt-tr">
//							            <td class="opt-td" data-field="optionCode" data-value="${data[i].optionCode}">${data[i].optionCode}</td>
//										<td class="opt-td" data-field="optionName" data-value="${data[i].optionName}">${data[i].optionName}</td>
//										<td class="opt-td" data-field="optionPrice" data-value="${data[i].optionPrice}">${addComma(data[i].optionPrice)}</td>
//							            <td class="opt-td" data-field="bestYn" data-value="${data[i].bestYn}">${data[i].bestYn}</td>
//							            <td class="opt-td" data-field="optionImagePath" data-value="${data[i].optionImagePath}">${data[i].optionImagePath}</td>
//							            <td class="opt-td" data-field="carOptionCode" data-value="${data[i].carOptionCode != null ? data[i].carOptionCode : 'null'}">${data[i].carOptionCode != null ? data[i].carOptionCode : '-'}</td>
//							            <td class="opt-td" data-field="specificationCode" data-value="${data[i].specificationCode != null ? data[i].specificationCode : 'null'}">${data[i].specificationCode != null ? data[i].specificationCode : '-'}</td>
//							            <td class="opt-td" data-field="optionProductNumber" data-value="${data[i].optionProductNumber != null ? data[i].optionProductNumber : 'null'}">${data[i].optionProductNumber != null ? data[i].optionProductNumber : '-'}</td>
//							            <td class="opt-td" style="text-align: center;">	
//							            	<button class="btn-hm btn-edit">Edit</button>
//							            	<button class="btn-hm btn-delete">Delete</button>
//							            </td>
//									</tr>
//								`;
//							}
//						} else {
//							str += `
//								<tr class="opt-tr">
//						            <td class="opt-td" colspan="9" style="text-align:center; font-weight:bold;">No Data</td>
//								</tr>
//							`;
//						}
//						
//						$('.trim-info').html("트림명 : " + select.trimName + "<br>" + "트림코드 : " + select.trimCode);
//						
//						$('.option-list-table').append(str);
//						filtering()
//						bindEvent();
//						
//					},
//				})		
//			}
		},
		created() {
//			this.init();
		},
		mounted() {
			
			console.log(this.url1)
			console.log(this.urlParams1)
			console.log(this.trimCode1)
			console.log(this.optionListURL1)
			console.log(this.dataObj1)
		}
	})
	init();	
})


function returnData(data, mode) {
	var tdList = data;
	var obj = {};
	
	tdList.each(function(i){
		if(tdList.eq(i)[0].dataset.field) {
			if(mode == 'E') {
				if(tdList.eq(i)[0].dataset.value == 'null') {
					obj[tdList.eq(i)[0].dataset.field] = null; 
				} else {
					obj[tdList.eq(i)[0].dataset.field] = tdList.eq(i)[0].dataset.value;
				}
			} else {
				if(tdList.eq(i)[0].dataset.field == 'optionCode') {
					obj[tdList.eq(i)[0].dataset.field] = tdList.eq(i)[0].dataset.value;
				}
				if(tdList.eq(i)[0].dataset.field == 'carOptionCode') {
					obj[tdList.eq(i)[0].dataset.field] = tdList.eq(i)[0].dataset.value;
				}
				
			}
		}
	});

	return obj;
}


function mappingForm(dataObj) {
	var formData = $('.form-area')[0];

	for(var i=0; i<formData.length; i++){
		if(formData[i].name) {
			for(var j in dataObj) {
				if(formData[i].name == j) {
					formData[i].value = dataObj[j];
				}
			}
		}
	}
}


function btnConfirm(mode, data) {
	var action = mode;
	var msg = "";
	var url = "";
		
	if(action == "Save") {
		var formData = $('.form-area').serializeArray();
		data = convertObject(formData);
		formValidate(data);
		data.trimCode = trimCode;
		url = optionListURL + "save";
		msg = "옵션 추가";
		
	} else if(action == "Delete") {
		var carOptionCode = $("#soflow option:selected").val();
		data.carOptionCode = carOptionCode;
		url = optionListURL + "delete";
		msg = "옵션 삭제";
		
	} else if(action == "List") {
		url = optionListURL + "list";
		
	} else if(action == "Edit") {
		url = optionListURL + "edit";
		msg = "옵션 수정";
	}

	$.ajax({
		type:"POST",
		url : url,
		data : {
			data: JSON.stringify(data)
		},
		success:function(data){
			dataObj = null;
			$('.modal').css('display', 'none');
			alert(msg + " 완료");
			init();
		}
	})	
}


function convertObject(data) {
	var returnArray = {};
    for (var i = 0; i < data.length; i++){
    	if(data[i]['name'] == "optionPrice"){
    		returnArray[data[i]['name']] = parseInt(data[i]['value']);
    	} else {    		
    		returnArray[data[i]['name']] = data[i]['value'];
    	}
    }
    
    return returnArray;
}


/*
 *  제이쿼리 이벤트 모음
 */
function bindEvent() {
	$('.btn-search').off().on('click', function() {
		init();
	})
	
	$('.btn-add').off().on('click', function() {
		
		$('.wrapper-form').css('display', 'block');
		$('.btn-confirm').text("Save");
		$('.form-area').css('display', 'block');
		$('.modal-header').css('text-align', '');
		$('.modal-header').text("Option | Add");
		$('.modal').css('display', 'block');
	})

	$('.btn-edit').off().on('click', function() {
		alert("아직 준비중...")
		return false;
//		var tdList = $(this).parents('tr').children();
//		var mode = 'E';
//		dataObj = returnData(tdList , mode);
//
//		mappingForm(dataObj);
//		dataObj.trimCode = trimCode;
//		
//		$('.btn-confirm').text("Edit");
//		$('.form-area').css('display', 'block');
//		$('.modal-header').css('text-align', '');
//		$('.modal-header').text(dataObj.optionName +" | Edit");
//		$('.modal').css('display', 'block');
		
	})


	$('.btn-delete').off().on('click', function() {
		var tdList = $(this).parents('tr').children();
		var mode = 'D'
		dataObj = returnData(tdList , mode);
		dataObj.trimCode = trimCode;
		
		$('.wrapper-form').css('display', 'none');
		$('.btn-confirm').text("Delete");
		$('.form-area').css('display', 'none');
		$('.close').css('display', 'none');
		$('.form-modal').css('display', 'none');
		$('.modal-header').css('text-align', 'center');
		$('.modal-header').text("Are you sure want to delete this option?");
		$('.modal').css('display', 'block')
	})
	

	$('.btn-confirm').off().on('click', function() {
		btnConfirm($(this)[0].textContent, dataObj);
	})
	

	$('.btn-cancel').off().on('click', function() {
		dataObj = null;
		var formData = $('.form-area')[0];
		
		for(var i=0; i<formData.length; i++){
			if(formData[i].name) {
				formData[i].value = null;
			}
		}
		
		dataObj = null;
		$('.modal').css('display', 'none');
	})


	$('#soflow').off().on('change', function(){
		let id = $(this).find(':selected').data('value');
	});
	
	
	$('.wrapper input').focusout(function(){
		var text_value = $(this).val();
        if (text_value === "") {
        	$(this).removeClass('float-label');
        }else {
        	$(this).addClass('float-label');
        }
	});
}

function addComma(price) {
	return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function init() {
	var carOptionCode = $("#soflow option:selected").val();
	var data = {
			"trimCode" : trimCode,
			"carOptionCode": carOptionCode
	}
	
	data = JSON.stringify(data)
			
//	$.post(optionListURL + "list", { data: data }, 
//		function(result) { 
//			console.log(result); 
//			
//			var dataList = result.list;
//			var select = result.select;
//			$('.option-list-table').empty();
//			
//			drawTable(dataList, select);
//			filtering()
//			bindEvent();
//		},'json'
//	);
	
	
	$.ajax({
		type:"POST",
		url : optionListURL + "list",
		data: {
			data : data
		},
		success:function(result){
			var dataList = result.list;
			var select = result.select;
			$('.option-list-table').empty();
			
			drawTable(dataList, select);
			filtering()
			bindEvent();
		},
	})		
}


function filtering() {
	var input, filter, table, tr, td, i, txtValue;
	var cnt = 0;
	
	input = $('.search-input').val();
	filter = input.toUpperCase();
	
	table = document.getElementById("example-table-1");
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[1];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
				cnt++;
			}
		}       
	}
	
	if((tr.length - 1) == cnt) {
		$('.option-list-table').empty();
		var str = "";
		str += `
			<tr class="opt-tr">
	            <td class="opt-td" colspan="9" style="text-align:center; font-weight:bold;">No Data</td>
			</tr>
		`;
		$('.option-list-table').append(str);
	}
}


function formValidate(params) {
	var formData = $('.form-area')[0];
	
	for(var i=0; i<formData.length; i++) {
		if(formData[i].attributes.required) {
			if(!params[formData[i].name]) {
				var label = $("input[name="+formData[i].name+"]").parent().find('label').attr('desc');
				alert(label + "은(는) 필수 값 입니다.");
				$("input[name="+formData[i].name+"]").focus();
				return false;
			}
		}
	}
}


function enterkey() {
    if (window.event.keyCode == 13) {
    	init();
    }
}


function drawTable(data, select) {
	var str = "";
	if(data.length) {
		for(var i=0; i<data.length; i++) {
			str += `
				<tr class="opt-tr">
		            <td class="opt-td" data-field="optionCode" data-value="${data[i].optionCode}">${data[i].optionCode}</td>
					<td class="opt-td" data-field="optionName" data-value="${data[i].optionName}">${data[i].optionName}</td>
					<td class="opt-td" data-field="optionPrice" data-value="${data[i].optionPrice}">${addComma(data[i].optionPrice)}</td>
		            <td class="opt-td" data-field="bestYn" data-value="${data[i].bestYn}">${data[i].bestYn}</td>
		            <td class="opt-td" data-field="optionImagePath" data-value="${data[i].optionImagePath}">${data[i].optionImagePath}</td>
		            <td class="opt-td" data-field="carOptionCode" data-value="${data[i].carOptionCode != null ? data[i].carOptionCode : 'null'}">${data[i].carOptionCode != null ? data[i].carOptionCode : '-'}</td>
		            <td class="opt-td" data-field="specificationCode" data-value="${data[i].specificationCode != null ? data[i].specificationCode : 'null'}">${data[i].specificationCode != null ? data[i].specificationCode : '-'}</td>
		            <td class="opt-td" data-field="optionProductNumber" data-value="${data[i].optionProductNumber != null ? data[i].optionProductNumber : 'null'}">${data[i].optionProductNumber != null ? data[i].optionProductNumber : '-'}</td>
		            <td class="opt-td" style="text-align: center;">	
		            	<button class="btn-hm btn-edit">Edit</button>
		            	<button class="btn-hm btn-delete">Delete</button>
		            </td>
				</tr>
			`;
		}
	} else {
		str += `
			<tr class="opt-tr">
	            <td class="opt-td" colspan="9" style="text-align:center; font-weight:bold;">No Data</td>
			</tr>
		`;
	}
	
	$('.trim-info').html("트림명 : " + select.trimName + "<br>" + "트림코드 : " + select.trimCode);
	
	$('.option-list-table').append(str);
}



