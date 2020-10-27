const animal = {
  eats: true,
  getEats: function () {
    return this.eats;
  }
};

const rabbit = {
  jumps: true,
};


const bird = {

  singSong: true,
  test: {
    a: 2,
    b: 3,
  },

  get singSong() {
    // return this.singSong;
  },

  fly: function () {
    console.log("Я можу літати!");
    return 'Політ';
  }
}

bird.__proto__ = animal;

const fish = {
  swim: function () {
    console.log("Я можу плавати!");
  }
}

fish.__proto__ = animal;

const predator = {
  hunting: function () {
    console.log("Ідем на полювання!");
  }
}

predator.__proto__ = animal;

rabbit.__proto__ = animal;

const sparrow = {};
sparrow.__proto__ = bird;

// sparrow.__proto__.eats = 5;

// animal.__proto__ = sparrow;

// const sparrow2 = {
//   ...sparrow
// };

let sparrow2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(sparrow));

// console.log(
//   sparrow,
//   sparrow.eats,
//   sparrow.fly(), {animal}, {sparrow2}, sparrow2.eats);

rabbit.eats = false;

const eagle = {
  name: "Kesha" ,
  __proto__: sparrow
};

// eagle.__proto__ = sparrow;

const keys = Object.keys(eagle);

const eagle2 = {};

for (key in eagle) {
  eagle2[key] = eagle[key];
}
  // console.log(key);

eagle2.test.a = "Не кеша";


function User(name = '', suname = '') {
  this.name = name;
  this.suname = suname;

  this.init = function(name = '', suname = '') {
    this.name = name;
    this.suname = suname;
  }

  this.getFullName = function() {
    return `${this.name} ${this.suname}`;
  }
}

const user = new User("Леся", "Українка");

user.init("Тарас", "Шевченко");

function Admin(name = '', suname = '') {
  this.init(name, suname);
  this.isAdmin  = true;
}

Admin.prototype = new User();

const admin = new Admin("Ярослав", "Мудрий");

console.log(user.getFullName(), admin.getFullName());



// console.log({ eagle, eagle2 }, eagle.test.c);


// console.log({animal, rabbit}, animal.getEats(), rabbit.getEats());



// for (k in rabbit) {
//   console.log(k);
// }

// console.log({rabbit});

/*

Object.keys(obj) / Object.values(obj) / Object.entries(obj) – возвращают массив всех перечисляемых собственных строковых ключей/значений/пар ключ-значение.
Object.getOwnPropertySymbols(obj) – возвращает массив всех собственных символьных ключей.
Object.getOwnPropertyNames(obj) – возвращает массив всех собственных строковых ключей.
Reflect.ownKeys(obj) – возвращает массив всех собственных ключей.
obj.hasOwnProperty(key): возвращает true, если у obj есть собственное (не унаследованное) свойство с именем key.

 */
