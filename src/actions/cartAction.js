import {actionType, PLACE_ORDER_API_URL} from "../helper";
import {mykey} from "../helper";
import * as state from "../reducers/cartReducer";
import axios from 'axios';


//cart

const getNumberBag = (numberBag) => {
    return {
        type: actionType.GET_NUMBER_BAG,
        payload: numberBag
    }
}

const getSize = (size) => {
    return {
        type: actionType.GET_SIZE,
        payload: size
    }
}

const getSubTotal = (subTotal) => {
    return {
        type: actionType.GET_SIZE,
        payload: subTotal
    }
}


export const addToShoppingBag = (product, productId, colorId, size) => async dispatch => {
    const shoppingBag = localStorage.getItem('shoppingBag') ?
        JSON.parse(localStorage.getItem('shoppingBag'))
        :
        [];
    let numberBag = localStorage.getItem('numberBag') ?
        JSON.parse(localStorage.getItem('numberBag'))
        :
        0;

    const duplicates = shoppingBag.findIndex(item => (
        JSON.stringify(item.productId) === JSON.stringify(productId)
        &&
        JSON.stringify(item.colorId) === JSON.stringify(colorId)
        &&
        JSON.stringify(item.size) === JSON.stringify(size)

    ));

    if (duplicates === -1) {
        const productToAdd = {
            productId: productId,
            name: product?.name,
            price: product?.price,
            colorId: colorId,
            images: product?.images,
            size: size,
            quantity: 1,
        };

        shoppingBag.push(productToAdd);

    }

    if (duplicates >= 0) {
        shoppingBag.map((item, index) => {
                if (JSON.stringify(item.productId) === JSON.stringify(productId)
                    &&
                    JSON.stringify(item.colorId) === JSON.stringify(colorId)
                    &&
                    JSON.stringify(item.size) === JSON.stringify(size)) {
                    shoppingBag[index].quantity++

                }
            }
        )
    }

    numberBag++

    localStorage.setItem('shoppingBag', JSON.stringify(shoppingBag));
    localStorage.setItem('numberBag', JSON.stringify(numberBag));

    dispatch({
        type: actionType.ADD_TO_SHOPPING_BAG,
        payload: {shoppingBag, numberBag}
    });

}

const removeFromShoppingBag = (payload) => {
    return {
        type: actionType.REMOVE_FROM_SHOPPING_BAG,
        payload
    }

}


// const removeFromShoppingBag = (productSelected) => async dispatch => {
//
//     const shoppingBag = JSON.parse(localStorage.getItem('shoppingBag'))
//
//     let numberBag = JSON.parse(localStorage.getItem('numberBag'))
//
//
//          const newShoppingBag = shoppingBag.filter((item, index) => {
//
//         if(JSON.stringify(item.productId) !==JSON.stringify( productSelected.productId)) {
//             return item
//         }
//
//         if (JSON.stringify(item.productId) ===JSON.stringify( productSelected.productId)
//             &&
//             JSON.stringify(item.colorId) !==JSON.stringify( productSelected.colorId)
//         ) {
//             return item
//         }
//
//         if (JSON.stringify(item.productId) ===JSON.stringify( productSelected.productId)
//             &&
//             JSON.stringify(item.colorId) ===JSON.stringify( productSelected.colorId)
//             &&
//             JSON.stringify(item.size) !==JSON.stringify( productSelected.size)
//         ) {
//             return item
//         }
//
//         if (JSON.stringify(item.productId) ===JSON.stringify( productSelected.productId)
//             &&
//             JSON.stringify(item.colorId) ===JSON.stringify( productSelected.colorId)
//             &&
//             JSON.stringify(item.size) ===JSON.stringify( productSelected.size)
//         ) {
//             numberBag = numberBag - item.quantity
//         }
//
//         })
//
//     localStorage.setItem('shoppingBag', JSON.stringify(newShoppingBag));
//     localStorage.setItem('numberBag', JSON.stringify(numberBag ));
//
//     dispatch({
//         type: actionType.REMOVE_FROM_SHOPPING_BAG,
//         payload: {newShoppingBag, numberBag}
//     })
//
//
// }


const increaseQuantity = (payload) => {
    return {
        type: actionType.INCREASE_QUANTITY,
        payload
    }
}

const decreaseQuantity = (payload) => {
    return {
        type: actionType.DECREASE_QUANTITY,
        payload
    }
}


const placeOrder = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const shoppingBag = JSON.parse(localStorage.getItem('shoppingBag'))
}





    const orderSuccess = (orderStatus) => {
        return {
            type: actionType.ORDER_SUCCESS,
            payload: orderStatus
        }
    }

    const paymentSuccess = () => {
        localStorage.removeItem('shoppingBag')
        localStorage.removeItem('numberBag')
        return {
            type: actionType.PAYMENT_SUCCESS
        }
    }

    export default {
        getNumberBag,
        getSize,
        addToShoppingBag,
        removeFromShoppingBag,

        increaseQuantity,
        decreaseQuantity,
        // submitLogin,
        // signOut,

        placeOrder,
        orderSuccess,
        paymentSuccess,


    }