var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var cors = require('cors')
app.use(cors());


const testReqUser = require("./middleware/testReqUser");
app.use(testReqUser);



app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.array());

app.post('/dispatcher', (req, res)=>{    
    console.log('body is ',req.body);
});

var log = require('./routes/log.js');
app.use('/log', log);

var rule = require('./routes/rule.js');
app.use('/rule', rule);

var analyze = require('./routes/analyze.js');
app.use('/analyze', analyze);

app.listen(8080);