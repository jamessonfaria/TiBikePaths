var args = arguments[0] || {};

// Using google maps

$.viewMap.title = args.get('name');

/*var Map = require('ti.map');

var pathAnnotation = Map.createAnnotation({
	latitude:fugitive.get('capturedLat'),
	longitude:fugitive.get('capturedLong'),
	title:fugitive.get('name'),
	pincolor:Map.ANNOTATION_RED
});

var mapView = Map.createView({
	region:{
		latitude:fugitive.get('capturedLat'),
		longitude:fugitive.get('capturedLong'),
		latitudeDelta:0.01,
		longitudeDelta:0.01
	},
	mapType:Map.NORMAL_TYPE,
	annotations:[capturedAnnotation]
});

$.map.add(mapView);*/