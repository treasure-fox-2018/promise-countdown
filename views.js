const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  var jam = Math.floor(seconds/60);
  var detik = seconds%60;
  var stringJam = (jam<10)? '0'+jam.toString() : jam.toString();
  var stringDetik = (detik<10)? '0'+detik.toString() : detik.toString();
  var clock = stringJam +':'+ stringDetik;

  console.log(chalk.cyan(figlet.textSync(clock)));

};

module.exports = { displayCountdown };
