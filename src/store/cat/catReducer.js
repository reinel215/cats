import {
    CAT_STARTED,
    CAT_ERROR,
    SET_CAT,
    CAT_SAVE,
    DELETE_CAT,
    CAT_START_SEARCHING,
    CAT_END_SEARCHING
} from './catTypes';

const initialState = {

    cat: {},
    error: null,
    loading: false,
    searchingCat: false,
    userCats: null

}

const catReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case CAT_STARTED:
            return {
                ...state,
                loading: true,
                error: null
            }
        case CAT_ERROR:
            return {
                ...state,
                loading: false,
                error: payload.error
            }
        case SET_CAT:
            return {
                ...state,
                searchingCat: false,
                cat: payload.cat
            }

        case CAT_SAVE:
            return {
                ...state,
                loading: false,
                error: null
            }

        case DELETE_CAT:
            return {
                ...state,
                loading: false,
                error: null
            }

        case CAT_START_SEARCHING:
            return {
                ...state,
                searchingCat : true
            }

        default:
            return state
    }
};

export default catReducer;