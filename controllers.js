const displayCountdown = require("./views");

function timer(seconds) {
  return new Promise(function(resolve, reject) {
  let countdown = setInterval(function() {
    seconds--
      if (seconds == 0) {
        reject(clearInterval(countdown))
      } else {      
        resolve(displayCountdown(seconds))
      }

    }, 1000)
  })
};

module.exports = timer;
