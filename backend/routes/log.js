var express = require('express');
var router = express.Router();

var Log = require('../modules/logDB');


router.get('/', function (req, res) {
    // get all the Logs from the log 
    Rule.find({}, function (err, Logs) {
        if (err) {

            return res.status(500).json({ error: "An error occurred while fetching rules." });
        }
        res.json(rules); // return the rules in json formate 
    });
});

module.exports = router;