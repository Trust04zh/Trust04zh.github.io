window.addEventListener('load', (event) => {
	var picture_render_nodes = document.querySelectorAll('.fancybox');
	for(var i = 0; i < picture_render_nodes.length; i++) {
		var href = picture_render_nodes[i].href;
		var reg = /(http[s]{0,1}:\/\/.*?\/)(.*)(\/.*?assets.*)/g;
		var result = href.replace(reg, '$1_posts$3' );
		picture_render_nodes[i].href = result;
	}
	
	for(var i = 0; i < picture_render_nodes.length; i++) {
		var picture_node = picture_render_nodes[i].firstChild;
		var href = picture_node.src;
		var reg = /(http[s]{0,1}:\/\/.*?\/)(.*)(\/.*?assets.*)/g;
		var result = href.replace(reg, '$1_posts$3' );
		picture_node.src = result;
	}
});
