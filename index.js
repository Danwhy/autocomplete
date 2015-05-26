var fs = require('fs');
var ac = {};

ac.import = function(callback){
    if (typeof callback !== 'function'){
        return new Error('callback must be a function');
    }
    var filename = __dirname + '/words.txt';
    fs.readFile(filename, 'utf-8', function(err, data){
        if (err){
            console.log(err);
        }
        ac.words = data.split('\n');
        return callback(ac.words);
    });
}

ac.findWord = function(word, callback) {
    var found = [];
    for (var i = 0; i < ac.words.length; i++){
        if(ac.words[i].search(word) === 0){
            found.push(ac.words[i]);
        }
    }
    console.log(found);
    callback(null, found);
}

module.exports = ac;
