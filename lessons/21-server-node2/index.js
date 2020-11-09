const http = require('http');
const fs = require('fs');
const { getTemplate } = require('./template.js');
const { getStationHtml } = require('./src/station.js');
const { getRoutsHtml } = require('./src/routs.js');
const {
  getStore,
  saveStore,
} = require('./storeActions.js');

const port = 3000;

// console.log(store);

//stations - виводимо всі станції
//stations/54 - виводимо станцію з id



const requestHandler = (request, response) => {

  getStore(function (err, store) {

    if (err) {
      console.log({err});
      status = 500;
      html = "Помилка підключення до бази даних!";
    }

    const ursArr = request.url.split("/");
    let html = "Not found";
    let status = 404;


    console.log(ursArr);
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

    } else {
      response.statusCode = status;
      response.end(getTemplate(html));
    }
  })

}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});