function getTemplate(html) {
  return `<!DOCTYPE html>
<html>
<head>
  <link href="/style.css" rel="stylesheet">
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