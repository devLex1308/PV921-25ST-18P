

const pi = Math.PI;

const myMath = {
  PI: 3.14,
}

console.log(pi);

myMath.PI = 5;
Math.PI = 5;

function getLengthByRadius(r) {
  return 2 * Math.PI * r;
}



console.log(getLengthByRadius(10));
console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

let user = {
  // name: "John",
  surname: "Smith"
};

Object.defineProperty(user, "name", {
  value: "John",
  writable: false,
  enumerable: true,
  configurable: false,
});

delete user.name;
delete Math.PI;

// user.name = "Іван";

for (key in user) {
  console.log({key});
}


let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

const userCopy = {
  ...user
}

delete clone.name;

clone.name = "";

const userCopy2 = Object.assign({}, user);

console.log({ user, userCopy, userCopy2, clone, pi: Math.PI });
