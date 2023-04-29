import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Product.css';

import ProductCard from "./ProductCard";
import actions from "../actions";
import {actionType, API_URL_ALL_PRODUCTS, API_URL_SORTED_PRODUCTS} from "../helper";
import axios from "axios";


const ProductList = () => {

    const dispatch = useDispatch()

    const [sortingId, setSortingId] = useState(1)


    const filters = useSelector(state => state?.filtersReducer?.filters)
    // console.log('filters/ProductList', filters)

    const products = useSelector(state => state?.productReducer?.products)
    console.log('products/ProductList--->', products)


    useEffect(() => {
        filters && dispatch(actions.productAction.fetchProductsAsyncAPI(filters, sortingId))
    }, [filters])

    const totalProducts = useSelector(state => state?.productReducer?.totalProducts)
    console.log('totalProducts--->', totalProducts)



    const nameCheckCancelHandler = (item) => {
        dispatch(actions.filterAction.nameCheckedCancelled(item, filters))
    }

    const optionHandler = (evt) => {

        const value = evt.target.value

        if (value === 'Featured') {
            setSortingId(() => {
                let newSortingId = 1
                dispatch(actions.productAction.fetchProductsAsyncAPI(filters, newSortingId))
                return newSortingId
            })

        } else if (value === 'New Arrivals') {
            setSortingId(() => {
                let newSortingId = 2
                dispatch(actions.productAction.fetchProductsAsyncAPI(filters, newSortingId))
                return newSortingId
            })

        } else if (value === 'Top Rated') {
            setSortingId(() => {
                let newSortingId = 3;
                dispatch(actions.productAction.fetchProductsAsyncAPI(filters, newSortingId))
                return newSortingId
            })
        } else if (value === 'Price: Low to High') {
            dispatch(actions.productAction.fetchLowToHighProductsAPI(filters, sortingId))
        } else if (value ==='Price: High to Low' ) {
            dispatch(actions.productAction.fetchHighToLowProductsAPI(filters, sortingId))
        }

    }

    const filterSelectedArr = Object.keys(filters).map(key => filters[key].filter(item => item.isChecked === true))
    const filterSelected = filterSelectedArr.filter(arr => {
        if(arr.length !== 0) {
            return arr

        }
    })

    const filterSelectedRendered = filterSelected.map(arr=> arr.map((item, index) => {
        return(
            <div key={index}>
                <span>{item.name || item.alt}</span>
                <button onClick={() => nameCheckCancelHandler(item)}>X</button>
            </div>
        )
    }))

    console.log('filterSelected', filterSelected)




    const productListRendered = products && products.map ((product, index) => {
        return (
            <div key={index}>
                <ProductCard  product = {product}/>

            </div>
        )

    })


    return (
       <div className='main-column-right-bottom'>
           <div className='main-column-right-select'>
               <div>
                   <span className='all-items'>All Items({totalProducts})</span>
                   <span>Available Near You ></span>
               </div>


               <div className='select-menu'>
                   <div>
                       <label className='select-menu-label' >Sort by</label>
                       <span className='select-menu-selected'>Featured</span>
                       <div className='custom-dropdown-show'>
                           <span className='hidden'>
                                <select className="select-option"  onChange={(evt) =>optionHandler(evt)}>

                                   <option value="Featured">Featured</option>

                                   <option value="New Arrival">New Arrival</option>
                                   <option value="Top Rated">Top Rated</option>
                                   <option value="Price: High to Low">Price: High to Low</option>
                                   <option value="Price: Low to High">Price: Low to High</option>
                                </select>

                           </span>

                       </div>
                   </div>

               </div>

           </div>

           <div className='filter-selected'>
               {filterSelectedRendered}
           </div>


           <div className='productList-container'>
               {productListRendered}
           </div>


       </div>


    )
}

export default ProductList;