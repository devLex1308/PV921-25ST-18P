const http = require('http');
const fs = require('fs');
const { getTemplate } = require('./template.js');
const { getStationHtml } = require('./src/station.js');
const { getRoutsHtml } = require('./src/routs.js');
const { getIndexHtml } = require('./src/index.js');
const {
  getStore,
  saveStore,
} = require('./storeActions.js');


function addStation(station, c) {
  getStore(function (err, store) {

    if (err) {
      console.log(err);
      return;
    }

    const { stations } = store;

    const keys = Object.keys(stations);

    const maxKey = Math.max(...keys);
    const newKey = maxKey + 1;

    stations[newKey] = { name: station };

    saveStore(store, function(err) {
      if (err) {
        c(err);
        return;
      }

      c(false);
    });
  });
}


const port = 3000;

// console.log(store);

//stations - виводимо всі станції
//stations/54 - виводимо станцію з id



const requestHandler = (request, response) => {

  const ursArr = request.url.split("/");
  let html = "Not found";
  let status = 404;

  if (request.method == 'POST') {
    let body = '';
    request.on('data', function (data) {

        console.log(data);
        body += data;
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
        if (body.length > 1e6) {
            // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
            request.connection.destroy();
        }
    });
    request.on('end', function () {
        console.log({body});

        const sendData = JSON.parse(body);

        console.log({sendData, r: ursArr[1]})
        // use POST
        switch (ursArr[1]) {
          case 'api': {
            addStation(sendData.station, function (err) {
              response.statusCode = 200;
              response.end();
            });
            return;
          }
        }

        response.statusCode = 200;
        response.end();
    });
    return;
  }

  if (ursArr[1].match(/.css$/)) {
    const filename = `./css/${ursArr[1]}`;
    fs.readFile(filename, "utf-8", function(err, data) {
      if (err) {
        console.log({filename, err});
        response.statusCode = 404;
        response.end();
        return;
      }
      response.setHeader('Content-Type', 'text/css');
      response.statusCode = 200;
      response.end(data);

    });
    return;
  } else if (ursArr[1].match(/.js$/)) {
    const filename = `./js/${ursArr[1]}`;
    fs.readFile(filename, "utf-8", function(err, data) {
      if (err) {
        console.log({filename, err});
        response.statusCode = 404;
        response.end();
        return;
      }
      response.setHeader('Content-Type', 'text/javascript');
      response.statusCode = 200;
      response.end(data);
    });
    return;
  }

  getStore(function (err, store) {

    if (err) {
      console.log({err});
      status = 500;
      html = "Помилка підключення до бази даних!";
    }

    switch (ursArr[1]) {
      case 'stations': {
        html = getStationHtml(ursArr, store);
        status = 200;
        break;
      }
      case 'rout': {
        html = getRoutsHtml(ursArr, store);
        status = 200;
        break;
      }
      case "" : {
        html = getIndexHtml(ursArr, store);
        status = 200;
        break;
      }
    }

    response.statusCode = status;
    response.end(getTemplate(html));
  })

}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});