const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.red(figlet.textSync("Countdown App")));
  // Your code here...
  
  let _minute = Math.floor(seconds / 60) % 10
  let _second = Math.floor(seconds % 60) / 10
  let time = `${_minute} : ${_second}`
  console.log(chalk.red(figlet.textSync(time)));
};

module.exports = { displayCountdown };
