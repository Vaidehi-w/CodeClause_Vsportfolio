// script.js

const sidebar = document.querySelector('.sidebar');

sidebar.addEventListener('mouseover', function() {
  sidebar.classList.add('active');
});

sidebar.addEventListener('mouseout', function() {
  sidebar.classList.remove('active');
});
// Add an event listener to the window's load event
window.addEventListener('load', function() {
  // Get the height of the footer
  var footerHeight = document.querySelector('footer').offsetHeight;

  // Set the margin-top of the body to be equal to the footer's height
  document.body.style.marginBottom = footerHeight + 'px';
});
const textContainer = document.getElementById("textContainer");
const dynamicText = document.getElementById("dynamicText");

const phrases = ["a Student !!" , "an Engineer !!", "Cloud Enthusiast !!","Frontend Developer !!","Cpp Coder !!","Graphic designer !!"];
let currentPhraseIndex = 0;

function eraseText() {
  dynamicText.style.opacity = 0;
  setTimeout(changeText, 500);
}

function changeText() {
  currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  dynamicText.textContent = phrases[currentPhraseIndex];
  dynamicText.style.opacity = 1;
}

// Initial text change after 3 seconds (adjust as needed)
setTimeout(eraseText, 1000);

// Subsequent text changes every 5 seconds (adjust as needed)
setInterval(eraseText, 2000);

function expandContent() {
  const contentContainer = document.getElementById("contentContainer");
  contentContainer.classList.toggle("expand");
}

