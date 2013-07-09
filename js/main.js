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
 * Draws reactive background
 *
 * 
************************************
/                                  */



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

	$('.project:nth-of-type(1)').addClass('tight');

  var procW = $('.process').width();
  $('.process').height(procW);



});


/***********************************
 * Scroll events
 *
 * 
************************************
/                                  */

$(window).on('scroll', function(){

	var scrollTop   = $(window).scrollTop(),

    aboutOffset   = $('#about').offset().top,
    aboutDistance = (aboutOffset - scrollTop),

    bg            = $('nav').hasClass('nav-bg'),
    navHeight     = $('nav').height(),

    workOffset    = $('#work').offset().top,
    workDistance  = (workOffset - scrollTop),

    contOffset    = $('#contact').offset().top,
    contDistance  = (contOffset - scrollTop);

  //add class to nav when scrolled past home
  if (aboutDistance < navHeight && !bg) $('nav').addClass('nav-bg');
  else if (aboutDistance >= navHeight) $('nav').removeClass('nav-bg');

  //homebrew scroll spy
  if (aboutDistance <= navHeight && workDistance > navHeight) {
  	$('nav li').removeClass('active');
  	$('#nav-about').parent().addClass('active');  	
  } else if (workDistance <= navHeight && contDistance > navHeight) {
  	$('nav li').removeClass('active');
  	$('#nav-work').parent().addClass('active');  	
  } else if (contDistance <= navHeight) {
  	$('nav li').removeClass('active');
  	$('#nav-contact').parent().addClass('active'); 	
  } else {
  	$('nav li').removeClass('active');
  }

  // $('.project').each(function(){
  // 	var self       = $(this),
  // 		projOffset   = $(this).offset().top,
  //  		projDistance = $(projOffset - scrollTop);
  //  		tight        = $(this).hasClass('tight');

  //  		console.log(projDistance[0] + ' ' + mFlesh.windowH);

 	// 		if (projDistance[0] < mFlesh.windowH * 0.85 && !tight) self.addClass('tight');
  // });

});

/***********************************
 * Scroll links
 *
 * 
************************************
/                                  */

$('#nav-about').click(function(event){
	event.preventDefault();
	$.scrollTo('#about', 750, 'swing');
});

$('#scroll a').click(function(event){
	event.preventDefault();
	$.scrollTo('#about', 750, 'swing');
});

$('#nav-work').click(function(event){
	event.preventDefault();
	$.scrollTo('#work', 750, 'swing');
});

$('#nav-contact').click(function(event){
	event.preventDefault();
	$.scrollTo('#contact', 750, 'swing');
});

