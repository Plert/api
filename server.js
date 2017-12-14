var http = require('http');
var url = require('url');
var UserDb = require('./ItemData.js');

http.createServer(function (req, res) {
  var myItemDb = new ItemDb();

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  var q = url.parse(req.url, true);

  if (q.pathname == '/list') {
    if (typeof q.query.itemId === 'undefined') {
      for (var i=0; i<myItemDb.length(); i++) {
        res.write(myItemDb.message(myItemDb.get(i)) + '\n');
      }
    }
    else {
      res.write(myItemDb.find(q.query.itemId) + '\n');
    }
  }
  else {
     res.write('ERR\n');
  }

  res.end();
}).listen(8080);
