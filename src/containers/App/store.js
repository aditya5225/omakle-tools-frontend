
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import panelSwitchReducer from '../../redux/reducers/panelSwitchReducer';



const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  panelSwitchReducer,
});



const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
