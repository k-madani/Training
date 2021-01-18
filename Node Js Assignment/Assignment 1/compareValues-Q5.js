//Question 5

var fs = require('fs');
var fileName = 'ReadMe.txt'
var wordToFind = process.argv[2].toLowerCase();

fs.readFile(fileName, 'utf8', function(err, contentFile) {  
    if (err) {
        throw err;
    }
    var word_text = contentFile.toLowerCase().split(' ');
    var count_words = word_text.filter(function(word){
        return word.includes(wordToFind);
    })
    console.log('The word "' + wordToFind + '" appears ' + (count_words.length+1) + " times in the text.");
});