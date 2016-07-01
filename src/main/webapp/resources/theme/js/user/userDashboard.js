/**
 * 2016.06.30
 * Wen
 */
"use strict";
$(document).ready(function() {

	console.log("userDashboard.js");
	
	//get cookie
    var arr = document.cookie.split( "; " );
    if(arr === null && arr === ""){
    	return;
    }
    
    
    
    $("#logOut").click(function(){
		console.log("logOut function");
		//remove cookie
	    var d = new Date();
	    d.setTime(d.getTime() - 1);
	    var expires = "expires=" + d.toUTCString();
	    document.cookie = "email=; expires=" + expires + '; path=/';
	});

});