var string = 'abc';
var pattern = /ab/;

console.log(pattern.exec(string)); // ['ab'] use pattern
console.log(/ac/.exec(string)); // null
console.log(/ab/.test(string)); // true
console.log(string.match(pattern)); //   use string
