/**
 * Created by duyth on 6/27/2017.
 */
sap.ui.define(["chatApp/libs/moment"], function (momentjs) {
    "use strict";
    return {
        formatDateTime: function (dateTime) {
            console.log(dateTime);
            return moment(dateTime).format("HH:mm:ss");
        }
    };
});