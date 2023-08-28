var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/logAnalyzer');

var logSchema = mongoose.Schema({
    rule_name: String,
    keywords :[]
});

var Log = mongoose.model("Rule", logSchema, 'log_analyzation');

module.exports = Log;