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

// date.setDate();
// date.setFullYear();
// date.setHours(date.getHours() - 48);
// date.setMilliseconds();
// date.setMinutes(0);
// date.setMonth();




const _date = date.getDate();
const day = date.getDay();
const fullyear = date.getFullYear();
const hours = date.getHours();
const milliseconds = date.getMilliseconds();
const minutes = date.getMinutes();
const month = date.getMonth();
const seconds = date.getSeconds();
const time = date.getTime();


const Xmas95 = new Date('Augest 13, 1989 11:15:30');

const diff = date - Xmas95;

Xmas95.setDate(Xmas95.getDate() + 10000);

console.log(Xmas95);


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

const days = diff / (1000 * 60 * 60 *24);
const _minutes = diff / (1000 * 60 * 60);
console.log(date, {diff, days, _minutes});



/*
  Задача встановити 30 січня і додати 20 днів в одному випадку а у іншому додати 1 місяць.
*/

/*
  Порахувати кількість днів, годин і хвилин від вашого народження
*/

/*
  Порахувати коли вам було чи буде 10 тисяч днів і 1 мільярд секунд
*/