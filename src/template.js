function makeHtmlTemplate(array) {
  const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Team</title>
</head>
<body>
  <header class="header">My Team</header>
  <div id="employees">
  ${array.join("")}
  </div>
</body>
</html>`;
  return htmlTemplate;
}
module.exports = makeHtmlTemplate;
