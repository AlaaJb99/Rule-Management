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

function addRule() {
    Rule.insertMany(rulesArray);
}

module.exports = {
    getRules,
    addRule
};