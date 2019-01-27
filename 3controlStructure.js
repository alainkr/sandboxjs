function cond(condition) {
    if (condition) {
        console.log('Executed');
    } else {
        console.log('Not Executed');
    }
}


var condition = null; //not executed
cond(condition); //not executed


cond(0); // false : No executed
cond(1); // true : executed
cond(2); // also true : executed


console.log(1 == true); //true
console.log(2 == true); //false

// 0 == false else true
// it's not 1==true rest is false !!


cond(-1); // also true : executed

cond('text');// also true
cond('false');// also true any text is true
cond(null); // false
// /!\

switchExample(8); //case8
switchExample(1); //case1
switchExample(-1); //-1


function switchExample(luckyNumber) {

    switch (luckyNumber) {
        case 1:
            console.log('case1');
            break;
        case 8:
            console.log('case8');
            break;
        default:
            console.log(luckyNumber);

    }
}


var sum = 0;
for (var i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log(sum);

var sum = 0;
for (var i = 0; i < 10; i++) {

    if (i == 2) {
        break;
    }
    sum = sum + i;
}
console.log(sum);

var sum = 0;
for (var i = 0; i < 10; i++) {
    if (i == 9) {
        continue;
    }
    sum = sum + i;
}
console.log(sum);

console.log(typeof (r=0)) //false
console.log(typeof (r=1)) //true
console.log(typeof (r=2)) //true
//assigment not condition !!
if(r=1 ) {
    console.log("true")
}

if(r=0 ) {
    console.log("true")

}else{
    console.log("(r=0) is false ")
}
var array = [1, 2, 3];

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

var array = undefined; //will error
/*
"TypeError: Cannot read property 'length' of undefined
 */




var number =5;

while (number < 10) {
    number++;
    console.log(number);
}


var condition = false;
do {
    console.log('once');
} while (condition)
