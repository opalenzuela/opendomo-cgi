include_script("/scripts/jquery.longpress.js");

var timetouch;
$(function() {
	$("fieldset.selectable").each(function(index){
		var url = $(this).find("a").attr("href") ;
		$(this).find("a").attr("href","javascript:void()");
		$(this).find("li").on("mousedown touchstart", function(event) {
			timetouch = new Date().getTime();
			console.log("Pressing on " , $(this));
		});
		$(this).find("li").on("mouseup touchend", function(event) {
			event.preventDefault();
			event.stopPropagation();			
			
			var timetouch2 = new Date().getTime();
			var milliseconds = timetouch2 - timetouch;
			timetouch = 0;
			console.log("Pressed for " + milliseconds + " on " , $(this));
			if (milliseconds<1000) {
				window.location = url;
			} else {
				if ($(this).find("input")[0].prop('checked')) {
					$(this).find("input")[0].checked = false;
					$(this).remvoveClass("selected");
				} else {
					$(this).addClass("selected");
					$(this).find("input")[0].checked = true;
				}
			}
			

		});		
		
	});
	/*$('fieldset.selectable li').longpress(function(event) {
		// longpress callback
		if ($(this).hasClass("selected")){
			$(this).removeClass("selected");
			$(this).find("input").attr("checked","");
		} else {
			$(this).addClass("selected");
			$(this).find("input").attr("checked","checked");
		}
		console.log('You just longpress-ed an item.', event); 
		event.preventDefault();
		event.stopPropagation();
	});*/
});

