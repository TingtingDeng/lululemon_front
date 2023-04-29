import {actionType, productLibrary} from "../../src/helper";

export const fetchAllProducts = () => {
    return {
        type: actionType.FETCH_ALL_PRODUCTS,
        payload: productLibrary
    }
}
