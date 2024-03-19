let clickCount = 0; // Track the number of clicks
let fadeOutFinished = true;

const mainText = document.getElementById('mainText');
const secondText = document.getElementById('secondText');
const thirdText = document.getElementById('thirdText');
const fourthText = document.getElementById('fourthText');
const fifthText = document.getElementById('fifthText'); 
const sixthText = document.getElementById('sixthText');
const seventhText = document.getElementById('seventhText');
const eighthText = document.getElementById('eighthText');
const ninthText = document.getElementById('ninthText'); // Get the eighth text element
const colorBlack = document.getElementById('colorblack'); // Get the eighth text element

const allTexts = [mainText,secondText,thirdText,fourthText,fifthText];

function fadeLetters() {
    fadeOutFinished = false;
    document.removeEventListener('click', fadeLetters);
    clickCount++; // Increment the click count
    console.log(clickCount)
   
    function hideAllTexts () {
      allTexts.forEach((text) => {
        text.style.display = 'none';
      })
    }

    if (clickCount == 1 ){
    //   mainText.style.display = 'none';
    //   secondText.style.display = 'block';
    //   applyTransition(secondText); // Apply transition to secondText
      revealText(mainText, secondText);
    }










    
    else if (clickCount == 2){
      mainText.style.display = 'none';   
      secondText.style.display = 'block' 
      //thirdText.style.display = 'block';
      revealText(secondText, thirdText);
    }

    else if (clickCount == 3){
      mainText.style.display = 'none';    
      secondText.style.display = 'none';
      thirdText.style.display = 'none';   
      fourthText.style.opacity = '1';
      revealText(thirdText, fourthText);  
    }
    
    else if (clickCount == 4){
      mainText.style.display = 'none';    
      secondText.style.display = 'none';
      thirdText.style.display = 'none';  
      revealText(fourthText, fifthText);  
    }
    
    else if (clickCount == 5){
      mainText.style.display = 'none';    
      secondText.style.display = 'none';
      thirdText.style.display = 'none';  
      fourthText.style.display = 'none';
      revealText(fifthText, sixthText);  
    }
    else if (clickCount == 6){
      mainText.style.display = 'none';    
      secondText.style.display = 'none';
      thirdText.style.display = 'none';  
      fourthText.style.display = 'none';
      fifthText.style.display = 'none'; 
      revealText(sixthText, seventhText);  
    }
    else if (clickCount == 7){
        mainText.style.display = 'none';    
        secondText.style.display = 'none';
        thirdText.style.display = 'none';  
        fourthText.style.display = 'none';
        fifthText.style.display = 'none';
        sixthText.style.display = 'none';  
        revealText(seventhText, eighthText);  
      }
    else if (clickCount == 8){
        mainText.style.display = 'none';    
        secondText.style.display = 'none';
        thirdText.style.display = 'none';  
        fourthText.style.display = 'none';
        fifthText.style.display = 'none';
        sixthText.style.display = 'none';  
        sixthText.style.display = 'none';  

        revealText(eighthText, ninthText);  
      }
}

// Function to apply transition to spans with class .colorwhite
// function applyTransition(textElement) {
//   const colorWhiteSpans = textElement.querySelectorAll('.colorwhite');
//   colorWhiteSpans.forEach(span => {
//     span.classList.add('transitionApplied'); // Add a class to identify that transition is applied
//   });
// }

function revealText(textToFadeOut, textToReveal) {
    const textContent = textToFadeOut.textContent;
    const letters = textContent.split('');
    const totalLetters = letters.length;
    let whiteCount = Math.ceil(totalLetters /20); // Initial 1/15 of the text turns white
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
          setTimeout(() => {
            textToReveal.style.display = 'block';
            console.log('text to reveal shown');
          }, 4000);
        }
    }

    // After each 0.1 second, make another 1/15 of the text turn white until all letters are white
    const interval = setInterval(() => {
        whiteCount += Math.ceil(totalLetters / 20);
        console.log('fadeOutfinished:', fadeOutFinished)

        if (whiteCount > totalLetters) {
            clearInterval(interval);
            fadeOutFinished = true;
            document.addEventListener('click', fadeLetters)
            console.log('fadeOutfinished:', fadeOutFinished)
            return;
        }
        findWhiteIndices();
        replaceWithWhite(whiteIndices);
    }, 100); // 0.1 second interval
}

document.addEventListener('click', fadeLetters);