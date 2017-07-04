import express = require('express');
import MessageModel = require('../models/messageModel');

var router = express.Router();

/* GET home page. */
router.get('/new', function (req, res, next) {
    let message = new MessageModel({
        nickName: '1',
        message: "1's message",
        dateTime: new Date()
    });
    message.save();
    res.end("added");
});

router.get('/', function (req, res, next) {
    // MessageModel.find((err, result) => {
    //     res.json({
    //         Messages: result
    //     });
    // });
    MessageModel.find({}).sort('-dateTime').exec(((err, result) => {
        res.json({
            Messages: result
        });
    }));
});

export = router;