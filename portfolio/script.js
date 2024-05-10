let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;
for(let i = 0; i < sortBtn.length; i++){
sortBtn[i].addEventListener('click', function(){
for(let j = 0; j< sortBtn.length; j++){
sortBtn[j].classList.remove('current');
}
this.classList.add('current');
let targetData = this.getAttribute('data-target');
for(let k = 0; k < sortItem.length; k++){
sortItem[k].classList.remove('active');
sortItem[k].classList.add('delete');
if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
sortItem[k].classList.remove('delete');
sortItem[k].classList.add('active');
}
}
});
}

let galleryItems = document.querySelectorAll('.filter-item li');
let aboutSection = document.querySelector('#about');

// Add click event listener to each gallery item
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // Get the clicked image element
        let imgElement = this.querySelector('img');
        
        // Retrieve the image source and title from the clicked item
        let imgSrc = imgElement.src;
        let imgTitle = imgElement.getAttribute('data-title'); // Retrieve the title attribute

        // Update the about section with the clicked image and its title
        aboutSection.innerHTML = `
            <p id="title">${imgTitle}</p>
            <img src="${imgSrc}" style="max-width: 100%; height: auto;" />
        `;
    });

    
});

const imageGroups = {
    "graphic design": [
        "https://cdn.glitch.global/570400b6-e26e-49a0-9b9e-0719483b3d3b/737e1979-0e83-49e8-aacf-abb7ddf93cce.Untitled_Artwork%205.jpg?v=1715306248241",
        "https://cdn.glitch.global/570400b6-e26e-49a0-9b9e-0719483b3d3b/b11b24c9-5737-405b-898f-0a8ea75e8094.30332289-5269-4aaa-8c27-0b554007e475_rw_3840.png?v=1715305787069",
        // Add other images for graphic design
    ],
    "moving image": [
        "https://cdn.glitch.global/570400b6-e26e-49a0-9b9e-0719483b3d3b/c2fdb715-92b3-4ee5-9203-a5d72b62c7cf.Screenshot%202024-03-15%20at%208.11.52%E2%80%AFPM.jpg?v=1715305373549",
        // Add other images for moving image
    ],
    "fine art": [
        "https://cdn.glitch.global/570400b6-e26e-49a0-9b9e-0719483b3d3b/800e96d2-e5ab-4bdf-b000-31ff8a18cc28.image.png?v=1715308796402",
        // Add other images for fine art
    ],
    // Add other categories if any
};

// Get references to necessary elements
let aboutImage = aboutContent.querySelector('img');
let slideshowContainer = document.querySelector('#slideshow');
let slideshowImage = document.querySelector('#slideshowImage');

// Function to start the slideshow
function startSlideshow(images) {
    let currentIndex = 0;

    // Function to show the next image
    function showNextImage() {
        if (currentIndex >= images.length) {
            currentIndex = 0; // Reset index if it reaches the end
        }
        slideshowImage.src = images[currentIndex];
        currentIndex++;
    }

    // Start the slideshow with an interval
    let intervalId = setInterval(showNextImage, 2000); // Adjust interval as needed

    // Return the interval ID so it can be stopped later
    return intervalId;
}

// Function to handle hover events
function handleHover(event) {
    let dataItem = event.currentTarget.getAttribute('data-item');
    let associatedImages = imageGroups[dataItem];

    if (associatedImages) {
        // Show the slideshow container
        slideshowContainer.style.display = 'block';

        // Start the slideshow and store the interval ID
        let intervalId = startSlideshow(associatedImages);

        // When mouse leaves the image, stop the slideshow
        event.currentTarget.addEventListener('mouseleave', () => {
            clearInterval(intervalId);
            slideshowContainer.style.display = 'none';
        });
    }
}

// Add hover event listener to the image in the about section
aboutImage.addEventListener('mouseover', handleHover);



