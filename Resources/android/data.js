var srv = require("service");

exports.getDbBikePaths = function() {
    var collBikePaths = Alloy.createCollection("bikepath");
    collBikePaths.fetch();
    collBikePaths.length <= 0 ? srv.getBikePaths(function(bikePaths) {
        var ret = bikePaths;
        var tot = 1;
        for (var i = 0; i < ret.length; i++) {
            var size = ret[i].geometry.coordinates.length;
            var modBikePath = Alloy.createModel("bikepath", {
                id: tot,
                name: ret[i].properties.Name,
                description: ret[i].properties.Description,
                type: ret[i].properties.Type,
                latitude_start: ret[i].geometry.coordinates[0][1],
                longitude_start: ret[i].geometry.coordinates[0][0],
                latitude_end: ret[i].geometry.coordinates[size - 1][1],
                longitude_end: ret[i].geometry.coordinates[size - 1][0]
            });
            modBikePath.save();
            Alloy.Collections.BikePaths.fetch();
            tot++;
        }
    }) : Alloy.Collections.BikePaths.fetch();
};