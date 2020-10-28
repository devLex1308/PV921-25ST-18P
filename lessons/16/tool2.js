/*

Створити початковий клас Animal, його мають наслідувати Bird та
Fish, також має бути клас Predator.

Реалізувати таких тварин як sparrow, crucian(карась), shark lion, penguin

Всі тварити повинні мати імена
Всі тваринки повині могти їсти і спати.
Птахи повинні вміти літати, риби плавати
Хижаки полювати

 */

function Animal(name = '') {
  this.type = 'тваринка';
  this.name = name;
  this.init = function (name = '') {
    this.name = name;
  }

  this.sleep = function() {
    console.log(`${this.type} ${this.name} спить!`);
  }

  this.eat = function() {
    console.log(`${this.type} ${this.name} їсть!`);
  }
}

function Bird (name = "") {
  this.init(name);
  this.type = 'пташка';

  this.fly = function() {
    console.log(`${this.type} ${this.name} летить!`);
  }
}

Bird.prototype = new Animal();

function Fish (name = "") {
  this.init(name);
  this.type = 'рибка';

  this.swim = function() {
    console.log(`${this.type} ${this.name} летить!`);
  }
}


Bird.prototype = new Animal();

function Predator(name = "") {
  this.init(name);
}

function HelpAnimal() {

}

HelpAnimal.prototype = new Animal();

const sparrow = new Bird("Капітан Джек");

sparrow.sleep();
sparrow.eat();
sparrow.fly();


// const crucian = new Fish("Nemo");
// const shark =
// const lion =
// const penguin =
