var fs = require('fs');
var ac = {};

ac.import = function(callback){
    if (typeof callback !== 'function'){
        return new Error('callback must be a function');
    }
    var filename = __dirname + '/words.txt';
    fs.readFile(filename, 'utf-8', function(err, data){
        ac.words = data.split('\n');
        return callback(err, ac.words);
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
    return callback(null, found);
}

ac.stats = function(word, callback){
    ac.searches = ac.searches || {};
    ac.searches[word] = ac.searches[word] || [];
    ac.searches[word].push(new Date().getTime());
    console.log(ac.searches);
    return callback(null, ac.searches);
}

module.exports = ac;
