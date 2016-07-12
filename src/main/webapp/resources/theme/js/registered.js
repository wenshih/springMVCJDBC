/**
 * 
 */
"use strict";
$(document).ready(function() {

	console.log("registered.js");
	var mailFlag = false;
	
	//click "Apply" button
	window.save = function(){
		
		console.log("save function");
		
		if(mailFlag){
			
			var json = {"name": $("#name").val() , "pwd": $("#pwd").val(), "mail":$("#mail").val(), "role_id":"2"};
			//always error function need to check, solve:response must be JSON & id not null
			$.ajax({
				type : 'POST',  
				contentType: "application/json",
		        url: 'http://localhost:8080/SpringMVCJDBC/insert',
		        dataType : 'json', 
		        data : JSON.stringify(json),
	            success : function(data) {
	            	console.log("success");
	            	location.href = "http://localhost:8080/SpringMVCJDBC/login";
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
		
		if($("#mail").val()!= null && $("#mail").val() != "" && $("#comPwd").val()!= null && $("#comPwd").val() != ""){
			
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
	//confirm password
	$("#comPwd").change(function() {
		console.log("comPwd function");
		if($("#pwd").val() === $("#comPwd").val()){
			$("#errorPwd").hide();
    		$("#checkPwd").show();
		}else{
			$("#errorPwd").show();
    		$("#checkPwd").hide();
    		$("#comPwd").val("");
		}
	});
	
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
		$("#name").val("");
		$("#pwd").val("");
		$("#comPwd").val("");
		$("#mail").val("");
	});
});
