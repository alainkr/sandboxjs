
function message(mes) {
    console.log(mes);
    console.log(message.name); //name of the function  // will be kept also if you assign to another var
    console.log(message.length); // nb of arg
    console.log(arguments.length);

    console.log(arguments); // build in prop

}


message('hello',10);
