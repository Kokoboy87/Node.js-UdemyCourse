const request = require('request');

const geocode = (address, callback) => {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia29rb2JveSIsImEiOiJja3hvYWtqZGQ3cGxlMnVybmlvMzMybWg5In0.8FjBCn9yDSwNjT2RTHewOg';

	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback('unable to get location at this time!');
		} else if (response.body.message) {
			callback('You need to enter location!');
		} else if (response.body.features.length === 0) {
			callback('inaccurate location!');
		} else {
			callback(undefined, {
				latitude: response.body.features[0].center[0],
				longitude: response.body.features[0].center[1],
				location: response.body.features[0].place_name,
			});
		}
	});
};

module.exports = geocode;
