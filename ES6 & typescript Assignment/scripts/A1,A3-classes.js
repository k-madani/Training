"use strict";
/*Q8. class & modules*/
class Account {
    constructor(id, name, balanceAmt) {
        this.id = id;
        this.name = name;
        this.balanceAmt = balanceAmt;
    }
}
class SavingAccount extends Account {
    constructor(id, name, balanceAmt, interest) {
        super(id, name, balanceAmt);
        this.interest = interest;
    }
}
class CurrentAccount extends Account {
    constructor(id, name, balanceAmt, cash_credit) {
        super(id, name, balanceAmt);
        this.cash_credit = cash_credit;
    }
}
const Jay = new SavingAccount(123, "Jay", 10000, 7.5);
const Vijay = new CurrentAccount(124, "Vijay", 12000, 5000);
let total = Jay.balanceAmt + Vijay.balanceAmt;
console.log(total);
//# sourceMappingURL=A1,A3-classes.js.map