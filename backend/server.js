var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.array());


var log = require('./routes/DataHandling.js');
app.use('/log', log);

app.listen(8080);