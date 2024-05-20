// Bad Practice: Using var instead of let or const
var greeting = "Hello, World!";
 
// Good Practice: Using const for variables that don't change
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};
 
// Bad Practice: Unused variable
let unusedVar = 42;
 
// Bad Practice: Function with no clear purpose and missing JSDoc
function doSomething() {
    let x = 10;
    let y = 20;
    let z = x + y; // Unused variable
    return x; // Return a value that is not used
}
 
// Bad Practice: Function too complex
function complexFunction(a, b, c, d, e, f) {
    if (a > b) {
        if (c < d) {
            if (e === f) {
                return a + b + c + d + e + f;
            }
        }
    } else {
        return a - b - c - d - e - f;
    }
}
 
// Good Practice: Simple and clear function
function add(a, b) {
    return a + b;
}
 
// Triggering a fixme warning
// FIXME: This is a reminder to fix this code later
function temporaryFunction() {
    console.log("This function needs to be fixed");
}
 
// Test the functions
greet("World");
console.log(add(5, 3));
doSomething();
complexFunction(1, 2, 3, 4, 5, 6);
temporaryFunction();
