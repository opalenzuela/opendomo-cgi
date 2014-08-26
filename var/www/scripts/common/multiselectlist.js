//include_script("/scripts/jquery.longpress.js");

var timetouch = 0;
var focusitem = null;
$(function() {
	$("fieldset.selectable li").on("mousedown touchstart", function(event) {
		var url = $(this).find("a").attr("href") ;
		$(this).find("a")
			.attr("href","javascript:void()")
			.data("target",url);	
			
		focusitem = $(this);
		timetouch = new Date().getTime();
		console.log("Pressing on " , $(this));
		event.preventDefault();
		event.stopPropagation();			
	});
	/*$("fieldset.selectable li").each(function(index){
		var url = $(this).find("a").attr("href") ;
		$(this).find("a")
			.attr("href","javascript:void()")
			.data("target",url);

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
				if ($(this).find("input")[0].checked) {
					$(this).find("input")[0].checked = false;
					$(this).removeClass("selected");
				} else {
					$(this).find("input")[0].checked = true;
					$(this).addClass("selected");
				}
			}
		});	
	}); */
});

function updatetimers () {
	if (focusitem == null || timetouch == 0) return;
	console.log("Pressing on ", focusitem);
	var timetouch2 = new Date().getTime();
	var milliseconds = timetouch2 - timetouch;
	if (milliseconds > 1000) {
		console.log("Long pressed on ", focusitem);
		if (focusitem.hasClass("selected")){
			focusitem.removeClass("selected");	
		} else {
			focusitem.addClass("selected");
		}
		focusitem = null;
		timetouch = 0;
	} else {
		console.log("Short press still");
	}
}
setTimeout(updatetimers,100);


