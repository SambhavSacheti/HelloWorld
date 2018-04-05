


function drawFrame(y) {      // Clear the canvas.       
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle = "red";
    context.strokeStyle = "black";        
    context.arc(30,x, 10, 0, Math.PI * 2);
    context.fill();
    //context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    context.stroke();
     console.log("circle drawn:" + x);
     x=x+10; 
     if(canvas.height<=x-25)
     clearInterval(intervalId);
}
let x;
let intervalId;
function dropCircle() {
    // Remove all the circles.
    clearInterval(intervalId);
    circles = [];  
    x=0;
    intervalId = setInterval(drawFrame,100,x);    
}
