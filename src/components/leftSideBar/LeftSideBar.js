import React from 'react';
import './leftSideBar.css';

export const LeftSideBar = (props) => {
	console.log('LeftSideBar', props);

	return (
		<div className="card left-side-bar">
			<div className="card-body">
				<h5 className="card-title">Marca</h5>
			</div>
			<ul className="list-group list-group-flush">
				{props?.products?.map((agg) => (
					<li key={agg.key} onClick={() => props.searchProduct(agg)} className="list-group-item">
						{agg.key} {agg.count}{' '}
					</li>
				))}
			</ul>
		</div>
	);
};
