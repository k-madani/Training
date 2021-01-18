function concate_string(){
    var num=Number(document.getElementById("input").value);
    var str=document.getElementById("str").value;
    var final_string="";
    while(num>0){
        final_string=final_string+str;
        num--;
    }
    /*var y=document.getElementById("result");
    y.innerHTML += final_string;*/
    document.getElementById("result").innerHTML=final_string;

}