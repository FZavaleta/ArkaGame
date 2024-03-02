const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 448;
canvas.height = 512;

function draw (){
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