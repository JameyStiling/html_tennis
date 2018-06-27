export class Ball {
	constructor (x,y,color,size) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.size = size;
		this.speedX = 5;
		this.speedY = 5;
	}
}

export const renderBall = (ball,context) => {
	context.fillStyle = ball.color;
	context.fillRect(ball.x,ball.y,ball.size,ball.size)
}