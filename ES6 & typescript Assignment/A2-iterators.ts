function getNextArmstrong(){
    return{
        [Symbol.iterator](){
            let n=0;
    return{
        next(){
            while(true){
                let l = n.toString().length;
                let sum=0
                let temp = n;
                let r=0;
                while(temp>0){
                    r = temp%10;
                    sum+= Math.pow(r,l);
                    temp = parseInt(temp/10);
                }

                if(sum === n){
                    if(n < 1000){
                        return{value: n++,done:false};
                    }
                    else{
                        throw "Exception: Number is greater than 1000."
                    }
                    
                }

                else{
                    n++; 
                }
        }
        }
    };
        }

    };
    
}
console.log("The armstrong numbers: ")
for(let x of getNextArmstrong()){
    console.log(x);
}