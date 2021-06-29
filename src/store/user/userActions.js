import * as userService from '../../services/userService/userService'
import {
    USER_START,
    USER_ERROR,
    REGISTER_USER,
    SIGNIN_USER
} from './userTypes';


export const signup = (user, callback) => {

    return async dispatch => {

        try {
            
            dispatch({
                type : USER_START
            })

            await userService.registerUser(user);

            dispatch({
                type: REGISTER_USER,
            })

            callback()

        } catch (error) {
            dispatch({
                type: USER_ERROR,
                payload: {
                    error: error.message
                }
            })

        }


    }


}




export const signin = (credentials, callback) => {

    return async dispatch => {

        try {
            
            dispatch({
                type : USER_START
            })

            const user = await userService.signinUser(credentials);

            dispatch({
                type: SIGNIN_USER,
                payload: {
                    user
                }
            })

            callback()

        } catch (error) {            
            dispatch({
                type: USER_ERROR,
                payload: {
                    error: error.message
                }
            })

        }


    }


}