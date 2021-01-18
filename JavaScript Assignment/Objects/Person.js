var person={
    fname:"Ram",
    lname:"Sonakam",
    mname:"Krishna",
    fulllname: function(){
        return this.fname+" "+this.mname+" "+this.lname;
    }
};
document.write("Person details - <br>")
document.write("First name: "+person.fname+"<br>");
document.write("Middle name: "+person.mname+"<br>");
document.write("Last name: "+person.lname+"<br>");
document.write("Full name: "+person.fulllname()+"<br><br>");
person.lname="Madani";
document.write("After modification of last name - <br>")
document.write("Last name: "+person.lname+"<br>");




