var args = arguments[0] || {};

// Using google maps
var MapModule = require('ti.map');

var start = MapModule.createAnnotation({
    latitude: args.get('latitude_start'), 
    longitude: args.get('longitude_start'),     
    pincolor: MapModule.ANNOTATION_AZURE, 
    title: 'Start Route / Início da Rota'
});

var end = MapModule.createAnnotation({
    latitude: args.get('latitude_end'), 
    longitude: args.get('longitude_end'),
    pincolor:MapModule.ANNOTATION_RED, 
    title: 'End Route / Fim da Rota'
});


var mapview = MapModule.createView({
    mapType: MapModule.NORMAL_TYPE,
    region: {latitude: -8.09554, longitude: -34.91687, latitudeDelta: 0.1, longitudeDelta: 0.1 },
    annotations: [start,end] //< add these annotations upon creation
});

// add map to view
$.viewMap.add(mapview);
