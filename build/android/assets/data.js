var srv=require("service");exports.setDbBikePaths=function(){},exports.getDbBikePaths=function(){var e=Alloy.createCollection("bikepath");e.fetch(),e.length<=0?srv.getBikePaths(function(e){for(var t=e,i=1,r=0;r<t.length;r++){alert(t[r].properties.Name);var n=Alloy.createModel("bikepath",{id:i,name:t[r].properties.Name,description:t[r].properties.Description,type:t[r].properties.Type});n.save(),i++}}):alert("nao cadastrei")};