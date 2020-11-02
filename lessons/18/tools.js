const s1 = Symbol("start");
const s2 = Symbol("start");

const age = "50";

const user = {
  name: "Шевченко Тарас",
  [s1]: 100,
};

const userClone = {
  ...user,
}


console.log({user, userClone});
console.log(user[s1]);