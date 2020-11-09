const fs = require('fs');
const fileName = "./users.txt";

let storage = {};

fs.readFile(fileName, "utf-8", function(err, data) {

  const [a1, a2, user] = process.argv;
  console.log(`Привіт ${user}`);

  if (err) {
    // console.log(err);
    storage.users = [];
    // return;
  } else {
    storage = JSON.parse(data);
  }

  storage.users.forEach(item => {
    console.log(`Нас відвідав(ла) ${item}`)
  });

  storage.users.push(user);

  fs.writeFile(fileName, JSON.stringify(storage), function(err, data2) {
    if (err) {
      console.log(err);
      return;
    }
    // console.log({data2});
  });

  // console.log({data});
});

