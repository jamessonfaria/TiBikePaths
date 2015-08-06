var args = arguments[0] || {};

/*if(args.get('photo')){
	$.photoImageView.image = args.get('photo');
}*/

$.nameLabel.text =  Ti.App.Properties.getString('bikepaths_name');	
$.emailLabel.text = Ti.App.Properties.getString('bikepaths_login');	
