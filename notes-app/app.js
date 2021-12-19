/* We need to creat a variable that requires to load the name from the utils.js file
And the name of the variable doesn't need to match the name of the variable on the utils.js file */
// const add = require('./utils.js');
// // That's for the second Challenge
const notes = require('./notes.js');
// // we create a variable to import fs(file system) documentations
// const fs = require('fs');
// // require the validation packages
// const validator = require('validator');
// // Challenge 3 require chalk
const chalk = require('chalk');
// // load yargs from the nodes library
const yargs = require('yargs');
// // ----------------------------------------------------------------------------- // //
// // ============= Practice ================= // //
// const sum = add(4, 5);

// console.log(sum);

// // imptort URL validations from the validator package
// console.log(validator.isURL('http://github.com'));

// console.log(process.argv[2]);

// const command = process.argv[2];

// if (command === 'add') {
// 	console.log('Adding note!');
// } else if (command === 'remove') {
// 	console.log('Removing note!');
// }

// // Create a txt file, and add a note(what ever we pass in the second quetations) to the txt file.
// fs.writeFileSync('notes.txt', 'My Name is Georgios.');

// // Append/add more notes in the excisting file.
// fs.appendFileSync('notes.txt', " But i'm no longer live there, i moved in the U.S in 2011.");

// //--------- Customize yargs version --------// //
yargs.version('1.1.0');

// // add, remove, list, read // //
// // Create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
		body: {
			describe: 'Your note here',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	},
});

// // Create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		notes.removeNote(argv.title);
	},
});

// // ------------- Challenge ---------- // //

// Create list command
yargs.command({
	command: 'list',
	describe: 'List a note',
	handler() {
		notes.listNotes();
	},
});

// Create read command
yargs.command({
	command: 'read',
	describe: 'Read a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		notes.readNote(argv.title);
	},
});

// //Is the same as console.log(yargs.argv);
yargs.parse();

// console.log(process.argv);
