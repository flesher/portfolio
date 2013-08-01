$(document).ready(function(){
  
  var $contH1, compiled, homepageAnim;

  /***********************************
   * Resize
   *
   * 
  ************************************
  /                                  */

  $(window).on('resize', function(){
    mFlesh.windowW = $(window).outerWidth();
    mFlesh.windowH = $(window).outerHeight();

    $("#canvas").remove();
    mFlesh.triangles = [];
    mFlesh.initTri();
  });

  /***********************************
   * Homepage animation sequence
   *
   * 
  ************************************
  /                                  */
	
  homepageAnim = function(){
    setTimeout(function(){
      $('#title').fadeIn(1000);
    }, 500)
    
    setTimeout(function(){
      $('nav').fadeIn(500);
      $('nav').addClass('nav-show');
    }, 1500);

    setTimeout(function(){
      $('#scroll').fadeIn(750);
      $('#scroll').addClass('scroll-show');
      $('body').css('overflow', 'inherit'); 
    }, 2000); 
  }

  /***********************************
   * Templates out the projects, and calls mainload
   *
   * 
  ************************************
  /                                  */

  compiled = _.template(mFlesh.workTemp);
  $.get('work.json', function(data) {
    var list = [];
    
    for(var i in data){
      var img  = data[i].prImage;
      var html = compiled(data[i]);

      list.push(img);
      $('#work').append(html);
    }

    mFlesh.mainload(list);
    
  });


  /***********************************
   * Sets Contact Height
   *
   * 
  ************************************
  /                                  */

  $contH1 = $('#contact h1');

  $('#contact').css('min-height', $(window).outerHeight());
  $('.sect-wrapper').height(mFlesh.windowH - ($contH1.outerHeight(true) + 3));

  /***********************************
   * ScrollTo Links
   *
   * 
  ************************************
  /                                  */


  $('#nav-about').click(function(event){
    event.preventDefault();
    $.scrollTo('#about', 750, {axis:'y'}, 'swing');
  });

  $('#scroll').click(function(event){
    event.preventDefault();
    $.scrollTo('#about', 750, {axis:'y'}, 'swing');
  });

  $('#nav-work').click(function(event){
    event.preventDefault();
    $.scrollTo('#work', 750, {axis:'y'}, 'swing');
  });

  $('#nav-contact').click(function(event){
    event.preventDefault();
    $.scrollTo('#contact', 750, {axis:'y'}, 'swing');
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


  /***********************************
   * If Canvas and home page is present fade out loader and start it up
   *
   * 
  ************************************
  /                                  */

  $(window).on('startitup', function(){

    if ($('#canvas')){
      $('#mainloader').fadeOut(1000);
      setTimeout(function(){
        homepageAnim();
      }, 1000);
    } else {
      setTimeout(function(){
        $(window).trigger('startitup');
      }, 20);
    }

  });

});


/***********************************
 * Scroll events
 *
 * 
************************************
/                                  */


$(window).on('scroll', function(){

  mFlesh.scrollTop   = $(window).scrollTop(),

    aboutOffset   = $('#about').offset().top,
    aboutDistance = (aboutOffset - mFlesh.scrollTop),

    bg            = $('nav').hasClass('nav-bg'),
    navHeight     = $('nav').height(),

    workOffset    = $('#work').offset().top,
    workDistance  = (workOffset - mFlesh.scrollTop),

    contOffset    = $('#contact').offset().top,
    contDistance  = (contOffset - mFlesh.scrollTop);

  //add class to nav when scrolled past home
  if (aboutDistance < navHeight && !bg) $('nav').addClass('nav-bg');
  else if (aboutDistance >= navHeight) $('nav').removeClass('nav-bg');

  //homebrew scroll spy
  if (aboutDistance < navHeight && workDistance > navHeight) {
    $('nav li').removeClass('active');
    $('#nav-about').parent().addClass('active');

  } else if (workDistance <= navHeight && contDistance > navHeight && mFlesh.scrollTop + $(window).height() != $(document).height()) {
    $('nav li').removeClass('active');
    $('#nav-work').parent().addClass('active');   

  } else if (contDistance <= navHeight || mFlesh.scrollTop + $(window).height() == $(document).height()) {
    $('nav li').removeClass('active');
    $('#nav-contact').parent().addClass('active');  

  } else {
    $('nav li').removeClass('active');
  }

});






