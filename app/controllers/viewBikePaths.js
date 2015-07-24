var args = arguments[0] || {};

var srv = require('service');

srv.getBikePaths(function(bikePaths){
	
	Alloy.Collections.BikePaths.reset(bikePaths);	
});
