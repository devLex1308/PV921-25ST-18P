
function getRoutsHtml(routArr, store) {

  if (routArr[1] && routArr[2]) {
    return `
      <a href="/rout">назад</a>
      <br>
      Маршрут з ідентифікатором ${routArr[2]} ${store.routs[routArr[2]].name}
      `;
  }
  let s = ``;
  Object.keys(store.routs).forEach(routsId => {
  	s +=`
      <li>
        <a href="rout/${routsId}">${store.routs[routsId].name}</a>
      </li>`;
  });

  return `
  <ul>
  	${s}
  </ul>`;
}

module.exports = {
  getRoutsHtml
}