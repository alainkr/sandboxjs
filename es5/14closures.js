
// anonymous and envrionemnt aware

function generator(input) {
    var number = input;

    return function () {
        return number * 2;
    }
}

var calc = generator(900);
console.log(calc); //just the function
console.log(calc()); // the actual exec of the function  ( did capture the 900 arg )


