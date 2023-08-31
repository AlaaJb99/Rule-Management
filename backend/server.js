var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.array());

var log = require('./routes/log.js');
app.use('/log', log);

var rule = require('./routes/rule.js');
app.use('/rule', rule);

var log = require('./routes/analyze.js');
app.use('/analyze', log);

app.listen(8080);