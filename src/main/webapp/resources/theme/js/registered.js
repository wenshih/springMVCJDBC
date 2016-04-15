/**
 * 
 */
$(document).ready(function() {

	console.log("registered.js");
	window.save = function(){
		
		console.log("save function");
		var json = {/*"id": $("#pId").val() ,*/ "name": $("#name").val() , "pwd": $("#pwd").val(), "mail":$("#mail").val()};
	
		$.ajax({
			type : 'POST',  
			contentType: "application/json",
	        url: 'http://localhost:8080/SpringMVCJDBC/insert',
	        //processData : false,  
	        dataType : 'json', 
	        data : JSON.stringify(json),
            success : function(data) {
            	console.log("success");
            },
			error : function(data) {
	        	console.log("error");
	        }
        });
    }
	
	window.returnPage = function(){
		console.log("returnPage function");
		location.href = "http://localhost:8080/SpringMVCJDBC/";
	}
	
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
	            	console.log(data);
	            	console.log("success");
	            	if(data.mail != null){
	            		
	            	}
	            },
				error : function(data) {
		        	console.log("error");
		        }
	        });
		}
		
	}

});
