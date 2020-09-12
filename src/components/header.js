import React, { useContext, useEffect } from 'react'
import '../css/header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { context } from '../dataLayer/CheckoutContext'
import { auth } from '../config/firebaseConfig'
import {motion} from 'framer-motion/dist/framer-motion'

function Header() {
    const {cart, dispatch} = useContext(context);
    const totalItem = cart.items.length
    const user = cart.user
    useEffect(()=>{
        auth.onAuthStateChanged(user =>{
            if(user){
                dispatch({
                    type: 'USER_SIGNED_IN',
                    user
                })
            }else{
                dispatch({
                    type: 'USER_SIGNED_IN',
                    user: null
                })
            }
        })
        
    }, [])
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
                <Link to={user ? '/' : '/login'} className='login__link'>
                    <div onClick={()=> {
                        if(user){
                            auth.signOut();
                        }
                    }} className="header__option">
                        <span className='header__optionLineOne'>
                            Hello { user?.email }
                        </span>
                        <span className='header__optionLineTwo'>
                            {user ? 'Sign-Out': 'Sign-In'}
                        </span>
                    </div>
                </Link>
             
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
                    <motion.div layout className="header__optionLineTwo header__basketCount">
                    {totalItem}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Header
