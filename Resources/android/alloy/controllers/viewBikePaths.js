function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId4(e) {
        if (e && e.fromAdapter) return;
        __alloyId4.opts || {};
        var models = __alloyId3.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId0 = models[i];
            __alloyId0.__transform = {};
            var __alloyId1 = Ti.UI.createTableViewRow({});
            rows.push(__alloyId1);
            var __alloyId2 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                text: "undefined" != typeof __alloyId0.__transform["Name"] ? __alloyId0.__transform["Name"] : __alloyId0.get("Name")
            });
            __alloyId1.add(__alloyId2);
        }
        $.__views.bpTableView.setData(rows);
    }
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
    $.__views.bpTableView = Ti.UI.createTableView({
        id: "bpTableView"
    });
    $.__views.viewBikePaths.add($.__views.bpTableView);
    var __alloyId3 = Alloy.Collections["BikePaths"] || BikePaths;
    __alloyId3.on("fetch destroy change add remove reset", __alloyId4);
    exports.destroy = function() {
        __alloyId3.off("fetch destroy change add remove reset", __alloyId4);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    require("service");
    var dt = require("data");
    dt.getDbBikePaths();
    Alloy.Collections.BikePaths.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;