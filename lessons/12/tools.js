

function calk(initValue) {

  let _value = initValue;

  function add(number) {
    _value += number; 
  }

  function multiple(number) {
    _value *= number;
  }

  function set(number) {
    _value = number;
  }

  function get() {
    console.log(_value);
    return _value;
  }

  return {
    add,
    multiple,
    set,
    get,
  }

}


const currentCalk = calk(10);


currentCalk.add(5);
currentCalk.add(8);
currentCalk.multiple(2);

const result = currentCalk.get();

console.log({
  result
});