const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=ff8269c5b0bd46ba6e40cce113c0e3e8&query=37.8267,-122.4233&units=f';

request({ url: url, json: true }, (error, response) => {
	const temp = response.body.current.temperature;
	const feels = response.body.current.feelslike;
	const description = response.body.current.weather_descriptions[0];
	console.log(`${description}. It is currently ${temp} degreess out. It feels like ${feels} degreess out.`);
	/*Another way of doing this
	const current = response.body.current;
	console.log(`it is currently ${current.temperature} degreess out. It feels like ${current.feelslike} degreess out.`);
	*/
});
