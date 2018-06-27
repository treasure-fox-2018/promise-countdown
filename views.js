const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

function displayCountdown(seconds) {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  let menit = Math.floor(seconds / 60)
  let second = seconds - (menit * 60)
  
  if (second < 10) {
    second = '0' + second
  }
  if (menit < 10) {
    menit = '0' + menit
  }

  console.log(chalk.white.bold(figlet.textSync(menit + " : " + second)))
};

module.exports = displayCountdown;
