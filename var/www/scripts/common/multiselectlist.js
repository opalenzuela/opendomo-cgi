include_script("/scripts/jquery.longpress.js");

var timetouch;
var focusitem = null;
$(function() {
	$("fieldset.selectable").each(function(index){
		var url = $(this).find("a").attr("href") ;
		$(this).find("a")
			.attr("href","javascript:void()")
			.data("target",url);
		$(this).find("li").on("mousedown touchstart", function(event) {
			focusitem = $(this);
			timetouch = new Date().getTime();
			console.log("Pressing on " , $(this));
		});
		/*$(this).find("li").on("mouseup touchend", function(event) {
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
		});	*/	
	});
});

setTimeout(updateLongpress,100);

function updateLongpress() {
	if (focusitem == null) return false;
	var timetouch2 = new Date().getTime();
	var milliseconds = timetouch2 - timetouch;
	if (milliseconds>1000) {
		if (focusitem.hasClass("selected")){
			focusitem.removeClass("selected");	
		} else {
			focusitem.addClass("selected");
		}
		focusitem = null;
	}
}

