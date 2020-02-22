document.getElementById("heshbon").style.color = "red";
function checkIt(){
var a = document.getElementById("user").value
var b = document.getElementById("pass").value
fireScreen = firebase.database().ref().child('login1/');
fireScreen.once('value', function(snapshot) {
  if ( a == snapshot.child("user").val() && b == snapshot.child("pass").val() ) { 
	document.getElementById("notSign").style.visibility = "visible";
	 document.getElementById("notSign").style.color = "green";
	 document.getElementById("notSign").innerHTML = "כל הכבוד, התחברתם לחשבון, יש להמשיך ללשונית הבאה";
	  document.getElementById("heshbon").style.color = "green";
	  document.getElementById("heshbon").innerHTML = "ברוך הבא אדון פטה יקר, התחברת בהצלחה למערכת, להלן תדפיס חשבון עדכני";
	  document.getElementById("hesbonpic").style.visibility = "visible";
	  document.getElementById("nomoney").style.visibility = "visible";
	  document.getElementById("nomoney").innerHTML = "לצערנו חשבון הבנק נמצא במינוס, אין באפשרותכם להעביר כסף. תוכלו להתנחם בכך שלפחות קיבלתם נקודה";
	  document.getElementById("musar").style.visibility = "visible";
	  document.getElementById("musar").innerHTML = "מוסר ההשכל בתרגיל זה: אין להשתמש בסיסמאות הקשורות אלינו בדרך כלשהי";
	    document.getElementById("pointed").style.visibility = "visible";
	  document.getElementById("nameTeam").style.visibility = "visible";
	  document.getElementById("pointed").innerHTML = "אנא רשמו את שם קבוצתכם בתיבת הטקסט ולאחר מכן לחצו על הכפתור בכדי לקבל ניקוד. מיד לאחר מכן יש לעבור לשלב אחר";
	   document.getElementById("pointb").style.visibility = "visible";
}
	else {
		document.getElementById("notSign").style.color = "red";
	  document.getElementById("notSign").style.visibility = "visible";
	  document.getElementById("notSign").innerHTML = "נסו שוב"
		document.getElementById("user").value = "";
	 document.getElementById("pass").value = "";
	}
} )
}
function point(){
	var nameTeam = document.getElementById("nameTeam").value
	var firebaseRef = firebase.database().ref('teams/');
	firebaseRef.once('value', function(snapshot) {
  if (snapshot.hasChild(nameTeam)) {
	var a = snapshot.child(nameTeam).child('points').val();
    firebaseRef.child(nameTeam).child("points").set(++a);
	  document.getElementById("error").style.color = "green";
	  document.getElementById("error").style.visibility = "visible";
	  document.getElementById("error").innerHTML = "כל הכבוד, קיבלתם נקודה, בעוד מספר שניות המערכת תבצע ריענון לדף, יש לעבור לעמדה אחרת"
	  document.getElementById("nameTeam").value = "";
	  setTimeout(function () {
   window.location.reload(true);
}, 8000);
	
  }
  else {
	  document.getElementById("error").style.color = "red";
	  document.getElementById("error").style.visibility = "visible";
	  document.getElementById("error").innerHTML = "מספר קבוצה לא נכון, יש להסתכל על המקרן ולנסות שוב"
	  document.getElementById("nameTeam").value = "";
	 
	   }
});

}
