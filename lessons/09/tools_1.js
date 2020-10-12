// console.log(5);

// const user = {
//   name: "Sasha",
//   age: 30,
// };

// const userString = `
// {
//   "name": "Sasha",
//   "age": 30,
//   "array": [8, 10, "text"],
//   "isUser": true
// }
// `;


// let userFromJSON = null;

// try {
//   let userFromJSON = JSON.parse(userString);
//   console.log({userFromJSON});
// } catch(e) {
//   console.log(e);
// }

// if (userFromJSON) {
//   console.log({userFromJSON});
// }

// const userToJSON = JSON.stringify(user);
// console.log(userToJSON);



const wraperProm = () => {
  const prom = new Promise((resolve, reject) => {
    // reject(2018);
    // const res = 2020;
    // resolve(res);
    // resolve(2019);

    setTimeout(() => {

      const rand = Math.random();
      console.log({rand});
      if (rand < 0.5) {
        resolve("Все добре");
      }

      reject("Трапилась помилка!!!");

    }, 500 );
  });
  return prom;
}

function sleep(seconds) {
  const pause = seconds * 1000;
  const res = `Пауза в ${seconds} секунди.`;
  return new Promise(r => {
    setTimeout(() => {
      r(res);
    }, pause);
  });
}


// prom.then((r) => {
//   console.log(r);
// }).catch((c) => {
//   console.log({c});
// });

async function asyncFunction() {
  // const res = await wraperProm();
  let res = await sleep(1);
  console.log("1", res);
  res = await sleep(2);
  console.log("2", res);
  res = await sleep(4);
  console.log("4", res);

  // console.log({res});
}
/*
Передати в Promise all 10 функцій sleep так щоб час очікування був від 100 мС до 2 С
*/

async function asyncFunctionParalel() {
  const pause1 = sleep(1);
  const pause2 = sleep(2);
  const pause4 = sleep(4);
  const res = await Promise.all([pause1,pause2,pause4]);
  console.log({res});
}


// asyncFunction();
asyncFunctionParalel();
