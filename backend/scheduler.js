var express = require('express');
const CronJob = require("node-cron");

// Creating a cron job which runs on every 10 second
exports.initScheduledJobs = () => {

    const scheduledJobFunction = CronJob.schedule("*/60 * * * * *", function () {
        console.log("running a task every 60 second");
        //Our logic check if there are new files collection in DB
        //untill make the check according to the name of the collections 
        //the file collection begins with file_<file_name>
        

        
    });

    scheduledJobFunction.start();
}


