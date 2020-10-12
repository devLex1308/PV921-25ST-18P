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



const prom = new Promise((resolve, reject) => {
  // reject(2018);
  // const res = 2020;
  // resolve(res);
  // resolve(2019);

  setTimeout(() => {
    resolve("Test");
  }, 2000 );
});

prom.then((r) => {
  console.log(r);
}).catch((c) => {
  console.log({c});
});


