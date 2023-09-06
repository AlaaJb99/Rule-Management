var Log = require('../modules/logDB.js');
const { getRulesByName } = require('../database_utils/rules_utils');
const { getLogs } = require('../database_utils/file_utils');
var fileAnalyze = require('./fileAnalyze.js');

async function analyze(rules, file, callback) {
    //get the file data
    const selectedRules = await getRulesByName(rules);
    //console.log(selectedRules);
    const logs = await getLogs(file);
    //console.log(logs);
    //const selectedFile = await getFileLogs(file);


    var res_analyzed = fileAnalyze(logs, selectedRules);
    //console.log(res_analyzed);
    //check if file in the database
    const file_analyzed = await Log.findOne({ file_name: file });
    if (!file_analyzed) {
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
                callback(null, res_analyzed);
            })
            .catch(err => {
                console.error('Error happend', err);
                callback(err, null);
            });
    } else {
        //file in the database
        file_analyzed.process = res_analyzed;
        await file_analyzed.save().then(result => {
            console.log('Log entry saved:', result._id);
            callback(null, res_analyzed);
        })
            .catch(err => {
                console.error('Error happend', err);
                callback(err, null);
            });
    }

}

module.exports = analyze;

