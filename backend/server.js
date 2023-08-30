var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const scheduledFunctions = require('./scheduler');


const fileAnalyze = require('./analyzation/fileAnalyze.js');


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.array());

const process = fileAnalyze("file_log1");
console.log("Process = " + process);



// ADD CALL to execute your function(s)
scheduledFunctions.initScheduledJobs();

var log = require('./routes/log.js');
app.use('/log', log);

var rule = require('./routes/rule.js');
app.use('/rule', rule);

app.listen(8080);