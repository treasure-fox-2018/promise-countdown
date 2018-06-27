const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  let minute = Math.floor(seconds/ 60)
    
    let second = seconds%60
    if(minute < 10){
      minute = `0${minute}`
    } 
    if(second < 10){
      second = `0${second}`
    }

    let time = `${minute}:${second}`
    console.log(chalk.cyan(figlet.textSync(time)));
};

module.exports = { displayCountdown };
