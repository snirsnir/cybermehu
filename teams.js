
function send(){
	var a1 = document.getElementById("namet").value
	var firebaseRef = firebase.database().ref('teams/');
	firebaseRef.child(a1).set(0);
	document.getElementById("pointb").style.display="none"
	document.getElementById("error").style.color = "#CCC";
	  document.getElementById("error").style.visibility = "visible";
	document.getElementById("error").style.fontSize = "xx-large";
	  document.getElementById("error").innerHTML = "ההרשמה הצליחה, בהצלחה לקבוצת"+" " + a1;
}
	
	
