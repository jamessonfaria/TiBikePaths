var args = arguments[0] || {};

// add user
function addUser(){
		
	// create model	
	var user = Alloy.createModel('user', {
		name:$.txtName.value, 
		email:$.txtEmail.value,
		password:$.txtPass.value		
	});
	
	// save user
	user.save();

	// save shared preferences
	Ti.App.Properties.setString('bikepaths_name', $.txtName.value);
	Ti.App.Properties.setString('bikepaths_login', $.txtEmail.value);
	Ti.App.Properties.setString('bikepaths_pass', $.txtPass.value);
	Ti.App.Properties.setBool('bikepaths_access', true);
		

	// close screen 
	close();	
}

function close(){
	$.viewAddUser.close();
}