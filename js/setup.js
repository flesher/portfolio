(function($){
	var _self   = this;
	// mFlesh.windowW = $(window).outerWidth();
	// mFlesh.windowH = $(window).outerHeight();

	/************************************
	 * public init:void
	 * 
	 * 
	 ************************************
	/                                   */
	_self.initTri = function() {
		var _density = 8;
		var size        = mFlesh.windowW / _density;
		var vertDensity = mFlesh.windowH / (size / 2);
		var even;

		$('#home').height(mFlesh.windowH);
    $('#home').width(mFlesh.windowW);
    $('#outer').css('top', mFlesh.windowH );

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
					255,255,255,0.7);		//white

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
			expose.w = mFlesh.windowW;
			expose.h = mFlesh.windowH;
			_createCanvas();
		}

		expose.resize = function(){
			// expose.w = mFlesh.windowW;
			// expose.h = mFlesh.windowH;
			// $('#canvas').attr('width', expose.w);
			// $('#canvas').attr('height', expose.w);

			//TODO: set attrs of canvas here
		}

		function _createCanvas(){
			mFlesh.el     = $('<canvas id="canvas" width="' + expose.w + '" height="' + expose.h + '"/>').appendTo($('#home'));
			if (typeof FlashCanvas != "undefined") FlashCanvas.initElement(el[0]);
			$('#canvas').attr('width', expose.w);
			$('#canvas').attr('height', expose.w);
			mFlesh.canvas = $('#canvas')[0];
			mFlesh.ctx    = mFlesh.canvas.getContext('2d');	
		}

		expose.init();
		return expose;
	}



}).call(mFlesh, jQuery);

