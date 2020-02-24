
function send(){
	if (document.getElementById("namet").value.length != 0){
	var a1 = document.getElementById("one").value
	var b1 = document.getElementById("two").value
	var c1 = document.getElementById("three").value
	var firebaseRef = firebase.database().ref('crypt/');
		firebaseRef.once('value', function(snapshot) {
	var a = snapshot.child('one').val();
    var b = snapshot.child('two').val();
	var c = snapshot.child('three').val();
			if(document.getElementById("one").value.length != 0)
{
       if ( a1 == a) {
	  document.getElementById("onet").style.color = "green";
	  document.getElementById("onet").style.visibility = "visible";
	  document.getElementById("onet").innerHTML = "כל הכבוד"
	   }
	  else {
		 document.getElementById("onet").style.color = "red";
	  document.getElementById("onet").style.visibility = "visible";
	  document.getElementById("onet").innerHTML = "נסה שוב" 
	  }
}
	  if(document.getElementById("two").value.length != 0)
{
			 if ( b1 == b) {
	  document.getElementById("twot").style.color = "green";
	  document.getElementById("twot").style.visibility = "visible";
	  document.getElementById("twot").innerHTML = "כל הכבוד"
	   }
	  else {
		 document.getElementById("twot").style.color = "red";
	  document.getElementById("twot").style.visibility = "visible";
	  document.getElementById("twot").innerHTML = "נסה שוב" 
	  }
}
			if(document.getElementById("three").value.length != 0) {
			 if ( c1 == c) {
	  document.getElementById("threet").style.color = "green";
	  document.getElementById("threet").style.visibility = "visible";
	  document.getElementById("threet").innerHTML = "כל הכבוד"
	   }
	  else {
		 document.getElementById("threet").style.color = "red";
	  document.getElementById("threet").style.visibility = "visible";
	  document.getElementById("threet").innerHTML = "נסה שוב" 
	  }
}
	if (a1 == a && b1 == b && c1 == c){
	 var nameteam = document.getElementById("namet").value
	  document.getElementById("error").style.color = "green";
	  document.getElementById("error").style.visibility = "visible";
	  document.getElementById("error").innerHTML = "כל הכבוד, קיבלתם נקודה, בעוד מספר שניות המערכת תבצע ריענון לדף, יש לעבור לעמדה אחרת"
			 	var firebaseRef = firebase.database().ref('teams/');
	firebaseRef.once('value', function(snapshot) {
  if (snapshot.hasChild(nameteam)) {
	var aa = snapshot.child(nameteam).child('points').val();
    firebaseRef.child(nameteam).child("points").set(++aa);
	  document.getElementById("pointb").style.display="none"
	  setTimeout(function () {
   window.location.reload(true);
}, 8000);
}
	})

		} 
	
	})}
	else {
		alert("לא הוזן שם קבוצה")
	}
}
	  