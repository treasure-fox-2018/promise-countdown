const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.cyan(figlet.textSync(`${seconds}`)))
  // .then(response => {
  //   console.log(response);
    
  // })

  // Your code here...
};

module.exports = { displayCountdown };
