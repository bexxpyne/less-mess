// Initialise empty variables to store data
let firstName = null;
let lastName = null;

// Constants that contain HTML elements
const nameButton = document.getElementById('nameButton');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.querySelector('.last-name');

// On name button click, run a function.
// "e" in the function argument means event
nameButton.addEventListener('click', function(e) {
    // Prevent the default event from firing (in this case submitting a form)
    e.preventDefault();

    // Set the data variables to the value of the inputs
    firstName = firstNameInput.value;
    lastName = lastNameInput.value;

    // Set the text content of the element with an ID of message
    // to the string made up of our variables
    document.querySelector('#message').textContent = `Hello ${firstName} ${lastName}`;
});