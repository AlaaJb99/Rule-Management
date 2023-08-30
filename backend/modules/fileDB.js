var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/logAnalyzer');

var fileSchema = mongoose.Schema({
    user_name: String,
    file_date: String,
    date: Date,
    info: String
});

// var Rule = mongoose.model("Rule", ruleSchema, 'rules');

module.exports = fileSchema;