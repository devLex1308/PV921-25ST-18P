
function getStationHtml(routArr, store) {
  // console.log(routArr[1], routArr[2], store.stations[routArr[2]]);
  if (routArr[1] && routArr[2]) {
    return `
      <a href="/stations">назад</a>
      <br>
      Зупинка з ідентифікатором ${routArr[2]} ${store.stations[routArr[2]].name}
      `;
  }
  let s = `
    <form action="/stations" onclick="createStation();" method="post">
      <input type="name" value="">
      <input type="submit">
    </form>
    <script>
      async function createStation() {
      const res = await fetch("/", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify({station: "Teатральна"}) // body data type must match "Content-Type" header
      });
      return await response.json(); // parse
    }
    </script>
  `;
  Object.keys(store.stations).forEach(stationId => {
  	s +=`
      <li>
        <a href="stations/${stationId}">${store.stations[stationId].name}</a>
      </li>`;
  });

  return `
  <ul>
  	${s}
  </ul>`;
}

module.exports = {
  getStationHtml
}