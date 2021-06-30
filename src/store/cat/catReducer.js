import {
    CAT_STARTED,
    CAT_ERROR,
    SET_CAT,
    CAT_SAVE
} from './catTypes';

const initialState = {

    cat: {},
    error: null,
    loading: false

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
                loading: false,
                cat: payload.cat
            }

        case CAT_SAVE:
            return {
                ...state,
                loading: false,
                error: null
            }

        default:
            return state
    }
};

export default catReducer;