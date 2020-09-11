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
                    ],
                    totalItem: [
                        ...state.items,
                        action.item
                    ].length
                }
            case 'ITEM_REMOVED':
                const newBasket = state.items.filter(item => item.id != action.id)
                return {
                    items:[
                        ...newBasket
                    ],
                    totalItem: newBasket.length 
                }
            default:
                return state
        }
    }

    const [cart, dispatch] = useReducer(reducer, {items:[], totalItem:0})
    return (
        <context.Provider value={{cart, dispatch}}>
            {children}
        </context.Provider>
    )
}

export default CheckoutContextProvider
