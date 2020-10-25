
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

  nap - pan
  ear - are - era
  cheaters - hectares - teachers

Напишіть функцію aclean (arr), яка повертає масив слів, очищений від анаграм.

Наприклад:

 */
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

/*
Слід отримати масив ключів map.keys () в змінну і далі працювати з ними, наприклад, застосувати метод .push.

Але це не виходить:
 */

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");