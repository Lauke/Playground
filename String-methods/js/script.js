let string = 'This is my string';
console.log(string);


let browserType = 'mozilla';

// Finding the length of a string
console.log(browserType.length);

// Retrieving a specific string character
console.log(browserType[0]);

// To retrieve the last character of any string
console.log(browserType[browserType.length-1]);

// Finding a substring inside a string and extracting it
console.log(browserType.indexOf('zilla'));

// This should give you a result of -1 — this is returned when the substring, in this case 'vanilla', is not found in the main string.
console.log(browserType.indexOf('vanilla'));

// When you know where a substring starts inside a string, and you know at which character you want it to end, slice()
let slice = browserType.slice(0,3);
console.log(slice);

/* Also, if you know that you want to extract all of the remaining characters in a string after a certain character, you don't have to include the second parameter! 
Instead, you only need to include the character position from where you want to extract the remaining characters in a string. Try the following:  */
console.log(browserType.slice(2));

// Changing case
let radData = 'My NaMe Is MuD';
console.log(radData.toLowerCase());
console.log (radData.toUpperCase());

// Updating parts of a string
// You can replace one substring inside a string with another substring using the replace() method. 
console.log(browserType.replace('moz','van'));
