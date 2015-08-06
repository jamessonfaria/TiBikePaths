var srv = require('service');

// function to getBikePaths

exports.getDbBikePaths = function(){

	var collBikePaths = Alloy.createCollection('bikepath'); 
	collBikePaths.fetch();
	  	
	if (collBikePaths.length <= 0){		
		
		srv.getBikePaths(function(bikePaths){
						
			var ret = bikePaths;
			var tot = 1;
			
			for( var i=0; i < ret.length; i++ ){

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
				
				Alloy.Collections.BikePaths.fetch();
				
				// increment tot
				tot++;
					
			}

		}); 
	}else{
		Alloy.Collections.BikePaths.fetch();
	}

};