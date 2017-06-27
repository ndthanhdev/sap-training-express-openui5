sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History"
], function (Controller, JSONModel, History) {
    "use strict";
    return Controller.extend("chatApp.controller.Chat", {
        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("chat").attachPatternMatched(this._onObjectMatched, this);

            var oEventBus = sap.ui.getCore().getEventBus();
            oEventBus.subscribe('chatPanel', 'logout', this.onLogout, this);
        },
        _onObjectMatched: function (oEvent) {
            this.getView().setModel(new JSONModel(
                {
                    nickName: oEvent.getParameter("arguments").nickName
                }));
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