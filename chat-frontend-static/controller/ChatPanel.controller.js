sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("chatApp.controller.ChatPanel", {
        onInit: function () {
            this.getView().setModel(new JSONModel({
                message: "hello everyone"
            }), 'panel');
        },
        onShowHello: function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sMsg = oBundle.getText("helloMsg");
            // show a native JavaScript alert
            alert(sMsg);
        }, logoutEvent: function () {
            var oEventBus = sap.ui.getCore().getEventBus();
            oEventBus.publish('chatPanel', 'logout');
        },
        send: function () {
            var oEventBus = sap.ui.getCore().getEventBus();
            oEventBus.publish('chatPanel', 'send', this.getView().getModel('panel').getProperty("/message"));
        }

    });
});