const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = (time) => {
  clear();
  let min = time[0];
  let sec = time[1];
  console.log(chalk.magenta(figlet.textSync("Countdown App")));
  console.log(chalk.magenta(figlet.textSync(`${min}:${sec}`)));
  for (var i = 0; i < 6; i++) {
    console.log('');
  }
};

module.exports = { displayCountdown };
