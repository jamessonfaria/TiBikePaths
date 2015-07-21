var args = arguments[0] || {};

// add user
function addUser(){
		
	var user = Alloy.createModel('user', {
		name:$.txtName.value, 
		email:$.txtEmail.value,
		password:$.txtPass.value		
	});
	
	// save user
	user.save();

	// close screen 
	close();	
}

function close(){
	$.viewAddUser.close();
}