console.log("Tools2");
// console.log(book.includes("еней2"));
console.log(book.indexOf("Еней", 20));
console.log(book.length);

/*
Завдання порахувати скільки раз Еней зустрічається в творі
 */

const str = "Еней";

let countName = 0;
let currentPosition = book.indexOf(str);

while (currentPosition > 0) {
  currentPosition = book.indexOf(str, currentPosition) + 1;
  countName++;
}

console.log({countName});

const s = "1:2:4:8";
const arr = s.split(":");

const countWord = book.split(" ");

console.log(book.length / countWord.length);

const dictionary = {};

for (let i = 0; i < book.length; i++) {
  const leter = book[i];
  if (!dictionary[leter]) {
    dictionary[leter] = 0;
  }
  dictionary[leter]++;
}

const keys = Object.keys(dictionary);
let maxCount = 0;
let sumbol = "";

for (let i = 0; i < keys.length; i++) {
  const leter = keys[i];
  const count = dictionary[leter];
  if (count > maxCount) {
    maxCount = count;
    sumbol = leter;
  }
}


keys.sort(function (keyA, keyB) {
  // console.log(keyA, keyB, dictionary[keyA], dictionary[keyA]);
  if (dictionary[keyA] < dictionary[keyB]) {
    return -1;
  }
  if (dictionary[keyA] > dictionary[keyB]) {
    return 1;
  }
  return 0;
});


for (let i = 0; i < keys.length; i++) {
  const leter = keys[i];
  const count = dictionary[leter];
  const percent = count * 100 / book.length;
  console.log(`${leter}  ${count} ${percent}`);
}


/*
Написати функцію для кодування. Функція примає стрічку і об'єкт
по якому буде кодуватись приклад
{a: "r", b: "t"}

 */

// console.log({dictionary, keys, maxCount, sumbol})