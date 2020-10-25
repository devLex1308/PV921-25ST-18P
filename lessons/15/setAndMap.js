// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map


//# Використання об'єкта Map
const myMap = new Map();

const keyObj = {},
    keyFunc = function () {},
    keyString = 'a string';

// задання значень
myMap.set(keyString, 'value associated with “a string”');
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

myMap.size; // 3

// отримання значень
myMap.get(keyString);    // value associated with “a string”
myMap.get(keyObj);       // value associated with keyObj
myMap.get(keyFunc);      // value associated with keyFunc

myMap.get('a string');   // "value associated with 'a string'"
                         // потому что keyString === 'a string'
myMap.get({});           // undefined, потому что keyObj !== {} ({} — це літеральна нотація конструтора класа Object)
myMap.get(function() {}) // undefined, потому что keyFunc !== function () {}


// Використання NaN в якості ключів Map
// NaN !== NaN

/*
const myMap = new Map();
myMap.set(NaN, 'not a number');

myMap.get(NaN); // not a number

const otherNaN = Number('foo');
myMap.get(otherNaN); // not a number
*/

//# Вивикористання ключів за допомогою for..of

/*
const myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
for (let [key, value] of myMap) {
  console.log(key + ' = ' + value);
}
// 0 = zero
// 1 = one

for (let key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

for (let value of myMap.values()) {
  console.log(value);
}
// zero
// one

for (let [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value);
}
// 0 = zero
// 1 = one
*/

//# Итерація Map за допомогою forEach()

/*
myMap.forEach(function(value, key) {
  console.log(`${key} => ${value}`);
});
// 0 => zero
// 1 => one

//# Взаємодія з об'єком Array

const kvArray = [['key1', 'value1'], ['key2', 'value2']];

// Використання конструктора Map для перетворення двовимірних масивів в Map
const myMap = new Map(kvArray);

myMap.get('key1'); // поверне “value1”

// Використання функції Array.from для трансформації Map в двовимірний key-value масив
console.log(Array.from(myMap)); // Виведе точно такий же масив як kvArray

// Або ж
console.log(Array.from(myMap.keys())); // Выведет ['key1', 'key2']
*/

//# Клонування і поєднання Map

const original = new Map([
  [1, 'one']
]);

const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false.

const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

const second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

//# Злиття двох Map. Встановиться останній повторившийся ключ.
// Оператор Spread по суті перетворює Map в масив
const merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three

//# Map можня зляти з Массивами:

const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

const second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

//# Злиття Map і масиву. Як і при злитті двох Map - здобуте це останній повторившийся ключ.
const merged = new Map([...first, ...second, [1, 'eins']]);

console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three


/*
У вас є масив arr.

Створіть функцію unique (arr), яка поверне масив унікальних, не повторюються значень масиву arr.

наприклад: */

function unique(arr) {
  /* ваш код */
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O

/*
  Відфільтруйте анаграми

  Анаграми - це слова, у яких ті ж букви в тій же кількості, але вони розташовуються в іншому порядку.
 */