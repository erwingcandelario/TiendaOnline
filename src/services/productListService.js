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
			`${process.env.REACT_APP_API_URL}/products?name=${name}&company=${company}&price=${price}&description=${description}&urlImage=${urlImage}&largeDescription=${largeDescription}&score=${score}&aggregate=${aggregate}`
		)
			.then((res) => res.json())
			.then((response) => response);
		return response;
	} catch (error) {
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
		throw error;
	}
}

async function product(id) {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/products/` + id
		)
			.then((res) => res.json())
			.then((response) => response);
		return response;
	} catch (error) {
		throw error;
	}
}

async function createProduct(product) {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/products/`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(product),
			}
		)
			.then((res) => res.json())
			.then((response) => response);
		return response;
	} catch (error) {
		throw error;
	}
}
async function delProduct(id) {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/products/` + id,
			{
				method: 'DELETE',
			}
		).then((res) => true);
		return response;
	} catch (error) {
		throw error;
	}
}

async function editProduct(product) {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/products/` + product.id,
			{
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(product),
			}
		)
			.then((res) => res.json())
			.then((response) => response);
		return response;
	} catch (error) {
		throw error;
	}
}

export { createProduct, delProduct, editProduct, getList, product, searchServiceProduct };
