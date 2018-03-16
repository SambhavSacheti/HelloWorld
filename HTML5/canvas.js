window.onload = function () {
    //drawCanvas1();
    drawCanvas2();
}

function drawCanvas1() {
    let canvas = document.getElementById("drawingCanvas1");
    let context = canvas.getContext("2d");

    // Set the line width and color (for all the lines).
    context.lineWidth = 20;
    context.strokeStyle = "rgb(205,40,40)";
    // Draw the first line, with the standard butt ending.
    context.moveTo(10, 50);
    context.lineTo(400, 50);
    context.lineCap = "butt";
    context.stroke();
    // Draw the second line, with a round cap.
    context.beginPath();
    context.moveTo(10, 120);
    context.lineTo(400, 120);
    context.lineCap = "round";
    context.stroke();

    // Draw the third line, with a square cap.
    context.beginPath();
    context.moveTo(10, 190);
    context.lineTo(400, 190);
    context.lineCap = "square";
    context.stroke();
}

function drawCanvas2() {
    var canvas = document.getElementById("drawingCanvas1");
    var context = canvas.getContext("2d");
    context.moveTo(250, 50);
    context.lineTo(50, 250);
    context.lineTo(450, 250);
    context.closePath();
    // Paint the inside.
    context.fillStyle = "blue";
    context.fill();
    // Draw the outline.
    context.lineWidth = 10;
    context.strokeStyle = "red";
    context.stroke();
    
    //  Draw a Rectangle
    context.beginPath();
    context.lineWidth = 5;      
    context.strokeStyle = "yellow";      
    context.fillStyle = "rgb(50,100,100)";
    context.fillRect(10,20,100,200);
    context.strokeRect(10,20,100,200);
    context.stroke();
}
