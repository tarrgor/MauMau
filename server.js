var express = require('express');
var path = require('path');

var app = express();

var staticPath = path.resolve(__dirname + '/www');
app.use(express.static(staticPath));

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log('Server started.');
});


