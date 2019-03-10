
var btn = document.querySelector('button');


btn.addEventListener('click',listener1);

btn.addEventListener('click',listener2);

function listener1(ev) {

    console.log('listener1');
}

function listener2(v) {

    console.log('listener2');
}

setTimeout(function(){ btn.removeEventListener('click',listener2);},5000)