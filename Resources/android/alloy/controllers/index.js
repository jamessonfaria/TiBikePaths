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
        validAccess($.txtLogin.value, $.txtSenha.value);
    }
    function validAccess(pLogin, pPass) {
        var users = Alloy.createCollection("user");
        users.fetch();
        var filterUsers = users.where({
            email: pLogin,
            password: pPass
        });
        if (filterUsers.length > 0) {
            var ctrl = Alloy.createController("viewBikePaths");
            var win = ctrl.getView();
            win.open();
            close();
        } else alert(L("access_invalid"));
    }
    function addUser() {
        var ctrl = Alloy.createController("viewAddUser");
        var win = ctrl.getView();
        win.open();
    }
    function close() {
        $.index.close();
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
    $.__views.emailLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "20",
        left: "20",
        right: "20",
        textid: "email",
        id: "emailLabel"
    });
    $.__views.index.add($.__views.emailLabel);
    $.__views.txtLogin = Ti.UI.createTextField({
        top: "20",
        left: "20",
        right: "20",
        id: "txtLogin"
    });
    $.__views.index.add($.__views.txtLogin);
    $.__views.passLabel = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: "20",
        left: "20",
        right: "20",
        textid: "password",
        id: "passLabel"
    });
    $.__views.index.add($.__views.passLabel);
    $.__views.txtSenha = Ti.UI.createTextField({
        top: "20",
        left: "20",
        right: "20",
        id: "txtSenha"
    });
    $.__views.index.add($.__views.txtSenha);
    $.__views.access = Ti.UI.createButton({
        top: "20",
        left: "20",
        right: "20",
        titleid: "access",
        id: "access"
    });
    $.__views.index.add($.__views.access);
    login ? $.__views.access.addEventListener("click", login) : __defers["$.__views.access!click!login"] = true;
    $.__views.register = Ti.UI.createButton({
        top: "20",
        left: "20",
        right: "20",
        titleid: "new_register",
        id: "register"
    });
    $.__views.index.add($.__views.register);
    addUser ? $.__views.register.addEventListener("click", addUser) : __defers["$.__views.register!click!addUser"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    if (Ti.App.Properties.getBool("bikepaths_access")) {
        var login = Ti.App.Properties.getString("bikepaths_login");
        var pass = Ti.App.Properties.getString("bikepaths_pass");
        validAccess(login, pass);
    }
    __defers["$.__views.access!click!login"] && $.__views.access.addEventListener("click", login);
    __defers["$.__views.register!click!addUser"] && $.__views.register.addEventListener("click", addUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;