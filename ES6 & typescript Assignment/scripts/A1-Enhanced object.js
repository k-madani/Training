"use strict";
/*Q3. Enhanced object properties*/
let order = {
    id: 1,
    title: "abc",
    price: 1679,
    printOrder() {
        console.log(this.id);
        console.log(this.title);
        console.log(this.price);
    },
    getPrice() {
        console.log(this.price);
    }
};
order.printOrder();
order.getPrice();
let order2 = Object.assign({}, order);
order2.printOrder();
//# sourceMappingURL=A1-Enhanced object.js.map