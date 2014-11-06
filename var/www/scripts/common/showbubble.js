function showBubble(bubbleURL){
	var f = document.getElementById("bubble_frame");
	if (!f) {
		f= document.createElement("div");
		document.body.appendChild(f);
	}
	f.className ="bubble";
	f.id = "bubble_frame";
	f.innerHTML="<iframe name='bubble' src='"+bubbleURL+"'></iframe>";
	$("#bubble_frame").show();
}
function hideBubble(){
	$("#bubble_frame").hide();
}