/* global _:true */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History",
    "chatApp/libs/socket.io"
], function (Controller, JSONModel, History, socketiojs) {
    "use strict";
    return Controller.extend("chatApp.controller.Chat", {
        socket: null,
        nickName: null,
        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("chat").attachPatternMatched(this._onObjectMatched, this);

            var oEventBus = sap.ui.getCore().getEventBus();
            oEventBus.subscribe('chatPanel', 'logout', this.onLogout, this);
            oEventBus.subscribe('chatPanel', 'send', this.send, this);
        },
        _onObjectMatched: function (oEvent) {
            this.nickName = oEvent.getParameter("arguments").nickName;
            var model = {
                nickName: this.nickName
            };
            this.getView().setModel(new JSONModel(model));
            this.socket = io('http://localhost:3000');

            this.socket.emit('new-connect', model);
            this.socket.on('s2c', this.receive);

        },
        onNavBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            this.socket.emit('out');
            console.log('out');

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("login", {}, true);
            }
        },
        onLogout: function (sChannel, sEvent) {
            this.onNavBack();
        },
        send: function (sChannel, sEvent, oData) {
            this.socket.emit('c2s', {
                nickName: this.nickName,
                message: oData
            })
        },
        receive: function (data) {
            var oEventBus = sap.ui.getCore().getEventBus();
            oEventBus.publish('chat', 'receive', data);
        }
    });
});