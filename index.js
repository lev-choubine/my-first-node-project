const {add, subtract, beBasic} = require("./myModule");

var name="Lev Choubine";
console.log(name);

function printName(person){
    return `Hello, ${person}`
}

console.log(printName(name));

console.log(beBasic());

console.log(add(5, 50));