// // we need to creat a variable that requires to load the name from the utils.js file
// // And the name of the variable doesn't need to match the name of the variable on the utils.js file
// const add = require('./utils.js');
// // That's for the second Challenge
// const getNotes = require('./notes.js');
// // we create a variable to import fs(file system) documentations
// const fs = require('fs');
// // require the validation packages
// const validator = require('validator');
// // Challenge 3 require chalk
// const chalk = require('chalk');
// // ----------------------------------------------------------------------------- // //
// // ============= Practice ================= // //
// const sum = add(4, 5);

// console.log(sum);

// // imptort URL validations from the validator package
// console.log(validator.isURL('http://github.com'));

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
// // 4. From app.js, load in and call function printing message to console

// const msg = getNotes();

// console.log(msg);

// //   ========   Challenge 3  ========   //
// //-- Use the chalk library in your project --//

// // 1. Install version 5.0.0 of chalk
// // 2. Load chalk into app.js
// // 3. Use it to print the string "Success!" to the console in green
// // 4. Test your work
// //
// // Bonus: Use docs to mess with other styles. Make text bold and inversed.

// console.log(chalk.inverse.green.bold('Success!'));
