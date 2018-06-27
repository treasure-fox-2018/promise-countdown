const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    // displayCountdown(seconds - 1);
    let countDown = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      
      var minute = Math.floor(secondsLeft/60)
      var second = secondsLeft % 60;
    
      if (minute < 10) {
        minute = `0${minute}`;
      }
      if (second < 10) {
        second = `0${second}`
      }

      if (secondsLeft < 0) {
        clearInterval(countDown);
        resolve("Hey, it's done");
      } else {
        displayCountdown(`${minute}:${second}`);
      }
    }, 1000);
  });

module.exports = {
  timer
};
