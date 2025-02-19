const gifContainer = document.getElementById("gif-container");

// Array of 8 GIF URLs
const gifUrls = [
    "images/sandwich1crop.gif",
    "images/sandwich2crop.gif",
    "images/sandwich3crop.gif",
    "images/sandwich4crop.gif",
    "images/sandwich5crop.gif",
    "images/sandwich6crop.gif",
    "images/sandwich7crop.gif",
    "images/sandwich8crop.gif",
];

let gifsLoaded = 0; // Counter for loaded GIFs

// Create and append GIFs to the container
gifUrls.forEach((url, index) => {
  const gif = document.createElement('img');
  gif.src = url;
  gif.classList.add('gif');
  
  // When the GIF is fully loaded, increment the counter
  gif.onload = function() {
    gifsLoaded++;
    
    // If all GIFs are loaded, make them visible and start playing
    if (gifsLoaded === gifUrls.length) {
      displayGifs();
    }
  };

  gifContainer.appendChild(gif);
});

// Function to make GIFs visible and start playing
function displayGifs() {
  const gifs = document.querySelectorAll('.gif');
  gifs.forEach((gif, index) => {
    setTimeout(() => {
      gif.style.visibility = 'visible'; // Make GIF visible
    }, index * 200); // Delay each GIF slightly for the stacking effect
  });
}
