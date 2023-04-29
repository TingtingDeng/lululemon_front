import {actionType} from "../helper";

const tokenFromLocal = JSON.parse(localStorage.getItem('token') || 'null')
const userFromLocal = JSON.parse(localStorage.getItem('user') || 'null')

const initialState = {
    loading: false,
    error: null,
    user: userFromLocal,
    token: tokenFromLocal,
    loginFail: false,
    loginSuccess: false,

}

export const loginReducer = (state = initialState, action) => {
    console.log('state/loginReducer--->', state)
    switch (action.type) {
        case actionType.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                user: null,
                token: tokenFromLocal
            };
        case actionType.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                user: action.user,
                token: action.token,
                loginSuccess: true,
            };
        case actionType.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                user: null,
            };

        default:
            return state
    }




}
