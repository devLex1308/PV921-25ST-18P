const {sum, test} = require('./sum.js');

// console.log(result);

// console.log("This is nodeJs!");

// console.log(typeof window);

/*
Написати функцію checkEnviroment яка повертає значення
це сервер
це браузер
невідоме середовище
 */



// const [urlNode, srcFile, ...arg] = process.argv;
const [urlNode, srcFile, variable1, variable2] = process.argv;

console.log(sum(variable1, variable2));
// for (let i = 0; i < arg.length; i++ ) {
//   const name = arg[i];
//   console.log(`Привіт ${name}`);
// }


// try {

// } catch (e) {
//   // console.log(e);
// }
