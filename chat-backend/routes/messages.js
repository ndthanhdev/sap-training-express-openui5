"use strict";
const express = require("express");
const MessageModel = require("../models/messageModel");
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
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUNBQW9DO0FBQ3BDLHVEQUF3RDtBQUV4RCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFOUIsb0JBQW9CO0FBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQ3ZDLElBQUksT0FBTyxHQUFHLElBQUksWUFBWSxDQUFDO1FBQzNCLFFBQVEsRUFBRSxHQUFHO1FBQ2IsT0FBTyxFQUFFLGFBQWE7UUFDdEIsUUFBUSxFQUFFLElBQUksSUFBSSxFQUFFO0tBQ3ZCLENBQUMsQ0FBQztJQUNILE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNmLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtJQUNwQyx1Q0FBdUM7SUFDdkMsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsTUFBTTtJQUNOLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLE1BQU07UUFDdEQsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNMLFFBQVEsRUFBRSxNQUFNO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDUixDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFTLE1BQU0sQ0FBQyJ9