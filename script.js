
let clickCount = 0; // Track the number of clicks
let firstTransitionCompleted = false; // Flag to indicate if the first transition is completed
let secondTransitionCompleted = false; // Flag to indicate if the second transition is completed

function fadeLetters() {
    clickCount++; // Increment the click count

    const mainText = document.getElementById('mainText');
    const secondText = document.getElementById('secondText');
    const thirdText = document.getElementById('thirdText');
    const fourthText = document.getElementById('fourthText');
    const fifthText = document.getElementById('fifthText'); 
    const sixthText = document.getElementById('sixthText');
    const seventhText = document.getElementById('seventhText');
    const eighthText = document.getElementById('eighthText'); // Get the eighth text element

    if (!firstTransitionCompleted) {
        // If the first transition is not completed, initiate the first transition
        revealText(mainText, secondText);
        firstTransitionCompleted = true; // Mark the first transition as completed
    } else if (!secondTransitionCompleted) {
        // If the second transition is not completed, initiate the second transition
        revealAndFadeOutSecondText(secondText, thirdText);
        secondTransitionCompleted = true; // Mark the second transition as completed
    } else {
        if (clickCount === 4) { 
            // Check if it's the fourth click
            fourthText.innerHTML = fifthText.innerHTML; 
            // Replace the content of fourth text with the content of fifth text
            fifthText.style.display = 'none'; 
            // Hide the fifth text
            thirdText.style.display = 'none'; 
            // Hide the third text
        } else if (clickCount === 5) { 
            // Check if it's the fifth click
            fifthText.style.display = 'none'; 
            // Hide the fifth text
            sixthText.style.display = 'block'; 
            // Show the sixth text
        } else if (clickCount === 6) { 
            // Check if it's the sixth click
            sixthText.innerHTML = seventhText.innerHTML; 
            // Replace the content of sixth text with the content of seventh text
            seventhText.style.display = 'none'; 
            // Hide the seventh text
        } else if (clickCount === 7) { 
            // Check if it's the seventh click
            seventhText.style.position = 'absolute'; 
            // Position the seventh text absolutely
            seventhText.style.top = '0'; 
            // Position it at the top
            seventhText.style.left = '0'; 
            // Position it at the left
            eighthText.style.position = 'relative'; 
            // Position the eighth text relatively
            eighthText.style.zIndex = '1'; 
            // Set its z-index higher to overlay on top of the seventh text
            eighthText.style.display = 'block'; 
            // Show the eighth text
        } else {
            // If both transitions are completed, reveal and transition the fourth text
            revealAndTransitionFourthText(thirdText, fourthText);
        }
    }
}

function fadeOutText(textElement) {
    let opacity = 1;
    const interval = setInterval(() => {
        opacity -= 0.1; // Decrease opacity by 0.1 on each interval
        if (opacity <= 0) {
            clearInterval(interval); // Clear the interval when opacity reaches zero
            textElement.style.display = 'none'; // Hide the element after fading out
        }
        textElement.style.opacity = opacity; // Update the opacity
    }, 100); // Interval duration (in milliseconds)
}

// Function to reveal the text and initiate the transition for the fourth text
function revealAndTransitionFourthText(textToFadeOut, textToReveal) {
    textToReveal.style.display = 'block'; // Display the fourth text
    textToReveal.style.opacity = '0'; // Set initial opacity to 0
    const textContent = textToReveal.textContent;
    const letters = textContent.split('');
    const totalLetters = letters.length;
    let opacity = 0; // Initial opacity

    // Function to gradually increase opacity for the fourth text
    const interval = setInterval(() => {
        opacity += 1 / 20;
        if (opacity >= 1) {
            clearInterval(interval); // Stop the interval when opacity reaches 1
        }
        textToReveal.style.opacity = opacity; // Set the opacity for the fourth text
    }, 100); // 0.1 second interval
}

// Function to reveal the text and initiate the transition for the second text
function revealAndFadeOutSecondText(textToFadeOut, textToReveal) {
    textToReveal.style.display = 'block'; // Display the third text
    const textContent = textToFadeOut.textContent;
    const letters = textContent.split('');
    const totalLetters = letters.length;
    //
    let opacity = 0; // Initial opacity

    // Function to gradually decrease opacity for the second text
    const interval = setInterval(() => {
        opacity -= 1 / 20;
        if (opacity <= 0) {
            clearInterval(interval); // Stop the interval when opacity reaches 0
            textToFadeOut.style.display = 'none'; // Hide the second text after fading out
        }
        textToFadeOut.style.opacity = opacity; // Set the opacity for the second text
    }, 100); // 0.1 second interval

    // Simultaneously reveal the third text
    revealText(textToFadeOut, textToReveal);
}

// Function to reveal the text and initiate the transition for the first text
function revealText(textToFadeOut, textToReveal) {
    const textContent = textToFadeOut.textContent;
    const letters = textContent.split('');
    const totalLetters = letters.length;
    let whiteCount = Math.ceil(totalLetters / 20); // Initial 1/15 of the text turns white
    let whiteIndices = [];

    // Function to find white indices
    function findWhiteIndices() {
        whiteIndices = [];
        while (whiteIndices.length < whiteCount) {
            const randomIndex = Math.floor(Math.random() * totalLetters);
            if (letters[randomIndex] !== ' ' && !whiteIndices.includes(randomIndex)) {
                whiteIndices.push(randomIndex);
            }
        }
    }

    // Function to replace letters with white
    function replaceWithWhite(indices) {
        for (const index of indices) {
            if (letters[index] !== ' ') {
                letters[index] = '<span style="opacity: 0; transition: opacity 0.25s; color: white;">' + letters[index] + '</span>';
            }
        }
        textToFadeOut.innerHTML = letters.join('');
        // Simultaneously reveal the next text
        if (textToReveal) {
            textToReveal.style.display = 'block';
        }
    }

    // After each 0.1 second, make another 1/15 of the text turn white until all letters are white
    const interval = setInterval(() => {
        whiteCount += Math.ceil(totalLetters / 20);
        if (whiteCount > totalLetters) {
            clearInterval(interval);
            return;
        }
        findWhiteIndices();
        replaceWithWhite(whiteIndices);
    }, 100); // 0.1 second interval
}

document.addEventListener('click', fadeLetters);