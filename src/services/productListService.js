async function getList() {
	try {
		const response = await fetch('http://localhost:8088/products')
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
		console.log('response =>', response);
		return response;
	} catch (error) {
		console.error('Error getList =>', error);
		throw error;
	}
}
export { getList, product };
