//Question 3

var fs = require('fs');
var path=require('path');
var p="./";

fs.readdir(p,function(err,files){
    if(err){
      return console.log(err);
    }
    files.forEach(function (file) {n
      if (fs.statSync(file).isDirectory()) {
        console.log ("FOLDER: " + file); 
      }
      else{
        console.log("FILE: " + file);
      }
    });
});
