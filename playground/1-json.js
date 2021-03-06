const fs = require('fs');
const { json } = require('node:stream/consumers');
// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// };
// // Take an object and converted to JSON
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);
// console.log(bookJSON);
// // Take an JSON data and convert it to an Object
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

// //   ========   Challenge 6  ========   //
// //-- Work with JSON and the file system --//

// // 1. Load and parse the JSON data
// // 2. Change the name and age property using your info
// // 3. Stringify the changed object and overwrite the original data
// // 4. Test your work by viewing data in the JSON file

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'Georgios';
data.age = 34;

const userJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', userJSON);
console.log(data.name);
