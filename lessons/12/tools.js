

function calk(initValue) {

  let _value = initValue;

  this.add = function(number) {
    _value += number; 
    return this;
  }

  this.multiple = function (number) {
    _value *= number;
    return this;
  }

  this.set = function (number) {
    _value = number;
    return this;
  }

  this.get = function () {
    console.log(_value);
    return _value;
  }

  return this;
}

const currentCalk = new calk(10);
currentCalk.add(5).add(8).multiple(0.5);
// currentCalk.add(8);
// currentCalk.multiple(2);

const result = currentCalk.get();

console.log({
  result
});