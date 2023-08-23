console.log(this);
var name = "Harsh";
function user() {
    console.log(this.name); // window object
    (() => {
        console.log("In here ->",this);
    })();
    // greetUser(); // invoked from inside the user() function -> Local
}
user();