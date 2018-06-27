const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  if (seconds >= 60) {
    let minuteDisplay = seconds / 60;
    let strSecondsDisplay = null;
    let strMinuteDisplay = null;
    if (minuteDisplay >= 10) {
      strMinuteDisplay = Math.trunc(minuteDisplay).toString();
    } else {
      strMinuteDisplay = "0" + Math.trunc(minuteDisplay).toString();
    }
    let secondsDisplay = seconds % 60;
    if (secondsDisplay === 0) {
      strSecondsDisplay = "00";
    } else {
      if (secondsDisplay >= 10) {
        strSecondsDisplay = secondsDisplay.toString();
      } else {
        strSecondsDisplay = "0" + secondsDisplay.toString();
      }
    }
    display = strMinuteDisplay + ":" + strSecondsDisplay;
  } else {
    let secondsDisplay = seconds.toString();
    if (secondsDisplay.length === 1) {
      display = "00:0" + secondsDisplay
    } else {
      display = "00:" + secondsDisplay
    }
  }
  console.log(chalk.cyan(figlet.textSync(display)));
};

module.exports = { displayCountdown };
