process.title = 'gridcommunauty-web-client';
var express = require('express');
var fakeapi = require('./fakeapi.js')
var Eolienne = require('./eolienne.js')


var webServer = express();
webServer.use(express.static(__dirname+'/public/'));
webServer.use('/api', fakeapi);
var eolienne = new Eolienne();

webServer.listen(3000, function() { console.log('Example app listening on port 3000!'); });
