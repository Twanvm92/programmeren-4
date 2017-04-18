var http = require('http');
var person = require('./person');

http.createServer( function(request, response) {
	console.log('REQUEST:' + JSON.stringify(request.headers));

	response.writeHead(200, {
		'Content-Type' : 'application/json'
	});

	/*response.end( JSON.stringify({
			user: 'diederich',
			id:0
		})
	)*/

	response.end( 
			JSON.stringify(person.i18l('nl'))
	);
}).listen(8080);