/**
 * 2016.07.05
 * Wen
 */
"use strict";
$(document).ready(function() {

	console.log("permission.js");
	
	var userData = "";
	var permissionData = "";
	
	var roleChange = function(roleId){
		if(roleId === 1){
			return "Admin";
		}else if(roleId === 2){
			return "使用者";
		}
	}
	
	var arr = document.cookie.split( "; " );
	if(arr === null && arr === ""){
    	return;
    }else{
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
		//get pages
		$.ajax({
			  type: "GET",
			  url: "http://localhost:8080/SpringMVCJDBC/getPermission",
			  dataType: "json",
			  success : function(data) {
				  
				  console.log("success");
				  permissionData = data;
				  var elementId = $("#permissionTbody");
				  var element = "";
				  
				  for(var i=0; i<data.length; i++){
					  var role = roleChange(data[i].role_id);
					  element = "<tr><td><input name=\"permission\" type=\"checkbox\" id="+data[i].id+"></td><td>"+data[i].page+"</td><td>"+role+"</td>" +
			  			"<td><button type=\"button\" class=\"btn btn-info btn-sm edit\" data-toggle=\"modal\" data-target=\"#myModalUpdate\">Edit</button> " +
			  			"<button type=\"button\" class=\"btn btn-danger btn-sm delete\" data-toggle=\"modal\" data-target=\"#myModalDelete\">Delete</button></td></tr>";;
					  elementId.append(element);
					  if(data[i].permission === 0){
						  //check
						  $("input[name=\"permission\"]:eq("+i+")").prop("checked", true);
					  }else{
						  //uncheck
						  $("input[name=\"permission\"]:eq("+i+")").prop("checked", false);
					  }
				  }
				  $('#permissionTable').DataTable();
		        	
	        },
			error : function(data) {
	        	console.log("error");
	        }
		});
    }
	
	$("#account").click(function(){
		console.log("account function");
		location.href = "http://localhost:8080/SpringMVCJDBC/dashboard?name="+userData.name;
	});
	
	$("#adminAccount").click(function(){
		console.log("adminAccount function");
		location.href = "http://localhost:8080/SpringMVCJDBC/adminAccount?name="+userData.name;
	});
	
	$("#profile").click(function(){
		console.log("profile function");
		location.href = "http://localhost:8080/SpringMVCJDBC/profile?name="+userData.name;
	});
	//click apply response always error, solve is back-end call getPermission
	$("#apply").click(function(){
		console.log("apply function");
		
		var json = {"page": $("#pageAdd").val(), "permission":$('input[name="permissionAdd"]:checked').val(), "role_id":$(".selectpicker").val()};
		
		$.ajax({
			type : 'POST',  
			contentType: "application/json",
	        url: 'http://localhost:8080/SpringMVCJDBC/insertPermission',
	        dataType : 'json', 
	        data : JSON.stringify(json),
            success : function(data) {
            	console.log("success");
            	location.reload();
            },
			error : function(data) {
	        	console.log("error");
	        }
	        /*
	        complete:function(data) {
            	console.log("success");
            	location.reload();
            },
            */
        });
        
	});
	
	//edit page
	$(document).on("click",".edit",function(e){
		console.log("edit function");
		
		for(var i=0; i<permissionData.length; i++){
			
			var val = $('input[name="permission"]')[i];
			if(permissionData[i].id === parseInt($(this).parent().parent().find("td:eq(0) input").attr("id"))){
				$("#id").html(permissionData[i].id);
				$("#pageUpd").val(permissionData[i].page);
				if(permissionData[i].permission === 0){
					$("input[name=\"permissionUpd\"]:eq(0)").prop("checked", true);
				}else{
					$("input[name=\"permissionUpd\"]:eq(1)").prop("checked", true);
				}
				//bootstrap select option default value
				$('select[name=selValue]').val(permissionData[i].role_id);
				$('.selectpicker').selectpicker('refresh')
			}
			
		}
		
	});
	
	$("#update").click(function(){
		console.log("update function");
		
		var json = {"page": $("#pageUpd").val(), "permission":$('input[name="permissionUpd"]:checked').val(), "role_id":$(".selectpickerUpd").val(), "id":$("#id").html()};
		
		$.ajax({
			type : 'POST',  
			contentType: "application/json",
	        url: 'http://localhost:8080/SpringMVCJDBC/updatePage',
	        dataType : 'json', 
	        data : JSON.stringify(json),
            success : function(data) {
            	console.log("success");
            	location.reload();
            },
			error : function(data) {
	        	console.log("error");
	        }
        });
        
	});
	
	//delete
	$(document).on("click",".delete",function(e){
		console.log("delete function");
		
		for(var i=0; i<permissionData.length; i++){
			
			var val = $('input[name="permission"]')[i];
			if(permissionData[i].id === parseInt($(this).parent().parent().find("td:eq(0) input").attr("id"))){
				$("#idLabel").html(permissionData[i].id);
				$("#pageLabel").html(permissionData[i].page);
				if(permissionData[i].permission === 0){
					$("input[name=\"permissionDel\"]:eq(0)").prop("checked", true);
				}else{
					$("input[name=\"permissionDel\"]:eq(1)").prop("checked", true);
				}
				$('input[name="permissionDel"]').attr('disabled', 'disabled');
				var role = roleChange(permissionData[i].role_id);
				$("#roleLabel").html(role);
			}
		}
		
	});
	
	$("#deleteBtn").click(function(){
		console.log("deleteBtn function");
		
		$.ajax({
			type : 'POST',  
			contentType: "application/json",
	        url: 'http://localhost:8080/SpringMVCJDBC/deletePage',
	        dataType : 'json', 
	        data : $("#idLabel").html(),
            success : function(data) {
            	console.log("success");
            	location.reload();
            },
			error : function(data) {
	        	console.log("error");
	        }
        });
	});
});