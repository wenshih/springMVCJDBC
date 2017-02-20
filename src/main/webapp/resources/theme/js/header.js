/**
 * 2016.07.11
 * Wen
 */
"use strict";
$(document).ready(function() {

	console.log("header.js");
	
	var userData = "";
	
	var path = window.location.pathname.split("/")[2];
	$("#"+path).addClass("active");
	if(path === "dashboard"){
		$("#account").addClass("active");
	}
	//get login admin data
	var name = window.location.search.split("=")[1];//from url
	var mail = document.cookie.split("=")[1];//from cookie
	$("#greeting").html("Hello "+name+".");
	
	var json = {"name": name, "mail":mail};
	$.ajax({
		type : 'POST',  
		contentType: "application/json",
        url: 'http://localhost:8080/SpringMVCJDBC/getByNameAndMail',
        dataType : 'json', 
        async: false,// 先執行完後，再跑下面的程式，如果不寫此參數，jQuery預設AJAX為異步執行
        data : JSON.stringify(json),
        success : function(data) {
        	console.log("getByNameAndMail success");
        	userData = data;
        },
		error : function(data) {
        	console.log("getByNameAndMail error");
        }
    });
	
	//header control
	//get pages
	$.ajax({
		  type: "GET",
		  url: "http://localhost:8080/SpringMVCJDBC/getPermission",
		  dataType: "json",
		  async: false,
		  success : function(data) {
			  console.log("getPermission success");
			  
			  if(userData.role_id === 1){
				  $("#header").show();
				  $("#userHeader").hide();
				  for(var i=0; i<data.length; i++){
					  if(data[i].permission === 1 && userData.role_id == data[i].role_id){
						  $("#"+data[i].page).hide();
					  }
				  }
			  }else{
				  $("#header").hide();
				  $("#userHeader").show();
				  for(var i=0; i<data.length; i++){
					  if(data[i].permission === 1 && userData.role_id == data[i].role_id){
						  switch (data[i].page){
						  	case "profile":
						  		$("#userProfile").hide();
						  		break;
						  }
					  }
				  }
			  }
			  
        },
		error : function(data) {
        	console.log("error");
        }
	});

	//admin header
	function removeClass(){
		if($("#header li").hasClass("active")){
			$("#header li").removeClass("active");
		}
	}
	
	$("#dashboard").click(function(){
		console.log("dashboard function");
		removeClass();
		$("#dashboard").addClass("active");
		location.href = "http://localhost:8080/SpringMVCJDBC/dashboard?name="+userData.name;
	});
	
	$("#userAccount").click(function(){
		console.log("userAccount function");
		removeClass();
		$("#userAccount").addClass("active");
		location.href = "http://localhost:8080/SpringMVCJDBC/userAccount?name="+userData.name;
	});
	
	$("#adminAccount").click(function(){
		console.log("adminAccount function");
		removeClass();
		$("#adminAccount").addClass("active")
		location.href = "http://localhost:8080/SpringMVCJDBC/adminAccount?name="+userData.name;
	});
	
	$("#permission").click(function(){
		console.log("permission function");
		removeClass();
		$("#permission").addClass("active")
		location.href = "http://localhost:8080/SpringMVCJDBC/permission?name="+userData.name;
	});
	
	$("#profile").click(function(){
		console.log("profile function");
		removeClass();
		$("#profile").addClass("active")
		location.href = "http://localhost:8080/SpringMVCJDBC/profile?name="+userData.name;
	});
	$("#stock").click(function(){
		console.log("stock function");
		removeClass();
		$("#stock").addClass("active")
		location.href = "http://localhost:8080/SpringMVCJDBC/stock?name="+userData.name;
	});
	
	//user header
	$("#userDashboard").click(function(){
		console.log("userDashboard function");
		removeClass();
		$("#userDashboard").addClass("active");
		location.href = "http://localhost:8080/SpringMVCJDBC/dashboard?name="+userData.name;
	});
	
	$("#userProfile").click(function(){
		console.log("userProfile function");
		removeClass();
		$("#userProfile").addClass("active")
		location.href = "http://localhost:8080/SpringMVCJDBC/profile?name="+userData.name;
	});
	$("#userStock").click(function(){
		console.log("userStock function");
		removeClass();
		$("#userStock").addClass("active")
		location.href = "http://localhost:8080/SpringMVCJDBC/stock?name="+userData.name;
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