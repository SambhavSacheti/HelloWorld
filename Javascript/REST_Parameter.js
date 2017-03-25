let message = "Hello World - Rest Parameter"
function function_withRESTParam(a,b,...param) {
    let result = a+b;
    for (let i = 0; i < param.length; i++) {
        result+= param[i];
    }
    return result;
}

message = `Example of a function with REST Parameters. This function adds and print result of all parameters. 
Function expects 2 normal parameters and a REST parameter.`;
console.log(message);

console.log("Call function with only 2 parameters: " + function_withRESTParam(1, 2),'color: blue; font-size: x-large');  
console.log("Call function with only 3 parameters: " + function_withRESTParam(1, 2,3));
console.log("Call function with only 3 parameters: " + function_withRESTParam("Javascript", " is", " amazing!", " ",
 "loving ", "it " + ":-D" ));