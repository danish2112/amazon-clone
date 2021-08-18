import React from 'react';
import '../css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
	return (
		<div className="header">
			<img
				className="header-logo"
				src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
			/>

			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>

			<div className="header__nav">
				<div className="header_option">
					<span className="header__optionLineOne">
						Hello Guest
					</span>
					<span className="header__optionLineTwo">Sign In</span>
				</div>
				<div className="header_option">
					<span className="header__optionLineOne">Returns </span>
					<span className="header__optionLineTwo">& Orders</span>
				</div>
				<div className="header_option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
				<div className="header__basketOption">
					<ShoppingBasketIcon />
					<span className="header__optionLineTwo header__basketCount">
						0
					</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
