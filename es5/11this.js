

function fn() {
    console.log(this);

}

fn(); // here this is the global


var o = {
    name: "o",
    fn: fn
};

o.fn();  // here this this is o


var another = {
    name: "another"

};


//
// you can rebind the this variable to something specific ( probably would never use that)
 o.fn.bind(another)();

o.fn.bind(another, 'if had more param')();

o.fn.call(another, 'if had more param'); // call immediatly
o.fn.apply(another, ['if had more param']); // param as array
