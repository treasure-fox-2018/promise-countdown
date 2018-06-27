const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  let menit = Math.floor(seconds / 60)
  let detik = seconds - (menit * 60)
  if (String(detik).length === 1) {
    detik = '0' + detik
  }
  if (String(menit).length === 1) {
    menit = '0' + menit
  }
  // Your code here...
  console.log(chalk.white.bold(figlet.textSync(menit + " : " + detik)))
};

module.exports = {
  displayCountdown
};
