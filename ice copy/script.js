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
        currentDataEl.classList.add('grid-item');
        currentDataEl.dataset.videolink = item.videolink;
        currentDataEl.addEventListener('click', (event) => {
            const modalContainer = document.getElementById('modal-container');
            const modalContent = document.getElementById('modal-content');
            const target = event.target;

            // Create the video player element
            const videoPlayer = document.createElement('video');
            videoPlayer.setAttribute('src', item.link2);
            videoPlayer.setAttribute('autoplay', 'true'); // Autoplay the video

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
    let steps = [
        { columns: 2, rows: 1 },
        { columns: 3, rows: 2 },
        { columns: 6, rows: 3 },
        { columns: 9, rows: 6 }
    ];

    // Determine the current step based on scrolled percentage
    let stepIndex;
    if (scrolledPercentage <= 0.25) {
        stepIndex = 0;
    } else if (scrolledPercentage <= 0.5) {
        stepIndex = 1;
    } else if (scrolledPercentage <= 0.75) {
        stepIndex = 2;
    } else {
        stepIndex = 3;
    }

    // Get the columns and rows for the current step
    let { columns, rows } = steps[stepIndex];

    // Set grid template sizes
    container.style.gridTemplateRows = `repeat(${rows}, ${100 / rows}vh)`;
    container.style.gridTemplateColumns = `repeat(${columns}, ${100 / columns}vw)`;
}

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