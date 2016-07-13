"use strict";
$(document).ready(function() {

	console.log("login.js");
	
	//click "Login" button
	window.login = function(){
		
		console.log("login function");
		
		if($("#pwd").val() != null || $("#mail").val() != null){
			
			var json = {"pwd": $("#pwd").val(), "mail":$("#mail").val()};
			
			$.ajax({
				type : 'POST',  
				contentType: "application/json",
		        url: 'http://localhost:8080/SpringMVCJDBC/login',
		        dataType : 'json', 
		        data : JSON.stringify(json),
	            success : function(data) {
	            	console.log("success");
	            	if(data.name != null){
	            		location.href = "http://localhost:8080/SpringMVCJDBC/dashboard?name="+data.name;
	            		
	            		//expire_days = 1; // 過期日期(天)
	            		var d = new Date();
	            	    //d.setTime(d.getTime() + (expire_days * 24 * 60 * 60 * 1000));
	            		d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
	            	    var expires = "expires=" + d.toUTCString();
	            	    document.cookie = "email=" + data.mail + "; " + expires + "; path=/";
	            	    
	            	}else{
	            		alert("查無此使用者,請重新輸入");
	            	}
	            },
				error : function(data) {
		        	console.log("error");
		        }
	        });
		}else{
			alert("請輸入mail與密碼");
		}
		
    }
	
	//click "Return" button
	/*
	window.returnPage = function(){
		console.log("returnPage function");
		location.href = "http://localhost:8080/SpringMVCJDBC/";
	}
	*/
		
	//click "Clear" button
	$("#clear").click(function(){
		console.log("clearBtn function");
		$("#pwd").val("");
		$("#mail").val("");
	});

});