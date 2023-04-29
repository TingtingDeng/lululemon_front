import {actionType, API_FILTERS_URL} from "../helper";
import axios from "axios";
// import * as state from "../filters/filters";

const fetchAllFilters = () => async dispatch => {
    try {
        let temp = await axios.get(API_FILTERS_URL)
        // console.log('temp/fetchAllFilters-->', temp)
        let {data: {rs}} = temp
        // console.log('filters---->', rs)
        dispatch({
            type: actionType.FETCH_ALL_FILTERS,
            payload: rs
        })

    } catch(error) {

    }
}

export const filtersChanged = (key, name) => {

    return {
        type: actionType.FILTERS_CHANGED,
        payload: {key, name}
    }

}



const nameCheckedCancelled = (arr, filters) => {
    let keyChecked = Object.keys(filters).find(key => filters[key].includes(arr))
    let itemChecked = filters[keyChecked].map(item => {
        if(item.name && item.name === arr.name) {
            item.isChecked = false
        }else if (item.alt && item.alt === arr.alt) {
            item.isChecked = false
        }
        return item
    })

    let newFilters = {...filters, [keyChecked] : itemChecked}
    console.log('newFilters---->', newFilters)

    return {
        type: actionType.NAME_CHECKED_CANCELLED,
        payload: newFilters
    }
}

export default {
    fetchAllFilters,
    filtersChanged,

    nameCheckedCancelled,
}





