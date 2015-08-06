function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId2() {
        $.__views.viewBikePaths.removeEventListener("open", __alloyId2);
        if ($.__views.viewBikePaths.activity) $.__views.viewBikePaths.activity.onCreateOptionsMenu = function(e) {
            var __alloyId1 = {
                title: L("profile"),
                id: "edtProfile"
            };
            $.__views.edtProfile = e.menu.add(_.pick(__alloyId1, Alloy.Android.menuItemCreateArgs));
            $.__views.edtProfile.applyProperties(_.omit(__alloyId1, Alloy.Android.menuItemCreateArgs));
            $.edtProfile = $.__views.edtProfile;
            editProfile ? $.__views.edtProfile.addEventListener("click", editProfile) : __defers["$.__views.edtProfile!click!editProfile"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function __alloyId8(e) {
        if (e && e.fromAdapter) return;
        __alloyId8.opts || {};
        var models = __alloyId7.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId4 = models[i];
            __alloyId4.__transform = {};
            var __alloyId6 = Ti.UI.createTableViewRow({
                height: "50",
                rowid: "undefined" != typeof __alloyId4.__transform["alloy_id"] ? __alloyId4.__transform["alloy_id"] : __alloyId4.get("alloy_id"),
                title: "undefined" != typeof __alloyId4.__transform["name"] ? __alloyId4.__transform["name"] : __alloyId4.get("name")
            });
            rows.push(__alloyId6);
        }
        $.__views.__alloyId3.setData(rows);
    }
    function showDetails(e) {
        var bikePath = Alloy.Collections.BikePaths.get(e.rowData.rowid);
        var ctrl = Alloy.createController("viewDetailBikePaths", bikePath);
        var win = ctrl.getView();
        win.open();
    }
    function editProfile() {
        var ctrl = Alloy.createController("viewProfile");
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
    $.__views.viewBikePaths.addEventListener("open", __alloyId2);
    $.__views.__alloyId3 = Ti.UI.createTableView({
        id: "__alloyId3"
    });
    $.__views.viewBikePaths.add($.__views.__alloyId3);
    var __alloyId7 = Alloy.Collections["BikePaths"] || BikePaths;
    __alloyId7.on("fetch destroy change add remove reset", __alloyId8);
    showDetails ? $.__views.__alloyId3.addEventListener("click", showDetails) : __defers["$.__views.__alloyId3!click!showDetails"] = true;
    exports.destroy = function() {
        __alloyId7.off("fetch destroy change add remove reset", __alloyId8);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var dt = require("data");
    dt.getDbBikePaths();
    __defers["$.__views.edtProfile!click!editProfile"] && $.__views.edtProfile.addEventListener("click", editProfile);
    __defers["$.__views.__alloyId3!click!showDetails"] && $.__views.__alloyId3.addEventListener("click", showDetails);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;