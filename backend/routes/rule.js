var express = require('express');
var router = express.Router();
var Rule = require('../modules/rulesDB');

router.get('/rules', function (req, res) {
    // get all the rules from the rules collection in the data base 
    Rule.find({}, function (err, rules) {
        if (err) {

            return res.status(500).json({ error: "An error occurred while fetching rules." });
        }
        res.json(rules); // return the rules in json formate 
    });
});

router.post('/addRule', function (req, res) {
    var newRule = new Rule({
        rule_name: req.body.name,
        keywords: req.body.keywords,
    });

    newRule.save(function (err) {
        if (err) {
            return res.status(500).json({ error: "An error occurred while adding the rule." });
        }
        res.status(201).json({ message: "Rule added successfully." });
    });
});

module.exports = router;
