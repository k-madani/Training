"use strict";
let _previousno = Symbol('pno');
let _currentno = Symbol('cno');
class Fibonacci {
    constructor() {
        this[_previousno] = 0;
        this[_currentno] = 1;
    }
    next(n) {
        let final;
        for (let i = 0; i < n; i++) {
            console.log("Iteration " + i + " - ");
            console.log("previous no: " + this[_previousno]);
            console.log("next no: " + this[_currentno]);
            final = this[_previousno] + this[_currentno];
            this[_previousno] = this[_currentno];
            this[_currentno] = final;
        }
        return final;
    }
}
;
let f = new Fibonacci();
console.log("The next number is: " + f.next(5));
//# sourceMappingURL=A2-symbols.js.map