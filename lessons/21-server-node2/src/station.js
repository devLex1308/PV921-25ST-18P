
function getStationHtml(routArr, store) {

  if (routArr[1] && routArr[2]) {
    return `
      <a href="/stations">назад</a>
      <br>
      Зупинка з ідентифікатором ${routArr[2]} ${store.stations[routArr[2]].name}
      `;
  }
  let s = ``;
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