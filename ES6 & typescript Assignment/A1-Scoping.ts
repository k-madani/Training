/*Q2. Scoping*/
let scoping=(user)=>{
    let profession="accountant";
    if(user==="Monica"){
        let profession = "chef";
        console.log("Profession value inside the block: "+profession);
    }
    else{
        let profession = "actor";
        console.log("Profession value inside the block: "+profession);
    }
    console.log("Profession value outside the block: "+profession);
};
scoping("Monica");
scoping("Joey");
scoping();
