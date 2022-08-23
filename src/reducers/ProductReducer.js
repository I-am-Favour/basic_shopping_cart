import { GET_ALL_PRODUCT_BEGIN, GET_ALL_PRODUCT_END, GET_ALL_PRODUCT_ERROR, GET_SINGLE_PRODUCT_BEGIN, GET_SINGLE_PRODUCT_END, GET_SINGLE_PRODUCT_ERROR, SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actions";
const reducer = (state, {type, payload}) => {
    switch (type) {
        case SIDEBAR_OPEN:
            return {...state, sideBar: true}
        case SIDEBAR_CLOSE:
            return {...state, sideBar: false}
        case GET_ALL_PRODUCT_BEGIN:
            return {...state, isLoading: true}
        case GET_ALL_PRODUCT_END:
            return {...state, isLoading: false, allProducts: payload, filteredProducts: payload}
        case GET_ALL_PRODUCT_ERROR:
            return {...state, isLoading: false, isError: false}
        default:
            return state
    }
}
export default reducer