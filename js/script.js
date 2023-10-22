// JavaScript (script.js)

// Get the paragraph element
const paragraph = document.querySelector('.content p');

// Function to change the text
function changeText() {
    paragraph.textContent = "Thanks for using our web application!";
}

// Add an event listener to the button
const button = document.createElement('button');
button.textContent = 'Click me!';
button.addEventListener('click', changeText);
document.querySelector('.content').appendChild(button);