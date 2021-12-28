const request = require('request');

// // API weather service (weatherstack.com)
// const url = 'http://api.weatherstack.com/current?access_key=ff8269c5b0bd46ba6e40cce113c0e3e8&query=37.8267,-122.4233&units=f';
// // Weather service request
// request({ url: url, json: true }, (error, response) => {
// 	if (error) {
// 		console.log('Unable to connect to weather service!');
// 	} else if (response.body.error) {
// 		console.log('Inaccurate location!');
// 	} else {
// 		const current = response.body.current;
// 		console.log(`${current.weather_descriptions[0]}. It is currently ${current.temperature} degreess out. It feels like ${current.feelslike} degreess out.`);
// 	}
// });

// API Geolocation service (mapbox.com)
const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Dc.json?access_token=pk.eyJ1Ijoia29rb2JveSIsImEiOiJja3hvYWtqZGQ3cGxlMnVybmlvMzMybWg5In0.8FjBCn9yDSwNjT2RTHewOg';
// Geolocation service request
request({ url: geoURL, json: true }, (error, response) => {
	if (error) {
		console.log('Enable to get location at this time!');
	} else if (response.body.message) {
		console.log('Inaccurate location!');
	} else {
		const location = response.body;
		console.log(`The longtitude is ${location.features[0].center[0]}, and the latitude is ${location.features[0].center[1]}`);
	}
});
