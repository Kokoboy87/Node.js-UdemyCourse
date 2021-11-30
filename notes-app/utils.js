console.log('utils.js');

const firstName = 'Antonis';

const add = function (a, b) {
	return a + b;
};

// A way to export variables to other files
module.exports = add;
