
// valid login to user
function login(e) {
	
	// call function validAccess
	validAccess($.txtLogin.value, $.txtSenha.value);				
	
}

function validAccess(pLogin, pPass){
	// access collection from users
	var users = Alloy.createCollection('user'); 
	users.fetch();  
	
	// add filter login and password 
	var filterUsers = users.where({email:pLogin, password:pPass});
	
	// valid login and pass	
	if (filterUsers.length > 0) {
		
		// save shared preferences
		Ti.App.Properties.setString('bikepaths_login', pLogin);
		Ti.App.Properties.setString('bikepaths_pass', pPass);
		Ti.App.Properties.setBool('bikepaths_access', true);
		
		// access main screen
		var ctrl = Alloy.createController('viewBikePaths');
		var win = ctrl.getView();
		win.open();
		
		close();			
	}else{
		alert(L('access_invalid'));
	}
}

// open viewAddUser
function addUser(e){
	var ctrl = Alloy.createController('viewAddUser');
	var win = ctrl.getView();
	win.open();
}

// close screen
function close(){
	$.index.close();
}

$.index.open();

// verify first access	
if(Ti.App.Properties.getBool('bikepaths_access')){
	var login = Ti.App.Properties.getString('bikepaths_login');
	var pass = Ti.App.Properties.getString('bikepaths_pass');		

	// call function validAccess
	validAccess(login, pass);
	
}

