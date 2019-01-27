var person = {
    name: 'john',
    "last-name" :'coltran',
    age: 48,
    married: true,
    hobbies: [
        'music',
        'art',
        'food'
    ],

    greet :  function () {
        //this refer to current object otherwise name is global scope var
        console.log('Hello ' + this.name + ' my age is ' + this.age) ;
    }
};


console.log(person);
console.log(person.name);
console.log(person['name']);
//console.log(person."last-name"); not possible use ['']
console.log(person['last-name']);
var prop= 'name'
console.log(person[prop]);
person.greet();


var elvin= new Object();
elvin.name='elvin';
elvin['last-name']='jones';

console.log(elvin);

var oo = {};
oo.prop='val';
console.log(oo);

var oo2 = {};
oo.prop='val';
console.log(oo === oo2);//false <> pointer ref


var objectWithNullPrototype = Object.create(null);
objectWithNullPrototype.name='elvin';
console.log(objectWithNullPrototype);


var objectWithPersonPrototype = Object.create(person);
objectWithPersonPrototype.name = 'ee';
console.log(objectWithPersonPrototype); // should print other prop /!\ works in jsbin
console.log(objectWithPersonPrototype.age); // actually there juste not logged just like if object with out prop is logged
objectWithPersonPrototype.greet(); //

// default prototype is Object.prototype
console.log(objectWithPersonPrototype.prototype._)
