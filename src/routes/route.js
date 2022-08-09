
const express = require('express');
const intro=require('../introduction/intro')
const message=require('../logger/logger')
const details=require('../util/helper')
const validator=require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    intro.printName()
    message.greetings()
    details.printDate()
    details.printMonth()
    details.getBatchInfo()
    validator.trim()
    validator.toLowerCase()
    validator.toUpperCase()
    res.send('My first ever api!')
});

module.exports = router;