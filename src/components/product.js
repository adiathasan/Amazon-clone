import React, {useContext} from 'react'
import '../css/product.css'
import { context } from '../dataLayer/CheckoutContext';
import {motion} from 'framer-motion/dist/framer-motion'

function Product({ price, title, image, rating , id}) {
    const { dispatch } = useContext(context);
    const unRate = 5 - rating
    return (
        <motion.div 
        whileHover={{
            opacity: 1,
            boxShadow: '3px 3px 3px 3px #888888'
        }}
        className='product' key={id}>
            <div className="product__info">
                <p>{title && title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price && price}</strong>
                </p>
                <div className="product__rating">
                    {
                       rating && Array(rating).fill().map((_, i)=>{
                           return <span className="fa fa-star checked" key={Math.random()}></span>
                               
                       })
                    }
                    {

                       rating && Array(unRate).fill().map((_, i)=>{
                           return <span className="fa fa-star"></span>
                               
                       })
                    }
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={()=> dispatch({
                type: 'ITEM_ADDED',
                item: {
                    id: Math.random(),
                    title,
                    rating,
                    image,
                    price
                }
            })}>Add to Basket</button>
        </motion.div>
    )
}

export default Product
