import './Footer.css';
const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className="container my-5">
			<footer className="footer">
				<div className="container p-4">
					<div className="row">
						<div className="col-lg-6 col-md-12 mb-4">
							<h5 className="mb-3 footer_letter">Online Store Unir</h5>
							<p>
								Los nuevos productos de Online Store Unir viene cargada con lo último en tendencias
								de tecnología. Aquí, encontrarás un amplio abanico de producto de tus marcas
								favorita.
							</p>
						</div>
						<div className="col-lg-3 col-md-6 mb-0 align-items-center justify-content-center">
							<h5 className="mb-3 footer_letter">Redes Sociales</h5>
							<ul className="list-unstyled mb-0">
								<li className="d-flex flex-row  mb-1">
									<div className="footer_links p-1">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-instagram"
											viewBox="0 0 16 16"
										>
											<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
										</svg>
									</div>
									<h5 className="p-1">Instagram</h5>
								</li>
								<li className="d-flex flex-row mb-1">
									<div className="footer_links p-1">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-twitter-x"
											viewBox="0 0 16 16"
										>
											<path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
										</svg>
									</div>
									<h5 className="p-1">Twitter-x</h5>
								</li>
								<li className="d-flex flex-row  mb-1">
									<div className="footer_links p-1">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-facebook"
											viewBox="0 0 16 16"
										>
											<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
										</svg>
									</div>
									<h5 className="p-1">Facebook</h5>
								</li>
							</ul>
						</div>
						<div className="col-lg-3 col-md-6 mb-4">
							<h5 className="mb-1 footer_letter">Contactacnos</h5>
							<table className="table footer_table">
								<tbody>
									<tr>
										<td>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-geo-alt"
												viewBox="0 0 16 16"
											>
												<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
												<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
											</svg>
											Carrera 22 No 32-80 T3 PH401
										</td>
									</tr>
									<tr>
										<td>Colombia, Bogotá</td>
									</tr>
									<tr>
										<td>+57 76383677 +57 314 2510102</td>
									</tr>
									<tr>
										<td>ventas@apreciosderemate.com</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className="text-center p-3 footer_copyright">
					© {year} Online Store Unir Copyright | Todos los derechos reservados.
				</div>
			</footer>
		</div>
	);
};

export default Footer;
