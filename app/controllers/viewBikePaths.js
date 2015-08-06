var args = arguments[0] || {};

var dt = require('data');

function showDetails(e){
	var bikePath = Alloy.Collections.BikePaths.get(e.rowData.rowid);
	var ctrl = Alloy.createController('viewDetailBikePaths', bikePath);

	// access detail bikepaths
	var win = ctrl.getView();
	win.open();
}

// edit profile
function editProfile(){	
	
	var ctrl = Alloy.createController('viewProfile');
	var win = ctrl.getView();
	win.open();
}


// verify database 
dt.getDbBikePaths();

