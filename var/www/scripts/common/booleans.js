$(function(){
	$("li.boolean").on("click",function(){
		var c = $(this).find("input").prop("checked");
		if (c!=true) {
			$(this).addClass("checked");
		} else {
			$(this).removeClass("checked");
		}
	});
});