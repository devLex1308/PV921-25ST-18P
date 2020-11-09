const fs = require('fs');
const { store } = require("./store.js");

console.log({store});

fs.writeFile("db.txt", JSON.stringify(store), function(err) {
  if (err) {
    console.log(err);
  }
});

