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
	'</div>',
	'<div class="det-content">',
		'<a class="close-det" href="/portfolio/portfolio"><img src="img/close-icon.png" alt="close"/></a>',
		'<div class="inner contain">',
			'<div class="det-info">',
				'<div class="info-inner">',
					'<h1><%= title %></h1>',
					'<h2><%= client %></h2>',
					'<p><%= desc %></p>',
					'<% if (typeof(desc2) != "undefined") { %><p><%= desc2 %></p><% }  %>',
					'<a class="launch" href="<%= launchLink %>" target="_blank"> <%= launchText %></a>',	
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