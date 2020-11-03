function getTemplate(html) {
  return `<!DOCTYPE html>
<html>
<head>
  <title>Сервер на Node js</title>
  <meta charset="UTF-8">
</head>
<body>
  ${html}
</body>
</html>`
}

module.exports = {
  getTemplate
}