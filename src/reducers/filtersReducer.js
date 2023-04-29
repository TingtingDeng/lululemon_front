import {actionType, API_FILTERS_URL} from "../helper";
import axios from "axios";



const initialState = {
    filters: {}
}


export const filtersReducer = (state = initialState, action) => {

    switch(action.type) {

        case actionType.FETCH_ALL_FILTERS: {
            // console.log('FETCH_ALL_FILTERS/action.payload', action.payload)
            return {
                ...state, filters: action?.payload
            }
        }


        case actionType.FILTERS_CHANGED: {

            console.log('FILTERS_CHANGED/action.payload--->', action.payload)

            const keyChecked = Object.keys(state.filters).find(key => key === action?.payload.key)
            const value = state?.filters[keyChecked]?.map (item => {
                if(item?.name && item?.name === action?.payload.name){
                    return {...item, isChecked: !item?.isChecked}
                }else if(item?.alt && item?.alt === action?.payload.name){
                    return {...item, isChecked: !item?.isChecked}
                }
                return item

            })

            const newObj={[keyChecked]:value}
            console.log('newObj--->',newObj)


            return {
                ...state, filters: { ...state.filters, [keyChecked] : value}
                // state.filters[keyChecked].isChecked : !state.filter[keyChecked].isChecked
            }
        }

        case actionType.NAME_CHECKED_CANCELLED: {
            console.log('NAME_CHECKED_CANCELLED/action.payload', action.payload)

           return{
               ...state, filters: action?.payload
           }

        }


        default:
            return state
    }
}

