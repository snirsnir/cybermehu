var buttonflag = 0;
var namet;
function send(){
	if(buttonflag==0){
	var nameteam = document.getElementById("nameTeam").value
	namet = nameteam
	var desc = document.getElementById("writequest").value
	var firebaseRef = firebase.database().ref('hesber');
		document.getElementById("pointed").style.color = "green";
		 document.getElementById("pointed").innerHTML = "התגובה בבדיקה, יש להמתין לתשובה מהמדריך";
	   document.getElementById("pointed").style.visibility = "visible";
		document.getElementById("code").style.color = "green";
		 document.getElementById("code").innerHTML = " כעת עליכם להמתין עד אשר תהיה תגובה מהמדריך,במידה ותשובתכם התקבלה, לצורך קבלת הנקודה יש להזין את הקוד שקיבלתם בתיבת הטקסט מטה";
	   document.getElementById("code").style.visibility = "visible";
	firebaseRef.child(nameteam).set(desc);
	firebaseRef.child(nameteam+'res').set('בבדיקה');
	}
		else {
			alert("כבר נשלחה תגובה, יש להמתין לתשובה מהמדריך");
		}
	buttonflag++
	fireScreen = firebase.database().ref().child('hesber');
	fireScreen.on('value', function(snapshot) {
	fireScreen.on('value',function(datasnapshot){
    document.getElementById("result").innerHTML = snapshot.child(nameteam+'res').val();
	})
})
	
}
function point(){	
var a = document.getElementById("entercode").value
fireScreen = firebase.database().ref();
fireScreen.once('value', function(snapshot) {
  if ( a == snapshot.child("code2").val()) { 
alert("כל הכבוד, קיבלתם נקודה! בעוד מספר שניות המערכת תבצע ריענון לדף, יש לעבור לתחנה הבאה")
	 	var firebaseRef = firebase.database().ref('teams/');
	firebaseRef.once('value', function(snapshot) {
  if (snapshot.hasChild(namet)) {
	var a = snapshot.child(namet).child('points').val();
    firebaseRef.child(namet).child("points").set(++a);
	  setTimeout(function () {
   window.location.reload(true);
}, 8000);
}
	else {
alert("טעות, נסה שוב")
	}
} )
}
})
}