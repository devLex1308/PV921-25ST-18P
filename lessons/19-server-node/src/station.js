
function getStationHtml(routArr, store) {
  if (routArr[1] && routArr[2]) {
    return `Зупинка з ідентифікатором ${routArr[2]} ${store.stations[routArr[2]]}`;
  }
  let s = ``;
  for (let i = 1; i <= 7; i++)
  {
  	s +=`<li>  		<a href="stations/${i}">${store.stations[i]}</a>  	</li>`;
  }
  return `
  <ul>
  	${s}
  </ul>`;
}

module.exports = {
  getStationHtml
}