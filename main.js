const colors = [
	'hsl(297, 74%, 30%)',
	'hsl(10, 100%, 20%)',
	'rgb(32, 32, 32)',
	'yellow',
	'#C62F3A',
	'#171717',
	'rgb(114, 154, 152)',
	'#A6E41C',
	'hsl(209, 24%, 23%)',
];

document.getElementsByTagName('button')[0].addEventListener('click', () => {
	const randomColor = colors[Math.floor(Math.random() * colors.length)]

	document.getElementsByTagName('span')[0].textContent = randomColor;
	document.getElementsByTagName('main')[0].style.backgroundColor = randomColor;
});
