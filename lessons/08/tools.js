function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const sleep1 = getRandomInt(5000);
const sleep2 = getRandomInt(5000);
const sleep3 = getRandomInt(5000);
console.log({
  sleep1,
  sleep2,
  sleep3
});

// setTimeout(() =>{
//   request1();
//   setTimeout(() =>{
//     request2();
//     setTimeout(() =>{
//       request3();

//     }, sleep3);
//   }, sleep2);
// }, sleep1);



function request1(callback){
  if (callback) {
    setTimeout(() => {
      console.log("Request 1");
      callback();
    }, sleep1);
  }
}

function request2(callback){
  if (callback) {
    setTimeout(() => {
      console.log("Request 2");
      callback();
    }, sleep2);
  }
}

function request3(callback){
  if (callback) {
    setTimeout(() => {
      console.log("Request 3");
      callback();
    }, sleep3);
  }
}



async function getData() {
  const response = await fetch("https://reqres.in/api/users/2");
  const dataString = await response.text();
  const data = JSON.parse(dataString);
  console.log({response, dataString, data});
}

getData();