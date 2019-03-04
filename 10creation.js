// 4 ways


// literal
var personLiteral = {
    "name": "elvin",
    "age": 48
};

console.log(personLiteral);
console.log(typeof personLiteral); //object


// new Object

var personFromObject = Object();
personFromObject.name = "elvin";
personFromObject.age = 48;

console.log(personFromObject);
console.log(typeof personFromObject); //object


// Object non prototype
var personFromCreate = Object.create(null);
personFromCreate.name = "elvin";
personFromCreate.age = 48;

console.log(personFromCreate);
console.log(typeof personFromCreate); //object


// constructor
function Person(name,age) {
    this.name= name;
    this.age= age;
    this.married = false;
}

Person.prototype.greet = function () {
    console.log('Hello ' + this.name);
}
var personConstructor = new Person("elvin", 48);
console.log(personConstructor);
console.log(typeof personConstructor);
console.log(personConstructor instanceof Object);
console.log(personConstructor instanceof Person);
personConstructor.greet();
