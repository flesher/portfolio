mFlesh.workTemp = [
	'<div class="project">',
		'<a href="<%= link %>"><img src="<%= prImage %>"></a>',
		'<div class="info">',	
			'<h1><%= title %></h1>',
			'<p><%= blurb %></p>',
			'<a href="<%= link %>">View</a>',
		'</div>',
	'</div>'
	].join('');


mFlesh.workDetailTemp = [
	'<div class="det-coverup">',
		// '<img src="img/spinner.gif" alt="spinner"/>',
	'</div>',
	'<div class="det-content">',
		'<a class="close-det" href="/portfolio/portfolio"><img src="img/close-icon.png" alt="close"/></a>',
		'<div class="inner contain">',
			'<div class="det-info">',
				'<div class="info-inner">',
					'<h1><%= title %></h1>',
					'<h2><%= client %></h2>',
					'<p><%= desc %></p>',
					'<p><%= desc2 %></p>',
					'<a href="<%= launchLink %>" target="_blank"> <%= launchText %></a>',	
				'</div>',	
			'</div>',
			'<div class="det-imgs">',
				'<div class="img-inner">',
					'<ul class="rslides contain"></ul>',
				'</div>',
			'</div>',
		'</div>',
	'</div>',
].join('');

mFlesh.additionalSlides = [
	'<li class="add-slide">',
			'<img src="<%= image %>" alt="duh"/>',
	'</li>'
].join('');

(function(){
	var compiled = _.template(mFlesh.workTemp);
	$.get('work.json', function(data) {
		
		for(var i in data){
			var html = compiled(data[i]);
			$('#work').append(html);
		}
	});

})();