function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "viewProfile";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.viewProfile = Ti.UI.createWindow({
        layout: "vertical",
        id: "viewProfile"
    });
    $.__views.viewProfile && $.addTopLevelView($.__views.viewProfile);
    $.__views.photoImageView = Ti.UI.createImageView({
        top: "20",
        width: 150,
        height: 120,
        image: "/images/no_image.png",
        id: "photoImageView"
    });
    $.__views.viewProfile.add($.__views.photoImageView);
    $.__views.nameLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "20",
        left: "20",
        right: "20",
        id: "nameLabel"
    });
    $.__views.viewProfile.add($.__views.nameLabel);
    $.__views.emailLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "20",
        left: "20",
        right: "20",
        id: "emailLabel"
    });
    $.__views.viewProfile.add($.__views.emailLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.nameLabel.text = Ti.App.Properties.getString("bikepaths_name");
    $.emailLabel.text = Ti.App.Properties.getString("bikepaths_login");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;