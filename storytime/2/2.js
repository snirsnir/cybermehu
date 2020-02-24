var flag = 0;
var x = document.getElementById("checking").value
var vid = document.getElementById("vid");
vid.autoplay = true;
  vid.load();
vid.onended = function() {
vid.src = "https://firebasestorage.googleapis.com/v0/b/mehunanim3.appspot.com/o/2%2F2.mp4?alt=media&token=4103805e-ce47-4a2c-a4d0-ccde6c6f522b";
   video.play();
};
function checkIt(){
var x = document.getElementById("checking").value
if (x == "40"){
	alert("כל הכבוד!! הצלחתם")
	vid.src = "https://firebasestorage.googleapis.com/v0/b/mehunanim3.appspot.com/o/2%2F3.mp4?alt=media&token=5f7a98d3-531e-4c8d-a733-cb020159916f";
   video.play();
}
	else {
		alert("טעיתם, נסו שוב")
	}
}