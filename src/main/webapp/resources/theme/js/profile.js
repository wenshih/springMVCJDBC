/**
 * 
 */
"use strict";
$(document).ready(function() {

	console.log("profile.js");
	
	var userData = "";
	var arr = document.cookie.split( "; " );
	if(arr === null && arr === ""){
    	return;
    }else{
    	//get login user or admin
    	var name = window.location.search.split("=")[1];//from url
    	var mail = document.cookie.split("=")[1];//from cookie
    	$("#greeting").html("Hello "+name+".");
    	
    	var json = {"name": name, "mail":mail};
		
		$.ajax({
			type : 'POST',  
			contentType: "application/json",
	        url: 'http://localhost:8080/SpringMVCJDBC/getByNameAndMail',
	        dataType : 'json', 
	        data : JSON.stringify(json),
            success : function(data) {
            	console.log("success");
            	userData = data;
            	$("#id").html(data.id);
            	$("#name").html(data.name);
            	$("#pwd").val(data.pwd);
            	$("#comPwd").val(data.pwd);
            	$("#mail").html(data.mail);
            },
			error : function(data) {
	        	console.log("error");
	        }
        });
    }
	
	//click "save" button
	window.update = function(){
		
		console.log("updateBtn function");
		
		var json = {"pwd": $("#pwd").val(), "name":$("#name").val(), "id":$("#id").html()};
		
		$.ajax({
			type : 'POST',  
			contentType: "application/json",
	        url: 'http://localhost:8080/SpringMVCJDBC/updateUser',
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
	
	//click "Clear" button
	$("#clear").click(function(){
		console.log("clearBtn function");
		$("#pwd").val("");
		$("#comPwd").val("");
		$("#checkPwd").hide();
		$("#errorPwd").hide();
	});
	
	$("#logOut").click(function(){
		console.log("logOut function");
		//remove cookie
	    var d = new Date();
	    d.setTime(d.getTime() - 1);
	    var expires = "expires=" + d.toUTCString();
	    document.cookie = "email=; expires=" + expires + '; path=/';
	});
});
