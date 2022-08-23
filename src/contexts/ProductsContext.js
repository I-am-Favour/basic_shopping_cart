import React, { useContext, useEffect } from "react";
import { useReducer } from "react";
import reducer from "../reducers/ProductReducer";
import { GET_ALL_PRODUCT_BEGIN, GET_ALL_PRODUCT_END, GET_ALL_PRODUCT_ERROR, SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actions";
import { AllProducts } from "../utils";
const ProductContext = React.createContext()
const initialState = {
    sideBar: false,
    allProducts: [],
    isLoading: false,
    isError: false,
}
export const ProductContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)
    const openSidebar = () => {
        dispatch({ type: SIDEBAR_OPEN })
    }
    const closeSideBar = () =>{
        dispatch({type: SIDEBAR_CLOSE})
    }
    const fetchAllProducts = async () =>{
        try {
            dispatch({type: GET_ALL_PRODUCT_BEGIN})
            const response = await fetch(AllProducts)
            const data = await response.json()
            dispatch({type: GET_ALL_PRODUCT_END, payload: data})
        } catch (error) {
            console.log(error)
            dispatch({type: GET_ALL_PRODUCT_ERROR})
        }
    }
    useEffect(() =>{
        fetchAllProducts()
    }, [])
    return <ProductContext.Provider value={{
        ...state,
        openSidebar,
        closeSideBar,
    }}>
        {children}
    </ProductContext.Provider>
}
export const useProductContext = () =>{
    return useContext(ProductContext)
}