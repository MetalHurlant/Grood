var express = require('express');

var webServer = express();
webServer.use(express.static(__dirname+'/public/'));
webServer.listen(3000, function() { console.log('Example app listening on port 3000!'); });
