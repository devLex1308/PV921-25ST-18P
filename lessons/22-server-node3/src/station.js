
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
    <div>
      <input id="addStation" type="name" value="">
      <button onclick="createStation();">ок</button>
    </div>
    <script src="/js/stations.js"></script>
  `;
  Object.keys(store.stations).forEach(stationId => {
  	s +=`
      <li id="station-${stationId}">
        <a href="stations/${stationId}">${store.stations[stationId].name}</a>
        <button onclick="deleteStation(${stationId});">X</button>
      </li>`;
  });

  return `
  <ul id="stations">
  	${s}
  </ul>`;
}

module.exports = {
  getStationHtml
}