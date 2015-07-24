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
    this.__controllerPath = "viewBikePaths";
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
    $.__views.viewBikePaths = Ti.UI.createWindow({
        layout: "vertical",
        id: "viewBikePaths"
    });
    $.__views.viewBikePaths && $.addTopLevelView($.__views.viewBikePaths);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        text: "Olaaaaaa",
        id: "__alloyId0"
    });
    $.__views.viewBikePaths.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var srv = require("service");
    srv.getBikePaths(function(bikePaths) {
        Alloy.Collections.BikePaths.reset(bikePaths);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;