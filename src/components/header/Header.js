import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../header/Header.css';
const Header = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const handleSearchTerm = (e) => {
		e.preventDefault();
		setSearchTerm(e.target.value);
	};
	let navigate = useNavigate();

	function changeLocation(placeToGo) {
		navigate(placeToGo, { replace: true });
		window.location.reload();
	}
	return (
		<div className="container">
			<nav className="header">
				<div className="container p-4">
					<div className="row d-flex flex-row">
						<div className="col-lg-4 col-md-12 mb-4">
							<span className="navbar-brand-ico">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									fill="currentColor"
									className="bi bi-cart4"
									viewBox="0 0 16 16"
								>
									<path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
								</svg>
							</span>
							<Link to={`/`} onClick={() => changeLocation('/')} className="header-link">
								<span className="navbar-brand-txt mx-2">
									<span className="header_fw-7">Online Store Unir</span>.
								</span>
							</Link>
						</div>
						<div className="col-lg-4 col-md-12 mb-4">
							<div className="input-group mb-3">
								<input
									type="text"
									className="form-control"
									placeholder="Busca aquí tus artículos preferidos"
									aria-label="Busca aquí tus artículos preferidos"
									aria-describedby="button-addon2"
									onChange={(e) => handleSearchTerm(e)}
								/>
								<Link
									to={`${searchTerm === '' ? '' : 'search/' + searchTerm}`}
									className="btn btn-outline-secondary"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-search"
										viewBox="0 0 16 16"
									>
										<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
									</svg>
								</Link>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 mb-4">
							<Link to={`adminProduct`} className="btn btn-primary">
								Administrar producto
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
export default Header;
