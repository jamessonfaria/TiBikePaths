function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function login() {
        alert("unibratec" == $.txtLogin.value && "unit" == $.txtSenha.value || "admin" == $.txtLogin.value && "unit" == $.txtSenha.value ? "Acesso liberado" : "Acesso negado.");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    $.__views.index = Ti.UI.createWindow({
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "20",
        left: "20",
        right: "20",
        text: "Login",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.txtLogin = Ti.UI.createTextField({
        top: "20",
        left: "20",
        right: "20",
        id: "txtLogin"
    });
    $.__views.index.add($.__views.txtLogin);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "20",
        left: "20",
        right: "20",
        text: "Senha",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    $.__views.txtSenha = Ti.UI.createTextField({
        top: "20",
        left: "20",
        right: "20",
        id: "txtSenha"
    });
    $.__views.index.add($.__views.txtSenha);
    $.__views.__alloyId2 = Ti.UI.createButton({
        top: "20",
        left: "20",
        right: "20",
        title: "Acessar",
        id: "__alloyId2"
    });
    $.__views.index.add($.__views.__alloyId2);
    login ? $.__views.__alloyId2.addEventListener("click", login) : __defers["$.__views.__alloyId2!click!login"] = true;
    $.__views.__alloyId3 = Ti.UI.createButton({
        top: "20",
        left: "20",
        right: "20",
        title: "Registrar",
        id: "__alloyId3"
    });
    $.__views.index.add($.__views.__alloyId3);
    register ? $.__views.__alloyId3.addEventListener("click", register) : __defers["$.__views.__alloyId3!click!register"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.__alloyId2!click!login"] && $.__views.__alloyId2.addEventListener("click", login);
    __defers["$.__views.__alloyId3!click!register"] && $.__views.__alloyId3.addEventListener("click", register);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;