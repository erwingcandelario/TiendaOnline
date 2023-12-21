import { useState } from 'react';

const UseLoader = ({ isloading = false }) => {
	// resusable stateful logic

	const [isLoading, setLoading] = useState(isloading);

	return [isLoading, setLoading];
};

export default UseLoader;
