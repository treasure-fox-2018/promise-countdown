const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    displayCountdown(seconds - 1);
    let countDown = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval(countDown);
        resolve('selesai');
      } else {
        // secondsLeft--
        displayCountdown(convert(secondsLeft));
      }
    }, 1000);
  });

  function convert(sec){
    let minute= Math.floor(sec / 60);
    let second = sec % 60;
    if (minute > 9) {
      minute ="0"+minute;
    }
    if (second <= 9) {
      second ="0"+second;
    }
    var hasilConvert = `${minute}:${second}`
    return hasilConvert;
  }

module.exports = {
  timer
};
