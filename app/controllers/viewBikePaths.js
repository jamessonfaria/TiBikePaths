var args = arguments[0] || {};

var srv = require('service');
var dt = require('data');


dt.getDbBikePaths();

srv.getBikePaths(function(bikePaths){
		
	//Alloy.Collections.BikePaths.reset(bikePaths);	
	
	var ret = bikePaths;
	
/*	for( var i=0; i < ret.length; i++ ){
			Ti.API.info(ret[i].properties.Name);	
			Ti.API.info(ret[i].properties.Description);
			Ti.API.info(ret[i].properties.Type);
			
			for (var col=0; col < ret[i].geometry.coordinates.length; col++){
				Ti.API.info(ret[i].geometry.coordinates[col]);
			}				
	}
*/
	
});




