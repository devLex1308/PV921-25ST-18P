console.log("Test");

const a = 3;
const b = 3;

const bool = a >= b;

const login = "Test";
const pass = 1235;

if (login == 'Test' && pass == 1235) {
  console.log("True");
} else {
  console.log("Невірний логін або пароль");
}

const color = "green";

if (color=="red" || color =="yellow") {
  console.log("Стоїмо");
} else {
  if (color == "green") {
    console.log("Ідем");
  } else {
    console.log("Некоректний колір");
  }
}


if (color=="red" || color =="yellow") {
  console.log("Стоїмо");
} else if (color == "green") {
  console.log("Ідем");
} else {
  console.log("Некоректний колір");
}

// confirm("Яка температура?");
// const temp = prompt("Яка температура?");
// 
// const type = typeof temp;
// console.log(type);
// 
// 
// if (temp === "101") {
//   console.log("Газ");
// }

let i = 1;

while (i < 5) {
  console.log(i);
  i++;
  if (i==3) {
    break;
  }

}

// {
//   aa = 78;
// }
// 
// console.log({aa});

console.log("----------------");

for (let i = 1; i < 5; i++ ) {
  if (i==2) {
    break;
  }
  console.log(i);
}

i = 1;
console.log("----------------");
do {
  console.log(i);
  if (i==1) {
    break;
  }
  i++;
} while (i < 5)




