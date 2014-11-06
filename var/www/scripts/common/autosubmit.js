$(function(){
	$("fieldset.autosubmit input, fieldset.autosubmit select").on("change",function(){
		var id = $(this).closest("form").attr("id");
		submitForm(id);
	});
});

function submitForm(formID) {
    //$("#"+formID).submit(function(e){
		//e.preventDefault();
 
        var dataString = $("#"+formID).serialize();
		var url = $("#"+formID).attr("action")+"?GUI=XML";
     
		$.post(url,dataString)
		.done(function(data) {
			console.log( "success" );
			console.log(data);
		})
		.fail(function(data) {
			console.log( "error" );
			console.log(data);
		});
        /*$.ajax({
        type: "POST",
        url: url,
        data: dataString,
        dataType: "text/xml",
        done: function(data) {
			console.log("Success");
			console.log(data);
			},
		fail: function(data) {
			console.log("Fail");
			console.log(data);
			},
		always: function(data) {
			console.log("Always");
			console.log(data);
			}			
           
        });         */
     
	//});

}