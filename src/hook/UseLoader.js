import { useState } from 'react';

const UseLoader = ({ isloading = false }) => {
	const [isLoading, setLoading] = useState(isloading);

	return [isLoading, setLoading];
};

export default UseLoader;
