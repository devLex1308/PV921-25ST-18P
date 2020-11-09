const {
  getStore,
  saveStore,
} = require('../storeActions.js');


function addStation(data, c) {
  getStore(function (err, store) {

    if (err) {
      console.log(err);
      return;
    }

    const { name } = data;

    const { stations } = store;

    const keys = Object.keys(stations);

    const maxKey = Math.max(...keys);
    const newKey = maxKey + 1;

    stations[newKey] = { name };

    saveStore(store, function(err) {
      if (err) {
        c(err);
        return;
      }

      c(false, {id: newKey});
    });
  });
}

function deleteStation(data, c) {
  getStore(function (err, store) {

    if (err) {
      console.log(err);
      return;
    }

    const { id } = data;
    const { stations } = store;

    if (stations[id]) {
      delete stations[id];
    }

    saveStore(store, function(err) {
      if (err) {
        c(err);
        return;
      }

      c(false, {id});
    });
  });
}

function editStation(data, c) {
  getStore(function (err, store) {

    if (err) {
      console.log(err);
      return;
    }

    const { id, name } = data;

    const { stations } = store;

    stations[id] = { name };

    saveStore(store, function(err) {
      if (err) {
        c(err);
        return;
      }

      c(false, {id: newKey});
    });
  });
}

module.exports = {
  addStation,
  deleteStation,
  editStation,
}