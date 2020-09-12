import React, {createContext, useReducer} from 'react'

export const context = createContext();

const CheckoutContextProvider = ({children}) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'ITEM_ADDED':
                return {
                    ...state,
                    items: [
                        ...state.items,
                        action.item
                    ]
                }
            case 'ITEM_REMOVED':
                const newBasket = state.items.filter(item => item.id != action.id)
                return {
                    items:[
                        ...newBasket
                    ]
                }
            case 'USER_SIGNED_IN':
                return{
                    ...state,
                    user: action.user
                }
            default:
                return state
        }
    }

    const [cart, dispatch] = useReducer(reducer, {items:[], user: null})
    const getTotalPrice = () =>{
        return (
            cart.items?.reduce((price, item) => price + item.price, 0)
        )
    }
    return (
        <context.Provider value={{ cart, dispatch, getTotalPrice}}>
            {children}
        </context.Provider>
    )
}

export default CheckoutContextProvider
