import './App.css';

// react router v6
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// pages
import { Home, ProductSingle, Search } from './index';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

// pages
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />

				<Routes>
					{/* home */}
					<Route path="/" element={<Home />} />
					{/* un producto */}
					<Route path="/product/:id" element={<ProductSingle />} />
					{/* Buscar Producto */}
					<Route path="/search/:searchTerm" element={<Search />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
