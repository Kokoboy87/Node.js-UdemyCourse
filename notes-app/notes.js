const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
	return 'Your notes...';
};

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNotes = notes.filter(note => note.title === title);
	// const duplicateNotes = notes.filter(function (note) {
	// 	return note.title === title;
	// });

	if (duplicateNotes.length === 0) {
		notes.push({
			title: title,
			body: body,
		});

		saveNotes(notes);
		console.log(chalk.green.inverse('New notes added'));
	} else {
		console.log(chalk.red.inverse('Note title taken!'));
	}
};

// //   ========   Challenge 8  ========   //
// //-- Wire up removeNote --//

// // 1. Load existing notes
// // 2. Use array filter method to remove the matching note (if any)
// // 3. Save the newly created array
// // 4. Test your work with a title that exists and a title that doesn't exist

const removeNote = title => {
	const notes = loadNotes();
	const notesToKeep = notes.filter(note => note.title !== title);

	if (notes.length > notesToKeep.length) {
		console.log(chalk.green.inverse('Note removed!'));
		saveNotes(notesToKeep);
	} else {
		console.log(chalk.red.inverse('No note found!'));
	}
};

const listNotes = () => {
	const notes = loadNotes();

	console.log(chalk.green.inverse('your notes'));

	notes.forEach(note => {
		console.log(note.title);
	});
};

// // ---------------------------------------------- // //

const saveNotes = notes => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
};
