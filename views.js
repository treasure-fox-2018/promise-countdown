const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  const convertTime = seconds => {
    let getMinutes = Math.floor(seconds / 60);
    let getSecond = Math.floor(seconds % 60);
  
    if (getMinutes < 10) {
      var minutes = "0" + getMinutes;
    } else {
      minutes = getMinutes;
    }
  
    if (getSecond < 10) {
      var seconds = "0" + getSecond;
    } else {
      seconds = getSecond;
    }
  
    return(`${minutes} : ${seconds}`);
    
  };
  console.log(chalk.blue(figlet.textSync(convertTime(seconds))))
};

module.exports = { displayCountdown };
