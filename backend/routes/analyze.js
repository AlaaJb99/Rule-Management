var express = require('express');
var router = express.Router();
const analyze = require('../analyzation/analyze');

router.post('/', function (req, res) {
    //get the file naem and the selected rules from the request body
    // selectedRules:
    //selectedDocument
    const rules = req.body.selectedRules;
    const file = req.body.selectedDocument;
    analyze(rules, file, (err, analyzed) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(analyzed);
        }
    });
});



module.exports = router;