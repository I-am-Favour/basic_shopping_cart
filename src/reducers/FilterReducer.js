import { CLEAR_FILTER, FILTER_PRODUCT, GET_FILTERED_PRODUCT, TOGGLE_FORMAT, UPDATE_FILTER } from '../actions';
export const reducer = (state, {type, payload}) =>{
    switch (type) {
        case GET_FILTERED_PRODUCT:
            return {...state, filteredProducts: payload.allProducts, priceRange: payload.highestPrice, maxPrice: payload.highestPrice}
        case TOGGLE_FORMAT:
            return {...state, grid: !payload}
        case UPDATE_FILTER:
            return {...state, [payload.name]: payload.value}
        case FILTER_PRODUCT:
            const {search, category, company, color, priceRange, freeShipping, sort} = state
            let tempCart = payload
            if (search) tempCart = tempCart.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
            if (category !== "all") tempCart = tempCart.filter(item => item.category === category)
            if (company !== "all") tempCart = tempCart.filter(item => item.company === company)
            if (color !== "all") tempCart = tempCart.filter(item => item.colors.includes(color))
            if (freeShipping) tempCart = tempCart.filter(item => item.shipping === true)
            tempCart = tempCart.filter(item => item.price <= priceRange)
            if (sort === "p-low") tempCart = [...tempCart].sort((x, y) => x.price - y.price)
            if (sort === "p-high") tempCart = [...tempCart].sort((x, y) => y.price - x.price)
            if (sort === "a-z") tempCart = [...tempCart].sort(() => 1)
            if (sort === "z-a") tempCart = [...tempCart].sort(() => -1)
            return {...state, filteredProducts: tempCart}
        case CLEAR_FILTER:
            return {...state, search: "", category: "all", company: "all", color: "all", priceRange: payload.priceRange, freeShipping: false, sort: "p-low"}
        default:
            return state
    }
}
// 22638691900