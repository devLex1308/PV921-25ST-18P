const http = require('http');
const { createHelloHtml } = require("./createHelloHtml.js");
const port = 3000;

function getVariablesFromUrl(url) {
  const res = {};

  if (typeof url == 'string') {
    const arrUrl = url.split("?");
    if (arrUrl[1]) {
      const arrValiables = arrUrl[1].split("&");
      return arrValiables.reduce((acc, variable) => {
        const [k, v] = variable.split("=");

        return {
          ...acc,
          [k]: v,
        }
      }, {});
    }
  }

  return res;
}

// console.log(getVariablesFromUrl("http://localhost:3000/?name=Ira&age=18"));

const requestHandler = (request, response) => {

  const {name = '' } = getVariablesFromUrl(request.url)
  response.end(createHelloHtml(name));
}

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});