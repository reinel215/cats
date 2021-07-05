import * as userService from '../../services/userService/userService'
import {
    USER_START,
    USER_ERROR,
    REGISTER_USER,
    SIGNIN_USER,
    SIGNOUT_USER,
    SET_USER,
    GET_USER_CATS
} from './userTypes';


export const signup = (user, callback) => {

    return async dispatch => {

        try {

            dispatch({
                type: USER_START
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
                type: USER_START
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



export const signout = (callback) => {
    return async dispatch => {
        try {
            dispatch({
                type: USER_START
            })

            await userService.signoutUser();

            dispatch({
                type: SIGNOUT_USER
            })

            callback();

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





export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: {
            user
        }
    }
}




export const getCats = (uid) => {
    return async dispatch => {

        try {

            dispatch({
                type: USER_START
            })

            const cats = await userService.getUserCats(uid);

            //change this action later
            dispatch({
                type: GET_USER_CATS,
                payload: {
                    cats
                }
            })


        } catch (error) {
            console.log(error);
            dispatch({
                type: USER_ERROR,
                payload: {
                    error
                }
            })
        }

    }
}
