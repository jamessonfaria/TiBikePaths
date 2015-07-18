function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function register() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "register";
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
    $.__views.register = Ti.UI.createWindow({
        layout: "vertical",
        id: "register"
    });
    $.__views.register && $.addTopLevelView($.__views.register);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "20",
        left: "20",
        right: "20",
        text: "Nome",
        id: "__alloyId4"
    });
    $.__views.register.add($.__views.__alloyId4);
    $.__views.txtName = Ti.UI.createTextField({
        top: "20",
        left: "20",
        right: "20",
        hintText: "Digite o seu Nome",
        id: "txtName"
    });
    $.__views.register.add($.__views.txtName);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "20",
        left: "20",
        right: "20",
        text: "Email",
        id: "__alloyId5"
    });
    $.__views.register.add($.__views.__alloyId5);
    $.__views.txtEmail = Ti.UI.createTextField({
        top: "20",
        left: "20",
        right: "20",
        hintText: "Digite o seu Email",
        id: "txtEmail"
    });
    $.__views.register.add($.__views.txtEmail);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "20",
        left: "20",
        right: "20",
        text: "Senha",
        id: "__alloyId6"
    });
    $.__views.register.add($.__views.__alloyId6);
    $.__views.txtPass = Ti.UI.createTextField({
        top: "20",
        left: "20",
        right: "20",
        hintText: "Digite a sua senha",
        passwordMask: true,
        id: "txtPass"
    });
    $.__views.register.add($.__views.txtPass);
    $.__views.widget = Alloy.createWidget("com.imobicloud.radio", "widget", {
        id: "widget",
        __parentSymbol: $.__views.register
    });
    $.__views.widget.setParent($.__views.register);
    $.__views.__alloyId7 = Ti.UI.createButton({
        top: "20",
        left: "20",
        right: "20",
        title: "Registrar",
        id: "__alloyId7"
    });
    $.__views.register.add($.__views.__alloyId7);
    register ? $.__views.__alloyId7.addEventListener("click", register) : __defers["$.__views.__alloyId7!click!register"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId7!click!register"] && $.__views.__alloyId7.addEventListener("click", register);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;