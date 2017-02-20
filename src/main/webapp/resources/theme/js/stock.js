/**
 * 2017.01.17
 * Wen
 */
"use strict";
$(document).ready(function() {

	console.log("stock.js");
	
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
	
	//click "search" button
	window.search = function(){
		var stockId = $("#stockId").val();
    	
    	var json = {"stockId": stockId};
		$.ajax({
			type : 'POST',  
			contentType: "application/json",
	        url: 'http://localhost:8080/SpringMVCJDBC/getStock',
	        dataType : 'json', 
	        data : JSON.stringify(json),
            success : function(data) {
            	console.log("success");
	        	console.log(data);
	        	$("#stockId").val(stockId);
	        	var header = "";
        		var content = "";
	        	for(var i=0;i<data.length;i++){
	        		if(i%2 === 0){
	        			header += "<th class=\"borderCss\">"+data[i]+"</th>";
	        		}else{
	        			var dataNew = "";
	        			if(data[i].split(" ").length > 1){
	        				dataNew = data[i].split(" ")[0];
	        			}else{
	        				dataNew = data[i];
	        			}
	        			content += "<td class=\"borderCss\">"+dataNew+"</td>";
	        		}
	        	}
	        	$("#sHeader").append(header);
	        	$("#sContent").append(content);
            },
			error : function(data) {
	        	console.log("error");
	        }
        });
	}
	
	//click "Clear" button
	$("#clear").click(function(){
		console.log("clearBtn function");
		$("#stockId").val("");
		$("#sHeader").html("");
    	$("#sContent").html("");
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
