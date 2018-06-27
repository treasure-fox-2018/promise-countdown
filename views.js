const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  
  var mins;
  var sec;
  if (seconds >= 60) {
    mins = Math.floor(seconds / 60);
    sec = seconds % 60;

    if (mins < 10) {
      mins = '0' + mins;
    }

  } else {
    sec = seconds;
    mins = '00';
  }
  if (sec < 10) {
    sec = '0' + sec;
  }
  var timer = `${mins} : ${sec}`;

  console.log(chalk.cyan(figlet.textSync(timer)));
  
};


module.exports = { displayCountdown };
