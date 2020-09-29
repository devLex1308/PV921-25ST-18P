console.log("tools2");

let count = 0;

const couters = {}

const clickFunction = (event, i) => {
  couters[i]++;
  event.target.innerHTML = couters[i];
}

// for(let i=1; i<=9; i++) {
//   const element = document.querySelector(`#td-${i}`);
//   element.addEventListener("click", clickFunction);
// }

const elements = document.querySelectorAll(`.my-td, .new-td`);
console.log({elements});

for(let i = 0; i < elements.length; i++) {
  const element = elements[i];
  couters[i] = 0;
  element.addEventListener("click",(event) => {
    clickFunction(event, i); 
  });
}


function wraper(myF) {
  return function (...args) {
      console.log(args);
      const res = myFunction(...args);
      console.log(res);
    return res;
  }
}


function config(obj) {
  return function () {
    return {
      ...obj,
    };
  }
}


const myConfig = config({
  domen: "www.i.ua",
  port: 80,
});


const v = myConfig();

const v1 = myConfig();

v1.port = 8080;

console.log({v, v1})
// 
// console.log(a(7));
// 
// console.log(add(4)(9));


// function wraper(...args) {
//   console.log(args);
//   const res = myFunction(...args);
//   console.log(res);
//   return res;
// }


// element.addEventListener("click", clickFunction);


function EventObserver() {
  let observers = [];
  function subscribe (f) {
    observers.push(f)
  } 
  function unsubscribe (f) {
    observers = observers.filter(element => element!=f );
  }
  function broadcast(data) {
    observers.forEach(element => {
      element(data);
    })
  }

  return {
    subscribe,
    unsubscribe,
    broadcast
  }
}

const event = EventObserver();

function listener1(data) {
  console.log("function listener1 data =" + data);
}

function listener2(data) {
  console.log("function listener2 data =" + data);
}
function listener3(data) {
  console.log("function listener3 data =" + data);
}

event.subscribe(listener1);
event.subscribe(listener2);
event.subscribe(listener3);

event.broadcast("Якісь дані");