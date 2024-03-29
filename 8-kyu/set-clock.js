


/*

Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to milliseconds.

Example:
past(0, 1, 1) == 61000
Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59

*/


// 1


function past(h, m, s) {

  const hour = 3600000 * h;
  const minute = 60000 * m;
  const second = 1000 * s;

  return hour + minute + second;
}

console.log(past(0,1,1)); // 61000
console.log(past(1,1,1)); // 3661000
console.log(past(0,0,0)); // 0
console.log(past(1,0,1)); // 3601000
console.log(past(1,0,0)); // 3600000



// 2

function past(h, m, s) {

  return ((h * 3600) + (m * 60) + s) * 1000;
}



// 3

function past(h, m, s){
  const setTime = new Date().setHours(h, m, s);
  const midnight = new Date().setHours(0, 0, 0);
  
  return Math.round(setTime - midnight);
}



// 4

function past(h, m, s){
  const hours = h * 60 * 60 * 1000;
  const minutes = m * 60 * 1000;
  const seconds = s * 1000;
  
  return hours + minutes + seconds;
}



// 5

const past = (h, m, s) => new Date(0, 0, 0, h, m, s) - new Date(0, 0, 0);