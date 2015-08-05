var srv = require('service');

// function to setBikePaths
exports.setDbBikePaths = function(){

};

exports.getDbBikePaths = function(){

	var collBikePaths = Alloy.createCollection('bikepath'); 
	collBikePaths.fetch();
	  	
	if (collBikePaths.length <= 0){		
		
		srv.getBikePaths(function(bikePaths){
						
			var ret = bikePaths;
			var tot = 1;
			
			for( var i=0; i < ret.length; i++ ){
				//	alert(ret[i].properties.Name);	
				//	Ti.API.info(ret[i].properties.Description);
				//	Ti.API.info(ret[i].properties.Type);
					
				//	for (var col=0; col < ret[i].geometry.coordinates.length; col++){
				//		Ti.API.info(ret[i].geometry.coordinates[col]);
				//	}			
				
				// size to line json
				var size = ret[i].geometry.coordinates.length;
				
				var modBikePath = Alloy.createModel('bikepath', {
					id: tot,
					name: ret[i].properties.Name, 
					description: ret[i].properties.Description,
					type: ret[i].properties.Type,
					latitude_start: ret[i].geometry.coordinates[0][1], 
					longitude_start: ret[i].geometry.coordinates[0][0],
					latitude_end: ret[i].geometry.coordinates[size - 1][1], 
					longitude_end: ret[i].geometry.coordinates[size -1][0]			
				});
	
				// save bikepath
				modBikePath.save();
				
				// increment tot
				tot++;
					
			}

	
		}); 
		
		//Alloy.Collections.BikePaths.reset(bikePaths);	
		
	}
	

};