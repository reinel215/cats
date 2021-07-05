import {
    getCat,
    saveCat as addCat,
    deleteCat
} from '../../services/catService/catService';

import * as userActions from '../user/userActions';

import {
    CAT_STARTED,
    CAT_ERROR,
    SET_CAT,
    CAT_SAVE,
    DELETE_CAT,
    CAT_START_SEARCHING,
} from './catTypes';


export const setCat = () => {


    return async dispatch => {
        try {

            dispatch({
                type: CAT_START_SEARCHING
            })

            const cat = await getCat();

            dispatch({
                type: SET_CAT,
                payload: {
                    cat
                }
            })

        } catch (error) {

            dispatch({
                type: CAT_ERROR,
                payload: {
                    error
                }
            })

        }
    }

}





export const saveCat = (catURL, uid) => {

    return async dispatch => {
        try {

            dispatch({
                type: CAT_STARTED
            })

            await addCat(catURL, uid);

            dispatch({
                type: CAT_SAVE,
            })

            dispatch(userActions.getCats(uid))

        } catch (error) {

            console.log(error);
            dispatch({
                type: CAT_ERROR,
                payload: {
                    error
                }
            })

        }
    }

}


export const removeCatFromUser = (catId, uid) => {

    return async dispatch => {


        try {

            dispatch({
                type: CAT_STARTED
            })

            await deleteCat(catId);


            //change this action later
            dispatch({
                type: DELETE_CAT
            })

            dispatch(userActions.getCats(uid))


        } catch (error) {
            console.log(error);
            dispatch({
                type: CAT_ERROR,
                payload: {
                    error
                }
            })
        }


    }

}