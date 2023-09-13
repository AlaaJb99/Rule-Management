var ranks = require('./ranks.js');

function changeLowerCase(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase();
    }
    return arr;
}
function ranksAnalyzation(raw, rules) {

    var raw_rule = raw.rule;
    /// in defualt rank will be 1-low ,(just be sure about unkown rule if to put 0 for rank or 1!)
    var res_rank = 1;
    let ruleObject = null;
    for (const rule of rules) {
        if (rule.rule_name === raw_rule) {
            ruleObject = rule;
            break;
        }
    }
    if (ruleObject) {
        var keywords_array = ruleObject.keywords;
        var hist = [0, 0, 0];
        for (const keyword_ of keywords_array) {
            var ranks1 = ranks[0][1];
            ranks1 = changeLowerCase(ranks1);
            var ranks2 = ranks[1][2];
            ranks2 = changeLowerCase(ranks2);
            var ranks3 = ranks[2][3];
            ranks3 = changeLowerCase(ranks3);
            var keyword_1 = keyword_.toLowerCase();
            if (ranks1.includes(keyword_1)) {
                hist[0]++;
            }
            else if (ranks2.includes(keyword_1)) {
                hist[1]++;
            }
            else if (ranks3.includes(keyword_1)) {
                hist[2]++;
            }
        }
        var max_rank = 1;
        for (let i = 1; i < hist.length; i++) {
            if (hist[i] > hist[max_rank - 1]) {
                max_rank = i + 1;
            }
        }
        res_rank = max_rank;

    }
    raw.rank = res_rank;
    return raw;
}

module.exports = ranksAnalyzation;
