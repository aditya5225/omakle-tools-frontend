
const intialState = {
    backendPanel: true
}

const panelSwitchReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'BACKEND_PANEL': {
            return {
                backendPanel: true
            };
        }
        case 'FRONTEND_PANEL': {
            return {
                backendPanel: false
            };
        }
        default: {
            return {
                ...state
            };
        }
    }
}
export default panelSwitchReducer;