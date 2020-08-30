const colors = [
	'#ff0000',
	'#ff4000',
	'#ffbf00',
	'#ffff00',
	'#bfff00',
	'#80ff00',
	'#40ff00',
	'#00ff00',
	'#00ff40',
	'#00ff80',
	'#00ffbf',
	'#00ffff',
	'#00bfff',
	'#0080ff',
	'#0040ff',
	'#0000ff',
	'#4000ff',
	'#8000ff',
	'#bf00ff',
	'#ff00ff',
	'#ff00bf',
	'#ff0080',
	'#ff0040'
];

const button = document.getElementById('button');
const circle = document.querySelector('.circle');

let randomColor = colors[Math.floor(Math.random() * colors.length)];

button.addEventListener('click', function() {
	for (let i = 0; i < colors.length; i++) {
		circle.style.backgroundColor = randomColor;
	}
});
