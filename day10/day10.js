// Activity 1: Basic Event Handling
//Task 1: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('myParagraph').textContent = 'New text';
});
// Task 2: Add a double-click event listener to an image that toggles its visibility.
document.getElementById('myImage').addEventListener('dblclick', function() {
    this.style.display = this.style.display === 'none' ? 'block' : 'none';
});

// Activity 2: Mouse Events
//Task 3: Add a mouseover event listener to an element that changes its background color.
document.getElementById('changeBg').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'pink';
});
// Task 4: Add a mouseout event listener to an element that resets its background color.
document.getElementById('changeBg').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
document.getElementById('logMe').addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
});
// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
document.getElementById('logMe').addEventListener('keyup', function() {
    document.getElementById('displayText').textContent = this.value;
});

//Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const Data = new FormData(this);
    for (const [key, value] of Data.entries()) {
        console.log(`${key}: ${value}`);
    }
});
// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.getElementById('Options').addEventListener('change', function() {
    document.getElementById('selectedOption').textContent = `Selected value: ${this.value}`;
});

// Activity 5: Event Delegation
//Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
document.getElementById('myList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log(`List item clicked: ${event.target.textContent}`);
    }
});
// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document.getElementById('parent').addEventListener('click', function(event) {
    if (event.target.classList.contains('dynamic')) {
        console.log(`Dynamically added element: ${event.target.textContent}`);
    }
});

const newEl = document.createElement('div');
newEl.className = 'dynamic';
newEl.textContent = 'New Dynamic Element';
document.getElementById('parent').appendChild(newEl);
