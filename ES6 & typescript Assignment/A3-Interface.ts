interface Printable{
    name:string;
    age?:number;
    radius?:number;

}
let circle: Printable = {
    name:"Cricle A",
    radius: 5

}

let employee: Printable = {
    name:"Chandler",
    age: 25
}

let printAll=(circle,employee)=>{
    console.log(circle);
    console.log(employee);   
}

printAll(circle,employee);