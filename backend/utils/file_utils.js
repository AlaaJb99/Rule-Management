var mongoose = require('mongoose');
const { fileSchema, connection } = require('../modules/fileDB');


async function getLogs(log_file) {
    const File = mongoose.model("File", fileSchema, log_file);
    try {
        const logs = await File.find({}).exec();
        //console.log('Logs as an array:', logs);
        return logs;
    } catch (err) {
        console.error('Error:', err);
    } 
}

/* this function is responsoable for getting all the files (collections of files) that in the database */
function getFiles(callback) {
    mongoose.connection.db.listCollections().toArray((err, names) => {
        if (err) {
            callback(err, null);
        } else {
            const filesNames = names.map(collection => collection.name)
                .filter(name => name.startsWith('file_'));
            callback(null, filesNames);
        }
    });
}

module.exports = { getLogs, getFiles };