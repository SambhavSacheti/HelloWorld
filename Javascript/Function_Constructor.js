// Shows how Function constructor works
let message = "Hello World! - Function constructor example";
var funct =
    new Function("x", "const y=1; console.log('x + y = ' + x+y); return y;");
console.log(message);
const read = readline();
console.log("y = " +  funct(2));
