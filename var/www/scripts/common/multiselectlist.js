$(function() {
	var f = $("fieldset")[0];
	if ($(f).hasClass("selectable")  ) {
		$(f).find("li").on("click", function(event) {
			console.log("Clicked on " , $(this));
		});
	}
});
include_script("/scripts/jquery.longpress.js");
$('fieldset.selectable li').longpress(function(event) {
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
});