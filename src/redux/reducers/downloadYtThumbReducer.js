
import * as actionTypes from "../actions/downloadYtThumbActions";

const initialState = {
    loading: null,
    error: null,
    successMsg: null,
    errorMsg: null,
    ytThumbnail: null,
}


const downloadYtThumbReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case actionTypes.LOADYTTHUMBNAIL:
            return {
                ...state,
                loading: true
            }

        case actionTypes.YTTHUMBNAILFAILED:
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: actions.errorMsg
            }


        case actionTypes.YTTHUMBNAILSUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                successMsg: actions.successMsg,
                ytThumbnail: actions.ytThumbnail,
            }

        default:
            return state;
    }

}

export default downloadYtThumbReducer;