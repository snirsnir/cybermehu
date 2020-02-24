
function send(){
	if (document.getElementById("namet").value.length != 0){
	var a1 = document.getElementById("ans").value
	var firebaseRef = firebase.database().ref();
		firebaseRef.once('value', function(snapshot) {
	var a = snapshot.child('mustar').val();
       if (a1 == a) {
	  document.getElementById("error").style.color = "green";
	  document.getElementById("error").style.visibility = "visible";
	  document.getElementById("error").innerHTML = "כל הכבוד, קיבלתם נקודה, בעוד מספר שניות המערכת תבצע ריענון לדף, יש לעבור לעמדה אחרת"
		   document.getElementById("pointb").style.display="none"
		    var nameteam = document.getElementById("namet").value
	  
			 	var firebaseRef = firebase.database().ref('teams/');
	firebaseRef.once('value', function(snapshot) {
  if (snapshot.hasChild(nameteam)) {
	var aa = snapshot.child(nameteam).child('points').val();
    firebaseRef.child(nameteam).child("points").set(++aa);
	  
	  setTimeout(function () {
   window.location.reload(true);
}, 8000);
}
	})
	   }
			else {
				document.getElementById("error").style.color = "red";
	  document.getElementById("error").style.visibility = "visible";
	  document.getElementById("error").innerHTML = "נסה שנית"
			}
	


		}) 
	
	}
	else {
		alert("לא הוזן שם קבוצה")
	}
}
	  