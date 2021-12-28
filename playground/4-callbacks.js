setTimeout(() => {
	console.log('2 seconds are up');
}, 2000);

const names = ['George', 'Enola', 'Antonis'];
const shortNames = names.filter((name) => {
	return name.length <= 5;
});

const geocode = (address, callback) => {
	setTimeout(() => {
		const data = {
			latitude: 0,
			longtitude: 0,
		};
		callback(data);
	}, 2000);
};

geocode('Philadelphia', (data) => {
	console.log(data);
});
