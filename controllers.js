const { displayCountdown } = require("./views");

const timer = seconds => {
  return new Promise((resolved, reject)=>{
    let countDown = setInterval(function(){
      resolved(displayCountdown(time(seconds)))
      seconds--
      if (seconds === -1) {
        reject(clearInterval(countDown))
      }
    },1000);
  })
};

const time = seconds => {
  let arr = [];
  let min = Math.trunc(seconds / 60);
  let sec = seconds % 60 ;
  if (min < 10) {
    min = '0'+min
  }
  if (sec % 60 === 0) {
    sec = '0'+sec
  }else if (sec < 10) {
    sec = '0'+sec
  }
  return [min,sec];
};

module.exports = {
  timer
};
