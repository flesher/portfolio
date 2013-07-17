(function(){

  /***********************************
   * View
   *
   * backbone view for project details
  ************************************
  /                                  */
  
  var ProjDetail = Backbone.View.extend({

    render : function(name) {
      var self         = this;
      var compiled     = _.template(mFlesh.workDetailTemp);
      var compiled2    = _.template(mFlesh.additionalSlides);

      self.$el.show();
      $("body").css("overflow", "hidden");
      
      $.get('work.json', function(data) { 
        var proj = "data." + name;    
        var html = compiled(data[name]);
        var list = data[name].images;
        var bg   = data[name].bgImage;
        var bgObj = {};
        bgObj.image = bg;
          
        self.$el.append(html);

        for (var i=0; i < list.length; i++){
          var content = compiled2(list[i]);
          $('.rslides').append(content);
        }

        $(".rslides").responsiveSlides({
          auto: false,
          pager: true,
          nav: true,
          namespace: "transparent-btns"
        });

        $('.det-content').css('background-image', 'url(' + data[name].bgImage + ')');

          var preload = list.splice(0);
          preload.push(bgObj);

        $('.close-det').click(function(event){
          event.preventDefault();
          Backbone.history.navigate('/', true);
        });

        mFlesh.preload(preload);
      });

     // $(document).keydown(function(e) {
     //     e.stopPropagation(); // not sure if you will need this but it should stop horizontal scrolling
     //     if(e.keyCode === 37) {
     //         $(".prev").click();
     //     } else if(e.keyCode === 39) {
     //         $(".next").click();
     //     }
     // });
    },

    dump : function() {
      this.$el.empty();
      this.$el.fadeOut(1000);
      $(window).scrollTo(mFlesh.scrollTop, 0);
      $("body").css("overflow", "inherit");

    }

  });

  var project_det = new ProjDetail({ el: $("#project-detail") });


  /***********************************
   * Router
   *
   * routes for project details
  ************************************
  /                                  */

	var AppRouter = Backbone.Router.extend({
		routes: { 
		 	"project/:name": "getProject", 
		 	"*actions": "defaultRoute"
	  	}
	});

	var app_router = new AppRouter;

  app_router.on('route:getProject', function(name) {
    project_det.render(name);
  });

  app_router.on('route:defaultRoute', function() {
    project_det.dump();
  });

	Backbone.history.start();

  // $('#work a').click(function(e){
  //   e.preventDefault();
  //   app_router.navigate('/' + e.target.getAttribute('href'), true);
  // });

})();

