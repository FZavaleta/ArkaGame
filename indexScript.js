/* Configuracion general */
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

/*Variables generales del juego */
let counter = 0;

/*VARIABLES DE LA PELOTA*/
const ballRadius = 3;
//Posicion inicial de la pelota
let x = canvas.width / 1.2;
let y = canvas.height + 300;
//Velocidad de pelota
let dx = 2;
let dy = -2;

/*VARIABLE DE LA PALETA*/
const paddleHeight = 10;
const paddleWidth = 50;
/*Posiciones iniciales de la paleta*/
let paddleX = (canvas.width - paddleWidth) / 2;
let paddleY = canvas.height - paddleHeight -10


function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.closePath();
}

function drawPaddle(){
    ctx.fillReact(
        paddleX,
        paddleY,
        paddleWidth,
        paddleHeight
    )
 }

function drawBricks(){ }

function collisionDetection(){ }

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

function initEvents(){
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keydown', keyUpHandler);
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