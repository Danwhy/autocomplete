var assert = require('assert');
var ac = require('../');

assert.equal(typeof ac, 'object');

assert.equal(typeof ac.import, 'function');

console.log('# ac.import imports a list of words into memory');
ac.import(function(err, words){
    console.log('words.txt had ' + words.length + ' words in it.');
    assert.equal(words.length, 354986);
});

console.log('# attempt to invoke ac.import without a valid callback')
var error = ac.import('string');
assert.equal(error.message, 'callback must be a function');

console.log('# ac.findWord finds a string in words array');
ac.import(function(){
    ac.findWord('awes', function(err, found){
        assert.equal(err, null);
        assert.equal(found.length, 8);
    });
});

console.log('# ac.stats tracks which words/strings were searched for');
ac.import(function(){
    ac.stats('awesome', function(err, stats){
        assert.equal(stats['awesome'].length, 1);
    });
});
