async function getList(
	name = '',
	company = '',
	price = '',
	description = '',
	urlImage = '',
	largeDescription = '',
	score = '',
	aggregate = ''
) {
	try {
		const response = await fetch(
			// `http://localhost:8088/products?name=${name}&company=${company}&price=${price}&description=${description}&urlImage=${urlImage}&largeDescription=${largeDescription}&score=${score}&aggregate=${aggregate}`
			`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/products?name=${name}&company=${company}&price=${price}&description=${description}&urlImage=${urlImage}&largeDescription=${largeDescription}&score=${score}&aggregate=${aggregate}`
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

async function searchServiceProduct(url = '') {
	try {
		const response = await fetch(url)
			.then((res) => res.json())
			.then((response) => response);
		return response;
	} catch (error) {
		console.error('Error product =>', error);
		throw error;
	}
}

async function product(id) {
	try {
		const response = await fetch(`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/products/` + id) //http://localhost:8088/products/
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
	// 'http://localhost:8088/products/'
	try {
		const response = await fetch( `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/products/` , {
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
		const response = await fetch(`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/products/` + id, {
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
		const response = await fetch(`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/products/` + product.id, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(product),
		})
			.then((res) => res.json())
			.then((response) => response);
		console.log('editProduct =>', response);
		return response;
	} catch (error) {
		console.error('Error editProduct =>', error);
		throw error;
	}
}

export { createProduct, delProduct, editProduct, getList, product, searchServiceProduct };
