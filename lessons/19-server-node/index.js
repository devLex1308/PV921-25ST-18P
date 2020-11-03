const http = require('http');
const { getTemplate } = require('./template.js');
const { store } = require('./store.js');
const { getStationHtml } = require('./src/station.js');

const port = 3000;

// console.log(store);

//stations - виводимо всі станції
//stations/54 - виводимо станцію з id



const requestHandler = (request, response) => {

  const ursArr = request.url.split("/");
  let html = "Not found";
  let status = 404;
  console.log(ursArr);
  switch (ursArr[1]) {
    case 'stations': {
      html = getStationHtml(ursArr, store);
      status = 200;
    }

  }

  // console.log(request.url);
  response.statusCode = status;
  response.end(getTemplate(html));
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});