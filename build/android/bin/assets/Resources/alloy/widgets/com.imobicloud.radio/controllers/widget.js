function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.imobicloud.radio/" + s : s.substring(0, index) + "/com.imobicloud.radio/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function init() {
        args.items && loadRadios(args.items);
    }
    function loadRadios() {
        var container = $.getView(), items = args.items, found = false;
        for (var i = 0, ii = items.length; ii > i; i++) {
            var item = items[i], selected = item.selected && false === found;
            var radio = $.UI.create("View", {
                classes: "imc-radio",
                dataId: item.id
            });
            radio.add($.UI.create("ImageView", {
                classes: "imc-radio-icon imc-radio-icon-" + (selected ? "on" : "off")
            }));
            radio.add($.UI.create("Label", {
                classes: "imc-radio-title imc-radio-title-" + (selected ? "on" : "off"),
                text: item.title
            }));
            container.add(radio);
            if (selected) {
                activeView = radio;
                activeId = item.id;
                found = true;
            }
        }
    }
    function toggleRadio(e) {
        var view = e.source, id = view.dataId;
        if (null == id || id === activeId && true !== args.deselectable) return;
        var items = args.items;
        for (var i = 0, j = items.length; j > i; i++) {
            var item = items[i];
            item.id == activeId ? item.selected = false : item.id == id && (item.selected = true);
        }
        deselectRadio();
        if (id !== activeId) {
            view.children[0].applyProperties($.createStyle({
                classes: "imc-radio-icon-on"
            }));
            view.children[1].applyProperties($.createStyle({
                classes: "imc-radio-title-on"
            }));
            activeId = id;
            activeView = view;
        } else {
            activeId = null;
            activeView = null;
        }
    }
    function deselectRadio() {
        if (activeView) {
            activeView.children[0].applyProperties($.createStyle({
                classes: "imc-radio-icon-off"
            }));
            activeView.children[1].applyProperties($.createStyle({
                classes: "imc-radio-title-off"
            }));
        }
    }
    new (require("alloy/widget"))("com.imobicloud.radio");
    this.__widgetId = "com.imobicloud.radio";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.widget = Ti.UI.createView({
        id: "widget"
    });
    $.__views.widget && $.addTopLevelView($.__views.widget);
    toggleRadio ? $.__views.widget.addEventListener("click", toggleRadio) : __defers["$.__views.widget!click!toggleRadio"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var activeView, activeId, args = arguments[0] || {};
    init();
    exports.load = function(params) {
        args = params;
        init();
    };
    exports.getSelectedItem = function() {
        if (null == activeId) return null;
        var items = args.items;
        for (var i = 0, j = items.length; j > i; i++) {
            var item = items[i];
            if (item.id == activeId) return item;
        }
    };
    exports.reset = function() {
        if (null == activeId) return;
        var items = args.items;
        for (var i = 0, j = items.length; j > i; i++) {
            var item = items[i];
            if (item.id == activeId) {
                item.selected = false;
                break;
            }
        }
        deselectRadio();
        activeId = null;
        activeView = null;
    };
    __defers["$.__views.widget!click!toggleRadio"] && $.__views.widget.addEventListener("click", toggleRadio);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;