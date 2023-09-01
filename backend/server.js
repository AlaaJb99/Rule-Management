var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var cors = require('cors')

app.use(cors());


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.array());

var log = require('./routes/log.js');
app.use('/log', log);

var rule = require('./routes/rule.js');
app.use('/rule', rule);

var analyze = require('./routes/analyze.js');
app.use('/analyze', analyze);

app.listen(8080);