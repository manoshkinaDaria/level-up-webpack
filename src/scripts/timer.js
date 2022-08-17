document.addEventListener('DOMContentLoaded', () => {
    function getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((t / 1000) % 60);
      const minutes = Math.floor((t / 1000 / 60) % 60);
      return {
        'total': t,
        'minutes': minutes,
        'seconds': seconds
      };
    }
  
    function initializeClock(id, endtime) {
      const clock = document.getElementById(id);
      const minutesSpan = clock.querySelector('.minutes');
      const secondsSpan = clock.querySelector('.seconds');
  
      function updateClock() {
        const t = getTimeRemaining(endtime);
        minutesSpan.innerHTML = (`0${t.minutes}`).slice(-2);
        secondsSpan.innerHTML = (`0${t.seconds}`).slice(-2);
        const timeinterval = setInterval(updateClock, 1000);
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
  
      updateClock();
  
    }
  
    let deadline = 'January 01 2023 00:00:00 ';
    deadline = new Date(Date.parse(new Date()) + 30 * 60 * 1000); // for endless timer
    initializeClock('countdown', deadline);
  });