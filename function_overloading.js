// Function Overloading is a feature found in many object-oriented programming languages, where multiple functions can share the same name but differ in the number or type of parameters. While languages like C++ and Java natively support function overloading, JavaScript does not support this feature directly.

// In JavaScript, if two or more functions share the same name, the last defined function will overwrite the previous ones. This is because JavaScript treats functions as objects, and a subsequent function with the same name simply reassigns the function reference.

// Unlike other programming languages, JavaScript Does not support Function Overloading.

function foo(arg1) {
    console.log(arg1);
}

/* The above function will be
   overwritten by the function 
   below, and the below function 
   will be executed for any number
   and any type of arguments */
function foo(arg1, arg2) {
    console.log(arg1, arg2);
}

// Driver code
foo("Geeks")


// Output :Geeks undefined