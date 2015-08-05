function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId5(e) {
        if (e && e.fromAdapter) return;
        __alloyId5.opts || {};
        var models = __alloyId4.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId1 = models[i];
            __alloyId1.__transform = {};
            var __alloyId3 = Ti.UI.createTableViewRow({
                rowid: "undefined" != typeof __alloyId1.__transform["alloy_id"] ? __alloyId1.__transform["alloy_id"] : __alloyId1.get("alloy_id"),
                title: "undefined" != typeof __alloyId1.__transform["name"] ? __alloyId1.__transform["name"] : __alloyId1.get("name")
            });
            rows.push(__alloyId3);
        }
        $.__views.__alloyId0.setData(rows);
    }
    function showDetails(e) {
        var bikePath = Alloy.Collections.BikePaths.get(e.rowData.rowid);
        var ctrl = Alloy.createController("viewDetailBikePaths", bikePath);
        var win = ctrl.getView();
        win.open();
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
    var __defers = {};
    $.__views.viewBikePaths = Ti.UI.createWindow({
        layout: "vertical",
        id: "viewBikePaths"
    });
    $.__views.viewBikePaths && $.addTopLevelView($.__views.viewBikePaths);
    $.__views.__alloyId0 = Ti.UI.createTableView({
        id: "__alloyId0"
    });
    $.__views.viewBikePaths.add($.__views.__alloyId0);
    var __alloyId4 = Alloy.Collections["BikePaths"] || BikePaths;
    __alloyId4.on("fetch destroy change add remove reset", __alloyId5);
    showDetails ? $.__views.__alloyId0.addEventListener("click", showDetails) : __defers["$.__views.__alloyId0!click!showDetails"] = true;
    exports.destroy = function() {
        __alloyId4.off("fetch destroy change add remove reset", __alloyId5);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    require("service");
    var dt = require("data");
    dt.getDbBikePaths();
    Alloy.Collections.BikePaths.fetch();
    __defers["$.__views.__alloyId0!click!showDetails"] && $.__views.__alloyId0.addEventListener("click", showDetails);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;