const rulesAnalyze = require('./rulesAnalyze');
const rankAnalyze = require('./rankAnalyze');

function logAnalyze(logEntry, rules) {//addd the raw in the (raw)
    //console.log(logEntry);
    var log = {
        _id: logEntry._id,
        rule: null,
        rank: null,
        message: logEntry.info,
        date: logEntry.date
    }

    log = rulesAnalyze(log, rules);
    //here call the rankAnalyze
    log = rankAnalyze(log, rules);

    return log;
}

module.exports = logAnalyze;