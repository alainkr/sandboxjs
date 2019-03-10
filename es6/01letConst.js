if (true) {
    var nameGlobal = 'max'; //global var
    console.log(nameGlobal);
}
if (true) {
    let name = 'MAX'; //block scope
    console.log(name);
}
console.log(nameGlobal);
try {
    console.log(name); //error
} catch (e) {
    console.log('name is not defined in that scope');
}

const AGE =27;

try {
    AGE = AGE + 1;
}catch(e){
    console.log('cant reassign const');
}

const AGES = [12, 24];
AGES.push(34);
console.log(AGES); // const is non reassignment not read only


//hoisting doesnt work with let