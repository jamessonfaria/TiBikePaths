// file to user JSON
// uri: http://dados.recife.pe.gov.br/storage/f/2015-06-19T17%3A58%3A53.333Z/ciclo-faixa2-0.geojson

var xhr = Ti.Network.createHTTPClient();

exports.getBikePaths = function(callback){
	
	// JSON via get
	xhr.open("GET","http://dados.recife.pe.gov.br/storage/f/2015-06-19T17%3A58%3A53.333Z/ciclo-faixa2-0.geojson");
	
	// return callback
	xhr.onload = function(){
		var data = JSON.parse(this.responseText).features;							
		callback(data);	
	};
	
	// execute json
	xhr.send();
};
