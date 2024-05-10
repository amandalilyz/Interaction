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

// Get the sorting buttons and items
// Get all sorting buttons and items
let sortButtons = document.querySelectorAll('.filter-menu li');
let sortItems = document.querySelectorAll('.filter-item li');

// Add click event listener to each sorting button
sortButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'current' class from all buttons
        sortButtons.forEach(btn => btn.classList.remove('current'));
        
        // Add 'current' class to the clicked button
        this.classList.add('current');
        
        // Get the data-target attribute from the clicked button
        let targetData = this.getAttribute('data-target');
        
        // Filter the items based on the data-target
        sortItems.forEach(item => {
            // Determine if the item's data-item attribute matches the targetData or if targetData is "all"
            if (item.getAttribute('data-item') === targetData || targetData === "all") {
                item.classList.remove('delete');
                item.classList.add('active');
            } else {
                item.classList.add('delete');
                item.classList.remove('active');
            }
        });
    });
});

// Add click event listener to each gallery item
// Get all gallery items
let galleryItems = document.querySelectorAll('.filter-item li');
let aboutSection = document.querySelector('#about');

// Add click event listener to each gallery item
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // Get the clicked image element
        let imgElement = this.querySelector('img');

        // Retrieve the main image source, title, and description from the clicked item
        let imgSrc = imgElement.src;
        let imgTitle = imgElement.getAttribute('data-title');
        let imgDescription = imgElement.getAttribute('data-description');
        // Initialize the HTML content for the about section
        let aboutSectionContent = `
            <p id="title">${imgTitle}</p>
            <p id="description">${imgDescription}</p>
            <img src="${imgSrc}" style="max-width: 100%; height: auto;" />

        `;

        // Loop through the data-image attributes
   let i = 1;
        while (this.hasAttribute(`data-image-${i}`)) {
            let dataImageSrc = this.getAttribute(`data-image-${i}`);
            let dataImageDescription = this.getAttribute(`data-image-${i}-description`);
            
            // Add each additional image and description with line breaks in between
            aboutSectionContent += `
                <p>${dataImageDescription}</p>
                <img src="${dataImageSrc}" style="max-width: 100%; height: auto;" />
                <br><br> <!-- Add space between each description and image -->
            `;
            i++;
        }
        

        // Update the about section with the content
        aboutSection.innerHTML = aboutSectionContent;
    });
});
