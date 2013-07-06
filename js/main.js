/***********************************
 * Draws reactive background
 *
 * 
************************************
/                                  */
mFlesh.init();

mFlesh.clear = function(){
	mFlesh.ctx.clearRect(0, 0, mFlesh.windowW, mFlesh.windowH);
}

$(document).mousemove(function(e){

	mFlesh.clear();

	for (var i = 0; i < mFlesh.triangles.length; i++){
		mFlesh.triangles[i].update(e);
	}

});

/***********************************
 * Home Page animations
 *
 * 
************************************
/                                  */

$(document).ready(function(){
	
	setTimeout(function(){
		$('#title').fadeIn(1000);
	}, 500)
	

	setTimeout(function(){
		$('nav').fadeIn(500);
		$('nav').addClass('nav-show');
	}, 1500);

	setTimeout(function(){
		$('#scroll').fadeIn(500);
		$('#scroll').addClass('scroll-show');
	}, 2000);

});


/***********************************
 * Scroll events
 *
 * 
************************************
/                                  */

$(window).on('scroll', function(){
	var scrollTop   = $(window).scrollTop(),
    elementOffset = $('#process').offset().top,
    distance      = (elementOffset - scrollTop),
    bg            = $('nav').hasClass('nav-bg');
    height        = $('nav').height();

    if (distance < height && !bg) $('nav').addClass('nav-bg');
    else if (distance >= height) $('nav').removeClass('nav-bg');

});
