$(function(){
	$("li.boolean").on("click",function(){
		var c = $(this).find("input").prop("checked");
		if (c!=true) {
			$(this).addClass("checked");
			$(this).removeClass("unchecked");
		} else {
			$(this).addClass("unchecked");
			$(this).removeClass("checked");
		}
	});
	// Refresh all booleans
	$("li.boolean").trigger("click");
});