mFlesh.workTemp = [
	'<div class="project">',
		'<a href="<%= link %>"><img src="<%= image %>"></a>',
		'<div class="info">',	
			'<h1><%= title %></h1>',
			'<p><%= blurb %></p>',
			'<a href="<%= link %>">View</a>',
		'</div>',
	'</div>'
	].join('');


mFlesh.workDetailTemp = [
	'<div class="det-content contain">',
		'<h1><%= title %></h1>',
		'<p><%= desc %></p>',
		'<ul class="rslides"></ul>',		
	'</div>',

	].join('');

mFlesh.additionalSlides = [
	'<li class="add-slide">',
		'<div class="det-content contain">',
			'<%= images[i] %>',
		'</div>',
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



