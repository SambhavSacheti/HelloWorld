/* ES6
Example on Generators and Iterators
https://docs.microsoft.com/en-us/scripting/javascript/advanced/iterators-and-generators-javascript
*/

//Generator function which returns a iterator
function* stringIter() {  
    var str = "bobsyouruncle";  
    var idx = 0;  
    while(idx < str.length)  
        yield str[idx++];  
}  


function* strIter() {  
    yield "jo";  
    yield* stringIter();        // Delegate call to the first StringIter function
}  

var si = stringIter();
var si2 = strIter();  

// using the next() statement to get the value
console.log(si2.next().value);  
console.log(si2.next().value);  
console.log(si2.next().value);  

// Output:  
// Jo  
// b 
// o  
