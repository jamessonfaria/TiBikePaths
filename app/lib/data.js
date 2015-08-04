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
					alert(ret[i].properties.Name);	
				//	Ti.API.info(ret[i].properties.Description);
				//	Ti.API.info(ret[i].properties.Type);
					
				//	for (var col=0; col < ret[i].geometry.coordinates.length; col++){
				//		Ti.API.info(ret[i].geometry.coordinates[col]);
				//	}			
				
				var modBikePath = Alloy.createModel('bikepath', {
					id: tot,
					name: ret[i].properties.Name, 
					description: ret[i].properties.Description,
					type: ret[i].properties.Type		
				});
	
				// save bikepath
				modBikePath.save();
				
				// increment tot
				tot++;
					
			}

	
		}); 
		
		//Alloy.Collections.BikePaths.reset(bikePaths);	
		
	}else{
		alert("nao cadastrei");
		//Alloy.Collections.BikePaths.reset(bikePaths);
	}

};