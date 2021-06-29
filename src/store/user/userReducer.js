import {
    USER_START,
    USER_ERROR,
    REGISTER_USER,
    SIGNIN_USER
} from './userTypes';

const initialState = {
    loading : false,
    error : null,
    user: null
}

const userReducer = (state = initialState, { type, payload }) => {


    switch (type) {

        case USER_START:
            return {
                ...state,
                loading: true,
                error : null
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
                error:null,
                loading: false
            }

        case SIGNIN_USER:
            return {
                ...state,
                ...payload,
                error: null,
                loading : false
            }

        default:
            return state
    }
}





export default userReducer;