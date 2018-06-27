const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let minute = Math.floor(seconds/60)
  let second = seconds - (minute * 60)
  if(String(second).length == 1 ){
    second = '0' + second
  }
  if(String(minute).length == 1){
    minute = '0' + minute
  }

  console.log(chalk.cyan(figlet.textSync(minute + ":" + second)));
};

module.exports = { displayCountdown };
