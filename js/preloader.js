mFlesh.preload = function() {
	var pics = mFlesh.preload.arguments[0];
	var len  = pics.length;
	console.log(pics);
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

