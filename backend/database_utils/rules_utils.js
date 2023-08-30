var Rule = require('../modules/rulesDB');
const rulesArray = require('../analyzation/rules');

async function getRules() {
    try {
        const rules = await Rule.find({}).exec();
        //console.log('Logs as an array:', logs);
        return rules;
    } catch (err) {
        console.error('Error:', err);
    }
}

function addRule() {
    Rule.insertMany(rulesArray);
}

module.exports = {
    getRules,
    addRule
};