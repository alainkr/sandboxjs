var today = new Date();

console.log(today);
console.log(today.toDateString());
console.log(today.toISOString());
console.log(today.toISOString());

var theoBday = new Date(2000, 5, 8);
console.log(theoBday); // ISODate
console.log(theoBday.toDateString()); //Thu Jun 08 2000

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
var thomasBday = new Date('1998/07/13');
console.log(thomasBday.toDateString());


console.log(Date.parse('2016/05/20')); // epoch


console.log(today.getDate());
console.log(today.getDay());
console.log(today.toTimeString());

