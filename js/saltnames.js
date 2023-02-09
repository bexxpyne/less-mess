// Initialise empty variables to store data

let firstName = null;
let lastName = null;
let catName = '';
let anName = '';

// Constants that contain HTML elements
const nameButton = document.getElementById('nameButton');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.querySelector('.last-name');


nameButton.addEventListener('click', function(e) {
    // prevents default action (submitting form)
e.preventDefault();

firstName = firstNameInput.value;



firstLetter = firstName.charAt(0).toLowerCase();


function cationName() {
    switch (firstLetter) {
            case 'a' : catName='Potassium'
            break;
            case 'b': catName='Sodium';
            break;
            case 'c': catName='Iron (II)';
            break;
            case 'd': catName='Iron (III)';
            break;
            case 'e': catName='Chromium (III)';
            break;
            case 'f': catName='Lithium';
            break;
            case 'g': catName='Caesium';
            break;
            case 'h': catName='Rubidium';
            break;
            case 'i': catName='Calcium';
            break;
            case 'j': catName='Magnesium';
            break;
            case 'k': catName='Copper (I)';
            break;
            case 'l': catName='Copper (II)';
            break;
            case 'm': catName='Silver';
            break;
            case 'n': catName='Zinc';
            break;
            case 'o': catName='Nickel';
            break;
            case 'p': catName='Manganese (II)';
            break;
            case 'q': catName='Aluminium';
            break;
            case 'r': catName='Titanium';
            break;
            case 's': catName='Ammonium';
            break;
            case 't': catName='Platinum';
            break;
            case 'u': catName='Cobalt';
            break;
            case 'v': catName='Hydrogen';
            break;
            case 'w': catName='Barium';
            break;
            case 'x': catName='Lead (II)';
            break;
            case 'y': catName='Tin (II)';
            break;
            case 'z': catName='Strontium';
            break;
            
        default:
            break;
            
    }}
    cationName (firstLetter)





lastName = lastNameInput.value;
lastLetter = lastName.charAt(0).toLowerCase();

function anionName() {

    switch (lastLetter) {
            case 'a': anName = 'Fluoride'
            break;
            case 'b': anName = 'Chloride'
            break;
            case 'c': anName = 'Bromide'
            break;
            case 'd': anName = 'Iodide'
            break;
            case 'e': anName = 'Oxide)'
            break;
            case 'f': anName = 'Chlorate'
            break;
            case 'g': anName = 'Chlorite'
            break;
            case 'h': anName = 'Nitride'
            break;
            case 'i': anName = 'Sulphide'
            break;
            case 'j': anName = 'Sulphate'
            break;
            case 'k': anName = 'Sulphite'
            break;
            case 'l': anName = 'Chromate'
            break;
            case 'm': anName = 'Dichromate'
            break;
            case 'n': anName = 'Acetate'
            break;
            case 'o': anName = 'Cyanide'
            break;
            case 'p': anName = 'Peroxide'
            break;
            case 'q': anName = 'Oxalate'
            break;
            case 'r': anName = 'Thiosulphate'
            break;
            case 's': anName = 'Arsenate'
            break;
            case 't': anName = 'Hydroxide'
            break;
            case 'u': anName = 'Manganate (VII)'
            break;
            case 'v': anName = 'Hydride'
            break;
            case 'w': anName = 'Nitrate'
            break;
            case 'x': anName = 'Nitrite'
            break;
            case 'y': anName = 'Nitride)'
            break;
            case 'z': anName = 'Carbonate'
            break;
            
        default:
            break;
    }
    
}
anionName (lastLetter)

document.querySelector('#message').textContent = `Hello ${catName} ${anName}`;
})