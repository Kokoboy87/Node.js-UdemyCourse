// Object property shorthand

const name = 'Georgios';
const userAge = 34;

const user = {
	name,
	age: userAge,
	location: 'Landmark',
};

console.log(user);

//===== Object destructuring =====//

const product = {
	label: 'Red notebook',
	price: 3,
	stock: 201,
	salePrice: undefined,
	rating: 4.2,
};

//// ---- Stand alone variables ----- //
//// We can grab the value from the object product
//const label = product.label;
//const stock = product.stock;

// ---- Destructuring syntax ---- //
const { label: productLabel, stock, rating = 5 } = product; // we can rename the property name "propertyName: newName" change the name of the property
console.log(productLabel);
console.log(stock);
console.log(rating);

// Destructuring with function arguments
const transaction = (type, { label, stock = 0 } = {}) => {
	console.log(type, label, stock);
};

transaction('order', product);
transaction('order'); // this is for when we dont pass an argument value and we use default function parameters with empty function on line 36.

// ES6 Default function parameters
const greet = (name = 'User') => {
	console.log(`Hello, ${name}!`);
};

greet('George'); // Print 'Hello George"
greet(); // Print 'Hello User' instead of undefined
