var fs=require('fs');
fs.readFile('ReadMe.txt','utf8',function(err,data){
    if(err){
        throw err;
    }
    console.log(data);
});

var name=process.argv[2];
console.log("Hello "+name);