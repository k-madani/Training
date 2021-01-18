function pattern(){
    var x=[];
    var i;
    for(i=0;i<3;i++){
        x.push(prompt("Input"));
    }
    /*for(i=0;i<3;i++){
        if(x[i]<1 || x[i]>30){
            x[i].pop();
        }
    }*/
    var y=document.getElementById("result");
    for(i=0;i<x.length;i++){
        y.innerHTML +="Input: "+x[i]+"<br>";
    }
    var j;
    for(i=0;i<x.length;i++){
        for(j=0;j<x[i];j++){
            y.innerHTML +="*";
        }
        y.innerHTML +="<br>";
    }
    
}