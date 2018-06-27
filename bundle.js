(function () {
	'use strict';

	class Ball {
		constructor (x,y,color,size) {
			this.x = x;
			this.y = y;
			this.color = color;
			this.size = size;
			this.speedX = 5;
			this.speedY = 5;
		}
	}

	const renderBall = (ball,context) => {
		context.fillStyle = ball.color;
		context.fillRect(ball.x,ball.y,ball.size,ball.size);
	};

	class Paddle {
		constructor (x,y,color,length) {
			this.x = x;
			this.y = y;
			this.color = color;
			this.width = 12;
			this.height = length;
		}
	}

	const renderPaddle = (paddle,context) => {
		context.fillStyle = paddle.color;
		context.fillRect(paddle.x,paddle.y,paddle.width,paddle.height);
	};

	const gameBall = new Ball (50,50,'red',10);
	const player1Paddle = new Paddle (10,10,'blue',80);
	const framerate = 30;

	const updateBallPosition = (gameBall)=> {
		gameBall.x += gameBall.speedX;
		gameBall.y += gameBall.speedY;
	};

	const boundaryReached = (gameBallPos,boundaryPosition) => {
		return gameBallPos >= boundaryPosition || gameBallPos <= 0;
	};

	var render = (canvasContext,canvas)=> {
		let timesRun = 0;
		const redraw = () => {
			
			//draw background
			canvasContext.fillStyle = 'black';
			canvasContext.fillRect(0,0,canvas.width,canvas.height);

			renderBall(gameBall,canvasContext);
			renderPaddle(player1Paddle,canvasContext);
			
			if (boundaryReached(gameBall.x,canvas.width)) {
				alert('game over');
			}
			if (boundaryReached(gameBall.y,canvas.height)) {
				gameBall.speedY = -gameBall.speedY;
			}
			
			updateBallPosition(gameBall);
			
			//temp: will clear interval after 300 loops
			timesRun += 1;
	    if(timesRun === 8300){
	        clearInterval(gameLoop);
	    }
		};
		const gameLoop = setInterval(redraw, 1000/framerate);
	};

	window.addEventListener("load", () => {
		const canvas = document.getElementById('gameCanvas');
		const canvasContext = canvas.getContext('2d');
		render(canvasContext,canvas);
	});

}());
