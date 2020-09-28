// let obj = {};

// const type = typeof obj;
// const typeNull = typeof null;

// if (obj) {
//   console.log({obj});
// }

// if (null) {
//   console.log(null);
// }


let obj = {
  name: "Олександр",
  age: 31,
};

obj.suname = "Павлюк";

obj['hasDog'] = false;
obj['has dog'] = null;

obj.model = "DAF";

const key = 'name';

console.log({obj}, obj.name, obj[key], obj['has dog']);

/*
Створити об'єкт автобус який має властивості:
марка, кількість мість для сидіння, для стояння і
потужність двигуна
 */

const bus = {
  model: "Ikarus 256",
  countSit: 51,
  countStand: 101,
  power: 100,
};

const bus2 = bus;

let bus3 = {};

Object.assign(bus3, bus, obj);

bus3.model = "Neoplane";


const bus4 = {
  ...bus,
};

bus4['model'] = "DAF";

console.log({bus, bus2, bus3, bus4});

/*
Додати до об'єкту функцію - sayHi яка буде приймати
аргументом ім'я і виводити в консоль "Привіт {введене ім'я}"
 */

function sayHi(name) {
  console.log(`Привіт ${name}`);
}

bus.sayHi = sayHi;

// bus.sayHi("Вася");

const bus5 = {
  ...bus,
  sayHi: function (name) {
    console.log(`Привіт ${name} копія`);
  },
}

bus5.sayHi("Микола");

/*

  Створити об'єкт який має 2 метода plus, minus і
  властивість count яка по замовчуванню рівна 0

 */


const counter = {
  count: 0,
  plus: function() {
    this.count = this.count + 1;
    console.log("plus", this.count);
  },
  minus: function() {
    this.count = this.count - 1;
    console.log("minus", this.count);
  }
}

counter.plus();
counter.plus();
counter.minus();

/*
Модифікувати об'єкт counter так щоб методи plus та minus
змінювали значення властивості count на введене число плюс додати
елементарну перевірку чи це чило, якщо не чивло змінну не
змінювати. Додати метод showCount який буде повертати значення
змінної count

 */


function counterSave() {
  let count = 0;

  function add() {
    count++;
  }

  function minus() {
    count--;
  }

  function show() {
    console.log(`count=${count}`)
  }

  return {
    add,
    minus,
    show,
    name: "My function",
  }

}

const counter2 = counterSave();

counter2.add();
counter2.add();
counter2.add();
counter2.add();
counter2.minus();
counter2.show();