export class Ball {
	constructor (x,y,color,size) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.size = size;
	}
}

export const renderBall = (ball,context) => {
	context.fillStyle = ball.color;
	context.fillRect(ball.x,ball.y,ball.size,ball.size)
}