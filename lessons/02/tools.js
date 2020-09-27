// let count = 0;
// 
//  for (let i1 = 0; i1 <= 9; i1++) {
//   for (let i2 = 0; i2 <= 9; i2++) {
//     for (let i3 = 0; i3 <= 9; i3++) {
//       for (let i4 = 0; i4 <= 9; i4++) {
//         for (let i5 = 0; i5 <= 9; i5++) {
//           for (let i6 = 0; i6 <= 9; i6++) {
//             const sumFirst = i1 + i2 + i3;
//             const sumLast = i4 + i5 + i6;
//             if (sumFirst === sumLast) {
//               // console.log(`${i1}${i2}${i3}${i4}${i5}${i6}`)
//               count++;
//               // break aaa;
//             }
//           }
//         }
//       }
//     }
//   }
// }
// console.log({count})

let a;

if (2>3) {
  a = 3;
} else {
  a = 5;
}

const b = 2>3 
  ? 3 
  : 5;

const day = 2;
name = '';

// const int = parseInt('11', 8);

// switch(day) {
//   case 1:
//   name = 'Пн';
//   console.log(1);
//   // break;
//   case 2:
//   name = 'Вт';
//   console.log(2);
//   // break;
//   case 3:
//   name = 'Ср';
//   console.log(3);
//   break;
//   default:
//   name = " Я незнаю що це за день";
// 
// }

// console.log({a, name, int});

// for (let i = 0 ; i <= 10; i++) {
//   if (i%2 == 1) {
//     continue;
//   }
//   console.log(i);
// }


const d = typeof ((2 + 2) * 2);

// console.log(typeof 1);
// console.log(typeof '1');
// console.log(typeof false);
// console.log(typeof {});
// console.log(typeof null);

// const sum0 = sum(7, 8);
// 
// console.log(sum0);

const sum = function (a, b) {

  const _a = parseInt(a, 10);
  const _b = parseInt(b, 10);

  let erros = "";

  if (typeof _a != 'number') {
    erros += " Змінна a не число";
  }

  if (typeof _b != 'number') {
    erros += " Змінна b не число";
  }

  if (erros) {
    console.log(erros);
    return;
  }


  const result = _a + _b;
  return result;
}

const v = 55;

const resultSum1 = sum('1', '2');
const resultSum2 = sum(3, '4');
const resultSum3 = sum(sum(1, '2'), sum(3, 4));


const sum2 = sum;

// console.log({
//   resultSum1,
//   resultSum2,
//   resultSum3
// });

const result = sum2(-1, 1);

console.log({result});

function test() {
  console.log("Це тестова фунція");
  setTimeout(test, 500);
}

// setTimeout(function () {
//   console.log("Це тестова фунція");
//   setTimeout(function () {
//     console.log("Це тестова фунція 2");
//       setTimeout(function () {
//       console.log("Це тестова фунція 3");
//         setTimeout(function () {
//         console.log("Це тестова фунція 4");
//       }, 500);
//     }, 500);
//   }, 500);
// }, 500);


// setTimeout(function () {
//   console.log("Це тестова фунція");
// }, 500);

// test();


// function fullName(name, suname, middleName, ...lastArguments) {
//   console.log({lastArguments});
// 
//   return `${suname} ${name} ${middleName}`;
// }
// 
// 
// console.log(fullName("Олександр", "Павлюк", "Анатолійович","dff", 555));


// const array = [8, 5, 6 ,9];
// 
// // array[15] = false;
// let i = 50;
// 
// for (let i = 0; i < array.length; i++) {
//   console.log(i, `значення ${array[i]}`);
// }
// 
// console.log(array);
// 
// console.log(array[14]);


// function join(arr) {
//   let res = "";
//   for (let i = 0; i < array.length; i++) {
//     res += ","
//     console.log(i, `значення ${array[i]}`);
//   }
// }


// array.forEach(function (element) {
//   console.log(element);
// });
// 
// array.push(15);
// 
// console.log(array.join(","));
// const last = array.pop();
// console.log(array.join(","),{ last});
// const beforLast = array.pop();
// console.log(array.join(","),{ beforLast});
// 
// function map(array, f) {
//   const _arr = [];
// 
//   for (let i = 0; i < array.length; i++) {
//     _arr[i] = f(array[i]);
//   }
// 
//   return _arr;
// }
// 
// function add(item) {
//   return item * 10;
// }
// 
// // const newArray = map(array, add);
// const newArray = array.map(add);
// 
// console.log({newArray});

const array = [4,9,8,9];
const array2 = [...array];

array.pop();

console.log(array);
console.log(array2);


const aa = 3 + 1e-15;

console.log(aa,Math.ceil(aa));
