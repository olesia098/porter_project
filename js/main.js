//* BURGER MENU START

const btn = document.querySelector(".burger-menu");
const ul = document.querySelector(".burger-list");
const li = document.querySelectorAll(".navigation__item");

li.forEach((item) =>
  item.addEventListener("click", () => {
    ul.style.height = "0";
  })
);

let show = false;

btn.addEventListener("click", (event) => {
  event.stopPropagation();

  if (show) {
    ul.style.height = "0";
    ul.style.padding = "0px";
  } else {
    ul.style.height = "auto";
    ul.style.padding = "10px 15px";
  }
  show = !show;
});

window.addEventListener("click", (event) => {
  if (show && event.target !== btn && !ul.contains(event.target)) {
    ul.style.height = "0";
    ul.style.padding = "0px";
    show = false;
  }
});

//* BURGER MENU FINISH

//* SLIDER START
document.addEventListener('DOMContentLoaded', () => {
  
	const CaroS = document.querySelector('.Carousel-slider');
	const CaroSlider = new MicroSlider(CaroS, { indicators: true, indicatorText: '' });
	const hammer = new Hammer(CaroS);
	const CaroSTimer = 3000;
	let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
  
	CaroS.onmouseenter = function(e) {
		clearInterval(CaroAutoplay); 
		console.log(e.type + ' mouse detected');
	}
  
	CaroS.onmouseleave = function(e) {
		clearInterval(CaroAutoplay); 
		CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
		console.log(e.type + ' mouse detected');
	}
  
	CaroS.onclick = function(e) {
		clearInterval(CaroAutoplay); 
		console.log(e.type + ' mouse detected');
	}
  
	hammer.on('tap', function(e) {
		clearInterval(CaroAutoplay);
		console.log(e.type + ' gesture detected');
	});
  
	hammer.on('swipe', function(e) {
		clearInterval(CaroAutoplay); 
		CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
		console.log(e.type + ' gesture detected');
	});

  let slideLink = document.querySelectorAll('.slider-item');
  if (slideLink && slideLink !== null && slideLink.length > 0){
    slideLink.forEach( el => el.addEventListener('click', e => {
      e.preventDefault();
      let href = el.dataset.href;
      let target = el.dataset.target;
      if (href !== '#') window.open(href, target);
    }));
  }
});
//* SLIDER FINISH