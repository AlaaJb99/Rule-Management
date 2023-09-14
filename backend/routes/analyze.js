var express = require('express');
var router = express.Router();
const analyze = require('../analyzation/analyze');
const { Worker } = require('worker_threads');


router.post('/', function (req, res) {
    //get the file naem and the selected rules from the request body
    // selectedRules:
    //selectedDocument
    const rules = req.body.selectedRules;
    const file = req.body.selectedDocument;

    // Extract the necessary request information
    const requestInfo = {
        method: req.method,
        url: req.url,
        headers: req.headers,
        // Add other necessary properties here as needed
    };

    // Include the req.user object in the data
    const userData = {
        user: req.user,
        requestInfo: requestInfo,
    };

    // Create a new worker thread to handle the analysis
    const worker = new Worker('./routes/analyzeWorker.js', {
        workerData: { rules, file, userData },
    });

    // Listen for messages from the worker thread
    worker.on('message', (analyzed) => {
        res.json(analyzed);
    });

    // Listen for errors from the worker thread
    worker.on('error', (err) => {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    });

    // analyze(req, rules, file, (err, analyzed) => {
    //     if (err) {
    //         res.status(500).json({ error: 'Internal server error' });
    //     } else {
    //         res.json(analyzed);
    //     }
    // });
});

module.exports = router;