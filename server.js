var express = require('express');
var app = express();

app.use(express.static(__dirname + "/"));

app.all('/*', function(req, res, next) {
  res.sendFile('/index.html', { root: __dirname });
});

app.listen(process.env.PORT || 3000);
