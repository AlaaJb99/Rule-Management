var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Customer = require('../modules/RuleDB.js');

router.get('/Rules', function (req, res) {
    // get all the rules from the rules collection in the data base 
    Rule.find({}, function (err, rules) {
        if (err) {

            return res.status(500).json({ error: "An error occurred while fetching rules." });
        }
        res.json(rules); // return the rules in json formate 
    }); 
});

router.get('/Logs', function (req, res) {
    // get all the Logs from the log 
    Rule.find({}, function (err, Logs) {
        if (err) {

            return res.status(500).json({ error: "An error occurred while fetching rules." });
        }
        res.json(rules); // return the rules in json formate 
    }); 
});
module.exports = router;
