$(function() {
	var f = $("fieldset")[0];
	if (f.hasClass("selectable")  ) {
		f.find("li").on("click", function(item) {
			console.log("Clicked on " , $(this));
		});
	}
});
include_script("/scripts/jquery.longpress.js");