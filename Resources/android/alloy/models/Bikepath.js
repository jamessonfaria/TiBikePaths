var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            id: "int",
            name: "text",
            description: "text",
            type: "text",
            latitude_start: "real",
            longitude_start: "real",
            latitude_end: "real",
            longitude_end: "real"
        },
        adapter: {
            type: "sql",
            collection_name: "bikepath"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("bikepath", exports.definition, []);

collection = Alloy.C("bikepath", exports.definition, model);

exports.Model = model;

exports.Collection = collection;