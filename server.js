var express = require('express')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var config = require('./webpack.config')

var app = express()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Your server is listening on port %d (http://localhost:%d)', port, port)
  }
})
