export class Paddle {
	constructor (x,y,color,length) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.width = 12;
		this.height = length
	}
}

export const renderPaddle = (paddle,context) => {
	context.fillStyle = paddle.color;
	context.fillRect(paddle.x,paddle.y,paddle.width,paddle.height)
}