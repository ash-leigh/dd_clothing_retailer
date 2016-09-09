var express = require('express');
var app = express();
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/api/stock', function(req, res){
  res.sendFile(path.join(__dirname + '/client/src/db/sampleProducts.json'));
});

app.get('/api/vouchers', function(req, res){
  res.sendFile(path.join(__dirname + '/client/src/db/sampleVouchers.json'));
});

app.use(express.static('client/build'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});