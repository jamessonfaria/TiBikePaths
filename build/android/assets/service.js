var xhr = Ti.Network.createHTTPClient();

exports.getBikePaths = function(callback) {
    xhr.open("GET", "http://dados.recife.pe.gov.br/storage/f/2015-06-19T17%3A58%3A53.333Z/ciclo-faixa2-0.geojson");
    xhr.onload = function() {
        var data = JSON.parse(this.responseText).features[0].properties.Name;
        alert(JSON.stringify(data));
        callback(data);
    };
    xhr.send();
};