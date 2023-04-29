import {actionType, LOGIN_API_URL, mykey} from '../helper';
import axios from "axios";
import actions from "./index";


export const loginRequest = () => {
    return {
        type: actionType.LOGIN_REQUEST,
    }
}

export const loginSuccess = (token, user) => {
    return {
        type: actionType.LOGIN_SUCCESS,
        payload: { token, user }
    }
}

export const loginFailure = (error) => {
    return {
        type: actionType.LOGIN_FAILURE,
        payload: error
    }
}

export const login = (email, password) => async dispatch => {
    dispatch(loginRequest());
    try {
        const response = await axios.post(LOGIN_API_URL, { email, password });
        dispatch(loginSuccess(response.data.data));
        const token = response?.data?.data?.token
        if(token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return token;

    } catch (error) {
        dispatch(loginFailure(error));
    }
};



// export const login = () => {
//
//     return async dispatch => {
//         dispatch(loginRequest())
//
//     try {
//         const response = await axios.post(LOGIN_API_URL, {
//             email,
//             password
//         })
//         console.log('response-->', response)
//         dispatch(actionType.LOGIN_SUCCESS(response.data))
//
//         const token = response?.data?.data?.token
//         if(token) {
//             localStorage.setItem('user', JSON.stringify(response.data));
//         }
//         return token;
//
//     } catch (error) {
//         dispatch(loginFailure(error))
//
//     }
// }
//
// }

//login
const submitLogin = (userInfo) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://api-lulu.hibitbyte.com/auth/login?mykey=${mykey}`, userInfo)
            if (response.data.data.token) {
                let token = response.data.data.token
                let user = {
                    email: response.data.data.user.email,
                    name: response.data.data.user.firstName
                }

                localStorage.setItem('token', JSON.stringify(token))
                localStorage.setItem('user', JSON.stringify(user))

                dispatch({
                    type: actionType.SUBMIT_LOGIN,
                    payload: token
                })
            }
        } catch(e) {
            console.log('error is :', e)
            // throw new Error
            dispatch({
                type: actionType.LOGIN_FAIL
            })
        }
    }
}

export const signOut = (submit) => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    return {
        type: actionType.SIGN_OUT,
        payload: submit
    }
}

export default {
login,

}