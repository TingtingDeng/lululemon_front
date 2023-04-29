import axios from "axios";
import {
    actionType,
    API_URL_ALL_PRODUCTS,
    API_URL_SORTED_PRODUCTS, mykey,

} from "../helper";





/**  Error: 'axios.post'( unresolved function..): copy the following and let webstorm install express
 *
 *    let express = require('express') ;
 *    let app = express();
 *    app.post('/', function (req, res) {
 *        res.send('POST request to homepage')
 *     });
 * **/

// const fetchHardCodeProducts = () => {
//     return {
//         type: actionType.FETCH_HARD_CODE_PRODUCTS,
//         payload: productLibrary
//     }
// }

// const fetchFilteredProducts = (productLibrary) => {
//     return {
//         type: actionType.FETCH_FILTERED_PRODUCTS,
//         payload: productLibrary
//     }
// }


const selectedImage = (colorId) => {
    return {
        type:actionType.SELECTED_IMAGE,
        payload: colorId
    }
}

const fetchTotalProducts = (totalProducts) => {
    return {
        type: actionType.FETCH_TOTAL_PRODUCTS,
        payload: totalProducts
    }
}


const fetchProductsAPI = (filters, sortingId) => {
    return dispatch => {
    dispatch({
        type: actionType.LOADING_PRODUCTS,
        payload: true
    })
    axios.post(API_URL_SORTED_PRODUCTS, filters)
        .then(res => {
            console.log(res)
            let products = res?.data?.rs?.products
            let totalProducts = res?.data?.rs?.pageParams?.totalProducts
            console.log('totalProducts--->', totalProducts)

            dispatch({
                type: actionType.LOADING_PRODUCTS,
                payload: false
            })

            dispatch({
                type: actionType.FETCH_FILTERED_PRODUCTS,
                payload: products
            })

            dispatch({
                type: actionType.FETCH_TOTAL_PRODUCTS,
                payload: totalProducts
            })

        }).catch(error => console.log(error))
}}



const fetchProductsAsyncAPI = (filters, sortingId) => {
    return async dispatch => {
        dispatch({
            type: actionType.LOADING_PRODUCTS,
            payload: true
        })
        try {
            let temp = await axios.post(API_URL_SORTED_PRODUCTS, filters)
            console.log('temp--->', temp)
            let products = temp?.data?.rs?.products
            let totalProducts = temp?.data?.rs?.pageParams?.totalProducts

            console.log('totalProducts/fetchProductsAsyncAPI---->', totalProducts)

            dispatch({
                type: actionType.LOADING_PRODUCTS,
                payload: false
            })

            dispatch({
                type: actionType.FETCH_FILTERED_PRODUCTS,
                payload: products
            })

            dispatch({
                type: actionType.FETCH_TOTAL_PRODUCTS,
                payload: totalProducts
            })

        } catch(error) {
            dispatch({
                type: actionType.LOADING_PRODUCTS,
                payload: false
            })
            console.log('fetch product http error', error)
        }
    }
}

const fetchFilteredProductsAPI = (filters, sortingId) => {
    return async dispatch => {
        dispatch({
            type: actionType.LOADING_PRODUCTS,
            payload: true
        })
        try{
            let BasicUrl =`http://api-lulu.hibitbyte.com/product/allProducts?sortingId=${sortingId}&page=1&mykey=AEG3JJ%2BzG8skgjpIHH7EkpyXWp5VcGKq3xE6egpW1y/Z%2Bpy2l4J/R9616YsqMvLIHPT6kYCvUPAYpXQIBEi27Q==`
            console.log(BasicUrl)
            let temp = await axios.post(BasicUrl, filters)
            let products = temp?.data?.rs?.products
            dispatch({
                type: actionType.LOADING_PRODUCTS,
                payload: false
            })

            dispatch({
                type: actionType.FETCH_FILTERED_PRODUCTS,
                payload: products
            })

        } catch (error) {
            console.log('fetch Product http error', error)
        }
    }
}

const fetchLowToHighProductsAPI = (filters, sortingId) => {
    return async dispatch => {
    dispatch({
        type: actionType.LOADING_PRODUCTS,
        payload: true
    })
    try {

        let BasicUrl =`http://api-lulu.hibitbyte.com/product/allProducts?sortingId=1&page=1&mykey=${mykey}`
        console.log(BasicUrl)
        let temp = await axios.post(BasicUrl, filters)
        let products = temp?.data?.rs?.products
        console.log('products/fetchLowToHighProductsAPI---->', products)
       dispatch({
            type: actionType.LOADING_PRODUCTS,
            payload: false
        })

        dispatch({
            type: actionType.FETCH_LOW_TO_HIGH_PRODUCTS,
            payload: products
        })


    } catch(error) {
        dispatch({
            type: actionType.LOADING_PRODUCTS,
            payload: false
        })
        console.log('fetch product http error', error)

    }
}}

const fetchHighToLowProductsAPI = (filters, sortingId) =>{

  return async dispatch => {
    dispatch({
        type: actionType.LOADING_PRODUCTS,
        payload: true
    })

    try {
        let BasicUrl =`http://api-lulu.hibitbyte.com/product/allProducts?sortingId=1&page=1&mykey=${mykey}`
        console.log(BasicUrl)
        let temp = await axios.post(BasicUrl, filters)
        let products = temp?.data?.rs.products
        console.log('products/fetchHighToLowProductsAPI---->', products)
        dispatch({
            type: actionType.LOADING_PRODUCTS,
            payload: false
        })

        dispatch({
            type: actionType.FETCH_HIGH_TO_LOW_PRODUCTS,
            payload: products
        })

    } catch (error) {
        dispatch({
            type: actionType.LOADING_PRODUCTS,
            payload: false
        })
        console.log('fetch products http error', error)
    }
}}

const fetchSingleProduct = (productId) => {
    return async dispatch => {
        try {
            let BasicUrl =`http://api-lulu.hibitbyte.com/product/${productId}?mykey=${mykey}`
            let res = await axios.get(BasicUrl)
            console.log('res-->', res)
            let product = res.data.rs
            dispatch({
                type: actionType.FETCH_SINGLE_PRODUCT,
                payload: product
            })


        } catch (error) {
            console.log('fetch product http error', error)
        }


    }
}

const fetchColorId = (colorId) => {
    return {
        type: actionType.FETCH_COLORID,
        payload: colorId
    }
}








    export default {
        // fetchHardCodeProducts,
        // fetchFilteredProducts,
        fetchTotalProducts,
        selectedImage,

        fetchProductsAsyncAPI,
        fetchFilteredProductsAPI,
        fetchLowToHighProductsAPI,
        fetchHighToLowProductsAPI,
        fetchSingleProduct,
        fetchColorId,

        //cart

        // getNumberBag,
        // addToShoppingBag,
        // removeFromShoppingBag,
        // getSize,
        // getSubTotal,




    }