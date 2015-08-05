var args = arguments[0] || {};

var srv = require('service');
var dt = require('data');

function showDetails(e){
	var bikePath = Alloy.Collections.BikePaths.get(e.rowData.rowid);
	var ctrl = Alloy.createController('viewDetailBikePaths', bikePath);

	// access detail bikepaths
	var win = ctrl.getView();
	win.open();
}



// verify database 
dt.getDbBikePaths();

	Alloy.Collections.BikePaths.fetch();

	/*srv.getBikePaths(function(bikePaths){
		
		//Alloy.Collections.BikePaths.reset(bikePaths);	
		
		var ret = bikePaths;
		
		for( var i=0; i < ret.length; i++ ){
				alert(ret[i].properties.Name);	
			//	Ti.API.info(ret[i].properties.Description);
			//	Ti.API.info(ret[i].properties.Type);
				
			//	for (var col=0; col < ret[i].geometry.coordinates.length; col++){
			//		Ti.API.info(ret[i].geometry.coordinates[col]);
			//	}				
		}

	
	}); 
	*/