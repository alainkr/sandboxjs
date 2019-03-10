


try {
    console.log("try block");

    not_existing_fn();
}catch (error) {
    console.log("error block");
    console.log("error caught" + error)
}finally {
    console.log("finally block");
}

