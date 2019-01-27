var v = 5;
console.log(v);// 5
console.log(typeof v); // number

var vtext = 'coltrane';
console.log(vtext);
console.log(typeof vtext); //string

var vboolean = true;
console.log(vboolean);
console.log(typeof vboolean); //boolean

var vfloat = 6.5;
console.log(vfloat);
console.log(typeof vfloat); //number


var array1 = [1, 2, 3];
console.log(typeof array1); //object

var array1 = [1, 2, 3, '4'];
console.log(array1);
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[4]); //undefined


var array2 = undefined;   // avoid
console.log(array2);


var arrayNull = null;
console.log(arrayNull);
console.log(null == undefined); //true
console.log(null === undefined); //false

var var1 = NaN;
console.log(var1);
console.log(typeof var1); //number !!

console.log(typeof undefined); //undefined
console.log(typeof null); //object


//objects
var varObject = {name: 'john'};
console.log(varObject);
console.log(typeof varObject); //object
console.log(varObject.name);

//hoisting (doesn"t work in intellij but ok in plunker
// reorder for declaration
var5 = 5;
console.log(var5);

var var5;