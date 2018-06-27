const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  let minute= String(Math.floor(seconds / 60));
  let second = String(seconds % 60);
  if (minute.length === 1) {
    minute ="0"+minute;
  }
  if (second.length === 1) {
    second ="0"+second;
  }
  let time = `${minute}:${second}`
  console.log(chalk.cyan(figlet.textSync(time)));
};

module.exports = { displayCountdown };
