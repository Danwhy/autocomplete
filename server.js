var http = require('http');
var port = process.env.PORT || 3000;
var ac = require('./index.js');
ac.import(function(err, count){
    console.log('imported a bunch of words')
});
var fs = require('fs');
var index = fs.readFileSync(__dirname + '/index.html');

http.createServer(function handler(request, response){

    var url = request.url;
    if(url.length === 1){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(index.toString());
    }
    if (url.indexOf('/find/') > -1){
        // localhost:3000/find/:word
        var word = url.split('/')[2];
        console.log(word);
        ac.findWord(word, function(err, found){
            console.log(found.length);
            response.end(found.join(','));
        });
        //response('word: ', word);
    }
    else {
        response.end('hello dan');
    }
    response.end('hello world!');

}).listen(port);

console.log('node http server listening on http://localhost:' + port);
