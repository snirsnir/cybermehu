var vid = document.getElementById("vid");
vid.autoplay = true;
  vid.load();
function checkStake(){
var stakes = document.getElementById("stakes").value;
var hotdogs = document.getElementById("hotdogs").value;
var pargiot = document.getElementById("pargiot").value;
vid.src = "https://firebasestorage.googleapis.com/v0/b/mehunanim3.appspot.com/o/3%2Fstake.mp4?alt=media&token=585f9df6-155c-42e2-a778-93ff7e211aeb";
    var a=0;
    vid.onended = function() {
       a=a+1;
       if(a!=stakes)
       {
        vid.play();
        }
    };
}
function checkHotdog(){
var stakes = document.getElementById("stakes").value;
var hotdogs = document.getElementById("hotdogs").value;
var pargiot = document.getElementById("pargiot").value;
vid.src = "https://firebasestorage.googleapis.com/v0/b/mehunanim3.appspot.com/o/3%2Fnaknik.mp4?alt=media&token=f66d02e3-d6d2-470f-832f-f32e8488ed93";
    var a=0;
    vid.onended = function() {
       a=a+1;
       if(a!=hotdogs)
       {
        vid.play();
        }
    };
}
function checkPargit(){
var stakes = document.getElementById("stakes").value;
var hotdogs = document.getElementById("hotdogs").value;
var pargiot = document.getElementById("pargiot").value;
vid.src = "https://firebasestorage.googleapis.com/v0/b/mehunanim3.appspot.com/o/3%2Fpargit.mp4?alt=media&token=ddb117b4-477c-4cf6-b135-1cf8742b76c2";
    var a=0;
    vid.onended = function() {
       a=a+1;
       if(a!=pargiot)
       {
        vid.play();
        }
    };
}
function sendDesc(){
	var desc = document.getElementById("writequest").value
	var firebaseRef = firebase.database().ref(('hesberimLeMangal'));
	firebaseRef.push(desc);
}