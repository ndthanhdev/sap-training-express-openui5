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

            // attach handlers for validation errors
            sap.ui.getCore().attachValidationError(function (evt) {
                var control = evt.getParameter("element");
                if (control && control.setValueState) {
                    control.setValueState("Error");
                }
            });
            sap.ui.getCore().attachValidationSuccess(function (evt) {
                var control = evt.getParameter("element");
                if (control && control.setValueState) {
                    control.setValueState("None");
                }
            });
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

            // collect input controls
            var view = this.getView();
            var inputs = [
                view.byId("inputMessage")
            ];

            // check that inputs are not empty
            // this does not happen during data binding as this is only triggered by changes
            jQuery.each(inputs, function (i, input) {
                if (!input.getValue()) {
                    input.setValueState("Error");
                }
            });

            // check states of inputs
            var canContinue = true;
            jQuery.each(inputs, function (i, input) {
                if ("Error" === input.getValueState()) {
                    canContinue = false;
                    return false;
                }
            });
            if (canContinue) {
                var oEventBus = sap.ui.getCore().getEventBus();
                oEventBus.publish('chatPanel', 'send', this.getView().getModel('panel').getProperty("/message"));
            }
        }

    });
});