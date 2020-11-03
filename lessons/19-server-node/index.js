const http = require('http');
const { getTemplate } = require('./template.js');
const { store } = require('./store.js');

const port = 3000;

console.log(store);

//stations - виводимо всі станції
//stations/54 - виводимо станцію з id



const requestHandler = (request, response) => {

  const ursArr = request.url.split("/");
  let data = "Not found";
  let status = 404;
  console.log(ursArr);
  switch (ursArr[1]) {
    case 'stations': {
      data = "Список всіх станцій";
      status = 200;
    }

  }

  // console.log(request.url);
  response.statusCode = status;
  response.end(getTemplate(data));
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});