import {actionType, productLibrary} from "../helper";

const initialState = {
    totalProducts: 0,
    isLoading: false,
    products: [],
    colorId: '',

    product: {},

    // subTotal: 0
}


// else {
//
//     initialState.shoppingBag = [];
//     initialState.numberBag = 0;
// }


export const productReducer = (state = initialState, action) => {
    console.log('state1--->', state)
    switch(action.type) {

        case actionType.FETCH_HARD_CODE_PRODUCTS: {
            return {...state, products: action?.payload}
        }

        case actionType.FETCH_FILTERED_PRODUCTS: {

            let newProducts = action.payload.filter(arr => {
                if (Object.keys(arr).length !== 0) {
                    return arr
                }
            })
            console.log('action.payload/FETCH_FILTERED_PRODUCTS, newProducts', action.payload, newProducts)

            return {
                ...state, products: newProducts
            }
        }

        case actionType.FETCH_TOTAL_PRODUCTS: {
            return {...state, totalProducts: action?.payload}
        }


        case actionType.FETCH_LOW_TO_HIGH_PRODUCTS: {

            let copyState = [...action.payload]
            copyState.sort((p1, p2) => p1?.price?.match(/(\d+)/)[0] - p2?.price?.match(/(\d+)/)[0])

            return {...state, products: copyState}
        }

        case actionType.FETCH_HIGH_TO_LOW_PRODUCTS: {
            let stateCopy = [...action.payload]
            stateCopy.sort((p1, p2) => p1?.price?.match(/(\d+)/)[0] - p2?.price?.match(/(\d+)/)[0]).reverse()

            return {...state, products: stateCopy}

        }

        case actionType.LOADING_PRODUCTS: {
            return {...state, isLoading: action?.payload}
        }


        case actionType.FETCH_SINGLE_PRODUCT: {
            return {...state, product: action?.payload}
        }

        case actionType.FETCH_COLORID: {
            return {...state, colorId: action?.payload}
        }

        // shopping bag

        case actionType.GET_NUMBER_BAG: {
            return {
                ...state,
                numberBag: action?.payload
            }
        }

        case actionType.GET_SIZE: {
            return {
                ...state,
                size: action?.payload

            }
        }





        // case actionType.GET_SUBTOTAL: {
        //     return {
        //         ...state,
        //         subTotal: action?.payload
        //     }
        // }





        default:
            return state




    }


}

