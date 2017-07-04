"use strict";
const mongoose_1 = require("mongoose");
let schema = new mongoose_1.Schema({
    nickName: String,
    message: String,
    dateTime: Date
});
module.exports = mongoose_1.model("message", schema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZU1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVzc2FnZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1Q0FBbUQ7QUFRbkQsSUFBSSxNQUFNLEdBQVcsSUFBSSxpQkFBTSxDQUFDO0lBQzVCLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLE9BQU8sRUFBRSxNQUFNO0lBQ2YsUUFBUSxFQUFFLElBQUk7Q0FDakIsQ0FBQyxDQUFDO0FBRUgsaUJBQVMsZ0JBQUssQ0FBZ0IsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDIn0=