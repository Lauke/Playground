/* If we didn't have arrays, we'd have to store every item in a separate variable, then call the code that does the printing and adding separately for each item. 
This would be much longer to write out, less efficient, and more error-prone. If we had 10 items to add to the invoice it would already be annoying, 
but what about 100 items, or 1000? We'll return to this example later on in the article. */

let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping);
console.log(shopping[0]);
// returns "bread"

// Finding the length of an array
console.log(shopping.length);
// should return 5

// This has other uses, but it is most commonly used to tell a loop to keep going until it has looped through all the items in an array. So for example:
let sequence = [1, 1, 2, 3, 5, 8, 13];
for (let i = 0; i < sequence.length; i++) {
    console.log(sequence[i]);
}

/* Start looping at item number 0 in the array.
Stop looping at the item number equal to the length of the array. This works for an array of any length, but in this case it stops looping at item number 7 (this is good, as the last item — which we want the loop to include — is item 6).
For each item, print it out to the browser console with console.log(). */

// You can also modify an item in an array by giving a single array item a new value. Try this: 
shopping[0] = 'tahini';
console.log(shopping);
// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]

/* to access one of the items inside the array that is the third item inside the random array 
let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ['tree', 795, [0, 1, 2]];
console.log(random);
console.log(random[2][2]);
 */

/* Often you 'll be presented with some raw data contained in a big long string, and you might want to separate the useful items out into a more useful form 
and then do things to them, like display them in a data table. To do this, we can use the split() method. In its simplest form, this takes a single parameter, 
the character you want to separate the string at, and returns the substrings between the separator as items in an array. */

let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
console.log(myArray);

// Finally, try finding the length of your new array, and retrieving some items from it: 
console.log(myArray.length);
console.log(myArray[0]); // the first item in the array
console.log(myArray[1]); // the second item in the array
console.log(myArray[myArray.length - 1]); // the last item in the array

// You can also go the opposite way using the join() method. Try the following: 
let myNewString = myArray.join(',');
console.log(myNewString);

/* Another way of converting an array to a string is to use the toString() method. toString() is arguably simpler than join() 
as it doesn't take a parameter, but more limiting. With join() you can specify different separators, whereas toString() always uses a comma. 
(Try running Step 4 with a different character than a comma.)  */

let dogNames = ['Rocket','Flash','Bella','Slugger'];
console.log(dogNames);
console.log(dogNames.toString()); // Rocket,Flash,Bella,Slugger

// Adding and removing array items

myArray.push('Cardiff');
console.log(myArray);
myArray.push('Bradford', 'Brighton');
console.log(myArray);


/* unshift() and shift() work in exactly the same way as push() and pop(), respectively, 
except that they work on the beginning of the array, not the end. */
myArray.unshift('Edinburgh');
console.log(myArray);

let removedItem = myArray.shift();
console.log(myArray);
console.log(removedItem);