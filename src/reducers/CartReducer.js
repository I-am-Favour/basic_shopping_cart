import { ADD_TO_CART, CLEAR_CART, REMOVE_ITEM, SET_COUNT, TOGGLE_AMOUNT } from "../actions";

export const reducer = (state, {type, payload}) =>{
    switch (type) {
        case ADD_TO_CART:
            const {data: {id, name, price, shipping, images, stock}, color, amount} = payload
            console.log(images)
            const newItem = {id, name, price, images: images[0].url, shipping, color, amount, stock}
            return {...state, cart: [...state.cart, newItem]}
        case TOGGLE_AMOUNT:
            let tempCart;
            tempCart = state.cart.map((item) =>{
                console.log(item.id, payload.id, payload.value)
                if (item.id === payload.id && payload.value === "inc" && item.amount < item.stock){
                    return {...item, amount: item.amount + 1}
                }
                if (item.id === payload.id && payload.value === "dec" && item.amount > 1){
                    return {...item, amount: item.amount - 1}
                }
                return item
            })
            return {...state, cart: tempCart}
        case REMOVE_ITEM:
            return {...state, cart: state.cart.filter((item) => item.id !== payload)}
        case SET_COUNT:
            const {totalAmount, totalPrice} = state.cart.reduce((total, single)=>{
                total.totalAmount += single.amount
                let totalInfo = (single.price / 100) * single.amount
                total.totalPrice += totalInfo
                return total
            }, {totalAmount: 0, totalPrice: 0})
            return {...state, totalAmount, totalPrice: Number(totalPrice.toFixed(2))}
        case CLEAR_CART:
            return {...state, cart: []}
        default:
            return state
    }
}