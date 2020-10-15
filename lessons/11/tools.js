console.log("Робота з датою");


// function User() {
// 
// }

// const user = new User();
// user.name = "Петро";
// User.prototype.toString = function() {
//   return "Гарний мій текст!!!";
// }

const date = new Date();

const _date = date.getDate();
const day = date.getDay();
const fullyear = date.getFullYear();
const hours = date.getHours();
const milliseconds = date.getMilliseconds();
const minutes = date.getMinutes();
const month = date.getMonth();
const seconds = date.getSeconds();
const time = date.getTime();

// console.log(user);

console.log({
  _date,
  day,
  fullyear,
  hours,
  milliseconds,
  minutes,
  month,
  seconds,
  time,
});