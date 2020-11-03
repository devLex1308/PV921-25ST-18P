const fs = require('fs');
const fileName = "./db.txt";

function getStore(f) {
  fs.readFile(fileName, "utf-8", function(err, data) {
    if (err) {
      f(err, {});
      return;
    }
    store = JSON.parse(data);
    f(false, store);
  });
}

function saveStore(store, f) {
  fs.writeFile(fileName, JSON.stringify(store), function(err, data2) {
    if (err) {
      f(err);
      return;
    }
    f(false);
  });
}

module.exports = {
  getStore,
  saveStore,
}

