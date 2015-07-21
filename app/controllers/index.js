
// valid login to user
function login(e) {
	
	// access collection from users
	var users = Alloy.createCollection('user'); 
	users.fetch();  
	
	// add filter login and password
	var filterUsers = users.where({email:$.txtLogin.value, password:$.txtSenha.value});
	
	// valid login and pass	
	if (filterUsers.length > 0) {
		alert("Acesso liberado");			
	}else{
		alert("Acesso negado.");
	}
}

// open viewAddUser
function addUser(e){
	var ctrl = Alloy.createController('viewAddUser');
	var win = ctrl.getView();
	win.open();
}

$.index.open();	
