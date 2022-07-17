var stcolor=document.getElementById('storkcolor');
var fcolor=document.getElementById('fillcolor');
function selectedstrokcolor(){
     var stcolor1=stcolor.value;
     console.log(stcolor);
     return stcolor1;  
}
function selectedfillcolor(){
    var fcolor1=fcolor.value;
    console.log(fcolor); 
    return fcolor1;
}

var canvas = document.getElementById("my-canvas")
var ctx=canvas.getContext("2d");


function circle(){
    ctx.beginPath(); 
    ctx.arc(270,150,50,0, 2 * Math.PI ); 
    ctx.fillStyle=selectedfillcolor();
    ctx.fill();
    }
function rect(){
    
    ctx.beginPath(); 
    ctx.fillStyle=selectedfillcolor();
    ctx.fillRect(50,200,200,150);
    }    
function line() {
    
    ctx.beginPath(); 
    ctx.moveTo(300,230); 
    ctx.lineTo(400,270); 
    ctx.strokeStyle=selectedstrokcolor();
    ctx.stroke();
}

function earse(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(){
    
        ctx.strokeStyle =selectedstrokcolor(); 
        ctx.lineWidth = 2;
        
        canvas.onmousedown = startDrawing;
        canvas.onmouseup = stopDrawing;
        canvas.onmousemove = draw;
        var isDrawing;
        function startDrawing(e) {
           isDrawing = true;
           ctx.beginPath();
           ctx.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
        }
        
        function draw(e) {
           if (isDrawing == true) {
              var x = e.pageX - canvas.offsetLeft;
              var y = e.pageY - canvas.offsetTop;
           
              ctx.lineTo(x, y);
              ctx.stroke();
           }
        }
        
        function stopDrawing() {
           isDrawing = false;
        }  
     
}









