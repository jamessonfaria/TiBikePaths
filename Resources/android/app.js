var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.Users = Alloy.createCollection("user");

Alloy.Collections.BikePaths = new Backbone.Collection();

Alloy.createController("index");