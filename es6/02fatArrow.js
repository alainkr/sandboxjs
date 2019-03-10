function fun() {
    console.log('fun');
}

fun();


let fn = () => {
    console.log('lambda');
};
let fn2 = () => console.log('lambda one liner');
let fn2returning = () => 'lambda one liner returning ';


fn();
fn2();
console.log(fn2returning());


var add = (a, b) => a + b;
var square = a => a * a;

console.log(add(5, 5));
console.log(square(10));


setTimeout(() => console.log('Hello'), 1000);


// with fat arrow this doesn't change with regards to the context

var button = document.querySelector('button');

function funHanlder() {
    console.log(this);

}

let funHandlerLambda = (e) => console.log(this);


button.addEventListener('click', funHanlder); // this is not button
button.addEventListener('click', funHandlerLambda); // this  is the same this as when defined
