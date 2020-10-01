console.log(5);

function sum1(a,b) {
  return a + b;
}


const sum2 = function (a,b) {
  return a + b;
}


const sum3 = (a,b) => {
  return a + b;
}

const sum4 = (a,b) => a + b;

function sumCur(a){
  return function (b) {
    return a+ b;
  }
}

const sumCur2 = a => b => a + b;


const name = "ЗАЗ";

const car = {
  name: "BMV",
  getName: function() {
    console.log({a: this});
    return this.name;
  },
  getName2: () => {
    return this.name;
  }

}

console.log(car.getName());
console.log(car.getName2());
console.log(sumCur2(4)(3));

const arr = [5,8,9,7,1,5];

function filterFunction(element) {
  if (element < 6) {
    return true;
  }

  return false;
}

// const filterrArr = arr.filter(filterFunction);
const filterrArr = arr.filter((element, i, arr) => {
  console.log({element, i, arr});
  return element < 6
});

console.log({filterrArr, type: typeof filterrArr});

const a = [5,8,9,7,1,12].reduce(
  (acc, element) => element < 6
    ? [...acc, element]
    : [...acc]
, []);

console.log(a);
