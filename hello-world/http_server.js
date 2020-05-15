/*HTTP connection*/

var http=require('http');
var fs=require('fs');

initServer();

function initServer(){
	
http.createServer(function(req,res){
var fileName=req.url;
console.log('req url: '+fileName);
fileName=fileName.split("/")[1];
console.log('File Name: '+fileName);
fs.readFile(fileName,function(err,data){
	res.writeHead(200,{'Content-Type': 'text/html'});
	res.write(data);	
	res.end();
})

		
		
	}).listen(8080);	
}












