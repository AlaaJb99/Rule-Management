var express = require('express');
var router = express.Router();

var Log = require('../models/logDB');



router.get('/', function (req, res) {
    Log.find({}).then(function (obj) {
        console.log(obj);
        res.json(obj);
    });
});
