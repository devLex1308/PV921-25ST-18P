
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
    <form>
      <input type="name" value="">
      <button onclick="createStation();">ок</button>
    </form>
    <script src="stations.js"></script>
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