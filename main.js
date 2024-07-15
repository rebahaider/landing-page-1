// video popup
function openVideo() {
    document.getElementById("video-popup").style.display="block";
}
function closeVideo() {
    document.getElementById("video-popup").style.display = "none";
    var iframe = document.getElementById("video-frame");
    iframe.src = iframe.src; // Stop the video
}