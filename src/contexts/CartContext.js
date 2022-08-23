import React, {useContext, useReducer} from "react";
import { useEffect } from "react";
import { ADD_TO_CART, CLEAR_CART, REMOVE_ITEM, SET_COUNT, TOGGLE_AMOUNT } from "../actions";
import { reducer } from "../reducers/CartReducer";
const CartContext = React.createContext()
const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    totalPrice: 0,
    totalAmount: 0
}
export const CartContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)
    const addToCart = (data, amount, color) =>{
        dispatch({type: ADD_TO_CART, payload: {data, color, amount}})
    }
    const toggleAmount = (value, id) =>{
        dispatch({type: TOGGLE_AMOUNT, payload: {value, id}})
    }
    const removeItem = (id) =>{
        dispatch({type: REMOVE_ITEM, payload: id})
    }
    const clearCart = () =>{
        dispatch({type: CLEAR_CART})
    }
    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(state.cart))
        dispatch({type: SET_COUNT})
    }, [state.cart])
    return <CartContext.Provider value={{
        ...state, addToCart, toggleAmount, removeItem, clearCart
    }}>
        {console.log(state.cart)}
        {children}
    </CartContext.Provider>
}
export const useCartContext = () => useContext(CartContext)