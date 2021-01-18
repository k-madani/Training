"use strict";
/*Q5. Parameter handling*/
let add = (op1 = 3, op2 = 4) => {
    let sum = op1 + op2;
    console.log(`Sum is: ${sum}`);
};
add();
add(6, 7);
add(undefined, 20);
add(30, undefined);
let userFriends = (name, ...friends) => {
    console.log("Name: " + name);
    if (friends.length === 0) {
        console.log(friends);
    }
    else {
        for (let i in friends) {
            console.log(friends[i]);
        }
    }
};
userFriends("Monica", undefined);
userFriends("Luffy", "Ace", "Sabo");
userFriends("Monica", "Rachel", "Joey", "Phoebe");
let printCapitalNames = (...names) => {
    for (let i in names) {
        console.log(names[i].toUpperCase());
    }
};
let names = ["monica,rachel,phoebe,joey,chandler"];
printCapitalNames(...names);
//# sourceMappingURL=A1-parmeter handling.js.map