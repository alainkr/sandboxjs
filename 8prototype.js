var person = {
    name: "elvin",
    age: 27
};


// adding greet to Object.prototype root prototype to all objets
Object.prototype.greet = function () {
    console.log("Hello there: " + this.name);
};


// lookup methode in object, prototype , prototype of prototype etc.
person.greet();

var max = Object.create(person);

console.log(max.name);//max

max.greet(); // not in max , not in personLiteral , but in proto of object
max.name = "max";
max.greet();

console.log(Object.getPrototypeOf(max) == person);

console.log(Object.getPrototypeOf(Object.getPrototypeOf(max)) == Object.prototype);

