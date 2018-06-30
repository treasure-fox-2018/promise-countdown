const { timer } = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 100;
  seconds
  timer(seconds)

  // Your code here...
};

main();
module.exports = main
