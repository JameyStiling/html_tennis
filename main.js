import render from './render'

window.addEventListener("load", () => {
	const canvas = document.getElementById('gameCanvas');
	const canvasContext = canvas.getContext('2d');
	render(canvasContext,canvas)
})