/**
 * 2016.07.01
 * Wen
 */
"use strict";
$(document).ready(function() {

	console.log("admin dashboard.js");
	var userData = "";
	var mailFlag = false;
	
	$('.selectpickerAddAdmin').selectpicker('refresh');
	
	var roleChange = function(roleId){
		if(roleId === 1){
			return "Admin";
		}else if(roleId === 2){
			return "使用者";
		}
	}
	
	var getUserFun = function(){
		console.log("test");
		//get cookie
	    var arr = document.cookie.split( "; " );
	    if(arr != null && arr != ""){
	    	
	    	$.ajax({
				  type: "GET",
				  url: "http://localhost:8080/SpringMVCJDBC/getAdmin",
				  dataType: "json",
				  success : function(data) {
					  
					  console.log("success");
					  userData = data;
					  var elementId = $("#userTbody");
					  var element = "";
					  for(var i=0; i<data.length; i++){
						  var role = roleChange(data[i].role_id);
						  element = "<tr><td>"+data[i].name+"</td><td>"+data[i].mail+"</td><td>"+role+"</td>" +
						  			"<td><button type=\"button\" class=\"btn btn-info btn-sm edit\" data-toggle=\"modal\" data-target=\"#myModal\">Edit</button> " +
						  			"<button type=\"button\" class=\"btn btn-danger btn-sm delete\" data-toggle=\"modal\" data-target=\"#myModalDelete\">Delete</button></td></tr>";
						  elementId.append(element);
					  }
					  $('#userTable').DataTable();
			        	
		        },
				error : function(data) {
		        	console.log("error");
		        }
			});
	    }else{
	    	location.href = "http://localhost:8080/SpringMVCJDBC/";
	    }
	}
	
	getUserFun();
	
	//add user
	//confirm password
	$("#comPwd").change(function() {
		console.log("comPwd function");
		if($("#pwdAdd").val() === $("#comPwd").val()){
			$("#errorPwd").hide();
    		$("#checkPwd").show();
		}else{
			$("#errorPwd").show();
    		$("#checkPwd").hide();
    		$("#comPwd").val("");
		}
	});
	
	//click "Check mail" button
	window.checkMail = function(){
		console.log("check mail function");
		
		if($("#mailAdd").val()!= null && $("#mailAdd").val() != "" && $("#comPwd").val()!= null && $("#comPwd").val() != ""){
			
			console.log("check mail function ajax");
			
			$.ajax({
				type : 'POST',  
				contentType: "application/json",
		        url: 'http://localhost:8080/SpringMVCJDBC/checkMail',
		        dataType : 'json', 
		        data : $("#mailAdd").val(),
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
	
	//click "Apply" button
	window.save = function(){
		
		console.log("save function");
		
		if(mailFlag){
			
			var json = {"name": $("#nameAdd").val() , "pwd": $("#pwdAdd").val(), "mail":$("#mailAdd").val(), "role_id":$(".selectpicker").val()};
			//always error function need to check
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
		        	if(data.status === 200){
		        		location.reload();
		            	getUserFun();
		        	}
		        }
		        
	        });
		}else{
			alert("Please click check mail");
		}
    }
	
	//edit user
	$(document).on("click",".edit",function(e){
		console.log("edit function");
		
		for(var i=0; i<userData.length; i++){
			if(userData[i].mail === e.currentTarget.parentNode.parentNode.getElementsByTagName("td")[1].innerText){
				$("#id").html(userData[i].id);
				$("#name").val(userData[i].name);
				$("#mail").html(userData[i].mail);
				$("#pwd").val(userData[i].pwd);
				$("#role").html(roleChange(userData[i].role_id));
			}
		}
		
	});
	
	$("#saveBtn").click(function(){
		console.log("saveBtn function");
		
		var json = {"pwd": $("#pwd").val(), "name":$("#name").val(), "id":$("#id").html()};
		
		$.ajax({
			type : 'POST',  
			contentType: "application/json",
	        url: 'http://localhost:8080/SpringMVCJDBC/updateUser',
	        dataType : 'json', 
	        data : JSON.stringify(json),
            success : function(data) {
            	console.log("success");
            	location.reload();
            	getUserFun();
            },
			error : function(data) {
	        	console.log("error");
	        }
        });
	});
	
	//delete user
	$(document).on("click",".delete",function(e){
		console.log("delete function");
		
		for(var i=0; i<userData.length; i++){
			if(userData[i].mail === e.currentTarget.parentNode.parentNode.getElementsByTagName("td")[1].innerText){
				$("#idLabel").html(userData[i].id);
				$("#nameLabel").html(userData[i].name);
				$("#mailLabel").html(userData[i].mail);
				$("#roleLabel").html(roleChange(userData[i].role_id));
			}
		}
	});
	
	$("#deleteBtn").click(function(){
		console.log("deleteBtn function");
		
		$.ajax({
			type : 'POST',  
			contentType: "application/json",
	        url: 'http://localhost:8080/SpringMVCJDBC/deleteUser',
	        dataType : 'json', 
	        data : $("#idLabel").html(),
            success : function(data) {
            	console.log("success");
            	location.reload();
            	getUserFun();
            },
			error : function(data) {
	        	console.log("error");
	        }
        });
	});
	
	$("#profile").click(function(){
		console.log("profile function");
		var name = window.location.search.split("=")[1];//from url
		location.href = "http://localhost:8080/SpringMVCJDBC/profile?name="+name;
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