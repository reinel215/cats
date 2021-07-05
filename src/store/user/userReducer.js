import {
    USER_START,
    USER_ERROR,
    REGISTER_USER,
    SIGNIN_USER,
    SIGNOUT_USER,
    SET_USER,
    GET_USER_CATS
} from './userTypes';

import { API_URL } from '../../config/API/API_URL';

const initialState = {
    loading: false,
    error: null,
    user: null,
    cats: null
}

const userReducer = (state = initialState, { type, payload }) => {


    switch (type) {

        case USER_START:
            return {
                ...state,
                loading: true,
                error: null
            }

        case USER_ERROR:
            return {
                ...state,
                ...payload,
                loading: false,
            }

        case REGISTER_USER:
            return {
                ...state,
                error: null,
                loading: false
            }

        case SIGNIN_USER:
            return {
                ...state,
                ...payload,
                error: null,
                loading: false
            }

        case SIGNOUT_USER:
            return {
                ...state,
                error: null,
                loading: false
            }

        case SET_USER:
            return {
                ...state,
                ...payload
            }

        case GET_USER_CATS:
            return {
                ...state,
                cats: payload.cats.map(cat => ({ ...cat, data: { ...cat.data, url: API_URL + cat.data.url } })),
                loading: false,
                error: null
            }

        default:
            return state
    }
}





export default userReducer;