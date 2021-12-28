var optionListURL = "http://192.168.31.86:9090/build-your-car//option-list?trimCode=EV-T001&modelCode=EV6&ext=null&int=null";
//Get the modal

$(function() {
//	$.ajax({
//		type:"GET",
//		url : optionListURL,
//		success:function( res){
//			console.log(res);
//		}
//	})
	
	
//	var modal = document.getElementById("myModal");
//
//	// Get the button that opens the modal
//	var btn = document.getElementById("myBtn");
//
//	// Get the <span> element that closes the modal
//	var span = document.getElementsByClassName("close")[0];

//	btn.onclick = function() {
//	  modal.style.display = "block";
//	}
//
//	// When the user clicks on <span> (x), close the modal
//	span.onclick = function() {
//	  modal.style.display = "none";
//	}
//
//	// When the user clicks anywhere outside of the modal, close it
//	window.onclick = function(event) {
//	  if (event.target == modal) {
//	    modal.style.display = "none";
//	  }
//	}
		
	
	var dataObj;
	$('.btn-edit').click(function() {
		var tdList = $(this).parents('tr').children();
		var mode = 'E';
		dataObj = returnData(tdList , mode);
		
		$('.modal').css('display', 'block')
	})
	
	
	$('.btn-delete').click(function() {
		var tdList = $(this).parents('tr').children();
		var mode = 'D'
		dataObj = returnData(tdList , mode);
	})
	
	$('.close').click(function() {
		dataObj = null;
		$('.modal').css('display', 'none');
	})
})


function returnData(data, mode) {
	var tdList = data;
	var dataObj = {};
	
	tdList.each(function(i){
		if(tdList.eq(i)[0].dataset.field) {
			if(mode == 'E') {
				if(tdList.eq(i)[0].dataset.value == 'null') {
					dataObj[tdList.eq(i)[0].dataset.field] = null; 
				} else {
					dataObj[tdList.eq(i)[0].dataset.field] = tdList.eq(i)[0].dataset.value;
				}
			} else {
				if(tdList.eq(i)[0].dataset.field == 'optionCode') {
					dataObj[tdList.eq(i)[0].dataset.field] = tdList.eq(i)[0].dataset.value;
				}
			}
		}
	});

	return dataObj;
	
}

//테이블의 Row 클릭시 값 가져오기
//$("#example-table-1 tr").click(function(){
//			var str = ""
//			var tdArr = new Array();	// 배열 선언
//			
//			// 현재 클릭된 Row(<tr>)
//			var tr = $(this);
//			var td = tr.children();
//			
//			// tr.text()는 클릭된 Row 즉 tr에 있는 모든 값을 가져온다.
//			console.log("클릭한 Row의 모든 데이터 : "+tr.text());
//			
//			// 반복문을 이용해서 배열에 값을 담아 사용할 수 도 있다.
//			td.each(function(i){
//				tdArr.push(td.eq(i).text());
//			});
//			
//			console.log("배열에 담긴 값 : "+tdArr);
//			
//			// td.eq(index)를 통해 값을 가져올 수도 있다.
//			var no = td.eq(0).text();
//			var userid = td.eq(1).text();
//			var name = td.eq(2).text();
//			var email = td.eq(3).text();
			
			
//			str +=	" * 클릭된 Row의 td값 = No. : <font color='red'>" + no + "</font>" +
//					", 아이디 : <font color='red'>" + userid + "</font>" +
//					", 이름 : <font color='red'>" + name + "</font>" +
//					", 이메일 : <font color='red'>" + email + "</font>";		
//			
//			$("#ex1_Result1").html(" * 클릭한 Row의 모든 데이터 = " + tr.text());		
//			$("#ex1_Result2").html(str);
//});
		