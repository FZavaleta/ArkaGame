/* Configuracion general */
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let counter = 0;
/*Variables de las pelotas*/
const ballRadius = 3;
let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 2;
let dy = -2;

function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0, Math.PI*2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.closePath();
}

function drawPaddle(){

}

function drawBricks(){

}

function collisionDetection(){

}

function ballMovement(){
    //Rebote cuando llegue a los limites laterales
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) 
    {
        dx = -dx;
    }

    //Rebotar parte de arriba
    if (y + dy < ballRadius){
        dy = -dy;
    }

    //Game Over - auxiliar
    if(y + dy > canvas.height - ballRadius){
        console.log("Game Over");
        document.location.reload()

    }

    x += dx;
    y += dy;

}

function paddleMovement(){

}

function cleanCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

canvas.width = 448;
canvas.height = 512;

function draw (){
    cleanCanvas();
    //Dibujar elementos
    drawBall();
    drawPaddle();
    drawBricks();
    
    
    //Colisiones y movimientos
    collisionDetection();
    ballMovement();
    paddleMovement();
    
    window.requestAnimationFrame(draw);
}

draw();