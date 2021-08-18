import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';

import '../css/Product.css';

const Product = () => {
	return (
		<div className="product">
			<div className="product__info">
				<p>Avengers 2</p>
				<p className="product__price">
					<small>$</small>
					<strong>19.99</strong>
				</p>
				<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg" />

				<div className="product__rating">
					<StarIcon
						fontSize="small"
						style={{ color: 'yellow' }}
					/>
					<StarIcon
						fontSize="small"
						style={{ color: 'yellow' }}
					/>
					<StarIcon
						fontSize="small"
						style={{ color: 'yellow' }}
					/>
				</div>
				<div className="product__button">
					<Button variant="contained" color="primary">
						Add to Basket
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Product;
