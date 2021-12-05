var canvas=document.getElementById("my_canvas");
var ctx=canvas.getContext("2d");
var color="black";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,Math.PI*2);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    var mouse_x=e.clientX-canvas.offsetLeft; 
    var mouse_y=e.clientY-canvas.offsetTop;
    console.log("x="+mouse_x+"y="+mouse_y);
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,40,0,Math.PI*2);
ctx.stroke();
}

