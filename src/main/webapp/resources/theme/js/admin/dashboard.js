/**
 * 2016.06.23
 * Wen
 */
"use strict";
$(document).ready(function() {

	console.log("dashboard.js");
	
	var roleChange = function(roleId){
		console.log("roleChange function");
		if(roleId === 1){
			return "Admin";
		}else if(roleId === 2){
			return "使用者";
		}
	}
	
	$.ajax({
		  type: "GET",
		  url: "http://localhost:8080/SpringMVCJDBC/getUser",
		  dataType: "json",
		  success : function(data) {
			  
			  console.log("success");
		    	
			  var elementId = $("#userTbody");
			  var element = "";
			  for(var i=0; i<data.length; i++){
				  var role = roleChange(data[i].role_id);
				  element = "<tr><td>"+data[i].name+"</td><td>"+data[i].pwd+"</td>" +
				            "<td>"+data[i].mail+"</td><td>"+role+"</td><td><button id='edit' onclick='editUser()'>Edit</button></td></tr>";
				  elementId.append(element);
		    	}
			  $('#userTable').DataTable();
	        	
        },
		error : function(data) {
        	console.log("error");
        }
	});
	
	window.editUser = function(){
		console.log("edit function");
		
	}

});