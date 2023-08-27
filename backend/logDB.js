var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/logAnalyzer');

var logSchema = mongoose.Schema({
    file_name: String,
    process: [{}]
});

var Log = mongoose.model("Log", logSchema, 'log_analyzation');

module.exports = Log;