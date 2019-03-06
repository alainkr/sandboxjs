var a = '5';
console.log(typeof  a);
var aInt = parseInt(a);
console.log(typeof aInt);
console.log(typeof parseInt('text')); //NaN but is a number

console.log(parseInt('FBB123', 16)); // Hex to decimal

var ten = 10;
console.log(ten.toString());

var ffloat = 10.31241;
console.log(ffloat.toFixed()); // 10
console.log(ffloat.toFixed(1 )); // 10.3