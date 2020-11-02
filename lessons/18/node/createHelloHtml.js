function createHelloHtml(name) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
  <title>Привіт ${name}</title>
</head>
<link href="style.css" rel="stylesheet">
<script type="text/javascript" src="tools.js"></script>
<body>
  <h1>Привіт ${name}</h1>
</body>
</html>`;
}

module.exports = {
  createHelloHtml,
}