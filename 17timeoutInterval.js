console.log("osetTimeout is  a meth on the window object");
setTimeout(function () {
        console.log("finished");
    }
, 2000);


var interval = setInterval(function () {
 console.log(".")

},500);


// clear interval after some time
setTimeout(function () {
    console.log("clear interval");
    clearInterval(interval);
}, 2500);