var express = require('express');
var router = express.Router();
const { getRules } = require('../database_utils/rules_utils');

router.get('/', function (req, res) {
    getRules((err, rules) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(rules);
        }
    });
});


// router.post('/addRule', function (req, res) {
//     var newRule = new Rule({
//         rule_name: req.body.name,
//         keywords: req.body.keywords,
//     });

//     newRule.save(function (err) {
//         if (err) {
//             return res.status(500).json({ error: "An error occurred while adding the rule." });
//         }
//         res.status(201).json({ message: "Rule added successfully." });
//     });
// });

module.exports = router;
