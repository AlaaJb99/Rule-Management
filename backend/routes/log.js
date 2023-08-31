var express = require('express');
var router = express.Router();
const { getFiles } = require('../database_utils/file_utils');

router.get('/', function (req, res) {
    // get all the Logs from the log 
    getFiles((err, collectionNames) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            //get all the files
            res.json(collectionNames);
        }
    });
});

module.exports = router;