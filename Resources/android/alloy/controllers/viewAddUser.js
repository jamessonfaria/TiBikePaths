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
    $.__views.lblName = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "20",
        left: "20",
        right: "20",
        textid: "name",
        id: "lblName"
    });
    $.__views.viewAddUser.add($.__views.lblName);
    $.__views.txtName = Ti.UI.createTextField({
        top: "20",
        left: "20",
        right: "20",
        hintText: L("input_name"),
        id: "txtName"
    });
    $.__views.viewAddUser.add($.__views.txtName);
    $.__views.lblEmail = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "20",
        left: "20",
        right: "20",
        textid: "email",
        id: "lblEmail"
    });
    $.__views.viewAddUser.add($.__views.lblEmail);
    $.__views.txtEmail = Ti.UI.createTextField({
        top: "20",
        left: "20",
        right: "20",
        hintText: L("input_email"),
        id: "txtEmail"
    });
    $.__views.viewAddUser.add($.__views.txtEmail);
    $.__views.lblPass = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "20",
        left: "20",
        right: "20",
        textid: "password",
        id: "lblPass"
    });
    $.__views.viewAddUser.add($.__views.lblPass);
    $.__views.txtPass = Ti.UI.createTextField({
        top: "20",
        left: "20",
        right: "20",
        hintText: L("input_pass"),
        passwordMask: true,
        id: "txtPass"
    });
    $.__views.viewAddUser.add($.__views.txtPass);
    $.__views.btnSave = Ti.UI.createButton({
        top: "20",
        left: "20",
        right: "20",
        titleid: "save",
        id: "btnSave"
    });
    $.__views.viewAddUser.add($.__views.btnSave);
    addUser ? $.__views.btnSave.addEventListener("click", addUser) : __defers["$.__views.btnSave!click!addUser"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.btnSave!click!addUser"] && $.__views.btnSave.addEventListener("click", addUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;