import {actionType} from "../helper";

const tokenFromLocal = JSON.parse(localStorage.getItem('token') || 'null')
const shoppingBagFromLocal = JSON.parse(localStorage.getItem('shoppingBag' || []))
const numberBagFromLocal = JSON.parse(localStorage.getItem('numberBag') || 0 )

const initialState = {
    shoppingBag: shoppingBagFromLocal,
    numberBag: numberBagFromLocal,
    size:'',
    // token: tokenFromLocal,
    // loginFail: false,
    // loginSuccess: false,
    orderSuccess: false
}
// if (localStorage.getItem('shoppingBag')) {
//     initialState.shoppingBag = JSON.parse(localStorage.getItem('shoppingBag'))
//     initialState.numberBag = JSON.parse(localStorage.getItem('numberBag'))
// }

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_TO_SHOPPING_BAG: {

            console.log('state2--->', state)
            console.log(`[reducer]${actionType.ADD_TO_SHOPPING_BAG}--->`, action.payload)

            return {
                ...state,
                shoppingBag: [...action.payload.shoppingBag],
                numberBag: action.payload.numberBag

            }
        }

        case actionType.REMOVE_FROM_SHOPPING_BAG: {

            let newNumberBag = state.numberBag
            const newShoppingBag = state.shoppingBag.filter((item, index) => {
                if (item.productId !== action?.payload.productId) {
                    return item
                }

                if (item.productId === action?.payload.productId
                    &&
                    item.colorId !== action?.payload.colorId
                ) {
                    return item
                }

                if (item.productId === action?.payload.productId
                    &&
                    item.colorId === action?.payload.colorId
                    &&
                    item.size !== action?.payload.size
                ) {
                    return item
                }
                if (item.productId === action?.payload.productId
                    &&
                    item.colorId === action?.payload.colorId
                    &&
                    item.size === action?.payload.size
                ) {
                    newNumberBag = state.numberBag - item.quantity
                }
            })

            localStorage.setItem('shoppingBag', JSON.stringify(newShoppingBag));
            localStorage.setItem('numberBag', JSON.stringify(newNumberBag));

            return {
                ...state,
                shoppingBag: newShoppingBag,
                numberBag: newNumberBag
            }
        }

        // case actionType.REMOVE_FROM_SHOPPING_BAG: {
        //     console.log('state3--->', state)
        //     console.log(`[reducer]${actionType.REMOVE_FROM_SHOPPING_BAG}--->`, action.payload)
        //
        //    return {
        //        ...state,
        //         shoppingBag:[...action?.payload.shoppingBag],
        //         numberBag: action?.payload.numberBag
        //    }
        // }


        case actionType.SUBMIT_LOGIN: {
            return {
                ...state,
                token: action.payload,
                loginFail: false,

            }
        }

        case actionType.ORDER_SUCCESS: {
            return {
                ...state,
                orderSuccess: true
            }
        }

        case actionType.PAYMENT_SUCCESS: {
            return {
                ...state,
                loginFail: true,
                token: null
            }
        }



        default:
            return state
    }


}