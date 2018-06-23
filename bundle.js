(function () {
	'use strict';

	var render = (canvasContext,canvas)=> {
		canvasContext.fillStyle = 'black';
		canvasContext.fillRect(0,0,canvas.width,canvas.height);
	};

	window.addEventListener("load", () => {
		const canvas = document.getElementById('gameCanvas');
		const canvasContext = canvas.getContext('2d');
		render(canvasContext,canvas);
	});

}());
