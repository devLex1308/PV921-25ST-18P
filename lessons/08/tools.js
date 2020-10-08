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

fetch("https://reqres.in/api/users/2").then((res) =>{

  if(res.status == 200 || res.ok) {
    console.log(res);
    res.text().then((text) => {
      const data = JSON.parse(text);
      console.log(userHtml(data))
      userHtml(data);

    });
  } else {
    console.log("Є помилка");
  }

});


function userHtml(data) {
  return `
    <div id="user-${data.data.id}">
      <img
        src="${data.data.avatar}"
        alt="${data.data.first_name}"
      >
      <p>
        ${data.data.first_name}
        ${data.data.last_name}
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