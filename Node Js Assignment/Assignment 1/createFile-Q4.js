//Question 4 

var fs = require('fs');
var content=process.argv[2];
fs.writeFile('Example4.txt',content,'utf8',function(err){
      if(err){
            throw err;
      }
      console.log("File Saved!");
});
