"use strict";
/*Q6. Template literals*/
let first_name = "Nico Robin";
let model = "Thinkbook 14s";
let d_no = 122;
console.log(`Sysnet Technologies 
Ticket: 109022
        I have issues in my laptop regarding camera. 
        The camera is unable to take pictures and videos. 
        Name: ${first_name}
        Laptop Model: ${model}
        Desk No: ${d_no}`);
/*Q7. Destructuring*/
let a, b, c, d;
[a, b, c, d] = ["yello", "green", "blue", "red"];
console.log(c.match(/red/g));
console.log(c.match(/blue/g));
const organisation = {
    fname: "Monica",
    lname: "Geller",
    address: {
        b_name: "Gokul Horizon",
        locality: "Kandivali-East",
        pincode: "400101"
    }
};
let { fname, lname, address: { b_name, locality, pincode }, } = organisation;
let answer = pincode.match(/400066/g);
let answer1 = pincode.match(/400101/g);
console.log(answer);
console.log(answer1);
//# sourceMappingURL=A1-Q6,7.js.map