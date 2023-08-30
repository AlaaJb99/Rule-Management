function countKeywords(message, ruleKeywords) {
    message = message.toLowerCase();
    var count = 0;
    for (var i = 0; i < ruleKeywords.length; i++) {

        const keywordRegex = new RegExp(`\\b${ruleKeywords[i].toLowerCase()}\\b`, 'i'); // Match whole word, case-insensitive
        const matches = lowercaseLogEntry.match(keywordRegex);

        if (message.includes(ruleKeywords[i].toLowerCase())) {
            console.log(ruleKeywords[i] + " matched");
            count++;
        }

    }
    return count;
}

function rulesAnalyze(raw, rules) {
    console.log("rulesAnalyze function");
    //console.log(rules); works
    var messageLowerCase = raw.message.toLowerCase();
    const classificationScores = {};

    for (const rule of rules) {
        for (const keyword of rule.keywords) {
            const keywordRegex = new RegExp(`\\b${keyword}\\b`, 'i'); // Match whole word, case-insensitive
            const matches = messageLowerCase.match(keywordRegex);

            if (matches) {
                classificationScores[rule.rule_name] = (classificationScores[rule.rule_name] || 0) + matches.length;
            }
        }
    }
    const sortedClassifications = Object.entries(classificationScores).sort((a, b) => b[1] - a[1]);
    raw.rule = sortedClassifications.length > 0 ? sortedClassifications[0][0] : "Unclassified";
    return raw;
}



module.exports = rulesAnalyze;