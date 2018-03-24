var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const fs = require('fs')

var indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname + "/dist", './index.html'), 'utf-8')
})()

app = express();
app.use(serveStatic(__dirname + "/dist"));

app.get('*', (req, res) => {
  res.write(indexHTML)
  res.end()
})

var port = process.env.PORT || 3000;
app.listen(port);
console.log('server started '+ port);
