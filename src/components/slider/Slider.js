import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { sliderImgs } from '../../utils/images';
import './Slider.css';

const HeaderSlider = () => {
	let settings = {
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className="slider-content">
			<h1 className="slider-header">Tienda de tecnología</h1>
			<div className="slider-container">
				<Slider {...settings}>
					<div>
						<div className="slider-img-body">
							<img src={sliderImgs[0]} alt="" />
						</div>
					</div>
					<div>
						<div className="slider-img-body">
							<img src={sliderImgs[1]} alt="" />
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default HeaderSlider;
