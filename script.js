document.addEventListener("DOMContentLoaded", function() {
    var ball = document.getElementById("ball");
  
    function moveBall() {
      ball.style.top = "150px";
      ball.style.left = "250px";
    }
  
    setTimeout(moveBall, 600);
  });
  