import './ProductTable.css';
const ProductTable = (props) => (
	<table>
		<thead>
			<tr>
				<th>Nombre</th>
				<th>Empresa</th>
				<th>Precio</th>
				<th>Acciones</th>
			</tr>
		</thead>
		<tbody>
			{props.products.length > 0 ? (
				props.products.map((product) => (
					<tr key={product.id}>
						<td>{product.nombre}</td>
						<td>{product.empresa}</td>
						<td>{product.precio}</td>
						<td>
							<button
								onClick={() => {
									props.editRow(product);
								}}
								className="button muted-button"
							>
								Editar
							</button>
							<button
								onClick={() => props.deleteProduct(product.id)}
								className="button muted-button"
							>
								Eliminar
							</button>
						</td>
					</tr>
				))
			) : (
				<tr>
					<td colSpan={3}>No hay productos.</td>
				</tr>
			)}
		</tbody>
	</table>
);

export default ProductTable;
