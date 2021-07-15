window.addEventListener('load', (event) => {
	console.log('fix_picture_path');
	var picture_render_nodes = document.querySelectorAll('.fancybox');
	
	for(var i = 0; i < picture_render_nodes.length; i++) {
		var href = picture_render_nodes[i].href;
		var reg = /(http[s]{0,1}:\/\/)(.*?)\/(.*)/g;
		var result = href.replace(reg, '/_posts/$3' )
		//var result = href.replace(reg, '$1$2/_posts/$3' )
		picture_render_nodes[i].href = result;
	}
	
	for(var i = 0; i < picture_render_nodes.length; i++) {
		var picture_node = picture_render_nodes[i].firstChild;
		var href = picture_node.src;
		var reg = /(http[s]{0,1}:\/\/)(.*?)\/(.*)/g;
		var result = href.replace(reg, '/_posts/$3' )
		//var reg = /<img(.*?)src="(.*?)"(.*?)>/g;
        //var result = content.replace(reg,'<img$1src="/_posts$2"$3>')
		picture_node.src = result;
	}
});



/*
![image_alt](the_post_name.assets/the_image_name.file_postfix)
http(s)://localhost:4000/the_post_name.assets/the_image_name.file_postfix
/the_post_name.assets/the_image_name.file_postfix

*/
