var args = arguments[0] || {};

$.routeLabel.text = args.get('name');
$.descLabel.text = args.get('description');
$.typeLabel.text = args.get('type');

function showMap(){
	var ctl = Alloy.createController('viewMap', args);
	ctl.getView().open();
}
