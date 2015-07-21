function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function addUser() {
        var user = Alloy.createModel("user", {
            name: $.txtName.value,
            email: $.txtEmail.value,
            password: $.txtPass.value
        });
        user.save();
        close();
    }
    function close() {
        $.viewAddUser.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "viewAddUser";
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
    $.__views.viewAddUser = Ti.UI.createWindow({
        layout: "vertical",
        id: "viewAddUser"
    });
    $.__views.viewAddUser && $.addTopLevelView($.__views.viewAddUser);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "20",
        left: "20",
        right: "20",
        text: "Nome",
        id: "__alloyId4"
    });
    $.__views.viewAddUser.add($.__views.__alloyId4);
    $.__views.txtName = Ti.UI.createTextField({
        top: "20",
        left: "20",
        right: "20",
        hintText: "Digite o seu Nome",
        id: "txtName"
    });
    $.__views.viewAddUser.add($.__views.txtName);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "20",
        left: "20",
        right: "20",
        text: "Email",
        id: "__alloyId5"
    });
    $.__views.viewAddUser.add($.__views.__alloyId5);
    $.__views.txtEmail = Ti.UI.createTextField({
        top: "20",
        left: "20",
        right: "20",
        hintText: "Digite o seu Email",
        id: "txtEmail"
    });
    $.__views.viewAddUser.add($.__views.txtEmail);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "20",
        left: "20",
        right: "20",
        text: "Senha",
        id: "__alloyId6"
    });
    $.__views.viewAddUser.add($.__views.__alloyId6);
    $.__views.txtPass = Ti.UI.createTextField({
        top: "20",
        left: "20",
        right: "20",
        hintText: "Digite a sua senha",
        passwordMask: true,
        id: "txtPass"
    });
    $.__views.viewAddUser.add($.__views.txtPass);
    $.__views.__alloyId7 = Ti.UI.createButton({
        top: "20",
        left: "20",
        right: "20",
        title: "Registrar",
        id: "__alloyId7"
    });
    $.__views.viewAddUser.add($.__views.__alloyId7);
    addUser ? $.__views.__alloyId7.addEventListener("click", addUser) : __defers["$.__views.__alloyId7!click!addUser"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId7!click!addUser"] && $.__views.__alloyId7.addEventListener("click", addUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;