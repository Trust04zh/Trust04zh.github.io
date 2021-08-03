window.addEventListener('load', (event) => {
	var picture_render_nodes = document.querySelectorAll('.fancybox');
	for(var i = 0; i < picture_render_nodes.length; i++) {
		var href = picture_render_nodes[i].href;
		if(href.indexOf('_posts') == -1) {
			var reg = /(http[s]{0,1}:\/\/)(.*?)\/(.*)/g;
			var result = href.replace(reg, '/_posts/$3' );
			picture_render_nodes[i].href = result;
		}
	}
	
	for(var i = 0; i < picture_render_nodes.length; i++) {
		var picture_node = picture_render_nodes[i].firstChild;
		var href = picture_node.src;
		if(href.indexOf('_posts') == -1) {
			var reg = /(http[s]{0,1}:\/\/)(.*?)\/(.*)/g;
			var result = href.replace(reg, '/_posts/$3' );
			picture_node.src = result;
		}
	}
});
