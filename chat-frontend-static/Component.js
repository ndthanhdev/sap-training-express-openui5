sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, ResourceModel) {
    "use strict";
    return UIComponent.extend("chatApp.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // set i18n model on view
            var i18nModel = new ResourceModel({
                bundleName: "chatApp.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");

            // create the views based on the url/hash
            this.getRouter().initialize();
        }
    });
});