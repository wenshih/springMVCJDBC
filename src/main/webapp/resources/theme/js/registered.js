/**
 * 
 */
$(document).ready(function() {

	console.log("registered.js");
	var mailFlag = false;
	
	//click "Apply" button
	window.save = function(){
		
		console.log("save function");
		
		if(mailFlag){
			
			var json = {"name": $("#name").val() , "pwd": $("#pwd").val(), "mail":$("#mail").val()};
			
			$.ajax({
				type : 'POST',  
				contentType: "application/json",
		        url: 'http://localhost:8080/SpringMVCJDBC/insert',
		        dataType : 'json', 
		        data : JSON.stringify(json),
	            success : function(data) {
	            	console.log("success");
	            },
				error : function(data) {
		        	console.log("error");
		        }
	        });
		}else{
			alert("Please click check mail");
		}
		
    }
	
	//click "Check mail" button
	window.checkMail = function(){
		console.log("check mail function");
		
		if($("#mail").val()!= null && $("#mail").val() != ""){
			
			console.log("check mail function ajax");
			
			$.ajax({
				type : 'POST',  
				contentType: "application/json",
		        url: 'http://localhost:8080/SpringMVCJDBC/checkMail',
		        dataType : 'json', 
		        data : $("#mail").val(),
	            success : function(data) {
	            	console.log("success");
	            	mailFlag = true;
	            	if(data.mail != null){
	            		$("#error").show();
	            		$("#check").hide();
	            	}else{
	            		$("#error").hide();
	            		$("#check").show();
	            	}
	            },
				error : function(data) {
		        	console.log("error");
		        }
	        });
		}else{
			mailFlag = false;
			alert("Please fill in mail");
		}
		
	}
	
	//click "Return" button
	window.returnPage = function(){
		console.log("returnPage function");
		location.href = "http://localhost:8080/SpringMVCJDBC/";
	}

});
