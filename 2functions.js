//hoisting
calc();

function calc() {
    console.log('inside function');
}

var calc2 = function () {
    console.log('inside function');
}

calc2();
console.log(typeof calc2);//function

var anotherFn = calc2;
anotherFn();

var anotherFnWillError = calc2();

// anotherFnWillError(); will error with anotherFnWillError is not a function because return of calc2() was assign not the function reference it self

console.log(typeof anotherFnWillError)


function calc3() {
    return 'Inside function'
}

var returned = calc3();
console.log(returned);

function calc4(number1,number2) {
    return number1 + number2;
}

console.log(calc4()); //NaN because passing nothing is NaN + NaN = NaN

console.log(calc4(10, 10));


