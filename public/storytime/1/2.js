var vid = document.getElementById("vid");
vid.autoplay = true;
  vid.load();
vid.onended = function() {
document.getElementById("dead").style.visibility="visible";
document.getElementById("alive").style.visibility="visible";
};
function deadFunc(){
document.getElementById("alive").style.visibility="hidden";
   vid.src = "https://firebasestorage.googleapis.com/v0/b/mehunanim3.appspot.com/o/1%2F2.mp4?alt=media&token=d85fd759-c47c-4174-bebc-51ffbbd63ff1";
   video.play();
   
}

function aliveFunc(){
	document.getElementById("dead").style.visibility="hidden";
	 vid.src = "https://firebasestorage.googleapis.com/v0/b/mehunanim3.appspot.com/o/1%2F3.mp4?alt=media&token=afeb5461-858c-4830-b91c-579603d1ab61";
   video.play();
}