// "use strict"

console.log(this);
var name = "Harsh";
function user() {
    console.log(this.name); // window object
    function greetUser() {
        console.log("In here -> ",this);
    }
    greetUser(); // invoked from inside the user() function -> Local
}

user(); // global scope -> this will always be equal to window object