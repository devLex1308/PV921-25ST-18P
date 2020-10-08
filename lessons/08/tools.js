function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}



async function getData() {
  const response = await fetch("https://reqres.in/api/users/2");
  const dataString = await response.text();
  const data = JSON.parse(dataString);
  console.log({response, dataString, data});
}

getData();