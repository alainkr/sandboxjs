function isEqual(compare, number = compare) {
    console.log(compare);
    console.log(number);

    return compare === number;
}

console.log(isEqual(10));
console.log(isEqual(10,23));


let def = 5;
function isEqual2(compare, number = def) {
    console.log(compare);
    console.log(number);

    return compare === number;
}

console.log(isEqual2(10));


function isEqual3(compare =10, number) {
    console.log(compare);
    console.log(number);

    return compare === number;
}

console.log(isEqual3(10));// 2nd param is undef