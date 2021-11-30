// // we need to creat a variable that requires to load the name from the utils.js file
// // And the name of the variable doesn't need to match the name of the variable on the utils.js file
// const add = require('./utils.js');
// // That's for the second Challenge
const getNotes = require('./notes.js');
// // we create a variable to import fs(file system) documentations
// const fs = require('fs');
// // ----------------------------------------------------------------------------- // //
// // ============= Practice ================= // //
// const sum = add(4, 5);

// console.log(sum);

// //   ========   Challenge 1  ========   //

// //-- Append a message to notes.txt --//
// // 1. Use appendFileSync to append to the file
// // 2. Run the script with
// // 3. Check your work by opening the file and viewing the appended text

// // Create a txt file, and add a note(what ever we pass in the second quetations) to the txt file.
// fs.writeFileSync('notes.txt', 'My Name is Georgios.');
// // Append/add more notes in the excisting file.
// fs.appendFileSync('notes.txt', " But i'm no longer live there, i moved in the U.S in 2011.");

// //   ========   Challenge 2  ========   //

// //-- Define and use a function in a new file --//
// // 1. Create a new file called notes.js
// // 2. Create getNotes funtion that returns "Your notes..."
// // 3. Export getNotes function
// // 3. From app.js, load in and call function printing message to console

const msg = getNotes();

console.log(msg);
