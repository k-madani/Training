function composedValue(square , double, x=Number(document.getElementById("input").value)){
  alert(square(double(x)));
}

function double(x){
    return x*2;
}
function square(y){
    return y*y;
}