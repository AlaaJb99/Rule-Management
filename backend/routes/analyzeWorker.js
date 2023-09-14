// routes/analyzeWorker.js

const { parentPort, workerData } = require('worker_threads');
const analyze = require('../analyzation/analyze');

const { rules, file, userData  } = workerData;
const { user, requestInfo } = userData;

analyze(user , rules, file, (err, analyzed) => {
    if (err) {
        parentPort.postMessage({ error: 'Internal server error' });
    } else {
        parentPort.postMessage(analyzed);
    }
});