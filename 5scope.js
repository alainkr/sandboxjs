
var var1='global scope';

function f() {

    console.log(var1);
}
function f2() {

    var localScope ='localScope'
    var var1='masking local var'
    console.log(var1);
}

//console.log(localScope);  //  localScope is not defined

f(); //'global scope

f2(); // 'masking..'

function fwithGlobalVar() {
    varGlobal = 'varGlobal only in non strict mode';
    console.log(varGlobal);
}

fwithGlobalVar();
