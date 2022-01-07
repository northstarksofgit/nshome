
$(function() {
	if(!(document.getElementById("vue-test")))
		return false;
	
	const app = new Vue({
		el: '#vue-test',
		data: {
			url : null,
			urlParams : null,
			trimCode : null,
			optionListURL : null,
			dataObj : null,
//			table: null,
		},
		
		//start Methods
		methods: {
			init : function() { //start init()
				var ref = this;
				var carOptionCode = $("#soflow option:selected").val();
					
				var data = {
						"trimCode" : this.trimCode,
						"carOptionCode": carOptionCode
				}
				
				data = JSON.stringify(data)
				$.ajax({
					type:"POST",
					url : this.optionListURL + "list",
					data: {
						data : data
					},
					success:function(result){
						console.log(result);
						var dataList = result.list;
						var select = result.select;
						$('.option-list-table').empty();
						
						ref.drawTable(dataList, select);
						ref.filtering()
						ref.bindEvent();
					},
					beforeSend: function() { //로딩이미지 보여주기
						$("#modal-wrap-loading").show();
					    $("#wrap-loading").show();
					},
					complete: function() { //로딩이미지 숨기기
						$("#modal-wrap-loading").hide();
					    $("#wrap-loading").hide();
					}
				})		
			}, //end init()
			
			drawTable : function(data, select) { //start drawTable()
				var str = "";
				if(data.length) {
					for(var i=0; i<data.length; i++) {
						str += `
							<tr class="opt-tr">
					            <td class="opt-td" data-field="optionCode" data-value="${data[i].optionCode}">${data[i].optionCode}</td>
								<td class="opt-td" data-field="optionName" data-value="${data[i].optionName}">${data[i].optionName}</td>
								<td class="opt-td" data-field="optionPrice" data-value="${data[i].optionPrice}">${this.addComma(data[i].optionPrice)}</td>
					            <td class="opt-td" data-field="bestYn" data-value="${data[i].bestYn}">${data[i].bestYn}</td>
					            <td class="opt-td" data-field="optionImagePath" data-value="${data[i].optionImagePath}">${data[i].optionImagePath}</td>
					            <td class="opt-td" data-field="sortOrder" data-value="${data[i].sortOrder}">${data[i].sortOrder}</td>
					            <td class="opt-td" data-field="useYn" data-value="${data[i].useYn}">${data[i].useYn}</td>
					            
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
			}, //end drawTable()
			
			filtering : function() { //start filtering()
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
			}, //end filtering()
			
			bindEvent : function() { //start bindEvent()
				$('.btn-search').off().on('click', function() {
					app.init();
				})
				
				$('.btn-add').off().on('click', function() {
					var list = $('.form-area')[0];
					for(var i=0; i<list.length; i++) {
						list[i].classList.remove('float-label');
					}				
					
					$('[name=optionCode]').attr('readonly', false);
					$('[name=carOptionCode]').attr('readonly', false);
					$('.wrapper-form').css('display', 'block');
					$('.btn-confirm').text("Save");
					$('.form-area').css('display', 'block');
					$('.modal-header').css('text-align', '');
					$('.modal-header').text("Option | Add");
					$('.modal').css('display', 'block');
				})

				$('.btn-edit').off().on('click', function() {
					var tdList = $(this).parents('tr').children();
					var mode = 'E';
					app.dataObj = app.returnData(tdList , mode);
					app.selectData(app.dataObj);

					$('[name=optionCode]').attr('readonly', true);
					$('[name=carOptionCode]').attr('readonly', true);
					$('.wrapper-form').css('display', 'block');
					$('.btn-confirm').text("Edit");
					$('.form-area').css('display', 'block');
					$('.modal-header').css('text-align', '');
					$('.modal-header').text(app.dataObj.optionName +" | Edit");
					$('.modal').css('display', 'block');
				})


				$('.btn-delete').off().on('click', function() {
					var tdList = $(this).parents('tr').children();
					var mode = 'D'
					app.dataObj = app.returnData(tdList , mode);
					app.dataObj.trimCode = app.trimCode;
					
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
					app.btnConfirm($(this)[0].textContent, app.dataObj);
				})
				

				$('.btn-cancel').off().on('click', function() {
					this.dataObj = null;
					
					app.formReset();
					
					this.dataObj = null;
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
			}, //end bindEvent()
			
			btnConfirm : function(mode, data) { //start btnConfirm()
				var action = mode;
				var msg = "";
				var url = "";
				var ref = this;
				
				if(action == "Save" || action == "Edit" ) {
					var formData = $('.form-area').serializeArray();
					data = ref.convertObject(formData);
					data.trimCode = this.trimCode;
					
					ref.formValidate(data);
					url = this.optionListURL + "save";
					msg = "옵션 저장";
					
				} else if(action == "Delete") {
					var carOptionCode = $("#soflow option:selected").val();

					data.carOptionCode = carOptionCode;
					url = this.optionListURL + "delete";
					msg = "옵션 삭제";
					
				} else if(action == "List") {
					url = this.optionListURL + "list";
					
				} 

				$.ajax({
					type:"POST",
					url : url,
					data : {
						data: JSON.stringify(data)
					},
					success:function(data){
						app.dataObj = null;
						
						ref.formReset();
						
						$('.modal').css('display', 'none');
						alert(msg + " 완료");

						app.init();
					},
					beforeSend: function() { //로딩이미지 보여주기
						$("#modal-wrap-loading").show();
					    $("#wrap-loading").show();
					},
					complete: function() { //로딩이미지 숨기기
						$("#modal-wrap-loading").hide();
					    $("#wrap-loading").hide();
					}
				})	
			}, //end btnConfirm()
			
			convertObject : function(data) { //start convertObject()
				var returnArray = {};
			    for (var i = 0; i < data.length; i++){
			    	if(data[i]['name'] == "optionPrice" || data[i]['name'] == "sortOrder"){
			    		returnArray[data[i]['name']] = parseInt(data[i]['value']);
			    	} else {    		
			    		returnArray[data[i]['name']] = data[i]['value'];
			    	}
			    }
			    
			    return returnArray;
			}, //end convertObject()
			
			returnData : function(data, mode) { //start returnData()
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
			}, //end returnData()
			
			mappingForm : function(dataObj) { //start mappingForm()
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
			}, //end mappingForm()
			
			addComma : function(price) { //start addComma()
				return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}, //end addComma()
			
			enterkey : function() { //start enterKey()
			    if (window.event.keyCode == 13) {
			    	app.init();
			    }
			}, //end enterKey()
			
			formValidate : function(params) { //start formValidate()
				var formData = $('.form-area')[0];
				for(var i=0; i<formData.length; i++) {
					if(formData[i].attributes.required) {
						if(!params[formData[i].name]) {
							if(!formData[i].value) {
								var label = $("input[name="+formData[i].name+"]").parent().find('label').attr('desc');
								alert(label + "은(는) 필수 값 입니다.");
								$("input[name="+formData[i].name+"]").focus();
								return false;
							}
						}
					}
				}
			}, //end formValidate()
			
			selectData : function(params) { //start selectData()
				var list = $('.form-area')[0];
				for(var i=0; i<list.length; i++) {
					list[i].classList.add('float-label');
				}				
				
				var url = this.optionListURL + "select";
				var data = {
						"trimCode" : this.trimCode,
						"optionCode" : params.optionCode,
						"carOptionCode" : $("#soflow option:selected").val()
				}

				$.ajax({
					type:"POST",
					url : url,
					data : {
						data: JSON.stringify(data)
					},
					success:function(result){
						result.carOptionCode = $("#soflow option:selected").val();

						app.mappingForm(result);
					},
					beforeSend: function() { //로딩이미지 보여주기
						$("#modal-wrap-loading").show();
					    $("#wrap-loading").show();
					},
					complete: function() { //로딩이미지 숨기기
						$("#modal-wrap-loading").hide();
					    $("#wrap-loading").hide();
					}
				})	
				
			}, //end selectData()
			
			formReset : function() { // start formReset()
				var formData = $('.form-area')[0];
				formData.reset()
				for(var i=0; i<formData.length; i++){
					if(formData[i].name) {
						formData[i].value = null;
					}
				}
			}, //end formReset
		},
		//end Methods
		
		//start Created
		created() {
			this.url = new URL(window.location.href);
			this.urlParams = this.url.searchParams;
			this.trimCode = this.urlParams.get('trimCode');
			this.optionListURL = "/services/option/";
			this.dataObj = null;
			
//			this.table = $('#sort-test').DataTable({
//				rowReorder: {
//					update: false
//				},
//				"columns": [
//					{ "data": "seq" },
//					{ "data": "name" },
//					{ "data": "age" },
//				]
//			})
		},
		//end Created
		
		//start Mounted
		mounted() {
			this.init();
		}
		//end Mounted
	})
})





