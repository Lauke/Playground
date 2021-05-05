/* let myInt = 5;
let myFloat = 6.667;

console.log(myInt);
console.log(myFloat);

console.log (typeof myInt);
console.log (typeof myFloat);

let lotsOfDecimal = 1.766584958675746364;
console.log (lotsOfDecimal);
let twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log (twoDecimalPlaces);

let myNumber = '74';
console.log(myNumber + 3);

console.log(typeof myNumber);
console.log (Number(myNumber)+3);

/* let a = 10;
let b = 7;
let result = a + b;
console.log (result);

let a = 9;
let b = 8;
let result = a * b;
console.log (result);
 */

/* let a = 60;
let b = 3;
let result = a / b;
console.log (result);
 */

/* let a = 10;
let b = 50;
let result = (a + b) / (8+2);
console.log (result); */

/* let num1 = 4;
num1++; // num1--;
console.log(num1); */

/* let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
console.log (x *= y); // x now contains the value 12 (x = x * 3;) */

const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine';
    txt.textContent = 'The machine has started!';
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'The machine is stopped.';
  }
}

/* You can see the equality operator being used just inside the updateBtn()
function.In this case, we are not testing if two mathematical expressions have the same value— 
we are testing whether the text content of a button contains a certain string
but it is still the same principle at work.If the button is currently saying "Start machine"
when it is pressed, we change its label to "Stop machine", and update the label as appropriate.
If the button is currently saying "Stop machine" when it is pressed, we swap the display back again. */