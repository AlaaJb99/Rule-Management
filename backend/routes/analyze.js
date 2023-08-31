var express = require('express');
var router = express.Router();

const analyze = require('../analyzation/analyze');

router.post('/', function (req, res) {
    //get the file naem and the selected rules from the request body
    // selectedRules:
    //selectedDocument
    analyze((err, analyzed)=>{

    });
});