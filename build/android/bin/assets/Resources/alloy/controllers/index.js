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
            Ti.App.Properties.setString("bikepaths_login", pLogin);
            Ti.App.Properties.setString("bikepaths_pass", pPass);
            Ti.App.Properties.setBool("bikepaths_access", true);
            var ctrl = Alloy.createController("viewBikePaths");
            var win = ctrl.getView();
            win.open();
            close();
        } else alert("Acesso negado.");
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
    addUser ? $.__views.__alloyId3.addEventListener("click", addUser) : __defers["$.__views.__alloyId3!click!addUser"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    if (Ti.App.Properties.getBool("bikepaths_access")) {
        var login = Ti.App.Properties.getString("bikepaths_login");
        var pass = Ti.App.Properties.getString("bikepaths_pass");
        validAccess(login, pass);
    }
    __defers["$.__views.__alloyId2!click!login"] && $.__views.__alloyId2.addEventListener("click", login);
    __defers["$.__views.__alloyId3!click!addUser"] && $.__views.__alloyId3.addEventListener("click", addUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;