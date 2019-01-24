// var moment = require('moment');
function calculateSpring() {
  var spring = moment('20190320')
  var difference = spring.diff(moment(), 'days')
  var until = ""
  if(difference === 0) {
     until = "Spring 2019 is here!"

  } else {
    until = difference + " days until Spring 2019!"

  }

  var days = document.getElementById("spring").textContent += until
}
