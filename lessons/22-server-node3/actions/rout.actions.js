const {
  getStore,
  saveStore,
} = require('../storeActions.js');


function addRout(data, c) {
  getStore(function (err, store) {

    if (err) {
      console.log(err);
      return;
    }

    const { name, number } = data;
    const { routs } = store;

    routs[number] = {
      name,
      type: "bus",
      waybill: [],
      startTime : [],
    };

    saveStore(store, function(err) {
      if (err) {
        c(err);
        return;
      }

      c(false, {id: number});
    });
  });
}

function deleteRout(data, c) {
  getStore(function (err, store) {

    if (err) {
      console.log(err);
      return;
    }

    const { id } = data;
    const { routs } = store;
    // console.log({id}, routs);
    if (routs[id]) {
      delete routs[id];
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

function editRout(data, c) {
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

      c(false, {id});
    });
  });
}

module.exports = {
  addRout,
  deleteRout,
  editRout,
}