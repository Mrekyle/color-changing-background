
const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red', 'green', 'purple', 'orange', 'blue', 'pink']

body.style.backgroundColor = 'yellow'
button.addEventListener('click', changeBackground)

function changeBackground() {
	const colorIndex = parseInt(Math.random()*colors.length)
	body.style.backgroundColor = colors[colorIndex]
}