var Log = require('../modules/logDB.js');
var fileAnalyze = require('./fileAnalyze.js');

function analyze(collection_arr) {

    for (var log_file of collection_arr) {
        var res_analyzed = fileAnalyze(log_file);
        // save in DB log_analyzation collection new document for the analyzed file
        const new_file = new Log({
            file_name: log_file.file_name,
            user_name: res_analyzed.user_name,
            file_date: res_analyzed.file_date,
            process: res_analyzed.process
        });

        new_file.save()
            .then(result => {
                console.log('Log entry saved:', result._id);
            })
            .catch(err => {
                console.error('Error happend', err);
            });
    }
}

module.exports = analyze;

