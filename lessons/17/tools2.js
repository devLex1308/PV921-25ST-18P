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
  _name;
  _age;

  _salary = 5000;

  #privateVariable = "Ця змінна не доступна ззовні";

  constructor(name = '', age = '') {
    this._name = name;
    this._age = age;

    console.log("constructor", this.#privateVariable);
  }

  getSalary() {
    return this._salary;
  }

  // getName() {
  //   return this.name;
  // }

  // getAge() {
  //   return this.age;
  // }

  set name(name) {
    this._name = name;
  }

  set age(age) {
    this._age = age;
  }

  static compare(userA, userB) {
    if (userA._age > userB._age) {
      return 1;
    }

    if (userA._age < userB._age) {
      return -1;
    }
    return 0
  }
}


class Admin extends User {

  constructor(name = '', age = '') {
    super(name, -1);
  }

  seeAnyUsers() {
    console.log("Я бачу все");
  }

  getSalary() {
    const s = super.getSalary();
    return 2 * s;
  }
}


const animal = new Animal();

const user1 = new User("Іван Франко", 60);
const user2 = new User("Леся Українка", 17);
const user3 = new User("Тарас Шевченко", 47);
const user4 = new Admin("Марко Вовчок", 18);

user3.name = "Андрій Шевченко";

const users = [
  user1,
  user2,
  user3,
  user4
].sort(User.compare);



animal.method();
animal.method2(4,6, false, "Test");

console.log(user1._name);
console.log(users);
console.log(user4.getSalary());
// console.log(user3.seeAnyUsers());
// console.log(user1.privateVariable);