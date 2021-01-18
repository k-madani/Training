/*Q4. Arrow functions */
let arr=[];
let names_1=['tom','harry','luffy'];
for(let i in names_1){
    let l=names_1[i].length;
    let x={
        name: names_1[i],
        length: l
    };
    arr.push(x);
}
for(let i in arr){
    console.log(arr[i]);
}
