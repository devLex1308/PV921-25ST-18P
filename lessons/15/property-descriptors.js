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
  _name: null,
  _surname: null,
  get name() {
    console.log(1);
    return this._name;
  },
  set name(newName) {
    if (typeof newName !== 'string') {
      return alert("Слід вводити строку");
    }
    console.log(2, {newName});
    this._name = newName;
  },

  get surname() {
    return this._surname;
  },
  set surname(newSuname) {
    this._surname = newSuname;
  },

  get fullName() {
    return `${this._surname} ${this._name}`;
  },

  set fullName(newFullName) {
    const [surname, name, fatherName] = newFullName.split(" ");
    console.log({newFullName, surname, name, fatherName});
    this._name = name;
    this._surname = surname;
  }

};

user.name = "Іван";
user.surname = "Котляревський";

user.fullName = "Українка Леся";

console.log(user.fullName, user.name, user.surname);


/*
Вам потрапив в руки код об'єкта User, який зберігає ім'я і прізвище в властивості this.fullName:
Ім'я та прізвище завжди розділяються пропуском.


 */
// function User(fullName) {
//   this.fullName = fullName;
// }

// const vasya = new User("Іван Котляревський");

/*
Зробіть, щоб були доступні властивості firstName і lastName, причому не тільки на читання, але і на запис, ось так:
*/

// const vasya = new User("Іван Котляревський");

// читання firstName/lastName
// alert( vasya.firstName ); // Іван
// alert( vasya.lastName ); // Котляревський

// запис в lastName
// vasya.lastName = 'Франко';

// alert( vasya.fullName ); // Іван Франко
