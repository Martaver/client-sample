var http = require('http');
var fs = require('fs');

const path = "http://localhost:5000";

const ts = http.get(path+"/types/typescript", function(response){
  var file = fs.createWriteStream("src/types/portyr-api.ts");
  file.write("/* tslint:disable */\n");
  file.write("// This is a generated file - do not edit.\n");
  const timestamp = new Date().toString();
  file.write("// Last generated: "+timestamp+".\n");
  file.write("\n");
  response.pipe(file);
});
