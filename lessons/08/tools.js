function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const sleep1 = getRandomInt(5000);
const sleep2 = getRandomInt(5000);
const sleep3 = getRandomInt(5000);

setTimeout(() =>{
  console.log("Request 1");
}, sleep1);

function request1(){
  console.log("Request 1");
}

function request2(){
  console.log("Request 1");
}

function request3(){
  console.log("Request 1");
}



async function getData() {
  const response = await fetch("https://reqres.in/api/users/2");
  const dataString = await response.text();
  const data = JSON.parse(dataString);
  console.log({response, dataString, data});
}

getData();