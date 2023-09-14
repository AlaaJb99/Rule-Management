
var request = require('request');

function sendToDispatcher(abnormalErrors, file_analyzed, user) {
    const sendData = {
        errors: abnormalErrors,
        date: file_analyzed.file_date,
        file_name: file_analyzed.file_name,
        username: file_analyzed.user_name,
        email: user.email,
        phone: user.phone
    }
    var clientServerOptions = {
        uri: 'http://localhost:8080/dispatcher',
        body: JSON.stringify(sendData),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    request(clientServerOptions, function (error, response) {
        //console.log(error,response.body);
        return;
    });
}

module.exports = sendToDispatcher;