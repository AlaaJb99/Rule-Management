var Log = require('../modules/logDB.js');
const { getRulesByName } = require('../utils/rules_utils.js');
const { getLogs } = require('../utils/file_utils.js');
var fileAnalyze = require('./fileAnalyze.js');

const checkErrorsForDispatcher = require('./checkDispatcherNeed');
const sendToDispatcher = require('./sendToDispatcher');

async function analyze(req, rules, file, callback) {
    //get the file data
    const selectedRules = await getRulesByName(rules);
    //console.log(selectedRules);
    const logs = await getLogs(file);
    //console.log(logs);
    //const selectedFile = await getFileLogs(file);


    //check if file in the database
    var file_analyzed = await Log.findOne({ file_name: file });

    var res_analyzed;// = fileAnalyze(logs, selectedRules);
    //console.log(res_analyzed);

    if (!file_analyzed) {
        res_analyzed = fileAnalyze(logs, selectedRules, null);
        // save in DB log_analyzation collection new document for the analyzed file
        const new_file = new Log({
            file_name: file,
            user_name: logs[0].user_name,
            file_date: logs[0].file_date,
            process: res_analyzed
        });

        await new_file.save()
            .then(result => {
                console.log('Log entry saved:', result._id);
                // call the function to check if dispatcher needed
                const [res_condition, abnormalErrors] = checkErrorsForDispatcher(res_analyzed);
                console.log(res_condition);
                if (res_condition) {
                    console.log("Need to send to dispatcher the :", abnormalErrors);
                    sendToDispatcher(abnormalErrors, result, req);
                }
                callback(null, res_analyzed);
            })
            .catch(err => {
                console.error('Error happend', err);
                callback(err, null);
            });
    } else {
        res_analyzed = fileAnalyze(logs, selectedRules, file_analyzed);
        //file in the database
        file_analyzed.process = res_analyzed;
        var resultRules = getTheLogsRuls(rules, file_analyzed.process);
        await file_analyzed.save().then(result => {
            console.log('Log entry saved:', result._id);
            // call the function to check if dispatcher needed
            const [res_condition, abnormalErrors] = checkErrorsForDispatcher(res_analyzed);
            console.log(res_condition);
            if (res_condition) {
                //console.log("Need to send to dispatcher the :", abnormalErrors);
                sendToDispatcher(abnormalErrors, file_analyzed, req);
            }
            callback(null, resultRules);
        })
            .catch(err => {
                console.error('Error happend', err);
                callback(err, null);
            });
    }

}

function getTheLogsRuls(rules, process) {
    var result = [];
    for (const obj of process) {
        var exist = false;
        for (const rule of rules) {
            if (obj.rule === rule) {
                exist = true;
            }
        }
        if (exist) {
            result.push(obj);
        }
    }
    return result;
}

module.exports = analyze;

