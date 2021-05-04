const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  let name = prompt("Enter a new name");
  para.textContent = "Player 1: " + name;
}

/* Here we are selecting a text paragraph (line 1), then attaching an event listener to it (line 3) so that when the paragraph is clicked, 
the updateName() code block (lines 5–8) is run. The updateName() code block (these types of reusable code blocks are called "functions") 
asks the user for a new name, and then inserts that name into the paragraph to update the display.

If you swapped the order of the first two lines of code, it would no longer work — instead, you'd get an error returned in the browser developer console — 
TypeError: para is undefined. This means that the para object does not exist yet, so we can't add an event listener to it.
 */
