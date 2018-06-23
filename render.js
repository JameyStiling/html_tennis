import {renderBall,Ball} from './ball'

const gameBall = new Ball (50,50,'red',10);

const framerate = 30;

export default (canvasContext,canvas)=> {
	let timesRun = 0;
	const redraw = () => {
		canvasContext.fillStyle = 'black';
		canvasContext.fillRect(0,0,canvas.width,canvas.height);
		renderBall(gameBall,canvasContext)
		gameBall.x = gameBall.x + 1;
		gameBall.y = gameBall.y + 1;
		
		//temp: will clear interval after 300 loops
		timesRun += 1;
    if(timesRun === 300){
        clearInterval(gameLoop);
    }
	}
	const gameLoop = setInterval(redraw, 1000/framerate);
}