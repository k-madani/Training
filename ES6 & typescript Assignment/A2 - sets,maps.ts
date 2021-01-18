let Chatroom1 = new Set();
let user1 = new Map();
 user1.set("name", "Krishna");
 user1.set( "message", "Blinded by the lights.") ;

 let user2 = new Map();
 user2.set("name", "Varsha");
 user2.set( "message", "Let it go") ;

 let user3 = new Map();
 user3.set("name", "Mitul");
 user3.set( "message", "After hours"); 

Chatroom1.add(user1);
Chatroom1.add(user2);
Chatroom1.add(user3);
console.log("Number of users in Chatroom1: ");
console.log(Chatroom1.size);


let Chatroom2 = new Set();
let user4 = new Map();
 user4.set("name", "Harsh");
 user4.set( "message", "Apocalypse") ;

 let user5 = new Map();
 user5.set("name", "RK");
 user5.set( "message", "Photograph");

 let user6 = new Map();
 user6.set("name", "Rishi");
 user6.set( "message", "Post Malone");

Chatroom2.add(user4);
Chatroom2.add(user5);
Chatroom2.add(user6);
console.log("Number of users in Chatroom2: ");
console.log(Chatroom2.size);

let getInfo1 = () => {
for(let entry of user1.entries()){
    console.log(`${entry[0]} -> ${entry[1]}`);
}
for(let entry of user2.entries()){
    console.log(`${entry[0]} -> ${entry[1]}`);
}
for(let entry of user3.entries()){
    console.log(`${entry[0]} -> ${entry[1]}`);
}
};


let getInfo2 = () => {
    for(let entry of user4.entries()){
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
    for(let entry of user5.entries()){
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
    for(let entry of user6.entries()){
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
    };
    console.log("Chatroom 1: ");
    getInfo1();
    console.log("Chatroom 2: ");
    getInfo2();