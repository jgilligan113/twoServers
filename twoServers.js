//need a protocol
var http = require('http');

//need a door to the house
var PORT1 = 7000;
var PORT2 = 7050;

//here's the callback
function serverResponse1( request, response ) {
    response.end('You are the best human being in the world!  You hit the good port:' + request.url);
}
function serverResponse2( request, response ) {
    response.end('You are the worst person ever!  You hit the shitty port:' + request.url);
}

//build the server which accepts callback (see aboce)
var server1 = http.createServer(serverResponse1); 
var server2 = http.createServer(serverResponse2);

//need to be able to listen in a server -- note: callback is inline in this one versus above where we define outside and pass in -- line 9
server1.listen(PORT1, function () {
//when we start listening... do something when we start up the server
    console.log('server has been started, listening on: http://localhost:' + PORT1);
})

server2.listen(PORT2, function () {
//when we start listening... do something when we start up the server
    console.log('server has been started, listening on: http://localhost:' + PORT2);
})