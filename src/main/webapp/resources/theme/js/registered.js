/**
 * 
 */
$(document).ready(function() {

	console.log("registered.js");
	window.save = function(){
		
		console.log("save function");
		var json = {/*"id": $("#pId").val() ,*/ "name": $("#name").val() , "pwd": $("#pwd").val()};
	
		$.ajax({
			type : 'POST',  
			contentType: "application/json",
	        url: 'http://localhost:8080/SpringMVCJDBC/insert',
	        //processData : false,  
	        dataType : 'json', 
	        data : JSON.stringify(json),
            success : function(data) {
            	console.log("success");
            }
        });
    }
	
	window.returnPage = function(){
		console.log("returnPage function");
		 location.href = "http://localhost:8080/SpringMVCJDBC/";
	}

});
