
import * as actionTypes from "../actions/webToolsDataActions";

const initialState = {

    webTools: [
        {
            toolTitle: 'Youtube Thumbnail Downloader',
            toolRoute: '/tools/youtube-thumbnail-downloader',
        },

        {
            toolTitle: 'Online Image Editor',
            toolRoute: '/tools/image-editor-online',
        },
    ]
}


const webToolsDataReducer = (state = initialState, actions) => {
    switch (actions.type) {

        // case actionTypes.GETWEBTOOLSDATA:
        //     return {
        //         ...state,
        //         webTools: actions.webTools,
        //     }

        default:
            return state;
    }

}

export default webToolsDataReducer;