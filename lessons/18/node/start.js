const {sum} = require('./sum.js');
const {sub} = require('./sub.js');
const {mult} = require('./mult.js');
const {div} = require('./div.js');

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
const [urlNode, srcFile, variable1, sign, variable2] = process.argv;

console.log(process.argv);
switch(sign)
{
	case "+":
		console.log(sum(parseInt(variable1), parseInt(variable2)));
		break;
	case "-":
		console.log(sub(parseInt(variable1), parseInt(variable2)));
		break;
	case "*":
		console.log(mult(parseInt(variable1), parseInt(variable2)));
		break;
	case "/":
		console.log(div(parseInt(variable1), parseInt(variable2)));
		break;
	default:
		console.log("Невідома операція");
		break;
}

// console.log(sum(parseInt(variable1), parseInt(variable2)));
// console.log(sub(parseInt(variable1), parseInt(variable2)));
// console.log(mult(parseInt(variable1), parseInt(variable2)));
// console.log(div(parseInt(variable1), parseInt(variable2)));
// for (let i = 0; i < arg.length; i++ ) {
//   const name = arg[i];
//   console.log(`Привіт ${name}`);
// }


// try {

// } catch (e) {
//   // console.log(e);
// }