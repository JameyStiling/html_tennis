import {renderBall,Ball} from './ball'
import {renderPaddle,Paddle} from './paddles'

const gameBall = new Ball (50,50,'red',10);
const player1Paddle = new Paddle (10,10,'blue',80);
const framerate = 30;

const updateBallPosition = (gameBall)=> {
	gameBall.x += gameBall.speedX;
	gameBall.y += gameBall.speedY;
}

const boundaryReached = (gameBallPos,boundaryPosition) => {
	return gameBallPos >= boundaryPosition || gameBallPos <= 0;
}

export default (canvasContext,canvas)=> {
	let timesRun = 0;
	const redraw = () => {
		
		//draw background
		canvasContext.fillStyle = 'black';
		canvasContext.fillRect(0,0,canvas.width,canvas.height);

		renderBall(gameBall,canvasContext)
		renderPaddle(player1Paddle,canvasContext);
		
		if (boundaryReached(gameBall.x,canvas.width)) {
			alert('game over')
		}
		if (boundaryReached(gameBall.y,canvas.height)) {
			gameBall.speedY = -gameBall.speedY
		}
		
		updateBallPosition(gameBall)
		
		//temp: will clear interval after 300 loops
		timesRun += 1;
    if(timesRun === 8300){
        clearInterval(gameLoop);
    }
	}
	const gameLoop = setInterval(redraw, 1000/framerate);
}