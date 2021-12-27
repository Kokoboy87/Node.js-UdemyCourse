const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=ff8269c5b0bd46ba6e40cce113c0e3e8&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
	const current = response.body.current;
	console.log(`${current.weather_descriptions[0]}. It is currently ${current.temperature} degreess out. It feels like ${current.feelslike} degreess out.`);
});

const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/alexandria,virginia.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoia29rb2JveSIsImEiOiJja3hvYWtqZGQ3cGxlMnVybmlvMzMybWg5In0.8FjBCn9yDSwNjT2RTHewOg&limit=1';

request({ url: geoURL, json: true }, (error, response) => {
	const location = response.body;
	console.log(`The longtitude is ${location.features[0].center[0]}, and the latitude is ${location.features[0].center[1]}`);
});
