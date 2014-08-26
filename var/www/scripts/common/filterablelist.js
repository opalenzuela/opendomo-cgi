$(function() {
	$("fieldset.filterable").each(function(item) {
		$(this).prepend("<input name='filter' type='search'>");
	});
});