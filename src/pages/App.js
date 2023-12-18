import './App.css';

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
			{/* <BrowserRouter> */}
			<Header />
			{/* <Routes> */}
			{/* home page route */}
			{/* <Route path="/" element={<Home />} /> */}
			{/* single product route */}
			{/* <Route path="/product/:id" element={<ProductSingle />} /> */}
			{/* category wise product listing route */}
			{/* <Route path="/category/:category" element={<CategoryProduct />} /> */}
			{/* cart */}
			{/* <Route path="/cart" element={<Cart />} /> */}
			{/* searched products */}
			{/* <Route path="/search/:searchTerm" element={<Search />} /> */}
			{/* </Routes> */}

			<Footer />
			{/* </BrowserRouter> */}
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */}
		</div>
	);
}

export default App;
