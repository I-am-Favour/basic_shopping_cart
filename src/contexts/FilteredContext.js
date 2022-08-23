import React, { useContext, useReducer } from "react";
import { useEffect } from "react";
import {  CLEAR_FILTER, FILTER_PRODUCT, GET_FILTERED_PRODUCT, TOGGLE_FORMAT, UPDATE_FILTER } from "../actions";
import { reducer } from "../reducers/FilterReducer";
import { useProductContext } from "./ProductsContext";
const FilterContext = React.createContext()
const initialState = {
    filteredProducts: [],
    grid: true,
    search: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    priceRange: 0,
    freeShipping: false,
    sort: "p-low"
}
export const FilterContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)
    const { allProducts } = useProductContext()
    const highestPrice = Math.max.apply(null, allProducts.map((item) =>  item.price))
    useEffect(() =>{
        dispatch({type: GET_FILTERED_PRODUCT, payload: {allProducts, highestPrice}})
    }, [allProducts, highestPrice])
    const setFormat = (gridState) =>{
        dispatch({type: TOGGLE_FORMAT, payload: gridState})
    }
    const filterProduct = (name, value) =>{
        dispatch({type: UPDATE_FILTER, payload: {name, value, allProducts}})
    }
    useEffect(() =>{
        dispatch({type: FILTER_PRODUCT, payload: allProducts})
    }, [state.search, state.category, state.company, state.color, state.priceRange, allProducts, state.freeShipping, state.sort])
    const clearFilter = () =>{
        dispatch({type: CLEAR_FILTER, payload: {priceRange: state.maxPrice}})
    }
    return <FilterContext.Provider value={{
        ...state, setFormat, filterProduct, clearFilter
    }}>
        {children}
        {console.log(state.filteredProducts)}
    </FilterContext.Provider>
}
export const useFilterContext = () =>{
    return useContext(FilterContext)
}
