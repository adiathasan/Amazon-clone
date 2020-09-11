import React, { useContext } from 'react'
import '../css/checkout.css'
import { context } from '../dataLayer/CheckoutContext'

function Checkout() {
    const {cart, dispatch} = useContext(context);
    let totalPrice = 0;
    cart.items.forEach(item =>{
        totalPrice += item.price
    })
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className="checkout__add" src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'/>
                <div className="checkout__leftCartItems">
                    <h2>Your Shopping Basket</h2>
                    <div>
                        { cart.items.map(item =>{
                            return <div className="checkout__leftCartItemsAll" key={item.id}>
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
                                </div>
                            })
                           
                        }
                    </div>
                </div>
            </div>
            <div className="checkout__right">
                <p>subtotal({cart.totalItem} items): 
                <strong>$
                    {
                        totalPrice
                    }
                </strong></p>
                <div className="checkout__rightCheckBox">
                    <input type="checkbox" />
                    <p>this order contains a gift</p>
                </div>
                <button className='checkout__button'>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Checkout
