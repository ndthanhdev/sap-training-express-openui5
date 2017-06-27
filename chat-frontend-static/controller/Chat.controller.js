/* global _:true */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History",
    "chatApp/libs/socket.io"
], function (Controller, JSONModel, History, socketiojs) {
    "use strict";
    return Controller.extend("chatApp.controller.Chat", {
        socket: io,
        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("chat").attachPatternMatched(this._onObjectMatched, this);

            var oEventBus = sap.ui.getCore().getEventBus();
            oEventBus.subscribe('chatPanel', 'logout', this.onLogout, this);
        },
        _onObjectMatched: function (oEvent) {
            var model = {
                nickName: oEvent.getParameter("arguments").nickName
            };
            this.getView().setModel(new JSONModel(model));
            this.socket = io('http://localhost:3000');

            this.socket.emit('new-connect', model);
        },
        onNavBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("login", {}, true);
            }
        },
        onLogout: function (sChannel, sEvent) {
            this.onNavBack();
        }
    });
});