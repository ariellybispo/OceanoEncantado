document.addEventListener("DOMContentLoaded", function () {
  let totalTime = (2 * 24 * 60 * 60) + (23 * 60 * 60) + (59 * 60) + 59; // timer
  
  function updateCountdown() {
      let days = Math.floor(totalTime / (24 * 60 * 60));
      let hours = Math.floor((totalTime % (24 * 60 * 60)) / (60 * 60));
      let minutes = Math.floor((totalTime % (60 * 60)) / 60);
      let seconds = totalTime % 60;
      
      document.querySelector(".countdown .time-box:nth-child(1) span").textContent = days;
      document.querySelector(".countdown .time-box:nth-child(2) span").textContent = hours;
      document.querySelector(".countdown .time-box:nth-child(3) span").textContent = minutes;
      document.querySelector(".countdown .time-box:nth-child(4) span").textContent = seconds;
      
      if (totalTime > 0) {
          totalTime--;
          setTimeout(updateCountdown, 1000);
      } else {
          document.querySelector(".countdown").innerHTML = "Promoção encerrada!";
      }
  }
  
  updateCountdown();
});
