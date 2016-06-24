/**
 * 2016.06.23
 * Wen
 */
"use strict";
$(document).ready(function() {

	console.log("dashboard.js");
	var userData = "";
	var roleChange = function(roleId){
		console.log("roleChange function");
		if(roleId === 1){
			return "Admin";
		}else if(roleId === 2){
			return "使用者";
		}
	}
	
	var getUserFun = function(){
		$.ajax({
			  type: "GET",
			  url: "http://localhost:8080/SpringMVCJDBC/getUser",
			  dataType: "json",
			  success : function(data) {
				  
				  console.log("success");
				  userData = data;
				  var elementId = $("#userTbody");
				  var element = "";
				  for(var i=0; i<data.length; i++){
					  var role = roleChange(data[i].role_id);
					  element = "<tr><td>"+data[i].name+"</td><td>"+data[i].mail+"</td><td>"+role+"</td>" +
					  			"<td><button type=\"button\" class=\"btn btn-info btn-sm edit\" data-toggle=\"modal\" data-target=\"#myModal\">Edit</button></td></tr>";
					  elementId.append(element);
				  }
				  $('#userTable').DataTable();
		        	
	        },
			error : function(data) {
	        	console.log("error");
	        }
		});
	}
	
	getUserFun();
	
	$(document).on("click",".edit",function(e){
		console.log("edit function");
		
		for(var i=0; i<userData.length; i++){
			if(userData[i].mail === e.currentTarget.parentNode.parentNode.getElementsByTagName("td")[1].innerText){
				console.log("in");
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
            	$("#userTbody").html("");
            	getUserFun();
            },
			error : function(data) {
	        	console.log("error");
	        }
        });
	});
	
	
});