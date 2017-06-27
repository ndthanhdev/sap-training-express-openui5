sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    'jquery.sap.global',
    'sap/m/MessageBox'
], function (Controller, JSONModel, jQuery, MessageBox) {
    "use strict";
    return Controller.extend("chatApp.controller.Login", {

        onInit: function () {
            this.getView().setModel(new JSONModel({
                nickName: "",
            }));

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
        onLogin: function () {

            // collect input controls
            var view = this.getView();
            var inputs = [
                view.byId("nickNameInput")
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
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("chat", {nickName: this.getView().getModel().getProperty('/nickName')})
            }
            else {
                jQuery.sap.require("sap.m.MessageBox");
                MessageBox.alert("Complete your input first.");
            }
        }
    });
});