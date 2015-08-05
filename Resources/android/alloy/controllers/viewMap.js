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
    this.__controllerPath = "viewMap";
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
    $.__views.viewMap = Ti.UI.createWindow({
        layout: "vertical",
        id: "viewMap"
    });
    $.__views.viewMap && $.addTopLevelView($.__views.viewMap);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var MapModule = require("ti.map");
    var start = MapModule.createAnnotation({
        latitude: args.get("latitude_start"),
        longitude: args.get("longitude_start"),
        pincolor: MapModule.ANNOTATION_AZURE,
        title: "Start Route / Início da Rota"
    });
    var end = MapModule.createAnnotation({
        latitude: args.get("latitude_end"),
        longitude: args.get("longitude_end"),
        pincolor: MapModule.ANNOTATION_RED,
        title: "End Route / Fim da Rota"
    });
    var mapview = MapModule.createView({
        mapType: MapModule.NORMAL_TYPE,
        region: {
            latitude: -8.09554,
            longitude: -34.91687,
            latitudeDelta: .1,
            longitudeDelta: .1
        },
        annotations: [ start, end ]
    });
    $.viewMap.add(mapview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;