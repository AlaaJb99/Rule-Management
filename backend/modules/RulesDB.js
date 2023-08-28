var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/logAnalyzer');

var ruleSchema = mongoose.Schema({
    rule_name: String,
    keywords :[]
});

var Rule = mongoose.model("Rule", ruleSchema, 'rules');

module.exports = Rule;