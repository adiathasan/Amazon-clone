import React, { useContext } from 'react'
import '../css/checkout.css'
import { context } from '../dataLayer/CheckoutContext'
import {motion} from 'framer-motion/dist/framer-motion'
import { useHistory } from 'react-router-dom';
function Checkout() {
    const {cart, dispatch, getTotalPrice} = useContext(context);
    // let totalPrice = cart.items?.reduce((amount, item) => item.price + amount, 0)
    const redirect = useHistory();
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className="checkout__add" src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'/>
                <div className="checkout__leftCartItems">
                    <h2>Your Shopping Basket</h2>
                    <div >
                        { cart.items.map(item =>{
                            return <motion.div layout
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }}
                            className="checkout__leftCartItemsAll" key={item.id}>
                                        <img src={item.image} alt="" />
                                        <div className="checkout__leftCartItemsAllInfo">
                                            <p className='checkout__title'>{item.title}</p>
                                            <p className='checkout__price'>
                                                <small>$</small>
                                                <strong>{item.price}</strong>
                                            </p>
                                            <div className="checkout__rating">
                                                {
                                                Array(item.rating).fill().map((_, i) => {
                                                        return <span className="fa fa-star checked" key={Math.random()}></span>

                                                    })
                                                }
                                                {

                                                Array(5 - item.rating).fill().map((_, i) => {
                                                        return <span className="fa fa-star"></span>

                                                    })
                                                }
                                            </div>
                                        <button onClick={()=> dispatch({
                                            type: 'ITEM_REMOVED',
                                            id: item.id
                                        })}>Remove from Basket</button>
                                        </div>
                                </motion.div>
                            })
                           
                        }
                    </div>
                </div>
            </div>
            <motion.div layout
                initial={{ opacity: 0}}
                animate={{ opacity: 1}} className="checkout__right">
                <p>subtotal({cart.items.length} items): 
                <strong>$
                    {
                        getTotalPrice()
                    }
                </strong></p>
                <div className="checkout__rightCheckBox">
                    <input type="checkbox" />
                    <p>this order contains a gift</p>
                </div>
                <button onClick={()=> redirect.push('/payment')} className='checkout__button'>Proceed to Checkout</button>
            </motion.div>
        </div>
    )
}

export default Checkout
