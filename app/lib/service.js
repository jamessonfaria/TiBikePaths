// file to user JSON
// uri: http://dados.recife.pe.gov.br/storage/f/2015-06-19T17%3A58%3A53.333Z/ciclo-faixa2-0.geojson

var xhr = Ti.Network.createHTTPClient();

exports.getBikePaths = function(callback){
	
	// JSON via get
	xhr.open("GET","http://dados.recife.pe.gov.br/storage/f/2015-06-19T17%3A58%3A53.333Z/ciclo-faixa2-0.geojson");
	//xhr.open("GET","http://livroandroid.com.br/livro/carros/carros_esportivos.json");
	
	// return callback
	xhr.onload = function(){
		var data = JSON.parse(this.responseText).features;
		//var data = JSON.parse(this.responseText).carros.carro;
		
		for( var i=0; i < data.length; i++ ){
			Ti.API.info(data[i].properties.Name);	
			Ti.API.info(data[i].properties.Description);
			
			for (var col=0; col < data[i].geometry.coordinates.length; col++){
				Ti.API.info(data[i].geometry.coordinates[col]);
			}				
		}
		
		alert("chamou");
						
		callback(data);	
	};
	
	// execute json
	xhr.send();
};
