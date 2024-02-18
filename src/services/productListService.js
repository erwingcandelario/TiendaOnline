async function getList(
	name,
	company,
	price,
	description,
	urlImage,
	largeDescription,
	score,
	aggregate
) {
	try {
		name = name === undefined ? '' : name;
		company = company === undefined ? '' : company;
		price = price === undefined ? '' : price;
		description = description === undefined ? '' : description;
		urlImage = urlImage === undefined ? '' : urlImage;
		largeDescription = largeDescription === undefined ? '' : largeDescription;
		score = score === undefined ? '' : score;
		aggregate = aggregate === undefined ? '' : aggregate;
		const response = await fetch(
			`http://localhost:8088/products?name=${name}&company=${company}&price=${price}&description=${description}&urlImage=${urlImage}&largeDescription=${largeDescription}&score=${score}&aggregate=${aggregate}`
		)
			.then((res) => res.json())
			.then((response) => response);
		console.log('response =>', response);
		return response;
	} catch (error) {
		console.error('Error getList =>', error);
		throw error;
	}
}
async function product(id) {
	try {
		const response = await fetch('http://localhost:8088/products/' + id)
			.then((res) => res.json())
			.then((response) => response);
		console.log('product =>', response);
		return response;
	} catch (error) {
		console.error('Error product =>', error);
		throw error;
	}
}

async function createProduct(product) {
	try {
		const response = await fetch('http://localhost:8088/products/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(product),
		})
			.then((res) => res.json())
			.then((response) => response);
		console.log('createProduct =>', response);
		return response;
	} catch (error) {
		console.error('Error createProduct =>', error);
		throw error;
	}
}
async function delProduct(id) {
	try {
		const response = await fetch('http://localhost:8088/products/' + id, {
			method: 'DELETE',
		}).then((res) => true);
		console.log('delProduct =>', response);
		return response;
	} catch (error) {
		console.error('Error delProduct =>', error);
		throw error;
	}
}

async function editProduct(product) {
	try {
		const response = await fetch('http://localhost:8088/products/' + product.id, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(product),
		})	.then((res) => res.json())
		.then((response) => response);
		console.log('editProduct =>', response);
		return response;
	} catch (error) {
		console.error('Error editProduct =>', error);
		throw error;
	}
}

export { createProduct, delProduct, getList, product, editProduct };
