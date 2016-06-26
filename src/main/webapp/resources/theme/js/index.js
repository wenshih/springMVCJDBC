"use strict";
$(document).ready(function() {

	console.log("index.js");
	
	$("#loginOrRegistered").click(function(){
		console.log("loginOrRegistered function");
		$("#loginOrRegistered").parent().find("li").removeClass("active");
		$("#loginOrRegistered").addClass("active");
		$("#divBlock").show();
	});
	
	$("#home").click(function(){
		console.log("home function");
		$("#home").parent().find("li").removeClass("active");
		$("#home").addClass("active");
		$("#divBlock").hide();
	});
	
	
});