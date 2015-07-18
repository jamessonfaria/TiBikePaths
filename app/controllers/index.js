function login(e) {
	if ($.txtLogin.value == "unibratec" && $.txtSenha.value == "unit" || $.txtLogin.value == "admin" && $.txtSenha.value == "unit") {
		alert("Acesso liberado");			
	}else{
		alert("Acesso negado");
	}
}

function register(e){
	var ctrl = Alloy.createController('register');
	var win = ctrl.getView();
	win.open();
}

$.index.open();	
