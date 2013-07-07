(function($){

	mFlesh.triangles = [];
	mFlesh.windowW = $(window).outerWidth();
	mFlesh.windowH = $(window).outerHeight();

	var _self   = this;
	var _density = 8;

	/************************************
	 * public init:void
	 * 
	 * 
	 ************************************
	/                                   */
	_self.init = function() {
		var size        = mFlesh.windowW / _density;
		var vertDensity = mFlesh.windowH / (size / 2);
		var even;

		$('#home').height(mFlesh.windowH);
		$('#home').width(mFlesh.windowW);
		$('#outer').css('padding-top', mFlesh.windowH );

		_setUp();

		for (var i = 0; i < vertDensity + 1; i++){
			if (i % 2 == 0) even = 0;
			else 						even = 1;

			//row
			for(var j = 0; j < _density + 1; j++){
				var Tri = new mFlesh.fourTriangles( 
					(j * size) + ((size * even)/2),
					(i * size/2),
					size/2 , 
					//253,251,238,1); //cream
					255,255,255,0.7);		//dark black

				mFlesh.triangles.push(Tri);
			}	
		}

	}


	/************************************
	 * privat setup:void
	 * 
	 * sets up canvas etc.
	 ************************************
	/                                   */
	_setUp = function() {
		var expose = {};

		expose.props = {
			w : 0,
			w : 0
		}

		expose.init = function(){
			expose.w = $('#home').width();
			expose.h = $('#home').height();
			_createCanvas();
		}

		expose.resize = function(){
			expose.w = windowW;
			expose.h = windowH;

			//TODO: set attrs of canvas here
		}

		function _createCanvas(){
			mFlesh.el     = $('<canvas id="canvas" width="' + expose.w + '" height="' + expose.h + '"/>').appendTo($('#home'));
			if (typeof FlashCanvas != "undefined") FlashCanvas.initElement(el[0]);
			mFlesh.canvas = mFlesh.el[0];
			mFlesh.ctx    = mFlesh.canvas.getContext('2d');	
		}

		expose.init();
		return expose;
	}



}).call(mFlesh, jQuery);

