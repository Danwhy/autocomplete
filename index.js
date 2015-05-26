var fs = require('fs');
var ac = {};

ac.import = function(callback){
    var filename = __dirname + '/words.txt';
    fs.readFile(filename, 'utf-8', function(err, data){
        if (err){
            console.log(err);
        }
        ac.words = data.split('\n');
        callback(ac.words);
    });
}

module.exports = ac;
