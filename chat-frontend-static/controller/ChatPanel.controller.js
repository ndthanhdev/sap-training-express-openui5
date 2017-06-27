sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function (Controller) {
    "use strict";
    return Controller.extend("chatApp.controller.ChatPanel", {
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

    });
});