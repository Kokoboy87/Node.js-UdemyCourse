//// Object property shorthand

//const name = 'Georgios';
//const userAge = 34;

//const user = {
//	name,
//	age: userAge,
//	location: 'Landmark',
//};

//console.log(user);

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

//// ---- Structuring syntax ---- //
//const { label: productLabel, stock, rating = 5 } = product; // we can rename the property name "propertyName: newName" change the name of the property
//console.log(productLabel);
//console.log(stock);
//console.log(rating);

// destructuring with function arguments
const transaction = (type, { label, stock }) => {
	console.log(type, label, stock);
};

transaction('order', product);
