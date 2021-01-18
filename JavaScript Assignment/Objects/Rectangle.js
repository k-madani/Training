
class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    
}
var rect1=new Rectangle(4,5);
document.write("To implement rectangle class  <br><br>");
document.write("width: "+rect1.width+", height: "+rect1.height+"<br>");
Rectangle.prototype.getArea=function(){
    return this.width*this.height;
}
document.write("Area: "+rect1.getArea());
