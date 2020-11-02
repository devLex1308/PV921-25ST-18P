console.log("This is nodeJs!");

console.log(typeof window);

/*
Написати функцію checkEnviroment яка повертає значення
це сервер
це браузер
невідоме середовище
 */


try {
  console.log(process);

} catch (e) {
  // console.log(e);
}
