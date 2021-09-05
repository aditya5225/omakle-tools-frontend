
import client from "../../utils/api/HTTPClient";
import api from "../../utils/api/apilist";


export const LOADYTTHUMBNAIL = 'LOADYTTHUMBNAIL';
export const YTTHUMBNAILFAILED = 'YTTHUMBNAILFAILED';
export const YTTHUMBNAILSUCCESS = 'YTTHUMBNAILSUCCESS';


export const loadYtThumbnailDataActions = () => {
    return {
        type: LOADYTTHUMBNAIL
    }
}

export const ytThumbnailDataFailedActions = (errorMsg) => {
    return {
        type: YTTHUMBNAILFAILED,
        errorMsg,
    }
}

export const ytThumbnailDataSuccessActions = (successMsg, ytThumbnail) => {
    return {
        type: YTTHUMBNAILSUCCESS,
        successMsg,
        ytThumbnail
    }
}



export const fetchytThumbnailDataActions = (postData) => {

    return dispatch => {
        dispatch(loadYtThumbnailDataActions());

        client.put(api.downloadYtThumbnail, postData, (error, response) => {
            if (!error) {
                if (!response.error) {
                    dispatch(ytThumbnailDataSuccessActions(response.message, response.data));
                } else {
                    dispatch(ytThumbnailDataFailedActions(response.message));

                }
            } else {
                dispatch(ytThumbnailDataFailedActions("Internal error occured.Please contact support."));

            }
        });
    }

}