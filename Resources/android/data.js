var srv = require("service");

exports.setDbBikePaths = function() {};

exports.getDbBikePaths = function() {
    var collBikePaths = Alloy.createCollection("bikepath");
    collBikePaths.fetch();
    collBikePaths.length <= 0 ? srv.getBikePaths(function(bikePaths) {
        var ret = bikePaths;
        var tot = 1;
        for (var i = 0; i < ret.length; i++) {
            alert(ret[i].properties.Name);
            var modBikePath = Alloy.createModel("bikepath", {
                id: tot,
                name: ret[i].properties.Name,
                description: ret[i].properties.Description,
                type: ret[i].properties.Type
            });
            modBikePath.save();
            tot++;
        }
    }) : alert("nao cadastrei");
};