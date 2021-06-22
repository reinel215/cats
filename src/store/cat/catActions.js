import {
    getCat,
    saveCat as addCat
} from '../../services/catService/catService';
import {
    CAT_STARTED,
    CAT_ERROR,
    SET_CAT,
    CAT_SAVE
} from './catTypes';


export const setCat = () => {


    return async dispatch => {
        try {

            dispatch({
                type: CAT_STARTED
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





export const saveCat = (catURL) => {

    return async dispatch => {
        try {

            dispatch({
                type: CAT_STARTED
            })

            await addCat(catURL);

            dispatch({
                type: CAT_SAVE,
            })

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