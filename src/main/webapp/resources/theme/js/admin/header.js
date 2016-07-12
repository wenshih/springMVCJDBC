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
        data : JSON.stringify(json),
        success : function(data) {
        	console.log("success");
        	userData = data;
        },
		error : function(data) {
        	console.log("error");
        }
    });
	
	//header control
	//get pages
	$.ajax({
		  type: "GET",
		  url: "http://localhost:8080/SpringMVCJDBC/getPermission",
		  dataType: "json",
		  success : function(data) {
			  console.log("success");
			  
			  for(var i=0; i<data.length; i++){
				  if(data[i].permission === 1 && userData.role_id == data[i].role_id){
					  $("#"+data[i].page).hide();
					  
				  }
			  }
        },
		error : function(data) {
        	console.log("error");
        }
	});


	function removeClass(){
		if($("#header li").hasClass("active")){
			$("#header li").removeClass("active");
		}
	}
	
	$("#account").click(function(){
		console.log("account function");
		removeClass();
		$("#account").addClass("active");
		location.href = "http://localhost:8080/SpringMVCJDBC/dashboard?name="+userData.name;
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
});