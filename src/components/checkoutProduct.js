import React, {useContext} from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { context } from '../dataLayer/CheckoutContext'

function CheckoutProduct() {
    const { cart, dispatch } = useContext(context);
    return (
        <div>
            {cart.items.map(item => {
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
                        <button onClick={() => dispatch({
                            type: 'ITEM_REMOVED',
                            id: item.id
                        })}>Remove from Basket</button>
                    </div>
                </motion.div>
            })

            }
        </div>
    )
}

export default CheckoutProduct
