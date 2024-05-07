document.addEventListener("DOMContentLoaded", function () {
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/284680")
    .then((response) => response.json())
    .then((data) => {
        console.log("data", data);
    })
})

document.addEventListener("DOMContentLoaded", function () {
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/484524")
    .then((response) => response.json())
    .then((data) => {
        console.log("data", data);
    })
})

const CSSPairs = {
    image1ScaleIn: [
        4, 8
    ],
    image1ScaleOut: [
        1, 4
    ]
}

let currentFormat;

if (window.innerWidth < 800) {
    currentFormat = 1
} else {
    currentFormat = 0
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 800) {
        currentFormat = 1
    } else {
        currentFormat = 0
    }
})


window.onload = function () {
    lax.init();

    lax.addDriver("scrollY", function () {
        return window.scrollY;
    });

    lax.addElements("#image1", {
        scrollY: {
            scale: [
                [0, 1000],
                [CSSPairs.image1ScaleIn[currentFormat], CSSPairs.image1ScaleOut[currentFormat]]
            ],
        }
    });

    lax.addElements("#image1blur", {
        scrollY: {
            opacity: [
                [0, 1000],
                [1, 0]                // Opacity: 1 (100%) to 0 (0%)
            ],
        }
    });

    lax.addElements("#text1", {
        scrollY: {
            opacity: [
                [0, 450],
                [1, 0]                // Opacity: 1 (100%) to 0 (0%)
            ],
        }
    });

    lax.addElements("#w1met", {
        scrollY: {
            opacity: [
                [450, 500, 750, 800],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    });

    lax.addElements("#w1caption", {
        scrollY: {
            opacity: [
                [850, 900, 1150, 1200],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    });

    lax.addElements("#woman2background2", {
        scrollY: {
            translateX: [
                [1000, 2000],
                ["elInX", "elCenterX"]
            ],
        },
        
    });

    lax.addElements("#woman2", {
        scrollY: {
            translateX: [
                [1300, 2300],
                ["elInX", "elCenterX"]
            ],
        },
    });

    lax.addElements("#w2met", {
        scrollY: {
            opacity: [
                [1000, 1050, 2150, 2350],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    });

    lax.addElements("#w2caption", {
        scrollY: {
            opacity: [
                [2300, 2350, 2550, 2600],
                [0, 1, 1, 0] // Opacity transitions from 0 to 1
            ],
        },
    });

     lax.addElements("#woman3background1", {
        scrollY: {
            scale: [
                [0, 1000],
                [CSSPairs.image1ScaleIn[currentFormat], CSSPairs.image1ScaleOut[currentFormat]]
            ],
        }
    });

}
// window.addEventListener('scroll', function() {
//     // Calculate the scroll position
//     let scrollY = window.scrollY;
    
//     // Handle the animation of image1
//     let image1 = document.getElementById('image1');
    
//     // Total scroll distance over which the scaling will happen
//     let maxScroll = 2700; // Adjust this value based on the height of your page
    
//     // Calculate the scale based on scrollY
//     // The image starts at a scale of 4 (400% zoom) and zooms out to a scale of 1 (100% zoom)
//     // Increase the multiplier from 3 to a higher value (e.g. 4 or 5) to speed up the zoom-out effect
//     let zoomOutRate = 10; // Adjust this value for a faster zoom-out rate
//     let scale = 4 - (zoomOutRate * scrollY / maxScroll);
    
//     // Ensure scale doesn't go below 1
//     if (scale < 1) {
//         scale = 1;
//     }
    
//     // Apply the scale transformation to image1
//     image1.style.transform = `scale(${scale})`;
    
// // Check if scrollY is greater than or equal to 400
//     let woman2background2 = document.getElementById('woman2background2');

//     if (scrollY >= 400) {
//         // Calculate the range of motion for woman2background2
//         let scrollOffset4 = ((scrollY - 400) / (maxScroll - 400)) * window.innerWidth;
        
//         // Apply the translation transformation to woman2background2
//         // Move from left to right by using a positive value for scrollOffset4
//         woman2background2.style.transform = `translateX(${scrollOffset4}px)`;
        
//         // Make sure woman2background2 is visible
//         woman2background2.style.display = 'block';
//     } else {
//         // Hide woman2background2 if scrollY is less than 400
//         woman2background2.style.display = 'none';
// }

// if (scrollY >= 2700) {
//     // Calculate the zoom-out scale for woman2background2
//     let zoomOutRate = 0.0005; // Adjust this value for a smoother zoom-out rate
    
//     // Calculate the scale starting from 1 and zooming out based on how far past 2700px the user scrolls
//     let scale = 1 - zoomOutRate * (scrollY - 2700);
    
//     // Ensure scale doesn't go below a minimum limit, e.g., 0.5
//     if (scale < 0.5) {
//         scale = 0.5;
//     }
    
//     // Apply the scale transformation to woman2background2
//     // Set the transition property for smooth scaling
//     woman2background2.style.transition = "transform 0.3s ease-out";

//     // Calculate the translation for centering the image
//     // By default, the element is centered, so no horizontal translation is needed during zoom out
//     // Simply apply the scale transformation while keeping the X translation as zero
//     woman2background2.style.transform = `scale(${scale})`;

//     // Ensure the image remains visible
//     woman2background2.style.display = 'block';
// }

// let woman2 = document.getElementById('woman2');

// if (scrollY >= 600) {
//     let scrollOffset4 = ((scrollY - 400) / (maxScroll - 400)) * window.innerWidth;
    
//     woman2.style.transform = `translateX(${scrollOffset4}px)`;
    
//     woman2.style.display = 'block';
// } else {
//     woman2.style.display = 'none';
    
// }
// });
