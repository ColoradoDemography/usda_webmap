var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:4545
app.get('/', function(req, res) {
    res.sendFile('/index.html'));
});

app.listen(4545);
