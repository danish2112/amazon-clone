import React from 'react';
import '../css/Home.css';
import Product from './Product';

export const Home = () => {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__backgroundImg"
					src="http://www.pngmagic.com/product_images/all-free-download-blue-gradient-background.jpg"
				/>

				<div className="home__row">
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
				</div>
			</div>
		</div>
	);
};

export default Home;
