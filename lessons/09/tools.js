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
  if (true || callback) {
    setTimeout(() => {
      console.log("Request 2");
      // callback();
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


request3(request2);


for (let i = 1; i < 10; i++) {
  fetch(`https://reqres.in/api/users/${i}`).then((res) =>{

    if(res.status == 200 || res.ok) {
      console.log(res);
      res.text().then((text) => {
        const data = JSON.parse(text);
        const html = userHtml(data);

      });
    } else {
      console.log("Є помилка");
    }

  });

}







function userHtml(data) {

  const {
    id,
    avatar,
    first_name,
    last_name
  } = data.data;

  return `
    <div id="user-${id}">
      <img
        src="${avatar}"
        alt="${first_name}"
      >
      <p>
        ${first_name}
        ${last_name}
      </p>
    </div>
  `;
}



// async function getData() {
//   const response = await fetch("https://reqres.in/api/users/2");
//   const dataString = await response.text();
//   const data = JSON.parse(dataString);
//   console.log({response, dataString, data});
// }

getData();