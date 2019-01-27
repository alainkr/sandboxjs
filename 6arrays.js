var array = [1, 2, 3];

console.log(array);
console.log(array.length);
console.log(array[0]);
array[0] = 100;
console.log(array[0]);
array[3] = 100; //can add also !!
console.log(array);
console.log(array.length);
array[5] = 100; //can add also !!
console.log(array);


array.forEach(function (e, i, a) {
    console.log('elem ' + e + ' at ' + i + ' of ' + a);
    // the array
});


array.push(7); //add to the end
console.log(array);
array.push(8);
console.log(array);

var last = array.pop(); // take from the last

console.log(array);
console.log(last); //8

var first = array.shift(); // take from the 0 elem
console.log(first);
console.log(array);

//add to begining
array.unshift(0);
console.log(array);
var indexOf3 = array.indexOf(3);
console.log(indexOf3);

console.log('before splice'+ array);
var newArrayFromPos3 = array.splice(3); //changes the array
console.log('after splice'+ array);
console.log('new array from splice'+ newArrayFromPos3);

var start =2;
var offset =3;
var newArrayFromPos3toPos5 =  [1,2,3,4,5].splice(start,offset);
console.log(newArrayFromPos3toPos5);


//slice doesn't change array

var start = 1;
var end = 3;

var arrayOfChar=['a', 'b', 'c', 'd', 'e'];
var subArray = arrayOfChar.slice(start, end);
console.log(arrayOfChar);
console.log(subArray);



var array2OrMore = array.filter(function (value) {
    return value >= 2;
});
console.log(array2OrMore);

var arrayOfCharUpper = arrayOfChar.map(function (value) {
    return value.toUpperCase();
});
console.log(arrayOfCharUpper);


console.log('array', array);
var reduced = array.reduce(function (previousValue, currentValue) {
    console.log('prev:' + previousValue + ' current' + currentValue);
    return previousValue + currentValue;
});
console.log(reduced);


var array2revese = [1, 2, 3];
console.log(array2revese.reverse()); //changes array
console.log(array2revese);

var arrayConCated = array2revese.concat([4, 5]); //doesnt change
console.log(arrayConCated);
console.log(array2revese);

console.log(array2revese.join(','));
