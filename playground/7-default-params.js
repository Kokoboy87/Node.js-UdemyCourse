// Default parameter that will be used if you dont provide argument
const greeter = (name = 'User', age) => {
	console.log('Hello ' + name);
};

greeter('Georgios');

greeter();
