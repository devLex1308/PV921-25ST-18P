const s1 = Symbol("start");
const s2 = Symbol("start");

const age = "50";

const user = {
  name: "Шевченко Тарас",
  [s1]: 100,
};


const userString = JSON.stringify(user);

const userClone = {
  ...user,
}

const s3 = Symbol.for("global symbol");
const s4 = Symbol.for("global symbol");
const s5 = Symbol.for("global symbol 5");


console.log({user, userClone, s3}, s3 == s4, s3 == s5);
console.log(user[Symbol("start")]);

// alert(userString);

try {
  console.log(window);

} catch (e) {

}