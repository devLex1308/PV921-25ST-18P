class Animal {

  constructor(props) {
    // super(props);
  }

  method() {
    console.log("First method");
  }

  method2(...arg) {
    console.log("Second method", ...arg);
  }

  static pi = 8;

}


class User {
  constructor(name = '', age = '') {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

}


const animal = new Animal();

const user1 = new User("Іван Франко", 60);
const user2 = new User("Леся Українка", 17);
const user3 = new User("Тарас Шевченко", 47);

const users = [
  user1,
  user2,
  user3,
];


animal.method();
animal.method2(4,6, false, "Test");

console.log(users);