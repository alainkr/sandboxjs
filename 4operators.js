//addition will work with number but also strings
var a = 5;
var b = 10;

a += b;

console.log(a); //15

console.log(5.4 + 10.5); //15.9
console.log('aa' + 'bb'); // aabb
console.log('aa' + 3); // aa3
console.log(3 + 'dd'); //3dd

console.log(['1,2,3']);// [ '1,2,3' ]

console.log(true);//true
console.log(false);//false
console.log(1 + true);//2 !! true is one
console.log(1 + false);//1 !! false is zero
console.log(3 + false + 'ff');//3ff
console.log(3 + true + 'ff');//4ff


//substraction will coherce to numbers
console.log('aaa' - 'b'); //NaN

console.log(12 - '1'); //11 !!


//multiplication

console.log(1.3 * 2.2); // floating rounding error
console.log(1.3 + 2.2); // ok

if ((1.3 * 2.2).toFixed(2) == 2.86) {

    console.log(true);
}

if ((1.3 * 2.2).toFixed(5) == 2.86) {

    console.log(true);
}

console.log(2 * '2.2'); //4.4
console.log('2.2' * 2); //4.4
console.log(2.2 * '2'); //4.4
console.log(2.2 * '2.2'); //4.840001
console.log('2' * 2.2); //4.4
console.log(2.2 * null); //0 null is zero

console.log('ae' * 'a'); // NaN


console.log(1 == 1);//true value only
console.log(1 === 1);//true value and type

console.log(1 == '1');//true
console.log(1 === '1');//false

console.log(1 != '2');//true
console.log(1 !== '2');//true
console.log(2 >= '1');//true
console.log(0 == null); //false you can't compare null except to undefined
console.log(null == undefined);
