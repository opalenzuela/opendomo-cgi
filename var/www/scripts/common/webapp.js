$(function(){
	if(("standalone" in window.navigator) && window.navigator.standalone){
		jQuery("a").on("click",function(e){
			console.log("Clicked",e);
			var href = $(this).attr("href");
			if (href) document.location.href = href
			e.preventDefault();
		})
		/*
		var noddy, remotes = false;
		document.addEventListener('click touch', function(event) {
			console.log("Handeling click event", event);
			noddy = event.target;
			while(noddy.nodeName !== "A" && noddy.nodeName !== "HTML") {
				noddy = noddy.parentNode;
			}

			if('href' in noddy && noddy.href.indexOf('http') !== -1 && (noddy.href.indexOf(document.location.host) !== -1 || remotes))
			{
				event.preventDefault();
				document.location.href = noddy.href;
			}
		},false); */
	} 
});
