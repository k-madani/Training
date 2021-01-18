"use strict";
function* getNextArmstrong(x) {
    let n = x;
    while (true) {
        let l = n.toString().length;
        let sum = 0;
        let temp = n;
        let r = 0;
        while (temp > 0) {
            r = temp % 10;
            sum += Math.pow(r, l);
            temp = parseInt(temp / 10);
        }
        if (sum === n) {
            if (n < 1000) {
                yield n++;
            }
            else {
                throw "Exception: Number is greater then 1000.";
            }
        }
        else {
            n++;
        }
    }
}
console.log("Generator starts: n=153");
let arm = getNextArmstrong(153);
console.log(arm.next().value);
console.log(arm.next().value);
console.log(arm.next().value);
console.log(arm.next().value);
console.log("Generator Reset: n=0");
for (const arm of getNextArmstrong(0)) {
    console.log(arm);
}
//# sourceMappingURL=A2-generators.js.map