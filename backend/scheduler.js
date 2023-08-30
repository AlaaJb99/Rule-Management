var express = require('express');
const CronJob = require("node-cron");
const mongoose = require("mongoose");

//connect to database 
mongoose.connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Creating a cron job which runs on every 10 second
exports.initScheduledJobs = () => {

    const scheduledJobFunction = CronJob.schedule("*/60 * * * * *", function () {
        console.log("running a task every 60 second");
        //Our logic check if there are new files collection in DB
        //untill make the check according to the name of the collections 
        //the file collection begins with file_<file_name>
        // Start Here =>
        //

        const fileCollections = [];
        mongoose.connection.on('open', function (ref) {
            console.log('Connected to mongo server.');
            //trying to get collection names
            mongoose.connection.db.listCollections().toArray(function (err, names) {
                console.log(names); // [{ name: 'dbname.myCollection' }]
                const pattern = /^file_/;
                for (const name of names) {

                    if (name.match(pattern)) {
                        fileCollections.push(name);
                    }
                }
            });
        });
        console.log(fileCollections);
    });

    scheduledJobFunction.start();
}


