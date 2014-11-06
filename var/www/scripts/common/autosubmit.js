$(function(){
	$("fieldset.autosubmit input").on("change",function(){
		var id = $(this).closest("form").attr("id");
		submitForm(id);
	});
});

function submitForm(formID) {
    //$("#"+formID).submit(function(e){
		//e.preventDefault();
 
        var dataString = $("#"+formID).serialize();
		var url = $("#"+formID).attr("action")+"?GUI=XML";
     
		$.post(url,dataString, function(data){
			console.log(data);
		}, "text/xml")
		.done(function() {
			console.log( "second success" );
		})
		.fail(function() {
			console.log( "error" );
		})
		.always(function() {
			console.log( "finished" );
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