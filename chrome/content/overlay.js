function startup() {
	var button = document.getElementById("my-button");
	button.addEventListener("click", showDate);
}

window.addEventListener("load", function(e) { 
	startup(); 
}, false);

function showDate(){
	var date = new Date();
	var day = date.getDay();
	var dateString = date.getFullYear() + "." + (date.getMonth()+1) + "." + date.getDate();
	
	window.alert("Date : " + dateString);
}