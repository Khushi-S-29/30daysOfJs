//Activity 1: Selecting and manipulating elements
// Task 1: Select an HTML element by its ID and change its text content
var textById = document.getElementById('textById');
textById.textContent = 'Text Content Changed';

// Task 2: Select an HTML element by its class and change its background color
var textByClass = document.querySelector('.textByClass');
textByClass.style.backgroundColor = 'wheat';

//Activity 2: Creating and appending elements
// Task 3: Create a new div element with some text content and append it to the body
var newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div element';
document.body.appendChild(newDiv);


// Task 4: Create a new li element and add it to an existing ul list
const newLiItem= document.createElement('li');
newLiItem.textContent = 'New item';
document.querySelector('ul').appendChild(newLiItem);

//Activity 3: Removing elements
// Task 5: Select an HTML element and remove it from the DOM
var elementToRemove = document.getElementById('removeMe');
if (elementToRemove) {
    elementToRemove.parentNode.removeChild(elementToRemove);
}
// Task 6: Remove the last child of a specific HTML element
var lastChild = list.lastElementChild;
list.removeChild(lastChild);

//Activity 4: Modifying attributes and classes
// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag)
document.querySelector('img').setAttribute('src', 'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200');

// Task 8: Add and remove a CSS class to/from an HTML element
var classToggle = document.getElementById('classToggle');
classToggle.classList.add('highlight');

classToggle.addEventListener('mouseover', function() {
    this.classList.add('changeColor');
});
classToggle.addEventListener('mouseout', function() {
    this.classList.remove('changeColor');
});

//Event handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph
document.getElementById('changeTextButton').addEventListener('click', function() {
    textById.textContent = 'Text Changed by Button Click';
});

// Task 10: Add a mouseover event listener to an element that changes its border color
var mouseoverElement = document.getElementById('mouseoverElement');
mouseoverElement.addEventListener('mouseover', function() {
    this.style.border = '2px solid blue';
});
mouseoverElement.addEventListener('mouseout', function() {
    this.style.border = '';
});
