canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
color="blue";
widht_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){

    mouseEvent="mouseDown";
    color=document.getElementById("color").value;
    widht_of_line=document.getElementById("width_of_the_line").value;
    
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){

    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){

    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){

    current_position_of_mousex=e.clientX-canvas.offsetLeft;
    current_position_of_mousey=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown") {
        
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widht_of_line;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_mousex,current_position_of_mousey);
        ctx.stroke();
    }

    last_position_of_x=current_position_of_mousex;
    last_position_of_y=current_position_of_mousey;
}

function clear() {
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}