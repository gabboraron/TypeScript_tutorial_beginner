"use strict";
let age = 20456456;
let course = 'TS';
let is_published = false;
let level;
level = 1;
level = 'a';
let numbers = [];
numbers[0] = 1;
numbers[1] = 2;
numbers.forEach(n => n.toString);
let user = [1, 'Mosh'];
user.push(1);
;
let mySize = 2 /* Size.Medium */;
console.log(mySize);
voidRender(5);
function voidRender(document) {
    let tmp = document * 10;
}
function render(document) {
    console.log(document);
    return 0;
}
let myObject = { id: 12, name: "aaaa" };
let myObjectWithOptinalName = { id: 12 };
let myObjectWithaliases = { id: 12,
    name: 'Bella',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    //narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
//# sourceMappingURL=index.js.map