var Rule = require('../modules/rulesDB');
const rulesArray = require('../analyzation/rules');

function getRules(callback) {
    Rule.find({}, (err, rules) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rules);
        }
    });
}

function getRulesByName(ruleNames) {
    return new Promise((resolve, reject) => {
        
        Rule.find({ rule_name: { $in: ruleNames } }, (err, rules) => {
            if (err) {
                reject(err);
            } else {
                resolve(rules);
            }
        });
    });
}

function addRule() {
    Rule.insertMany(rulesArray);
}

module.exports = {
    getRules,
    getRulesByName,
    addRule
};