const timer = require("./controllers");

function main() {
  const seconds = parseInt(process.argv[2]) || 10;
  timer(seconds);
};

main();