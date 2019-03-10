//Lec 60


//constructor fn
// creating implicit prototype
function Person() {
    this.maried = false;
}


//using it
var person = new Person();


person.name = "elvin";

console.log(person);
console.log(Object.getPrototypeOf(person));
console.log(Object.getPrototypeOf(person) == Person.prototype);

Person.prototype.greet = function () {
    console.log('Hello ' + this.name);
}

person.greet();
console.log(person);

//prototype and consttuctor not the same thing
//defining a constructor also defined a prototype

Person.prototype.name = 'ELVIN';
Person.prototype.lastname = 'JONES';

console.log(person.name + ' ' + person.lastname);
/*

A better solution is to normally put all generic implementations such as functions in the prototype so that no matter how many instances are created, they will only refer to one instance of function in memory.

The general consensus (e.g. stackoverflow) seems to be to actually put all methods on the prototype, since then the javascript engine creates this method(s) only once and doesn't have to duplicate it on each instance of objects created via the constructor.
 */
console.log(person instanceof Person);

//next 61


function Persone(nom, age) {
    this.nom=nom;
    this.age=age;
}

var el = new Persone('elvin', 55);
console.log(el);


// 4 ways
