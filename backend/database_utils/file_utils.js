var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/logAnalyzer');
const fileSchema = require('../modules/fileDB');


async function getLogs(log_file) {
    const File = mongoose.model("File", fileSchema, log_file);
    try {
        const logs = await File.find({}).exec();
        //console.log('Logs as an array:', logs);
        return logs;
    } catch (err) {
        console.error('Error:', err);
    } finally {
        mongoose.connection.close();
    }
}


module.exports = { getLogs };