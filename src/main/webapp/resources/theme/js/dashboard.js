/**
 * 2016.06.23
 * Wen
 */
"use strict";
$(document).ready(function() {

	console.log("dashboard.js");
	
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
        async: false,
        data : JSON.stringify(json),
        success : function(data) {
        	console.log("getByNameAndMail success");
        	userData = data;
        },
		error : function(data) {
        	console.log("getByNameAndMail error");
        }
    });
	
	//get pages
	$.ajax({
		  type: "GET",
		  url: "http://localhost:8080/SpringMVCJDBC/getPermission",
		  dataType: "json",
		  async: false,
		  success : function(data) {
			  console.log("getPermission success");
			  
			  if(userData.role_id === 1){
				  $("#admin").show();
				  $("#user").hide();
				  for(var i=0; i<data.length; i++){
					  if(data[i].permission === 1 && userData.role_id == data[i].role_id){
						  switch(data[i].page){
							  case "adminAccount":
								  $("#dashAdmin").hide();
								  break;
							  case "userAccount":
								  $("#dashUser").hide();
								  break;
							  case "profile":
								  $("#dashPermission").hide();
								  break;
						  }
					  }
				  }
			  }else{
				  $("#admin").hide();
				  $("#user").show();
				  for(var i=0; i<data.length; i++){
					  if(data[i].permission === 1 && userData.role_id == data[i].role_id){
						  switch(data[i].page){
							  case "profile":
								  $("#userDashProfle").hide();
								  
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
	//admin page
	$("#dashUser").click(function(){
		console.log("dashUser function");
		location.href = "http://localhost:8080/SpringMVCJDBC/userAccount?name="+userData.name;
	});
	
	$("#dashAdmin").click(function(){
		console.log("dashAdmin function");
		location.href = "http://localhost:8080/SpringMVCJDBC/adminAccount?name="+userData.name;
	});
	
	$("#dashPermission").click(function(){
		console.log("dashPermission function");
		location.href = "http://localhost:8080/SpringMVCJDBC/permission?name="+userData.name;
	});
	
	$("#dashProfle").click(function(){
		console.log("dashProfle function");
		location.href = "http://localhost:8080/SpringMVCJDBC/profile?name="+userData.name;
	});
	//user page
	$("#userDashProfle").click(function(){
		console.log("userDashProfle function");
		location.href = "http://localhost:8080/SpringMVCJDBC/profile?name="+userData.name;
	});
});