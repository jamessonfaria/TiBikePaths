function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showMap() {
        var ctl = Alloy.createController("viewMap", args);
        ctl.getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "viewDetailBikePaths";
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
    $.__views.viewDetailBikePaths = Ti.UI.createWindow({
        layout: "vertical",
        id: "viewDetailBikePaths"
    });
    $.__views.viewDetailBikePaths && $.addTopLevelView($.__views.viewDetailBikePaths);
    $.__views.routeLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "20",
        left: "20",
        right: "20",
        id: "routeLabel"
    });
    $.__views.viewDetailBikePaths.add($.__views.routeLabel);
    $.__views.descLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "20",
        left: "20",
        right: "20",
        id: "descLabel"
    });
    $.__views.viewDetailBikePaths.add($.__views.descLabel);
    $.__views.typeLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "20",
        left: "20",
        right: "20",
        id: "typeLabel"
    });
    $.__views.viewDetailBikePaths.add($.__views.typeLabel);
    $.__views.mapButton = Ti.UI.createButton({
        top: "20",
        left: "20",
        right: "20",
        titleid: "map_button",
        id: "mapButton"
    });
    $.__views.viewDetailBikePaths.add($.__views.mapButton);
    showMap ? $.__views.mapButton.addEventListener("click", showMap) : __defers["$.__views.mapButton!click!showMap"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.routeLabel.text = "Rota: " + args.get("name");
    $.descLabel.text = "Descrição: " + args.get("description");
    $.typeLabel.text = "Tipo: " + args.get("type");
    __defers["$.__views.mapButton!click!showMap"] && $.__views.mapButton.addEventListener("click", showMap);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;