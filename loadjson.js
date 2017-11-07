var fs = require('fs');
module.exports =  {
	  loadjson : function loadjson(){

	 var text = fs.readFileSync('MyOrgDesc.json','utf8')
   json = JSON.parse(text);
   return json;
 }
}
