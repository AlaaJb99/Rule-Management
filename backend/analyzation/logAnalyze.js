const rulesAnalyze = require('./rulesAnalyze');
const rankAnalyze = require('./rulesAnalyze');

function logAnalyze(log, rules) {//addd the raw in the (raw)
    console.log("logAnalyze function");
    var log = {
        rule: null,
        rank: null,
        message: log.info,
        date: log.date
    }

    log = rulesAnalyze(log, rules);
    //here call the rankAnalyze
    log = rankAnalyze(log, rules);

    return log;
}

module.exports = logAnalyze;