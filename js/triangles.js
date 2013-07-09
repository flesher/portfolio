(function($) {
	var _self = this;

	_self.fourTriangles = function(x,y,w,r,g,b,a) {
		var expose = {};

		expose.props = {
			x  : 0,
			y  : 0,
			w  : 0,
			r  : 0,
			g  : 0,
			b  : 0,
			a  : 0,
			a1 : 0,
			a2 : 0,
			a3 : 0,
			a4 : 0,
			mX : 0,
			mY : 0,

			dA : 0.5
		}

		expose.init = function() {
			expose.props.x = x;
			expose.props.y = y;
			expose.props.w = w;

			expose.props.r = r;
			expose.props.g = g;
			expose.props.b = b;
			expose.props.a = a;

			expose.props.mx  = 0;
			expose.props.my  = 0;

			_alpha();
			_create();
		}

		expose.update = function(e) {
			expose.props.mx = e.pageX;
			expose.props.my = e.pageY;
			
			_alpha();
			_distance(expose.props.mx,expose.props.my);
			_create();
		}

		function _create() {
			//triangle 1
			mFlesh.ctx.beginPath();
			mFlesh.ctx.fillStyle = 'rgba(' + expose.props.r + ',' + expose.props.g + ',' + expose.props.b + ',' + expose.props.a * expose.props.a1 * expose.props.dA + ')';
			mFlesh.ctx.moveTo(x, y);
			mFlesh.ctx.lineTo(x, y - w);
			mFlesh.ctx.lineTo(x - w, y);
			mFlesh.ctx.closePath();
			mFlesh.ctx.fill();

			//triangle 2
			mFlesh.ctx.beginPath();
			mFlesh.ctx.fillStyle = 'rgba(' + expose.props.r + ',' + expose.props.g + ',' + expose.props.b + ',' + expose.props.a * expose.props.a2 * expose.props.dA + ')';
			mFlesh.ctx.moveTo(x, y);
			mFlesh.ctx.lineTo(x, y - w);
			mFlesh.ctx.lineTo(x + w, y);
			mFlesh.ctx.closePath();
			mFlesh.ctx.fill();

			//triangle 3
			mFlesh.ctx.beginPath();
			mFlesh.ctx.fillStyle = 'rgba(' + expose.props.r + ',' + expose.props.g + ',' + expose.props.b + ',' + expose.props.a * expose.props.a3 * expose.props.dA + ')';
			mFlesh.ctx.moveTo(x, y);
			mFlesh.ctx.lineTo(x, y + w);
			mFlesh.ctx.lineTo(x - w, y);
			mFlesh.ctx.closePath();
			mFlesh.ctx.fill();

			//triangle 4
			mFlesh.ctx.beginPath();
			mFlesh.ctx.fillStyle = 'rgba(' + expose.props.r + ',' + expose.props.g + ',' + expose.props.b + ',' + expose.props.a * expose.props.a4 * expose.props.dA + ')';
			mFlesh.ctx.moveTo(x, y);
			mFlesh.ctx.lineTo(x, y + w);
			mFlesh.ctx.lineTo(x + w, y);
			mFlesh.ctx.closePath();
			mFlesh.ctx.fill();

		}

		function _alpha() {

			var	bright = 0.08
			,   medium = 0.04
			,   dull   = 0;

			if ( expose.props.mx <= expose.props.x && expose.props.my <= expose.props.y ) {
				expose.props.a1 = bright;
				expose.props.a2 = medium;
				expose.props.a3 = medium;
				expose.props.a4 = dull;

			} else if ( expose.props.mx < expose.props.x && expose.props.my >= expose.props.y ) {
				expose.props.a1 = medium;
				expose.props.a2 = dull;
				expose.props.a3 = bright;
				expose.props.a4 = medium;

			} else if ( expose.props.mx >= expose.props.x && expose.props.my < expose.props.y ) {
				expose.props.a1 = medium;
				expose.props.a2 = bright;
				expose.props.a3 = dull;
				expose.props.a4 = medium;

			} else if ( expose.props.mx > expose.props.x && expose.props.my > expose.props.y ) {
				expose.props.a1 = dull;
				expose.props.a2 = medium;
				expose.props.a3 = medium;
				expose.props.a4 = bright;

			}
		}

		function _distance(mX, mY) {
			var pyth1 = Math.pow(mX - expose.props.x, 2) + Math.pow(mY - expose.props.y, 2);
			var dist  = Math.sqrt(pyth1);
			expose.props.dA = (1 - (dist / (mFlesh.windowW * 0.8))) * 0.9;
		}

		expose.init();
		return expose;
	}
}).call(mFlesh, jQuery)