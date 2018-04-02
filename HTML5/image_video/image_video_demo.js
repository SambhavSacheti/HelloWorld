var canvas;
var context;
var vid;

window.onload = function () {
    canvas = document.getElementById("drawingCanvas");
    context = canvas.getContext("2d");
    var img = document.getElementById("imageId");
    img.src = "http://www.gstatic.com/webp/gallery/1.jpg"
    vid = document.getElementById("videoId");
    vid.type = "video/mp4";
    vid.src = "https://www.w3schools.com/HTML/mov_bbb.mp4";
    //document.getElementById("demo").addEventListener("click", myFunction);
    // (Put your fabulous drawing code here.)
};

function imagebuttonOnClick() {
    clearCanvas();
    var img = document.getElementById("imageId");
    context.drawImage(img, 10, 10);
};

function drawtextOnClick() {
    clearCanvas();
    context.font = "bold 20px Arial";
    context.textBaseline = "top";
    context.fillStyle = "black";
    context.fillText("I'm stuck in a canvas. Someone let me out!", 10, 10);
}
function TakeVideoScreenshot() {
    clearCanvas();
    context.drawImage(vid, 0, 0,
        canvas.width, canvas.height);
};

function Play() {
    vid.Play();
}

function Pause() {
    vid.Pause();
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
//<source src=http://techslides.com/demos/sample-videos/small.webm type=video/webm> 
  //      <source src=http://techslides.com/demos/sample-videos/small.ogv type=video/ogg> 
   //     <source src=http://techslides.com/demos/sample-videos/small.mp4 type=video/mp4>
    //    <source src=http://techslides.com/demos/sample-videos/small.3gp type=video/3gp>
