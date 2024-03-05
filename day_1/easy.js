// Easy Challenges

// Change Text Content: Write a JavaScript function to change the text content of a paragraph element with a specific ID ✔️
function changeTextContent() {
  document.getElementById('paragraph').innerText = "This is a new paragraph";
}

changeTextContent();

// Toggle Classes: Create a button that toggles a class (e.g., 'hidden') on an element when clicked ✔️
function toggleClass() {
  let element = document.getElementById('element');
  element.classList.toggle('hidden');
}

// Create New Element: Write code to create a new 'div' element and add it to the body of the document ✔️
function createNewElement() {
  let newDiv = document.createElement('div');
  newDiv.id = 'element';
  document.body.appendChild(newDiv);
}

// Remove an Element: Write a script to remove an element from the page when a button is clicked ✔️
function removeElement() {
  let element = document.getElementById('element');
  element.remove();
}

// Change Element Styles: Create a function to change the background color of a page to a color passed as a parameter ✔️
function changeElementStyles() {
  document.body.style.backgroundColor = prompt('Enter a color');
}

// Handle Click Event: Attach an event listener to a button that logs a message to the console when clicked ✔️
function handleClickEvent() {
  let button = document.getElementById(`buttonEvent`);
  button.addEventListener('click', () => {
    alert('Button was clicked');
  });
}

handleClickEvent();

// Update Image Source: Write a function that changes the source (src) of an image element to a new URL provided as a parameter. ✔️
function updateImageSource() {
  let url = prompt('Enter a new image URL');
  let image = document.getElementById('image');
  image.src = url;
}

// Display Mouse Position: Show the current mouse position in a div as the user moves their mouse across the page. ✔️
// Create a div to display the mouse position
let mousePositionDiv = document.createElement('div');
mousePositionDiv.id = 'position';
document.body.appendChild(mousePositionDiv);

// Update the div with the current mouse position
document.addEventListener('mousemove', function displayMousePosition(event) {
  let x = event.clientX;
  let y = event.clientY;
  mousePositionDiv.textContent = "Mouse position: " + x + ", " + y;
});

// Validate Form Input: Write a script to validate a text input field to ensure it is not empty when a submit button is clicked. ✔️
// If the input is empty, display an alert box to the user.
function validateFormInput() {
  let input = document.getElementById('input');
  let value = input.value;
  if (value === '') {
    alert('Input cannot be empty');
  }

  input.value = '';
}

// Create a Simple Carousel: Make a simple image carousel that changes images when you click next/previous buttons.
let images = ['day_1/image1.jpg', 'day_1/image2.jpg', 'day_1/image3.jpg'];
let currentImage = 0;

function createCarousel() {
  let carousel = document.getElementById('carousel');
  let image = document.createElement('img');
  image.src = images[currentImage];
  image.style.width = '100px'
  carousel.appendChild(image);

  let previousButton = document.createElement('button');
  previousButton.textContent = 'Previous';
  previousButton.addEventListener('click', () => {
    currentImage = (currentImage - 1 + images.length) % images.length;
    image.src = images[currentImage];
  });
  carousel.appendChild(previousButton);

  let nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.addEventListener('click', () => {
    currentImage = (currentImage + 1) % images.length;
    image.src = images[currentImage];
  });
  carousel.appendChild(nextButton);
}

createCarousel();
