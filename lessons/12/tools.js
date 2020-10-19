

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

  this.pow = function(i) {
    const currentValue = _value;
    for (let j = 1; j < i; j++) {
      _value *= currentValue;
    }
    return this;
  }

  return this;
}

const currentCalk = new calk(2);
// currentCalk.add(2).add(8).multiple(0.5).pow(3);
currentCalk.add(0).pow(10);
// currentCalk.add(8);
// currentCalk.multiple(2);

const result = currentCalk.get();

console.log({
  result
});