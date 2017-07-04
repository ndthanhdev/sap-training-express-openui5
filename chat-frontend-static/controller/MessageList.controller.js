sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "chatApp/model/formatter"
], function (Controller, JSONModel, formatter) {
    "use strict";
    return Controller.extend("chatApp.controller.MessageList", {
        formatter: formatter,
        onInit: function () {

            var oMessageModel = new sap.ui.model.json.JSONModel();
            oMessageModel.loadData(
                "http://localhost:3000/messages", null, false, 'GET'
            );
            var data = oMessageModel.oData;
            data.Messages.unshift({
                nickName: "Chat With UI5",
                dateTime: new Date(),
                message: "you joined"
            });
            oMessageModel.setData(data);
            this.getView().setModel(oMessageModel, 'message');

            var oEventBus = sap.ui.getCore().getEventBus();
            oEventBus.subscribe('chat', 'receive', this.onReceive, this);
        },
        onReceive: function (sChannel, sEvent, oData) {
            var oModel = this.getView().getModel('message');
            var data = oModel.oData;
            data.Messages.unshift(oData);
            oModel.setData(data);
        }
    });
});