$(document).ready(function() {
  var vid = document.getElementById('vid-full');

  // When user clicks the video, trigger the behavior
  $(".video-overlay").click(function() {
    // Hide the overlay/play button
    $(".video-overlay").hide();
    $(".playBtn").hide();

    // Hide the preview
    $("#vid-preview").hide();

    // Show the full video
    $("#vid-full").show();

    // Set the volume to be low to not scare people
    vid.volume = 0.2;

    // Play the full video
    $("#vid-full")[0].play();
  });

  // Play/pause functionality when clicking the video
  $("#vid-full").click(function() {
    this.paused ? this.play() : this.pause();
  });

  // Do these things upon video end
  vid.onended = function(e) {
    // Show the preview again with the play button
    $("#vid-preview").show();
    $(".playBtn").show();
    $(".video-overlay").show();

    // Hide the full video until next time
    $("#vid-full").hide();
  };
});
