// video popup
function openVideo() {
    document.getElementById("video-popup").style.display = "block";
}
function closeVideo() {
    document.getElementById("video-popup").style.display = "none";
    var iframe = document.getElementById("video-frame");
    iframe.src = iframe.src; // Stop the video
}

// modal 1
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("train-btn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
