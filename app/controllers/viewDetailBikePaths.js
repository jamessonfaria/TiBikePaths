var args = arguments[0] || {};

// set labels detail
$.routeLabel.text = 'Rota: ' + args.get('name');
$.descLabel.text = 'Descrição: ' + args.get('description');
$.typeLabel.text = 'Tipo: ' + args.get('type');

// function to view map
function showMap(){
	var ctl = Alloy.createController('viewMap', args);
	ctl.getView().open();
}
