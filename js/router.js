(function(){

	var AppRouter = Backbone.Router.extend({
		routes: { 
		 	"project/:name": "getProject", 
		 	"*actions": "defaultRoute" // Backbone will try match the route above first } });
	  	}
	});

	var app_router = new AppRouter;

	app_router.on('route:getProject', function(name) {
		
		$('#project-detail').fadeIn(1000);
		
		var compiled = _.template(mFlesh.workDetailTemp);
		var compiled2 = _.template(mFlesh.additionalSlides);
		
		$.get('work.json', function(data) {	
			var proj = "data." + name;			
			var html = compiled(data[name]);
			var list = data[name].images;

			$('#project-detail').append(html);

			for (var i=0; i < list.length; i++){
				var content = compiled2(list[i]);
				$('.rslides').append(content);
			}

			$(".rslides").responsiveSlides({
				auto: false,
				pager: true,
				nav: true,
				prevText: '',
  				nextText: '',
			});

			$('.rslides').css('background', 'url(' + data[name].bgImage + ')');

			$(document).keydown(function(e) {
			    e.stopPropagation(); // not sure if you will need this but it should stop horizontal scrolling
			    if(e.keyCode === 37) {
			        $(".prev").click();
			    } else if(e.keyCode === 39) {
			        $(".next").click();
			    }
			});
		});


	});

	app_router.on('route:defaultRoute', function () {
		$('#project-detail').fadeOut(1000);
		$('#project-detail').empty();
	});

	Backbone.history.start();

})();

