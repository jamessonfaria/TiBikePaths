exports.definition = {
	config: {
		columns: {
		    "id": "int",
		    "name": "text",
		    "description": "text",
		    "type": "text",
		   	"latitude_start": "real",
		    "longitude_start": "real",
		   	"latitude_end": "real",
		    "longitude_end": "real"
		},
		adapter: {
			type: "sql",
			collection_name: "bikepath"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here

			// For Backbone v1.1.2, uncomment the following to override the
			// fetch method to account for a breaking change in Backbone.
			/*
			fetch: function(options) {
				options = options ? _.clone(options) : {};
				options.reset = true;
				return Backbone.Collection.prototype.fetch.call(this, options);
			}
			*/
		});

		return Collection;
	}
};
