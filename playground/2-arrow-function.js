// // Normal function
// const square = function (x) {
// 	return x * x;
// };

// // Arrow function
// const square = x => {
// 	return x * x;
// };

// // Short hand arrow function
// const square = x => x * x;

// console.log(square(3));

const eventList = {
	name: 'Birthday Party',
	guestList: ['Andrew', 'Jen', 'Mike'],
	printGuestList() {
		console.log('Guest list for ' + this.name);

		this.guestList.forEach(guest => {
			console.log(guest + ' is attending ' + this.name);
		});
	},
};

eventList.printGuestList();
