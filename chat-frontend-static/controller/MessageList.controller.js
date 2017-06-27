sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("chatApp.controller.MessageList", {
        onInit: function () {
            this.getView().setModel(new JSONModel({
                Messages: [{
                    nickName: "Chat With UI5",
                    dateTime: new Date(),
                    message: "you joined"
                }]
            }), 'message');

            var oEventBus = sap.ui.getCore().getEventBus();
            oEventBus.subscribe('chat', 'receive', this.onReceive, this);
        },
        onReceive: function (sChannel, sEvent, oData) {
            var oModel = this.getView().getModel('message');
            var data = oModel.oData;
            data.Messages.unshift(oData);
            oModel.setData(data);
            console.log(data);
        }
    });
});