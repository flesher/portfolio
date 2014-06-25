mFlesh.mainload = function() {
	var pics = mFlesh.mainload.arguments[0];
	var len  = pics.length;
	var loadCounter = 0;
	var images = new Array();
	
	for(var i = 0; i < len; i++) {
		
		images[i] = new Image();
		images[i].onload = function(){ 
			loadCounter++;
			if(loadCounter === len) $(window).trigger('startitup');  
		};

		images[i].src = pics[i];
	}
}

mFlesh.preload = function() {
	var pics = mFlesh.preload.arguments[0];
	var len  = pics.length;
	var loadCounter = 0;
	var images = new Array();
	
	for(var i = 0; i < len; i++) {
		
		images[i] = new Image();
		images[i].onload = function(){ 
			loadCounter++;
			if(loadCounter === len) $('.det-coverup').fadeOut(1000);  
		};

		images[i].src = pics[i].image;
	}
}

