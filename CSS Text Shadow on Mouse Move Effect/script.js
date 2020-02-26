const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; //100px

function shadow(e){
	const { offsetWidth: width, offsetHeight: height} = hero;
	let {offsetX: x, offsetY: y} = e;

	if (this !== e.target) {
		x = x + e.target.offsetLeft;
		y = y +e.target.offsetTop;
	}

	const xWakl = Math.round((x / width * walk) - (walk / 2));
	const yWakl = Math.round((y / height * walk) - (walk / 2));

	text.style.textShadow = `
		${xWakl}px ${yWakl}px 0 rgba(255,0,255,0.7),
		${xWakl * -1}px ${yWakl}px 0 rgba(0,255,255,0.7),
		${yWakl}px ${xWakl * -1}px 0 rgba(0,255,0,0.7),
		${yWakl * -1}px ${xWakl}px 0 rgba(0,0,255,0.7)
	`;
}

hero.addEventListener('mousemove', shadow);