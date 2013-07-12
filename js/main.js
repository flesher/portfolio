$(document).ready(function(){
  /***********************************
   * Resize
   *
   * 
  ************************************
  /                                  */

  $(window).on('resize', function(){
    mFlesh.windowW = $(window).outerWidth();
    mFlesh.windowH = $(window).outerHeight();

    mFlesh.triangles = [];
    mFlesh.initTri();
  });

  var $contH1 = $('#contact h1');
	
  //Home Page animations
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

  //Contact Page Height
  $('#contact').css('min-height', $(window).outerHeight());
  $('.sect-wrapper').height(mFlesh.windowH - ($contH1.outerHeight(true) + 3));

  
  //scroll links
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
    if (aboutDistance < navHeight && workDistance > navHeight) {
      $('nav li').removeClass('active');
      $('#nav-about').parent().addClass('active');    
    } else if (workDistance <= navHeight && contDistance > navHeight && scrollTop + $(window).height() != $(document).height()) {
      $('nav li').removeClass('active');
      $('#nav-work').parent().addClass('active');   
    } else if (contDistance <= navHeight || scrollTop + $(window).height() == $(document).height()) {
      $('nav li').removeClass('active');
      $('#nav-contact').parent().addClass('active');  
    } else {
      $('nav li').removeClass('active');
    }
  });

    /***********************************
     * Draws reactive background
     *
     * 
    ************************************
    /                                  */

    mFlesh.windowW = $(window).outerWidth();
    mFlesh.windowH = $(window).outerHeight();

    mFlesh.triangles = [];
    
    mFlesh.initTri();

    mFlesh.clear = function(){
      mFlesh.ctx.clearRect(0, 0, mFlesh.windowW, mFlesh.windowH);
    }

    $(document).mousemove(function(e){

      mFlesh.clear();

      for (var i = 0; i < mFlesh.triangles.length; i++){
        mFlesh.triangles[i].update(e);
      }

    });


    $(".rslides").responsiveSlides();




});






