fetch("./data.json")
    .then(res => res.json())
    .then(data => {
        generatePage(data)
    }).then(() => {
        document.addEventListener('DOMContentLoaded', function() {
            updateGridLayout(); // Update on initial load
        });
    })

const gridContainer = document.getElementById('grid-container');

function generatePage(data) {
    data.forEach(item => {
        const currentDataEl = document.createElement('div');
        const text = document.getElementById('text');
        currentDataEl.classList.add('grid-item');
        currentDataEl.dataset.videolink = item.videolink;
        currentDataEl.addEventListener('click', (event) => {
            const modalContainer = document.getElementById('modal-container');
            const gridContainer = document.getElementById('grid-container');
            const modalContent = document.getElementById('modal-content');
            const target = event.target;

            const videoPlayer = document.createElement('video');
            videoPlayer.setAttribute('src', item.link2);
            videoPlayer.setAttribute('autoplay', 'true'); // Autoplay the video
            videoPlayer.setAttribute('loop', 'true'); // Make the video loop

            // Create the image elements
            const image1 = document.createElement('img');
            image1.setAttribute('src', item.link);
            
            const image2 = document.createElement('img');
            image2.setAttribute('src', target.dataset.link2);

            modalContent.innerHTML = ''; // Clear previous content
            modalContent.appendChild(videoPlayer); // Append video player
            modalContent.appendChild(image1); // Append first image
            modalContent.appendChild(image2); // Append second image

            modalContainer.style.display = 'block'; // Display modal
            // text.style.display = "block";
            text.innerHTML = '';

            text.innerHTML = `
            <span class="item-title">title: ${item.title}</span>
            <span class="item-color">color: ${item.color}</span>
            <span class="item-origin">origin: ${item.origin}</span>
            <span class="item-group">group: ${item.group}</span>
            <span class="close">&times;</span>
            `
            gridContainer.appendChild(text);
            var close = document.querySelector('.close')
            close.addEventListener("click", (event) => {
            modalContainer.style = "none";
            text.innerHTML = '';
            })
        });

        const currentImage = document.createElement('img');
        currentImage.setAttribute('src', item.link);
        currentDataEl.appendChild(currentImage);
        gridContainer.appendChild(currentDataEl);

    });
}


// First, ensure the gridContainer has a fixed size and overflow is hidden to prevent actual scrolling
document.getElementById('grid-container').style.overflow = 'hidden';

function updateGridLayout(scrollY, scrollHeight) {
    const container = document.getElementById('grid-container');

    // Calculate scrolled percentage based on virtual scroll values
    let scrolledPercentage = scrollY / scrollHeight;

    // Define the steps based on scroll depth
    let steps;
    if (window.innerWidth <= 600) {
        // For mobile devices
        steps = [
            { columns: 1, rows: 2 },
            { columns: 1, rows: 6 },
            { columns: 1, rows: 18 },
            { columns: 1, rows: 54 }
        ];
    } else {
        // For desktop or larger screens
        steps = [
            { columns: 2, rows: 1 },
            { columns: 3, rows: 2 },
            { columns: 6, rows: 3 },
            { columns: 9, rows: 6 }
        ];
    }

    // Determine the current step based on scrolled percentage
    let stepIndex = Math.floor(scrolledPercentage * (steps.length - 1));

    // Get the columns and rows for the current step
    let { columns, rows } = steps[stepIndex];

    // Set grid template sizes
    container.style.gridTemplateRows = `repeat(${rows}, ${100 / rows}vh)`;
    container.style.gridTemplateColumns = `repeat(${columns}, ${100 / columns}vw)`;
}

window.addEventListener('scroll', function() {
    // Get the current scroll position
    const scrollY = window.scrollY || window.pageYOffset;
    
    // Update the grid layout based on the scroll position
    updateGridLayout(scrollY, virtualScrollHeight);
});


// Initialize virtual scroll variables
let virtualScrollY = 0;
const virtualScrollHeight = 100; // Adjust this value based on your content**********

// Listen for wheel events on gridContainer to simulate scrolling
document.getElementById('grid-container').addEventListener('wheel', function(e) {
    // Prevent the default scroll behavior
    e.preventDefault();

    // Update virtualScrollY based on the wheel delta
    virtualScrollY += e.deltaY;
    
    // Clamp virtualScrollY between 0 and virtualScrollHeight
    virtualScrollY = Math.max(0, Math.min(virtualScrollY, virtualScrollHeight));

    // Update the grid layout based on the new virtual scroll position
    updateGridLayout(virtualScrollY, virtualScrollHeight);
}, { passive: false });

// Initial grid layout update
updateGridLayout(virtualScrollY, virtualScrollHeight);



// NEW CHANGES BELOW

function generatePage(data) {
    data.forEach((item, index) => { // Add index parameter to track the current index
        const currentDataEl = document.createElement('div');
        const text = document.getElementById('text');
        currentDataEl.classList.add('grid-item');
        currentDataEl.dataset.videolink = item.videolink;
        currentDataEl.addEventListener('click', (event) => {
            const modalContainer = document.getElementById('modal-container');
            const gridContainer = document.getElementById('grid-container');
            const modalContent = document.getElementById('modal-content');
            const target = event.target;

            const videoPlayer = document.createElement('video');
            videoPlayer.setAttribute('src', item.link2);
            videoPlayer.setAttribute('autoplay', 'true'); // Autoplay the video
            videoPlayer.setAttribute('loop', 'true'); // Make the video loop

            // Create the image elements
            const image1 = document.createElement('img');
            image1.setAttribute('src', item.link);
            image1.classList.add(`image-${index}`); // Add dynamic class to the first image
            
            const image2 = document.createElement('img');
            image2.setAttribute('src', target.dataset.link2);
            image2.classList.add(`image-${index}`); // Add dynamic class to the second image

            modalContent.innerHTML = ''; // Clear previous content
            modalContent.appendChild(videoPlayer); // Append video player
            modalContent.appendChild(image1); // Append first image
            modalContent.appendChild(image2); // Append second image

            modalContainer.style.display = 'block'; // Display modal
            // text.style.display = "block";
            text.innerHTML = '';

            text.innerHTML = `
            <span class="item-title">title: ${item.title}</span>
            <span class="item-color">color: ${item.color}</span>
            <span class="item-origin">origin: ${item.origin}</span>
            <span class="item-group">group: ${item.group}</span>
            <span class="close">&times;</span>
            `
            gridContainer.appendChild(text);
            var close = document.querySelector('.close')
            close.addEventListener("click", (event) => {
            modalContainer.style = "none";
            text.innerHTML = '';
            })
        });

        const currentImage = document.createElement('img');
        currentImage.setAttribute('src', item.link);
        currentImage.classList.add(`image-${index}`); // Add dynamic class to the current image
        currentDataEl.appendChild(currentImage);
        gridContainer.appendChild(currentDataEl);

    });
}



