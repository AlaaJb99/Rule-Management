var ranks = require('./ranks.js');


function ranksAnalyzation(raw, rules)
{

    var raw_rule=raw.rule;
    /// in defualt rank will be 1-low ,(just be sure about unkown rule if to put 0 for rank or 1!)
    var res_rank=1;
    let ruleObject = null;
    for (const rule of rules) {
        if (rule.rule === raw_rule) {
            ruleObject = rule;
            break;
        }
    }
    if(ruleObject)
    {
        console.log("Entered ");
        var keywords_array=ruleObject.keywords;
        var hist=[0,0,0];
        for (const keyword_ of keywords_array) {
            var ranks1=ranks[0][1];
            var ranks2=ranks[1][2];
            var ranks3=ranks[2][3];
            if (ranks1.includes(keyword_)) {
                hist[0]++ ;
            }
            else if(ranks2.includes(keyword_))
            {
                hist[1]++ ;
            }
            else if(ranks3.includes(keyword_))
            {
                hist[2]++ ;
            }
        }
        var max_rank = 1;
        for (let i = 1; i < hist.length; i++) {
            if (hist[i] > hist[max_rank-1]) {
                max_rank = i+1;
            }
        }
        res_rank=max_rank;

    }
    raw.rank=res_rank;
    return raw;
}

module.exports = ranksAnalyzation;
