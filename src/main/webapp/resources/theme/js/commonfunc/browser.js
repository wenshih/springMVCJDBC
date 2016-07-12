/**
 * 2016.07.12
 * Wen
 */

function browserVersion(){
	
	//console.log(window.navigator.userAgent);
	var userAgent = navigator.userAgent.toLowerCase(),
    browser = "",
    version = 0;
	
	// If Internet Explorer, return version number
	var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
	if(msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){
		
		var ver = 0;
		// IE 10 or older => return version number
		var older = ua.indexOf('MSIE ');
	    if (older > 0) {
	    	ver = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	    }
	    // IE 11 => return version number
	    var trident = ua.indexOf('Trident/');
	    if (trident > 0) {
	        var rv = ua.indexOf('rv:');
	        ver = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	    }
	    // Edge (IE 12+) => return version number
	    var edge = ua.indexOf('Edge/');
	    if (edge > 0) {
	    	ver = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	    }
	    version = ver;
	    browser = "IE";
	}else if(/chrome/.test(navigator.userAgent.toLowerCase())){
		userAgent = userAgent.substring(userAgent.indexOf('chrome/') + 7);
	    userAgent = userAgent.substring(0,userAgent.indexOf('.'));	
	    version = userAgent;
	    browser = "Chrome";
	}else if(/safari/.test(navigator.userAgent.toLowerCase())){
		userAgent = userAgent.substring(userAgent.indexOf('safari/') + 7);	
		userAgent = userAgent.substring(0,userAgent.indexOf('.'));
		version = userAgent;	
		browser = "Safari";
	}else if(/firefox/.test(navigator.userAgent.toLowerCase())){
		userAgent = userAgent.substring(userAgent.indexOf('firefox/') + 8);
		userAgent = userAgent.substring(0,userAgent.indexOf('.'));
		version = userAgent;
		browser = "Firefox"
	}else if(navigator.userAgent.indexOf("Opera") > 0){
		userAgent = userAgent.substring(userAgent.indexOf('version/') + 8);
		userAgent = userAgent.substring(0,userAgent.indexOf('.'));
		version = userAgent;
		browser = "Opera";
	}else{
		browser = "Mozilla (not Firefox)";
	}
	
	return {"browser":browser, "version":version};
}
