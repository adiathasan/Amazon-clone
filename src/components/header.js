import React, { useContext } from 'react'
import '../css/header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { context } from '../dataLayer/CheckoutContext'

function Header() {
    const {cart} = useContext(context);
    const totalItem = cart.totalItem
    return (
        <div className="header">
            <Link to='/' className='header__logoLink'>
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" className='header__logo'
                />
            </Link>
            <div className="header__search">
                <input type="text" className='header__searchInput'/>
                <SearchIcon
                className='header__searchIcon'
                />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Hello Guest
                    </span>
                    <span className='header__optionLineTwo'>
                        SignIn
                    </span>
                </div>
                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>
                <div className="header__optionBasket">
                    <Link to='/checkout'>
                        <ShoppingBasketIcon className="header__linkBasket"/>
                    </Link>
                <div className="header__optionLineTwo header__basketCount">{totalItem}</div>
                </div>
            </div>
        </div>
    )
}

export default Header
