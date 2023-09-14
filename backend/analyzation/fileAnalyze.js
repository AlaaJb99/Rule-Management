const logAnalyze = require('./logAnalyze');

function fileAnalyze(logs, rules, file_analyzed) {
    var process = [];

    if (file_analyzed) {
        process = file_analyzed.process;
    }

    try {
        for (var i = 0; i < logs.length; i++) {
            if (file_analyzed) {
                var exists = false;
                console.log("check ra existance");
                console.log(logs[i]._id);
                for (var obj of process) {
                    const objId = obj._id;
                    if (objId.equals(logs[i]._id)) {
                        //this raw analyzed before
                        console.log("Exists");
                        exists = true;
                    }
                }
                if (!exists) {
                    var result = logAnalyze(logs[i], rules);
                    if (result.rule !== "Unclassified")
                        process.push(result);
                }
            } else {
                var result = logAnalyze(logs[i], rules);
                if (result.rule !== "Unclassified")
                    process.push(result);
            }
        }
    } catch (err) {
        console.error('Error:', err);
    }
    return process;
}

module.exports = fileAnalyze;