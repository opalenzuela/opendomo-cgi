$(function(){
	$("fieldset.autosubmit input").on("change",function(){
		var id = $(this).closest("form").attr("id");
		submitForm(id);
	});
});

function submitForm(formID) {
    $("#"+formID).submit(function(e){
		e.preventDefault();
 
        var dataString = $("#"+formID).serialize();
     
        $.ajax({
        type: "POST",
        url: $("#"+formID).attr("action")+"?GUI=XML",
		async: false, 
        data: dataString,
        dataType: "text/xml",
        success: function(data) {
			console.log("Success");
			console.log(data);
			},
		fail: function(data) {
			console.log("Fail");
			console.log(data);
			}
           
        });         
     
	});

}