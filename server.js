var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};

function send404(response){
	response.writeHead(404, { 'Content-Typ	e' :  })
}
