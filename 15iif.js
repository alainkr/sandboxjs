// immediately invoked functions

// all local scope
(function iif() {
    console.log("iif");
})();


// all local scope
(function iif2 (input) {
    console.log("iif"+input);
})(10);