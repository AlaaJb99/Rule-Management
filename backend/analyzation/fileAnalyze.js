const logAnalyze = require('./logAnalyze');
const checkErrorsForDispatcher = require('./checkDispatcherNeed');


function fileAnalyze(logs, rules) {
    var process = [];

    //addRule();


    // var examples = [
    //     {
    //         user_name: "Alaa",
    //         file_date: '13/08/2023',
    //         date: '2015 - 10 - 18 18:01: 47',
    //         info: "INFO [main] org.apache.hadoop.mapreduce.v2.app.MRAppMaster: Created MRAppMaster for application appattempt_1445144423722_0020_000001"
    //     },
    //     {
    //         user_name: "Alaa",
    //         file_date: '13/08/2023',
    //         date: '2015-10-18 18:06:28',
    //         info: "FATAL [IPC Server handler 4 on 62270] org.apache.hadoop.mapred.TaskAttemptListenerImpl: Task: attempt_1445144423722_0020_m_000001_0 - exited : java.net.NoRouteToHostException: No Route to Host from  MININT-FNANLI5/127.0.0.1 to msra-sa-41:9000 failed on socket timeout exception: java.net.NoRouteToHostException: No route to host: no further information; For more details see:  http://wiki.apache.org/hadoop/NoRouteToHost"
    //     }
    // ];

    // File.insertMany(examples).then(result => {
    //     //console.log(result);
    // });

    try {
        for (var i = 0; i < logs.length; i++) {
            var result = logAnalyze(logs[i], rules);
            if (result.rule !== "Unclassified")
                process.push(result);
        }
        // call the function to check if dispatcher needed
        const [res_condition, abnormalErrors] = checkErrorsForDispatcher(process);
        if(res_condition)
        {
            console.log("Need to send to dispatcher the :",abnormalErrors);
        }

    } catch (err) {
        console.error('Error:', err);
    }
    return process;
}

module.exports = fileAnalyze;