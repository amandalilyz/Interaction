const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider-image');
const link = 'https://seen-orange-file.glitch.me/interaction/filmstrip.json';
let startX,endX;
let startLeft,endLeft;
let raf;

const lerp = (start,end,t) => start * (1-t) + end * t;

async function data(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('404 Data Not Found!');
  return res.json();
}

function parallax() {
  images.forEach(async (image,i) => {
    const links = await data(link).catch(console.log);
    const pos = (((endLeft - startLeft) / image.offsetWidth) * 10) + 50;
    image.style.backgroundImage = `url(${links[i]})`;
    image.style.backgroundPosition = `${pos}% 50%`;
  });
}

function update() {
  startLeft = lerp(startLeft,endLeft,0.03);
  const dist = endX - startX;
  slider.scrollLeft = startLeft - dist;
  parallax();
  raf = requestAnimationFrame(update);
  if (startLeft.toFixed(1) === endLeft.toFixed(1)) cancelAnimationFrame(raf);
}

function move(e) {
  endX = e.layerX
  endLeft = slider.scrollLeft
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(update);
}

function end() {
  slider.classList.remove('active');
  slider.removeEventListener('pointermove',move);
  slider.removeEventListener('pointerup',end);
  slider.removeEventListener('pointerleave',end);
}

function activate(e) {
  e.preventDefault();
  slider.classList.add('active');
  startX = e.layerX;
  endX = e.layerX;
  startLeft = slider.scrollLeft;
  endLeft = slider.scrollLeft;
  slider.addEventListener('pointermove',move,false);
  slider.addEventListener('pointerup',end,false);
  slider.addEventListener('pointerleave',end,false);
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(update);
}

window.addEventListener('load',parallax,false);
slider.addEventListener('pointerdown',activate,false);

// Add event listener to the 17th slider item
document.getElementById('seventeenth-item').addEventListener('mouseenter', function() {
    // When mouse enters the 17th item, add 'active' class to the hover text
    document.getElementById('hover-text').classList.add('active');
  });
  
  // Add event listener to remove 'active' class when mouse leaves the 17th item
  document.getElementById('seventeenth-item').addEventListener('mouseleave', function() {
    // When mouse leaves the 17th item, remove 'active' class from the hover text
    document.getElementById('hover-text').classList.remove('active');
  });