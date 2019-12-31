var express = require('express'),
  app = express(),
  port = 3000;

app.use(express.static('public'));

var routes = require("./apioutes"
routes(app)
if (! module.parent) {
  app.listen(port);
}

module.exports = app

console.log("Server running on port " + port
