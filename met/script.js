window.addEventListener('scroll', function() {
        let value = window.scrollY;

        let scrollOffset = 0;
        if (value >= 1800) {
            scrollOffset = (value - 1800) / 60;
            let imageScale = 1 + scrollOffset * 0.2;
            let textScale = 1 + scrollOffset * 0.5; // Adjust this factor for desired text scaling
            let scrollText = document.getElementsByClassName('scroll-text');
            for (let i = 0; i < scrollText.length; i++) {
                scrollText[i].style.transform = `scale(${textScale})`;
            }

            let image1 = document.getElementById('image1');
            image1.style.transform = `scale(${imageScale})`;
        } else {
            let scrollText = document.getElementsByClassName('scroll-text');
            for (let i = 0; i < scrollText.length; i++) {
                scrollText[i].style.transform = 'scale(3)';
            }

            let image1 = document.getElementById('image1');
            image1.style.transform = 'scale(1)';
        }

let scrollOffset4 = 0;
if (value > 300) {
let image4Width = document.getElementById('image4').offsetWidth;
scrollOffset4 = ((value - 300) / (window.innerWidth + image4Width)) * (10000 / 2);
}
let image4 = document.getElementById('image4');
image4.style.transform = `translateX(${-scrollOffset4}px)`;

let scrollOffset3 = 0;
if (value > 400) {
let image3Width = document.getElementById('image3').offsetWidth;
scrollOffset3 = ((value - 400) / (window.innerWidth + image3Width)) * (-7000 / 2);
}
let image3 = document.getElementById('image3');
image3.style.transform = `translateX(${-scrollOffset3}px)`;

let scrollOffset2 = 0;
if (value > 500) {
let image2Width = document.getElementById('image2').offsetWidth;
scrollOffset2 = ((value - 500) / (window.innerWidth + image2Width)) * (5000 / 2);
}
let image2 = document.getElementById('image2');
image2.style.transform = `translateX(${-scrollOffset2}px)`;

let scrollOffset5 = 0;
if (value > 0) {
let image5Width = document.getElementById('image5').offsetWidth;
scrollOffset5 = ((value - 0) / (window.innerWidth + image5Width)) * (4000 / 2);
}
let image5 = document.getElementById('image5');
image5.style.transform = `translateX(${-scrollOffset5}px)`;
});
