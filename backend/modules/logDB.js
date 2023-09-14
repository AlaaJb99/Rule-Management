var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/logAnalyzer');

var rawSchema = mongoose.Schema({
    rule: String,
    rank: Number,
    message: String,
    date: Date
});

var logSchema = mongoose.Schema({
    file_name: String,
    user_name: String,
    file_date: Date,
    process: [rawSchema]
});

var Log = mongoose.model("Log", logSchema, 'log_analyzation');

module.exports = Log;