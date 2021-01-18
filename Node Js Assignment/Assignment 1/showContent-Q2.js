//Question 2

var fs=require('fs');
var fileName=process.argv[2];
fs.readFile(fileName,'utf8',function(err,data){
        if(err){
                throw err;
        }
        else {
                console.log(data);
        }   
});