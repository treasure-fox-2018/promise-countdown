const { timer } = require("./controllers");

const main = () => {
  const seconds = parseInt(Number(process.argv[2])) || 10;
  timer(seconds).then(success => console.log(success))
};

main();
