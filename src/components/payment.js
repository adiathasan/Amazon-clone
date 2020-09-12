import React, { useContext } from 'react'
import { context } from '../dataLayer/CheckoutContext'
import '../css/payment.css'

function Payment() {
    const {cart} = useContext(context)
    return cart.user ? (
        <div className='payment'>
            <h2>Checkout ({cart.items.length} item{cart.items.length > 1?'s':''})</h2>
            <div className="payment__conatiner">
                <div className="payment__address">
                    <h5>Delivery Address</h5>
                    <p>{cart.user?.email}</p>
                </div>
                <div className="payment__conatiner">
                    
                </div>
            </div>
        </div>
    ) : <div className='flex__loading'> <h1>Loading....</h1> </div>
}

export default Payment
