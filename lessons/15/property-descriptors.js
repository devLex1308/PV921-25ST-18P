// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor

// Object.getOwnPropertyDescriptor(obj, prop)

/*

writable - якщо true, властивість можна змінити, інакше воно тільки для читання.
enumerable - якщо true, властивість перераховується в циклах, в іншому випадку цикли його ігнорують.
configurable - якщо true, властивість можна видалити, а ці атрибути можна змінювати, інакше цього робити не можна.

 */

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

// Object.defineProperty(obj, prop, descriptor)

// Object.getOwnPropertyDescriptors(obj).
// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
//
let obj = {
  get propName() {
    // гетер, спрацює при читанні obj.propName
  },

  set propName(value) {
    // сеттер, спрацює при записі obj.propName = value
  }
};


let user = {
  name: "John",
  surname: "Smith"
};


/*
Вам потрапив в руки код об'єкта User, який зберігає ім'я і прізвище в властивості this.fullName:
Ім'я та прізвище завжди розділяються пропуском.


 */
function User(fullName) {
  this.fullName = fullName;
}

const vasya = new User("Іван Котляревський");

/*
Зробіть, щоб були доступні властивості firstName і lastName, причому не тільки на читання, але і на запис, ось так:
*/

// const vasya = new User("Іван Котляревський");

// читання firstName/lastName
alert( vasya.firstName ); // Іван
alert( vasya.lastName ); // Котляревський

// запис в lastName
vasya.lastName = 'Франко';

alert( vasya.fullName ); // Іван Франко
