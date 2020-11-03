
function getStationHtml(routArr, store) {
  if (routArr[1] && routArr[2]) {
    return `Зупинка з ідентифікатором ${routArr[2]}`
  }

  return `Список всіх зупинок`
}

module.exports = {
  getStationHtml
}